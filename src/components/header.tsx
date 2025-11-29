"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/web-dev", label: "Web Dev" },
    { href: "/data-analyst", label: "Data Analysis" },
    { href: "/data-science", label: "Data Science" },
    { href: "/#contact", label: "Contact" },
  ];

  const NavLinkItems = ({ onClick }: { onClick?: () => void }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClick}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "border-b bg-background/80 backdrop-blur-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">Araoye Abraham</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLinkItems />
        </nav>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="/#contact">Contact Me</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="font-headline text-lg font-semibold">Araoye Abraham</span>
                </Link>
                <nav className="grid gap-4">
                  <NavLinkItems onClick={() => setIsMobileMenuOpen(false)} />
                </nav>
                <Button asChild onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/#contact">Contact Me</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}