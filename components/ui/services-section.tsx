"use client";

import { useRef, useEffect } from "react";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Shield, 
  BarChart 
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for optimal performance and scalability."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces designed with a focus on usability, accessibility, and conversion."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Database Architecture",
    description: "Robust database solutions designed for performance, security, and scalability to handle your growing data needs."
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies to ensure your applications run smoothly and securely."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security Implementation",
    description: "Comprehensive security measures to protect your applications and data from vulnerabilities and threats."
  },
  // {
  //   icon: <BarChart className="h-6 w-6" />,
  //   title: "Performance Optimization",
  //   description: "Fine-tuning your existing applications for maximum speed, efficiency, and user satisfaction."
  // }
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-1/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of development services to bring your digital vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={cn(
                "bg-card/10 backdrop-blur-sm border border-border/50 rounded-lg p-6 transition-all duration-500 opacity-0 translate-y-8",
                "hover:border-primary/50 hover:bg-card/20"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}