import { IconArrowUpRight } from "@tabler/icons-react";

const projects = [
  {
    title: "Booking System Module",
    description: "Module for managing bookings for real estate properties",
    link: "",
    type: "Salesforce",
  },
  {
    title: "Schedule Payment Plan Module",
    description:
      "Dynamic Schedule Payment Plan for each projects with different payment plans and payment schedules.",
    link: "",
    type: "Salesforce",
  },
  {
    title: "Broker Registration with Document E-Sign Module",
    description:
      "Registration module for brokers with document e-signing capabilities.",
    link: "",
    type: "Salesforce",
  },
  {
    title: "Commission Management Module",
    description:
      "Triggered commission management module for real estate brokers once a schedule payment milestone is reached.",
    link: "",
    type: "Salesforce",
  },
  {
    title: "Lead Management Module",
    description: "Handle leads processing and management",
    link: "",
    type: "Salesforce",
  },
  {
    title: "Document Generation Module for Salesforce",
    description:
      "Handle sales offer and reservation document generation for the customers who booked on a system and integrated payment plan.",
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
    description:
      "Implemented a proprietary security system for SIM card OS personalization.",
    link: "",
    type: "Embedded",
  },
  {
    title: "EDI translation",
    description: "Program to translate EDI files to different formats.",
    link: "",
    type: "Scripting",
  },
  {
    title: "Oceanz Danube",
    description: "Landing page for Oceanz Danube project",
    link: "https://offplanpropertydxb.com/oceanz-danube",
    type: "Web",
  },
  {
    title: "Sea La Vie",
    description: "Landing page for Sea La Vie project",
    link: "https://offplanpropertydxb.com/sea-lavie-apartment",
    type: "Web",
  },
  {
    title: "LVHomes",
    description: "Created a landing page with CMS capabilities for LVHomes",
    link: "",
    type: "Web",
  },
  {
    title: "Whatsapp Business API Implementation",
    description:
      "Created a custom implementation of Whatsapp Business API for the Whatsapp Marketing.",
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
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-4 border rounded-lg group min-h-[150px] hover:border-accent"
          >
            <div className="flex items-start justify-between mb-2 group-hover:text-accent">
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
