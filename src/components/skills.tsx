import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import { BsFiletypeSql } from "react-icons/bs";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import {
  SiDjango,
  SiDotnet,
  SiExpress,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiAngular,
  SiDocker,
  SiGit,
  SiSupabase,
  SiSalesforce,
  SiMongodb,
  SiRedis,
  SiCplusplus,
  SiArmkeil,
  SiWhatsapp,
  SiC,
  SiThreedotjs,
} from "react-icons/si";

const skills = {
  Backend: [
    {
      name: "Node.js",
      description: "Node.js",
      icon: <SiNodedotjs />,
    },
    {
      name: "Express",
      description: "Express",
      icon: <SiExpress />,
    },
    {
      name: "Python",
      description: "Python",
      icon: <SiPython />,
    },
    {
      name: "Django",
      description: "Django",
      icon: <SiDjango />,
    },
    {
      name: "Dotnet",
      description: "Dotnet",
      icon: <SiDotnet />,
    },
    {
      name: "Typescript",
      description: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "Javascript",
      description: "Javascript",
      icon: <SiJavascript />,
    },
    {
      name: "C",
      description: "C",
      icon: <SiC />,
    },
    {
      name: "C++",
      description: "C++",
      icon: <SiCplusplus />,
    },
  ],
  Frontend: [
    {
      name: "React",
      description: "React",
      icon: <SiReact />,
    },
    {
      name: "Next.js",
      description: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind",
      description: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "Angular",
      description: "Angular",
      icon: <SiAngular />,
    },
    {
      name: "ThreeJs",
      description: "ThreeJs",
      icon: <SiThreedotjs />,
    },
  ],
  Database: [
    {
      name: "Mysql",
      description: "Mysql",
      icon: <SiMysql />,
    },
    {
      name: "Redis",
      description: "Redis",
      icon: <SiRedis />,
    },
    {
      name: "MongoDB",
      description: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Postgres",
      description: "Postgres",
      icon: <SiPostgresql />,
    },
    {
      name: "SqlServer",
      description: "SqlServer",
      icon: <DiMsqlServer />,
    },
    {
      name: "SQL",
      description: "SQL",
      icon: <BsFiletypeSql />,
    },
  ],
  Tools: [
    {
      name: "Git",
      description: "Git",
      icon: <SiGit />,
    },
    {
      name: "Docker",
      description: "Docker",
      icon: <SiDocker />,
    },
    {
      name: "Supabase",
      description: "Supabase",
      icon: <SiSupabase />,
    },
    {
      name: "Salesforce",
      description: "Salesforce",
      icon: <SiSalesforce />,
    },
    {
      name: "Visual Studio",
      description: "Visual Studio",
      icon: <DiVisualstudio />,
    },
    {
      name: "Keil",
      description: "Keil",
      icon: <SiArmkeil />,
    },
    {
      name: "Whatsapp Business API",
      description: "Whatsapp Business API",
      icon: <SiWhatsapp />,
    },
  ],
};

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 md:mt-32">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Skills</h3>
      <Tabs defaultValue="backend" className="">
        <TabsList className="">
          <TabsTrigger
            className="px-3 sm:px-6 md:px-9 lg:px-12"
            value="backend"
          >
            Backend
          </TabsTrigger>
          <TabsTrigger
            className="px-3 sm:px-6 md:px-9 lg:px-12"
            value="frontend"
          >
            Frontend
          </TabsTrigger>
          <TabsTrigger
            className="px-3 sm:px-6 md:px-9 lg:px-12"
            value="database"
          >
            Database
          </TabsTrigger>
          <TabsTrigger className="px-3 sm:px-6 md:px-9 lg:px-12" value="tools">
            Tools
          </TabsTrigger>
        </TabsList>
        <TabsContent value="backend" className="grid grid-cols-12 gap-4">
          {skills.Backend.map((skill) => (
            <div
              key={skill.name}
              className="col-span-6 md:col-span-4 lg:col-span-3 flex items-center justify-center gap-2 border p-4 rounded-md hover:text-accent"
            >
              {skill.icon}
              <h4>{skill.name}</h4>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="frontend" className="grid grid-cols-12 gap-4">
          {skills.Frontend.map((skill) => (
            <div
              key={skill.name}
              className="col-span-6 md:col-span-4 lg:col-span-3 flex items-center justify-center gap-2 border p-4 rounded-md hover:text-accent"
            >
              {skill.icon}
              <h4>{skill.name}</h4>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="database" className="grid grid-cols-12 gap-4">
          {skills.Database.map((skill) => (
            <div
              key={skill.name}
              className="col-span-6 md:col-span-4 lg:col-span-3 flex items-center justify-center gap-2 border p-4 rounded-md hover:text-accent"
            >
              {skill.icon}
              <h4>{skill.name}</h4>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="tools" className="grid grid-cols-12 gap-4">
          {skills.Tools.map((skill) => (
            <div
              key={skill.name}
              className="col-span-6 md:col-span-4 lg:col-span-3 flex items-center justify-center gap-2 border p-4 rounded-md hover:text-accent"
            >
              {skill.icon}
              <h4>{skill.name}</h4>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
