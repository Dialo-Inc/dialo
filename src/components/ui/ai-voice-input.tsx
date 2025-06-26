
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
    if (callState.error) return <AlertCircle className="w-6 h-6 text-red-400" />;
    if (permissionGranted === false) return <MicOff className="w-6 h-6 text-red-400" />;
    if (isLoading) return (
      <div className="w-6 h-6 rounded-sm animate-spin bg-white cursor-pointer" style={{ animationDuration: "1s" }} />
    );
    if (callState.isConnected) return (
      <div className="w-6 h-6 rounded-sm animate-pulse bg-green-400" />
    );
    return <Mic className="w-6 h-6 text-white/70" />;
  };

  const isActive = callState.isConnected || callState.isListening || callState.isSpeaking;

  return (
    <div className={cn("w-full py-4", className)}>
      <div className="relative max-w-xl w-full mx-auto flex items-center flex-col gap-2">
        <button
          className={cn(
            "group w-16 h-16 rounded-xl flex items-center justify-center transition-colors",
            callState.error ? "bg-red-500/20 hover:bg-red-500/30" :
            callState.isConnected ? "bg-green-500/20 hover:bg-green-500/30" :
            "bg-none hover:bg-white/10"
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
            isActive ? "text-white/70" : "text-white/30"
          )}
        >
          {formatTime(callState.duration)}
        </span>

        <div className="h-4 w-64 flex items-center justify-center gap-0.5">
          {[...Array(visualizerBars)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-0.5 rounded-full transition-all duration-300",
                isActive
                  ? "bg-white/50 animate-pulse"
                  : "bg-white/10 h-1"
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

        <p className="h-4 text-xs text-white/70 text-center">
          {getStatusText()}
        </p>

        {callState.error && (
          <p className="text-xs text-red-400 text-center max-w-xs">
            {callState.error}
          </p>
        )}
      </div>
    </div>
  );
}
