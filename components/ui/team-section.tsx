"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Alex Morgan",
    role: "Frontend Developer",
    bio: "Specializes in creating beautiful, responsive user interfaces with React and Next.js. Passionate about accessibility and performance optimization.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Sam Chen",
    role: "Backend Developer",
    bio: "Expert in building robust server-side applications and APIs. Loves working with Node.js, databases, and cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Jordan Taylor",
    role: "Full Stack Developer",
    bio: "Full stack developer with a passion for creating end-to-end solutions. Experienced in both frontend and backend technologies.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  }
];

export function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const membersRef = useRef<(HTMLDivElement | null)[]>([]);

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

    membersRef.current.forEach((member) => {
      if (member) observer.observe(member);
    });

    return () => {
      membersRef.current.forEach((member) => {
        if (member) observer.unobserve(member);
      });
    };
  }, []);

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-chart-5/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-chart-1/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The talented developers behind our innovative products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              ref={(el) => (membersRef.current[index] = el)}
              className={cn(
                "bg-card/10 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden transition-all duration-500 opacity-0 translate-y-8 group",
                "hover:border-primary/50 hover:bg-card/20"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-4 justify-center">
                    <a href={member.social.github} className="bg-background/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary/20 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={member.social.linkedin} className="bg-background/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="bg-background/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary/20 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}