const experiences = [
  {
    title: "Software Engineer",
    company: "Ingenious Digital Marketing Management",
    location: "Remote",
    date: "Aug 2023 - Present",
    description: `
<p>At Ingenious Digital Marketing, I lead the development of Salesforce-based solutions for real estate clients, building powerful booking and property management systems that streamline operations.</p>
<p>I also handle data migration from legacy platforms to Salesforce, ensuring clean, accurate transfers with zero disruption. Beyond that, I provide in-depth documentation and user training support.</p>
<p>Internally, I manage and enhance our custom-built CRM system developed on the .NET Framework, improving system usability and performance.</p>`,
  },
  {
    title: "Embedded Software Engineer",
    company: "Thales Group",
    location: "New York, NY",
    date: "Jun 2022 - May 2023",
    description: `
<p>As part of Thales&apos; R&D team, I worked on the development and enhancement of SIM card operating systems, focusing on embedded security features.</p>
<p>I contributed to system-level implementations using Assembly, C, and Java Card, supporting global-scale telecom security. My work included rigorous testing and debugging to meet high reliability and security standards.</p>
`,
  },
  {
    title: "Senior Software Engineer",
    company: "B2BE",
    location: "New York, NY",
    date: "Jun 2021 - Jun 2022",
    description: `
<p>Promoted to Senior Software Engineer, I led a team of developers working on large-scale B2B integration systems.</p>
<p>I was responsible for improving EDI solutions, optimizing workflows, and ensuring robust, maintainable code. I collaborated closely with internal teams and clients to gather feedback, deliver tailored solutions, and enhance customer satisfaction.</p>
      `,
  },
  {
    title: "Software Engineer",
    company: "B2BE",
    location: "New York, NY",
    date: "Feb 2019 - Jun 2021",
    description: `
<p>In my earlier role at B2BE, I developed critical tools that enhanced the company's core EDI platform.</p>
<p>Notably, I built a program to automate EDI file format conversions, significantly reducing processing time and human error. I also implemented OCR technologies to digitize B2B documents, enabling smoother automated workflows for clients.</p>
      `,
  },
];

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8 sm:mt-16 lg:mt-0">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
        Experience
      </h3>
      <div className="mt-4 flex flex-col gap-8 mt-4 md:mt-8 lg:mt-10 max-w-5xl mx-auto">
        {experiences.map((experience, index) => (
          <div key={index} className="grid grid-cols-5 gap-4">
            <p className="col-span-1 text-muted-foreground hidden md:flex">
              {experience.date}
            </p>
            <div className="col-span-5 md:col-span-4">
              <h4 className="text-sm md:text-md lg:text-lg font-semibold">
                {experience.title} - {experience.company}
              </h4>
              <p className="text-muted-foreground flex md:hidden text-xs md:text-sm">
                {experience.date}
              </p>
              <div className=" mt-2 text-muted-foreground text-xs md:text-sm">
                <div
                  className="flex flex-col gap-2"
                  dangerouslySetInnerHTML={{ __html: experience.description }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
