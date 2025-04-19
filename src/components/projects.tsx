import { IconArrowUpRight } from "@tabler/icons-react";

const projects = [
  {
    title: "Booking System Module",
    description:
      "Build on top of Salesforce, this allows for the company to handle installments.",
    link: "",
    type: "Salesforce",
  },
  {
    title: "Schedule Payment Plan Module",
    description: "",
    link: "",
    type: "Salesforce",
  },
  {
    title: "Broker Registration with Document E-Sign Module",
    description:
      "This module allows for the registration of brokers and the signing of documents electronically.",
    link: "",
    type: "Salesforce",
  },
  {
    title: "Commission Management Module",
    description: "",
    link: "",
    type: "Salesforce",
  },
  {
    title: "Lead Management Module",
    description: "",
    link: "",
    type: "Salesforce",
  },
  {
    title: "Document Generation Module for Salesforce",
    description: "",
    link: "",
    type: "Salesforce",
  },
  {
    title: "Migration of old system to Salesforce",
    description: "",
    link: "",
    type: "Salesforce",
  },
  {
    title: "InfyCRM",
    description:
      "Build on .Net Framework, this CRM is tailored for the Real Estate Companies where you manage your listings and leads.",
    link: "",
    type: "Web",
  },
  {
    title: "Proprietary Security System for Sim Card OS",
    description: "",
    link: "",
    type: "Embedded",
  },
  {
    title: "EDI translation",
    description: "",
    link: "",
    type: "Scripting",
  },
  {
    title: "Oceanz Danube",
    description: "",
    link: "https://offplanpropertydxb.com/oceanz-danube",
    type: "Web",
  },
  {
    title: "Sea La Vie",
    description: "",
    link: "https://offplanpropertydxb.com/sea-lavie-apartment",
    type: "Web",
  },
  {
    title: "LVHomes",
    description: "",
    link: "",
    type: "Web",
  },
  {
    title: "Whatsapp Business API Implementation",
    description: "",
    link: "https://ingeniousuae.com",
    type: "Web",
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 md:mt-32">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
        Projects
      </h3>
      <div className="grid grid-cols-12 gap-4 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-4 border rounded-lg group min-h-[200px] hover:bg-gray-100/50"
          >
            <div className="flex items-start justify-between mb-2 group-hover:text-[#f9501d]">
              <h4 className="text-md font-semibold min-h-[48px] basis-4/5 ">
                {project.title}
              </h4>
              <div className="basis-1/5 flex justify-end items-center">
                <IconArrowUpRight
                  size={24}
                  className=" size-5 group-hover:-translate-y-[20%] group-hover:translate-x-[20%] ease-in-out duration-300"
                />
              </div>
            </div>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
