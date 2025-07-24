
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
    if (callState.error) return <AlertCircle className="w-7 h-7 text-destructive" />;
    if (permissionGranted === false) return <MicOff className="w-7 h-7 text-destructive" />;
    if (isLoading) return (
      <div className="w-7 h-7 rounded-sm animate-spin bg-primary" style={{ animationDuration: "1s" }} />
    );
    if (callState.isConnected) return (
      <div className="w-7 h-7 rounded-sm animate-pulse bg-accent" />
    );
    return <Mic className="w-7 h-7 text-muted-foreground" />;
  };

  const isActive = callState.isConnected || callState.isListening || callState.isSpeaking;

  return (
    <div className={cn("w-full py-6", className)}>
      <div className="relative max-w-xl w-full mx-auto flex items-center flex-col gap-6">
        <button
          className={cn(
            "group w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-premium-lg",
            callState.error ? "bg-destructive/20 hover:bg-destructive/30 shadow-premium-md" :
            callState.isConnected ? "bg-accent/20 hover:bg-accent/30 shadow-premium-xl" :
            "bg-secondary/50 hover:bg-secondary border border-border"
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
            isActive ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {formatTime(callState.duration)}
        </span>

        <div className="h-16 w-80 flex items-center justify-center gap-1">
          {[...Array(visualizerBars)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-0.5 rounded-full transition-all duration-300",
                isActive
                  ? "bg-accent animate-pulse"
                  : "bg-muted-foreground/20 h-1"
              )}
              style={
                isActive && isClient
                  ? {
                      height: `${20 + Math.random() * 80}%`,
                      animationDelay: `${i * 0.05}s`,
                    }
                  : undefined
              }
            />
          ))}
        </div>

        <p className="h-4 text-sm text-muted-foreground text-center font-medium">
          {getStatusText()}
        </p>

        {callState.error && (
          <div className="mt-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg max-w-xs">
            <p className="text-xs text-destructive text-center">
              {callState.error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
