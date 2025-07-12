
"use client";

import { Mic, MicOff, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useVapi } from "@/hooks/useVapi";

interface AIVoiceInputProps {
  onStart?: () => void;
  onStop?: (duration: number) => void;
  visualizerBars?: number;
  demoMode?: boolean;
  demoInterval?: number;
  className?: string;
  assistantId?: string;
}

export function AIVoiceInput({
  onStart,
  onStop,
  visualizerBars = 48,
  demoMode = false,
  demoInterval = 3000,
  className,
  assistantId
}: AIVoiceInputProps) {
  const [isClient, setIsClient] = useState(false);
  const [isDemo, setIsDemo] = useState(demoMode);
  const { callState, isLoading, permissionGranted, toggleCall, checkMicrophonePermission } = useVapi();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Demo mode functionality (fallback)
  useEffect(() => {
    if (!isDemo || callState.isConnected) return;

    let timeoutId: NodeJS.Timeout;
    const runAnimation = () => {
      // Demo animation logic here if needed
      timeoutId = setTimeout(runAnimation, demoInterval);
    };

    const initialTimeout = setTimeout(runAnimation, 100);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialTimeout);
    };
  }, [isDemo, demoInterval, callState.isConnected]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleClick = async () => {
    if (isDemo && !callState.isConnected) {
      setIsDemo(false);
      return;
    }

    if (permissionGranted === false) {
      await checkMicrophonePermission();
      return;
    }

    if (callState.isConnected) {
      onStop?.(callState.duration);
    } else {
      onStart?.();
    }

    await toggleCall();
  };

  const getStatusText = () => {
    if (callState.error) return "Error - Click to retry";
    if (isLoading) return "Connecting...";
    if (callState.isListening) return "Listening...";
    if (callState.isSpeaking) return "AI Speaking...";
    if (callState.isConnected) return "Connected - Click to end";
    if (permissionGranted === false) return "Click to enable microphone";
    return "Click to speak";
  };

  const getButtonIcon = () => {
    if (callState.error) return <AlertCircle className="w-6 h-6 text-destructive" />;
    if (permissionGranted === false) return <MicOff className="w-6 h-6 text-destructive" />;
    if (isLoading) return (
      <div className="w-6 h-6 rounded-sm animate-spin bg-primary cursor-pointer" style={{ animationDuration: "1s" }} />
    );
    if (callState.isConnected) return (
      <div className="w-6 h-6 rounded-sm animate-pulse bg-primary" />
    );
    return <Mic className="w-6 h-6 text-muted-foreground" />;
  };

  const isActive = callState.isConnected || callState.isListening || callState.isSpeaking;

  return (
    <div className={cn("w-full py-4", className)}>
      <div className="relative max-w-xl w-full mx-auto flex items-center flex-col gap-2">
        <button
          className={cn(
            "group w-16 h-16 rounded-xl flex items-center justify-center magnetic glass-card border-holographic",
            callState.error ? "border-destructive/50 hover:border-destructive" :
            callState.isConnected ? "border-primary/50 hover:border-primary animate-pulse-glow" :
            "border-border/30 hover:border-primary/30"
          )}
          type="button"
          onClick={handleClick}
          disabled={isLoading}
        >
          {getButtonIcon()}
        </button>

        <span
          className={cn(
            "font-mono text-sm transition-opacity duration-300",
            isActive ? "text-primary" : "text-muted-foreground"
          )}
        >
          {formatTime(callState.duration)}
        </span>

        <div className="h-4 w-64 flex items-center justify-center gap-0.5 relative">
          {/* Sound wave background glow */}
          {isActive && (
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md animate-pulse" />
          )}
          {[...Array(visualizerBars)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-0.5 rounded-full transition-all duration-300 relative z-10",
                isActive
                  ? "bg-gradient-to-t from-primary to-accent animate-pulse"
                  : "bg-muted-foreground/30 h-1"
              )}
              style={
                isActive && isClient
                  ? {
                      height: `${20 + Math.random() * 80}%`,
                      animationDelay: `${i * 0.05}s`,
                      boxShadow: isActive ? `0 0 10px hsl(var(--primary)/0.5)` : undefined
                    }
                  : undefined
              }
            />
          ))}
        </div>

        <p className="h-4 text-xs text-muted-foreground text-center">
          {getStatusText()}
        </p>

        {callState.error && (
          <p className="text-xs text-destructive text-center max-w-xs glass-card px-2 py-1 rounded border-destructive/30">
            {callState.error}
          </p>
        )}
      </div>
    </div>
  );
}
