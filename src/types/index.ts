export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  rsvpLink: string;
  isPast?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  link: string;
  postedDate: string;
}

export interface FormData {
  name: string;
  email: string;
  message?: string;
  background?: string;
  idea?: string;
}