export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Get Started", href: "/register", isButton: true },
];