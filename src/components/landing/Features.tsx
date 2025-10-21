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
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Family & Missing Person Search",
      description:
        "Post, browse, and track missing family members using smart search, filters, and updates.",
      icon: Search,
    },
    {
      title: "Police & Agency Dashboard",
      description:
        "A secure portal for verified authorities to manage, cross-link, and solve missing or wanted cases.",
      icon: Shield,
    },
    {
      title: "Community-Powered Assistance",
      description:
        "Local users receive alerts, share sightings, and help verify reports through anonymous tips.",
      icon: Users,
    },
    {
      title: "AI & Data Intelligence",
      description:
        "Facial recognition, geo-tagging, and similarity detection for faster and smarter matching.",
      icon: Brain,
    },
    {
      title: "Privacy & Verification",
      description:
        "Multi-step identity checks, consent-based data sharing, and human moderation for trust and safety.",
      icon: Lock,
    },
    {
      title: "Awareness & Impact",
      description:
        "Social media integration, real success stories, and safety education to empower communities.",
      icon: Bell,
    },
    {
      title: "Communication & Coordination",
      description:
        "In-app chat, updates, and multi-language support to connect families, volunteers, and officials.",
      icon: MessageSquare,
    },
    {
      title: "Integrations & Partnerships",
      description:
        "Connect with government, NGOs, and relief databases to expand search reach and reliability.",
      icon: Link2,
    },
    {
      title: "Additional & Future Features",
      description:
        "Offline reports via SMS, printable posters, reward systems, and timeline-based case tracking.",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen text-gray-900">      

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-2 text-3xl p-2 px-4 text-primary">
            Features
          </Badge>
          <h2 className="text-3xl text-primary font-semibold tracking-tight">
            What Makes Afalagi Powerful
          </h2>
          <p className="text-muted-foreground mt-2">
            Combining humanity and technology to make a real difference.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="hover:shadow-lg transition-shadow border h-full border-gray-200 rounded-2xl">
                <CardHeader className="flex flex-row items-center gap-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
     
    </div>
  );
}
