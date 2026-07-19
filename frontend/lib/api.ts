import type { ApiResponse } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const errorBody: ApiResponse<null> = await res.json().catch(() => ({
      success: false,
      data: null,
      message: `HTTP ${res.status}`,
    }));
    throw new Error(errorBody.message || `Request failed: ${res.status}`);
  }

  const body: ApiResponse<T> = await res.json();
  return body.data;
}

export const api = {
  // Members
  getMembers: (role?: "OFFICE_BEARER" | "MEMBER") =>
    apiFetch<import("./types").Member[]>(
      `/api/members${role ? `?role=${role}` : ""}`
    ),

  // Events
  getEvents: (status?: "UPCOMING" | "PAST") =>
    apiFetch<import("./types").Event[]>(
      `/api/events${status ? `?status=${status}` : ""}`
    ),

  // Gallery
  getGallery: () => apiFetch<import("./types").GalleryImage[]>("/api/gallery"),

  // Projects
  getProjects: (status?: "CURRENT" | "COMPLETED") =>
    apiFetch<import("./types").Project[]>(
      `/api/projects${status ? `?status=${status}` : ""}`
    ),

  // News
  getNews: () => apiFetch<import("./types").NewsPost[]>("/api/news"),

  // Contact
  sendContactMessage: (payload: import("./types").ContactMessage) =>
    apiFetch<void>("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
