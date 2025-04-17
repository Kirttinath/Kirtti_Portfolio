
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, payment processing, and user authentication.",
    image: "https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1540349086034-097b6463a86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current conditions and forecasts for multiple locations using modern visualization techniques.",
    image: "https://images.unsplash.com/photo-1532978379173-523e16f371f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "D3.js", "OpenWeather API", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media managers to track performance across multiple platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Chart.js", "Material UI", "Social Media APIs"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects">
      <div className="container" ref={ref}>
        <div className="flex flex-col gap-12">
          <div className="space-y-4 text-center">
            <h2>Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work and personal projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <Card 
                key={index}
                className={cn(
                  "overflow-hidden transition-all duration-700 transform flex flex-col h-full",
                  inView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-20",
                  index % 2 === 1 && "delay-200",
                  index >= 2 && "delay-400"
                )}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-4">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
