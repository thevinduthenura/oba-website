export const SITE = {
  name: "DSSC 2005 OBA",
  fullName: "D.S. Senanayake College Old Boys' Association",
  batch: "2005 Batch",
  domain: "https://ds2005.com",
  email: "contact@ds2005.com",
  facebook: "https://www.facebook.com/DSSC2005BATCH",
  description:
    "The official website of the D.S. Senanayake College Old Boys' Association - 2005 Batch. Connecting former Senanayakeans across the globe.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Committee",
    href: "/committee",
    children: [
      { label: "Office Bearers", href: "/committee/office-bearers" },
      { label: "Members", href: "/committee/members" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Upcoming Events", href: "/events/upcoming" },
      { label: "Past Events", href: "/events/past" },
      { label: "Gallery", href: "/events/gallery" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Current Projects", href: "/projects/current" },
      { label: "Completed Projects", href: "/projects/completed" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const;

export const COLORS = {
  gold: "#d4af37",
  goldLight: "#f3e5ab",
  goldDark: "#aa820a",
  black: "#050505",
  surface: "#0a0a0b",
  surface2: "#0f0f10",
} as const;
