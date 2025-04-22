import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
    Code,
    Database,
    Layout,
    Palette,
    Wrench,
    FileJson,
    FileType2,
    Globe,
    Columns,
    GanttChart,
    Layers,
    LayoutGrid,
    MessageSquare,
    Brush,
    Boxes,
    ServerCog,
    GitBranch,
    Github,
    Rocket,
    Network,
    Coffee,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

interface SkillCategory {
    name: string;
    icon: React.ReactNode;
    skills: {
        name: string;
        icon: React.ReactNode;
    }[];
}

// Map each skill to its corresponding icon
const getSkillIcon = (skill: string) => {
    const iconMap: Record<string, React.ReactNode> = {
        // Frontend
        HTML5: <FileType2 className="h-4 w-4 text-orange-500" />,
        CSS3: <Brush className="h-4 w-4 text-blue-500" />,
        JavaScript: <FileJson className="h-4 w-4 text-yellow-500" />,
        TypeScript: <FileJson className="h-4 w-4 text-blue-600" />,
        React: <Layers className="h-4 w-4 text-blue-400" />,
        "Next.js": <Layout className="h-4 w-4 text-black" />,
        "Vue.js": <Layers className="h-4 w-4 text-green-500" />,
        Bootstrap: <Columns className="h-4 w-4 text-purple-500" />,
        "Material UI": <LayoutGrid className="h-4 w-4 text-blue-500" />,
        Redux: <Boxes className="h-4 w-4 text-purple-600" />,

        // Database
        Firebase: <Database className="h-4 w-4 text-yellow-600" />,
        MySQL: <Database className="h-4 w-4 text-blue-600" />,
        SQL: <Database className="h-4 w-4 text-blue-500" />,

        // Design
        Figma: <Palette className="h-4 w-4 text-purple-500" />,
        "UI/UX Design": <Layout className="h-4 w-4 text-pink-500" />,
        "Responsive Design": <Columns className="h-4 w-4 text-teal-500" />,
        Wireframing: <GanttChart className="h-4 w-4 text-gray-500" />,
        Prototyping: <Layers className="h-4 w-4 text-indigo-500" />,

        // DevOps
        Git: <GitBranch className="h-4 w-4 text-orange-600" />,
        GitHub: <Github className="h-4 w-4 text-black" />,
        "CI/CD": <Rocket className="h-4 w-4 text-blue-500" />,
        Vercel: <ServerCog className="h-4 w-4 text-black" />,
        Netlify: <Network className="h-4 w-4 text-teal-500" />,

        // Languages
        Java: <Coffee className="h-4 w-4 text-red-600" />,
    };

    return iconMap[skill] || <MessageSquare className="h-4 w-4" />;
};

const skillsData: SkillCategory[] = [
    {
        name: "Frontend",
        icon: <Layout className="h-6 w-6" />,
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Vue.js",
            "Bootstrap",
            "Material UI",
            "Redux",
        ].map((skill) => ({ name: skill, icon: getSkillIcon(skill) })),
    },
    {
        name: "Database",
        icon: <Database className="h-6 w-6" />,
        skills: ["Firebase", "MySQL", "SQL"].map((skill) => ({
            name: skill,
            icon: getSkillIcon(skill),
        })),
    },
    {
        name: "Design",
        icon: <Palette className="h-6 w-6" />,
        skills: [
            "Figma",
            "UI/UX Design",
            "Responsive Design",
            "Wireframing",
            "Prototyping",
        ].map((skill) => ({ name: skill, icon: getSkillIcon(skill) })),
    },
    {
        name: "DevOps",
        icon: <Wrench className="h-6 w-6" />,
        skills: ["Git", "GitHub", "CI/CD", "Vercel", "Netlify"].map(
            (skill) => ({ name: skill, icon: getSkillIcon(skill) })
        ),
    },
    {
        name: "Languages",
        icon: <Code className="h-6 w-6" />,
        skills: ["JavaScript", "TypeScript", "Java"].map((skill) => ({
            name: skill,
            icon: getSkillIcon(skill),
        })),
    },
];

export default function Skills() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="skills" className="bg-muted/50 py-16">
            <div className="container" ref={ref}>
                <div className="flex flex-col gap-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold">Skills</h2>
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
                                        <h3 className="text-xl font-medium">
                                            {category.name}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill.name}
                                                className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm flex items-center gap-1.5"
                                            >
                                                {skill.icon}
                                                {skill.name}
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
