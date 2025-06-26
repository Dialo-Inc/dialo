import Vapi from '@vapi-ai/web';

export interface VapiCallState {
  isConnected: boolean;
  isListening: boolean;
  isSpeaking: boolean;
  duration: number;
  error?: string;
}

export class VapiService {
  private vapi: Vapi;
  private callStateCallback?: (state: VapiCallState) => void;
  private audioLevelCallback?: (level: number) => void;
  private startTime: number = 0;
  private durationInterval?: NodeJS.Timeout;
  
  constructor() {
    // Using a placeholder public key - user will replace with their actual key
    this.vapi = new Vapi('your-vapi-public-key-here');
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.vapi.on('call-start', () => {
      this.startTime = Date.now();
      this.startDurationTimer();
      this.callStateCallback?.({
        isConnected: true,
        isListening: false,
        isSpeaking: false,
        duration: 0
      });
    });

    this.vapi.on('call-end', () => {
      this.stopDurationTimer();
      this.callStateCallback?.({
        isConnected: false,
        isListening: false,
        isSpeaking: false,
        duration: 0
      });
    });

    this.vapi.on('speech-start', () => {
      this.callStateCallback?.({
        isConnected: true,
        isListening: true,
        isSpeaking: false,
        duration: this.getCurrentDuration()
      });
    });

    this.vapi.on('speech-end', () => {
      this.callStateCallback?.({
        isConnected: true,
        isListening: false,
        isSpeaking: false,
        duration: this.getCurrentDuration()
      });
    });

    this.vapi.on('message', (message) => {
      if (message.type === 'transcript' && message.transcriptType === 'final') {
        // Handle final transcript if needed
      }
    });

    this.vapi.on('error', (error) => {
      console.error('Vapi error:', error);
      this.callStateCallback?.({
        isConnected: false,
        isListening: false,
        isSpeaking: false,
        duration: 0,
        error: error.message || 'Connection failed'
      });
    });
  }

  private startDurationTimer() {
    this.durationInterval = setInterval(() => {
      const currentState = {
        isConnected: true,
        isListening: false,
        isSpeaking: false,
        duration: this.getCurrentDuration()
      };
      this.callStateCallback?.(currentState);
    }, 1000);
  }

  private stopDurationTimer() {
    if (this.durationInterval) {
      clearInterval(this.durationInterval);
      this.durationInterval = undefined;
    }
  }

  private getCurrentDuration(): number {
    return this.startTime ? Math.floor((Date.now() - this.startTime) / 1000) : 0;
  }

  async startCall(assistantId?: string): Promise<void> {
    try {
      // Request microphone permission first
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Pass assistant ID as string directly to vapi.start()
      const assistantToUse = assistantId || 'demo-dealership-agent';
      
      await this.vapi.start(assistantToUse);
    } catch (error) {
      console.error('Failed to start call:', error);
      throw new Error('Failed to start voice call. Please check microphone permissions.');
    }
  }

  async endCall(): Promise<void> {
    try {
      this.vapi.stop();
      this.stopDurationTimer();
    } catch (error) {
      console.error('Failed to end call:', error);
    }
  }

  onCallStateChange(callback: (state: VapiCallState) => void) {
    this.callStateCallback = callback;
  }

  onAudioLevel(callback: (level: number) => void) {
    this.audioLevelCallback = callback;
  }

  isCallActive(): boolean {
    return this.vapi.isMuted !== undefined; // Simple check if call is active
  }
}

export const vapiService = new VapiService();
