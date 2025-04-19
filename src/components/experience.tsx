const experiences = [
  {
    title: "Software Engineer",
    company: "Ingenious Digital Marketing Management",
    location: "Remote",
    date: "Aug 2023 - Present",
    description:
      "Developing and maintaining web applications using React and Node.js.",
  },
  {
    title: "Embedded Software Engineer",
    company: "Thales Group",
    location: "New York, NY",
    date: "Jun 2022 - May 2023",
    description:
      "Assisted in the development of a mobile application using React Native.",
  },
  {
    title: "Senior Software Engineer",
    company: "B2BE",
    location: "New York, NY",
    date: "Jun 2021 - Jun 2022",
    description:
      "Assisted in the development of a mobile application using React Native.",
  },
  {
    title: "Software Engineer",
    company: "B2BE",
    location: "New York, NY",
    date: "Feb 2019 - Jun 2021",
    description:
      "Assisted in the development of a mobile application using React Native.",
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
          <div key={index} className="flex gap-4">
            <p className="basis-1/5 text-gray-400 hidden md:flex">
              {experience.date}
            </p>
            <div>
              <h4 className="text-sm md:text-md lg:text-lg font-semibold">
                {experience.title} - {experience.company}
              </h4>
              <p className="basis-1/5 text-gray-400 flex md:hidden text-xs md:text-sm">
                {experience.date}
              </p>
              <p className="mt-2 text-gray-600 text-xs md:text-sm">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
