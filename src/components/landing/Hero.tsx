"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { Button } from "@/components/ui/button";

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1670172871301-7a719f727796?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBzdHJlZXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    link: "https://unsplash.com/photos/a-painting-of-a-palm-leaf-on-a-multicolored-background-AaNPwrSNOFE",
    title: "Neon Palm",
    author: "Tim Mossholder",
  },
  {
    url: "https://i.pinimg.com/1200x/87/f1/5d/87f15da99c17b3bf08c4fde1a095c8ac.jpg",
    author: "Branislav Rodman",
    link: "https://unsplash.com/photos/a-black-and-white-photo-of-a-woman-brushing-her-teeth-r1SjnJL5tf0",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://images.unsplash.com/photo-1585403110076-fc6157a61645?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyb3RoZXJseSUyMGh1Z3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    link: "https://unsplash.com/de/fotos/mann-im-schwarzen-hemd-unter-blauem-himmel-m8RDNiuEXro",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://i.pinimg.com/736x/ca/e7/db/cae7dbffdba54e29fe612a7af553ad87.jpg",
    link: "https://unsplash.com/photos/a-blurry-photo-of-a-crowd-of-people-UgbxzloNGsc",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1666958804855-06b35f17700c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBncmFuZHBhcmVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    link: "https://unsplash.com/photos/rippling-crystal-blue-water-9-OCsKoyQlk",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://i.pinimg.com/736x/d7/c2/cc/d7c2cc819d411ce15ec5d4b7fca28ef5.jpg",
    link: "https://unsplash.com/photos/a-woman-with-a-flower-crown-on-her-head-0S3muIttbsY",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
  {
    url: "https://i.pinimg.com/736x/04/7b/a8/047ba864a352b30b83b3c9ab70ee2d16.jpg",
    title: "A blurry photo of white flowers in a field",
    author: "Eugene Golovesov",
    link: "https://unsplash.com/photos/a-blurry-photo-of-white-flowers-in-a-field-6qbx0lzGPyc",
  },
  {
    url: "https://images.unsplash.com/photo-1565732957702-2b050fe670c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBncmFuZHBhcmVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    author: "Mathilde Langevin",
    link: "https://unsplash.com/photos/a-table-topped-with-two-wine-glasses-and-plates-Ig0gRAHspV0",
    title: "A table topped with two wine glasses and plates",
  },
];

const Hero = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "img",
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) }
    );
  }, []);

  return (
    <div
      className="flex w-full h-full min-h-[600px] justify-center items-center bg-black overflow-hidden"
      ref={scope}
    >
      <div className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4 tracking-tight"
        >
          <span className="text-primary">Afalagi</span> — Find the Missing,
          Reunite the Lost
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg max-w-2xl text-muted-foreground mb-8"
        >
          A platform bridging families, communities, and authorities to bring
          people home safely.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="rounded-2xl px-8 cursor-pointer">
            Get Started
          </Button>
        </motion.div>
      </div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            className="w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            className="w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[2%] left-[53%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            className="w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[0%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[45%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            className="w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[70%] left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[7].url}
            className="w-28 h-28 md:w-36 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[73%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            className="w-40 md:w-52 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[80%] left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  );
};

export default Hero;
