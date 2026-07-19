// Shared TypeScript interfaces for the DSSC 2005 OBA Website

export type MemberRole = "OFFICE_BEARER" | "MEMBER";
export type EventStatus = "UPCOMING" | "PAST";
export type ProjectStatus = "CURRENT" | "COMPLETED";

export interface Member {
  id: number;
  name: string;
  role: MemberRole;
  position?: string;
  email?: string;
  phone?: string;
  imageUrl?: string;
  bio?: string;
  batch?: string;
  linkedinUrl?: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  status: EventStatus;
  imageUrl?: string;
  registrationUrl?: string;
}

export interface GalleryImage {
  id: number;
  imageUrl: string;
  caption?: string;
  eventTitle?: string;
  eventId?: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  status: ProjectStatus;
  imageUrl?: string;
  startDate: string;
  endDate?: string;
  impact?: string;
}

export interface NewsPost {
  id: number;
  title: string;
  content: string;
  publishedAt: string;
  imageUrl?: string;
  author?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
