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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // etc
};

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
export default function Features() {

  return (
    <div className="min-h-screen container relative py-8 text-gray-900">      

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-2 text-3xl p-2 px-4 text-primary">
            Features
          </Badge>
          <h2 className="text-3xl text-muted-foreground font-semibold tracking-tight">
            What Makes Afalagi Powerful
          </h2>
          <p className="text-muted mt-2">
            Combining humanity and technology to make a real difference.
          </p>
        </div>

        <div className="">
          <Slider {...settings} className="mx-auto gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className=" border min-h-[200px] mx-2 border-accent bg-transparent hover:opacity-60 transition hover:shadow-2xl rounded-2xl">
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
          </Slider>
        </div>
      </section>
     
    </div>
  );
}
