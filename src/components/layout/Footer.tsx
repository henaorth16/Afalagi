// app/page.tsx or src/app/page.tsx

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Search,
  Shield,
  Bell,
  Brain,
  Lock,
  Globe,
  MessageSquare,
  Link2,
  Github,
  Twitter,
  Linkedin,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  

  return (
          <footer className="border-t backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HeartHandshake className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Afalagi</span>
            </div>
            <p className="text-muted-foreground">
              Reuniting families, empowering communities, and supporting
              authorities through trusted technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  For Police & NGOs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Volunteer Network
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API & Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Stay connected for updates and impact stories.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Afalagi — All rights reserved.
        </div>
      </footer>
  );
}
