export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  description: string;
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string; // Changed to string for serialization stability
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

// Environment variable type definition for Vite/Process
declare global {
  interface Window {
    process?: {
      env: {
        API_KEY?: string;
        [key: string]: string | undefined;
      }
    }
  }

  // Augment NodeJS namespace to type process.env correctly if @types/node is present
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY?: string;
      [key: string]: string | undefined;
    }
  }
}
