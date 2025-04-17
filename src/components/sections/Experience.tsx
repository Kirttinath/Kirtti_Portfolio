
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    startDate: "Jan 2022",
    endDate: "Present",
    description: [
      "Lead a team of 5 developers in building a modern SaaS platform using React, TypeScript, and GraphQL.",
      "Implemented CI/CD pipelines that reduced deployment time by 40% and improved code quality.",
      "Designed and developed reusable component library that increased development speed by 30%."
    ],
    skills: ["React", "TypeScript", "GraphQL", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Full Stack Developer",
    company: "DataViz Solutions",
    location: "Boston, MA",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    description: [
      "Developed and maintained multiple client projects using the MERN stack.",
      "Created data visualization dashboards with D3.js that processed over 1M data points.",
      "Optimized database queries resulting in 60% faster page load times."
    ],
    skills: ["MongoDB", "Express.js", "React", "Node.js", "D3.js"]
  },
  {
    title: "UX/UI Developer",
    company: "Creative Digital Agency",
    location: "New York, NY",
    startDate: "Jul 2018",
    endDate: "May 2020",
    description: [
      "Collaborated with designers to implement pixel-perfect UIs for high-profile clients.",
      "Built responsive web applications with focus on accessibility and performance.",
      "Conducted user testing sessions to improve UI/UX based on real user feedback."
    ],
    skills: ["JavaScript", "HTML/CSS", "Sass", "Figma", "User Testing"]
  }
];

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience">
      <div className="container" ref={ref}>
        <div className="flex flex-col gap-12">
          <div className="space-y-4 text-center">
            <h2>Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the impactful roles I've held.
            </p>
          </div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-all duration-700 transform",
                  inView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-20",
                  index === 1 && "delay-200",
                  index === 2 && "delay-400"
                )}
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-muted-foreground">{item.company}, {item.location}</p>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {item.startDate} - {item.endDate}
                        </Badge>
                      </div>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        {item.description.map((point, i) => (
                          <li key={i} className="text-muted-foreground">{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                    {index < experienceData.length - 1 && (
                      <div className="border-b mt-6 md:ml-6"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
