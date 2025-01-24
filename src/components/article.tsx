"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";

export default function Article({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef, {
    margin: "-52px 0px 0px 0px",
  });
  const headerIsInView = useInView(titleRef);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 100);
  }, []);

  return (
    <>
      <div className="sticky top-0 bg-background z-20">
        <div className="p-2 flex flex-row items-center">
          <SidebarTrigger></SidebarTrigger>

          <h1
            className={cn(
              "flex-grow text-center transition-opacity font-medium opacity-0",
              titleIsInView === false && isMounted && "opacity-1"
            )}
          >
            {title}
          </h1>

          <div className="w-9"></div>
        </div>

        <Separator
          className={cn(
            "transition-opacity opacity-0",
            headerIsInView === false && isMounted && "opacity-1"
          )}
        />
      </div>

      <div className="max-w-xl mx-auto">
        <motion.div
          ref={titleRef}
          className="px-4 scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl text-balance mb-12 mt-12"
          initial={{
            opacity: 0,
            filter: "blur(4px)",
            transform: "translateY(8px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(0px)",
          }}
          transition={{
            duration: 0.5,
          }}
        >
          {title}
        </motion.div>

        <motion.div
          className="px-4 pb-8"
          initial={{
            opacity: 0,
            filter: "blur(4px)",
            transform: "translateY(8px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(0px)",
          }}
          transition={{
            duration: 0.5,
          }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
