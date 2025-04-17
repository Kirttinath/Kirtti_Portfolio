
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Science",
    field: "Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    startDate: "Aug 2018",
    endDate: "May 2020",
    description: "Specialized in Artificial Intelligence and Human-Computer Interaction. Thesis on adaptive user interfaces for mobile applications."
  },
  {
    degree: "Bachelor of Science",
    field: "Computer Engineering",
    institution: "University of Michigan",
    location: "Ann Arbor, MI",
    startDate: "Aug 2014",
    endDate: "May 2018",
    description: "Focus on software engineering and computer architecture. Graduated with honors."
  },
  {
    degree: "Certificate",
    field: "UX Design",
    institution: "Interaction Design Foundation",
    location: "Online",
    startDate: "Jan 2017",
    endDate: "Jun 2017",
    description: "Completed comprehensive UX design certification with focus on user research and interaction design."
  }
];

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="bg-muted/50">
      <div className="container" ref={ref}>
        <div className="flex flex-col gap-12">
          <div className="space-y-4 text-center">
            <h2>Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background and continuous learning journey.
            </p>
          </div>

          <div className="grid gap-8">
            {educationData.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-card rounded-lg p-6 shadow-sm border transition-all duration-700 transform",
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
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-3 flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-semibold">{item.degree} in {item.field}</h4>
                        <p className="text-muted-foreground">{item.institution}, {item.location}</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {item.startDate} - {item.endDate}
                      </Badge>
                    </div>
                    {item.description && (
                      <p className="text-muted-foreground">{item.description}</p>
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
