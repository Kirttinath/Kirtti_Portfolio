import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Layout, Palette, Wrench, Code, Database } from "lucide-react";
import { useInView } from "react-intersection-observer";
import {
    // Frontend
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiVuedotjs,
    SiBootstrap,
    SiRedux,

    // Database
    SiFirebase,
    SiMysql,

    // Design
    SiFigma,

    // DevOps
    SiGit,
    SiGithub,
    SiVercel,
    SiNetlify,

    // Languages
    // Java is not in simple-icons, we'll use a different package
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // For Java icon
import { SiMaterialdesign } from "react-icons/si"; // Alternative for Material UI

interface SkillCategory {
    name: string;
    icon: React.ReactNode;
    skills: {
        name: string;
        icon: React.ReactNode;
    }[];
}

// Map each skill to its corresponding official icon
const getSkillIcon = (skill: string) => {
    const iconMap: Record<string, React.ReactNode> = {
        // Frontend
        HTML5: <SiHtml5 className="h-4 w-4 text-orange-500" />,
        CSS3: <SiCss3 className="h-4 w-4 text-blue-500" />,
        JavaScript: <SiJavascript className="h-4 w-4 text-yellow-500" />,
        TypeScript: <SiTypescript className="h-4 w-4 text-blue-600" />,
        React: <SiReact className="h-4 w-4 text-blue-400" />,
        "Next.js": (
            <SiNextdotjs className="h-4 w-4 text-black dark:text-white" />
        ),
        "Vue.js": <SiVuedotjs className="h-4 w-4 text-green-500" />,
        Bootstrap: <SiBootstrap className="h-4 w-4 text-purple-500" />,
        "Material UI": <SiMaterialdesign className="h-4 w-4 text-blue-500" />,
        Redux: <SiRedux className="h-4 w-4 text-purple-600" />,

        // Database
        Firebase: <SiFirebase className="h-4 w-4 text-yellow-600" />,
        MySQL: <SiMysql className="h-4 w-4 text-blue-600" />,
        SQL: <Database className="h-4 w-4 text-blue-500" />, // No official SQL icon in react-icons

        // Design
        Figma: <SiFigma className="h-4 w-4 text-purple-500" />,
        "UI/UX Design": <Palette className="h-4 w-4 text-pink-500" />,
        "Responsive Design": <Layout className="h-4 w-4 text-teal-500" />,
        Wireframing: <Palette className="h-4 w-4 text-gray-500" />,
        Prototyping: <Layout className="h-4 w-4 text-indigo-500" />,

        // DevOps
        Git: <SiGit className="h-4 w-4 text-orange-600" />,
        GitHub: <SiGithub className="h-4 w-4 text-black dark:text-white" />,
        "CI/CD": <Wrench className="h-4 w-4 text-blue-500" />,
        Vercel: <SiVercel className="h-4 w-4 text-black dark:text-white" />,
        Netlify: <SiNetlify className="h-4 w-4 text-teal-500" />,

        // Languages
        Java: <FaJava className="h-4 w-4 text-red-600" />,
    };

    return iconMap[skill] || <Code className="h-4 w-4" />;
};

// Rest of the component remains the same...
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
