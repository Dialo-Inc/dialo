
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
  private isConnected: boolean = false;
  
  constructor() {
    // Using your actual Vapi public key
    this.vapi = new Vapi('0d0d4095-54ea-4274-a6f2-bcadd485dff3');
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.vapi.on('call-start', () => {
      console.log('Vapi call started');
      this.isConnected = true;
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
      console.log('Vapi call ended');
      this.isConnected = false;
      this.stopDurationTimer();
      this.callStateCallback?.({
        isConnected: false,
        isListening: false,
        isSpeaking: false,
        duration: 0
      });
    });

    this.vapi.on('speech-start', () => {
      console.log('Speech started');
      this.callStateCallback?.({
        isConnected: true,
        isListening: true,
        isSpeaking: false,
        duration: this.getCurrentDuration()
      });
    });

    this.vapi.on('speech-end', () => {
      console.log('Speech ended');
      this.callStateCallback?.({
        isConnected: true,
        isListening: false,
        isSpeaking: false,
        duration: this.getCurrentDuration()
      });
    });

    this.vapi.on('message', (message) => {
      console.log('Vapi message received:', message);
      if (message.type === 'transcript' && message.transcriptType === 'final') {
        // Handle final transcript if needed
      }
    });

    this.vapi.on('error', (error) => {
      console.error('Vapi error:', error);
      this.isConnected = false;
      this.stopDurationTimer();
      
      let errorMessage = 'Connection failed';
      
      // Handle different error formats
      if (error && typeof error === 'object') {
        if (error.error && error.error.message) {
          // Handle API error response format
          errorMessage = Array.isArray(error.error.message) 
            ? error.error.message.join(', ') 
            : error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        } else if (error.toString && error.toString() !== '[object Object]') {
          errorMessage = error.toString();
        }
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      this.callStateCallback?.({
        isConnected: false,
        isListening: false,
        isSpeaking: false,
        duration: 0,
        error: errorMessage
      });
    });
  }

  private startDurationTimer() {
    this.durationInterval = setInterval(() => {
      if (this.isConnected) {
        const currentState = {
          isConnected: true,
          isListening: false,
          isSpeaking: false,
          duration: this.getCurrentDuration()
        };
        this.callStateCallback?.(currentState);
      }
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
      console.log('Starting Vapi call with assistant:', assistantId);
      
      // Request microphone permission first
      await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log('Microphone permission granted');
      
      // Create assistant configuration instead of using a string ID
      const assistantConfig = {
        model: {
          provider: 'openai',
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful AI assistant for a car dealership. You help customers with questions about vehicles, scheduling appointments, and general inquiries. Be friendly, professional, and concise.'
            }
          ]
        },
        voice: {
          provider: 'playht',
          voiceId: 'jennifer'
        },
        firstMessage: 'Hello! I\'m your AI assistant. How can I help you today?'
      };
      
      console.log('Starting call with assistant config:', assistantConfig);
      
      // Start the call with the assistant configuration
      await this.vapi.start(assistantConfig);
      console.log('Vapi start method called successfully');
      
    } catch (error) {
      console.error('Failed to start call:', error);
      this.isConnected = false;
      
      let errorMessage = 'Failed to start voice call';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      // Check if it's a permission error
      if (errorMessage.includes('Permission') || errorMessage.includes('permission')) {
        errorMessage += '. Please check microphone permissions.';
      }
      
      throw new Error(errorMessage);
    }
  }

  async endCall(): Promise<void> {
    try {
      console.log('Ending Vapi call');
      this.vapi.stop();
      this.isConnected = false;
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
    return this.isConnected;
  }
}

export const vapiService = new VapiService();
