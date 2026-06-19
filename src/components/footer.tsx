import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Araoye Abraham. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/araoye-abraham-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/abrokinla" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="mailto:abrokinla@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
