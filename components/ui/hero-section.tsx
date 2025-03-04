"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Layers } from "lucide-react";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      heroRef.current.style.setProperty("--mouse-x", `${x}`);
      heroRef.current.style.setProperty("--mouse-y", `${y}`);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-background"
      style={{
        backgroundImage: "radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(50, 50, 50, 0.3), transparent 500px)"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-chart-1/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-chart-2/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "12s" }}></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-chart-3/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s" }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
      
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
          We Build <span className="text-primary">Exceptional</span> Digital Products
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          A team of three passionate developers turning complex ideas into elegant, 
          high-performance solutions that drive business growth.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="group">
            See Our Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card/20 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
            <div className="bg-primary/20 p-3 rounded-full w-fit mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-muted-foreground">We write maintainable, efficient code that scales with your business.</p>
          </div>
          
          <div className="bg-card/20 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
            <div className="bg-primary/20 p-3 rounded-full w-fit mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-muted-foreground">Lightning-fast applications optimized for the best user experience.</p>
          </div>
          
          <div className="bg-card/20 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
            <div className="bg-primary/20 p-3 rounded-full w-fit mb-4">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
            <p className="text-muted-foreground">Future-proof architecture that grows with your evolving needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}