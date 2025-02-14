import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/timeline", label: "Timeline" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
    { href: "/hobbies", label: "Hobbies" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-6 overflow-x-auto">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-primary"
                      layoutId="navigation-underline"
                      initial={false}
                    />
                  )}
                </a>
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}