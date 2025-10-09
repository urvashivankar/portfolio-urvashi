import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground text-sm mb-2">
          © 2025 Urvashi Vankar. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> using React + Framer Motion
        </p>
      </div>
    </footer>
  );
};
