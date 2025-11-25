export type ContactFormValues = {
    fullName: string;
    phone: string;
  };
  

export  type ContactRequest ={
    fullName: string;
    phone: string;
    email?: string;
    preferredContact: 'phone' | 'telegram' | 'email';
    telegram?: string;
    topic: 'general' | 'booking' | 'repair' | 'custom';
    message: string;
  }
  