
import { useState, useEffect, useCallback } from 'react';
import { vapiService, VapiCallState } from '@/services/vapiService';

export const useVapi = () => {
  const [callState, setCallState] = useState<VapiCallState>({
    isConnected: false,
    isListening: false,
    isSpeaking: false,
    duration: 0
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);

  useEffect(() => {
    // Set up the callback for call state changes
    vapiService.onCallStateChange(setCallState);
    
    // Check microphone permission on mount
    checkMicrophonePermission();
  }, []);

  const checkMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop()); // Stop the stream immediately
      setPermissionGranted(true);
    } catch (error) {
      setPermissionGranted(false);
    }
  };

  const startCall = useCallback(async (assistantId?: string) => {
    setIsLoading(true);
    try {
      await vapiService.startCall(assistantId);
    } catch (error) {
      console.error('Failed to start call:', error);
      setCallState(prev => ({ 
        ...prev, 
        error: error instanceof Error ? error.message : 'Failed to start call'
      }));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const endCall = useCallback(async () => {
    setIsLoading(true);
    try {
      await vapiService.endCall();
    } catch (error) {
      console.error('Failed to end call:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const toggleCall = useCallback(async () => {
    if (callState.isConnected) {
      await endCall();
    } else {
      await startCall();
    }
  }, [callState.isConnected, startCall, endCall]);

  return {
    callState,
    isLoading,
    permissionGranted,
    startCall,
    endCall,
    toggleCall,
    checkMicrophonePermission
  };
};
