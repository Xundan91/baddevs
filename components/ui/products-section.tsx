"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  {
    title: "BADDevFlow",
    description: "A comprehensive project management tool designed specifically for development teams to streamline workflows and boost productivity.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: ["Project Management", "Collaboration", "Productivity"]
  },
  {
    title: "CodeVault",
    description: "Secure code repository with advanced version control, code review, and collaboration features for distributed development teams.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    tags: ["Version Control", "Security", "Collaboration"]
  },
  {
    title: "DataSense",
    description: "An intuitive analytics platform that transforms complex data into actionable insights through interactive visualizations and reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: ["Analytics", "Data Visualization", "Business Intelligence"]
  }
];

export function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    productsRef.current.forEach((product) => {
      if (product) observer.observe(product);
    });

    return () => {
      productsRef.current.forEach((product) => {
        if (product) observer.unobserve(product);
      });
    };
  }, []);

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-black to-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-chart-3/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-chart-4/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve built innovative solutions that solve real-world problems for businesses and developers.
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (productsRef.current[index] = el)}
              className={cn(
                "flex flex-col lg:flex-row gap-8 lg:gap-16 items-center opacity-0 translate-y-8 transition-all duration-700",
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-video relative overflow-hidden rounded-lg border border-border/50 group">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{product.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button className="group">
                  Learn More
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}