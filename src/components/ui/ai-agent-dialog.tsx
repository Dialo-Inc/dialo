import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AIVoiceInput } from '@/components/ui/ai-voice-input';
import { Mic, X } from 'lucide-react';

interface AIAgentDialogProps {
  assistantId?: string;
  children: React.ReactNode;
}

export const AIAgentDialog = ({ assistantId, children }: AIAgentDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mic className="w-5 h-5 text-accent" />
            Try the AI Agent
          </DialogTitle>
          <DialogDescription>
            Experience our AI voice agent in action. Click the microphone button below to start a conversation.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-6 py-6">
          <div className="bg-secondary/50 rounded-xl p-6 w-full min-h-[200px] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">AI Agent Ready</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <AIVoiceInput 
                demoMode={false} 
                visualizerBars={20} 
                className="text-foreground" 
                assistantId={assistantId} 
                onStart={() => console.log('Dialog voice demo started')} 
                onStop={duration => console.log('Dialog voice demo ended, duration:', duration)} 
              />
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Grant microphone permission when prompted and speak naturally with our AI agent.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};