
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Code, Database, Layout, Palette, Wrench } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Bootstrap", "Material UI", "Redux"]
  },
  {
    name: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["Firebase", "MySQL", "SQL"]
  },
  {
    name: "Design",
    icon: <Palette className="h-6 w-6" />,
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Wireframing", "Prototyping"]
  },
  {
    name: "DevOps",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["Git", "GitHub", "CI/CD", "Vercel", "Netlify"]
  },
  {
    name: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["JavaScript", "TypeScript", "Java"]
  }
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="bg-muted/50">
      <div className="container" ref={ref}>
        <div className="flex flex-col gap-12">
          <div className="space-y-4 text-center">
            <h2>Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My technical skills and areas of expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, index) => (
              <Card 
                key={category.name}
                className={cn(
                  "transition-all duration-700 transform overflow-hidden",
                  inView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-20",
                  index % 3 === 1 && "delay-200",
                  index % 3 === 2 && "delay-400"
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-medium">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
