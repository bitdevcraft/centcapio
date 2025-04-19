import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="max-w-7xl mx-auto mt-[40px] md:mt-[48px] px-4 flex flex-col lg:flex-row gap-8 lg:gap-10">
      <div className="flex-1 flex flex-col gap-4 md:gap-10 lg:gap-12 relative">
        <Name />
        <div className="flex gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="w-[48px] md:w-[64px] lg:w-[89px]">
            <MeImage />
          </div>
          <div>
            <Career />
            <Intro />
            <div className="absolute top-0 right-0 lg:relative p-0 md:mt-4">
              <Links />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <Details />
      </div>
    </div>
  );
}

function Name() {
  return (
    <h1 className="text-[96px]/17.5 md:text-[150px]/27 lg:text-[160px]/30 xl:text-[200px]/37  font-extrabold tracking-[-8] md:tracking-[-10] lg:tracking-[-15]">
      Ryan
      <br />
      Capio
    </h1>
  );
}

function Career() {
  return (
    <h2 className="font-bold text-[24px] md:text-[36px] text-[#f9501d]">
      Software Engineer
    </h2>
  );
}

function Intro() {
  return (
    <h3 className="text-[15px] md:text-[24px] text-gray-500">
      Crafting scalable solutions—designed to grow with you.
    </h3>
  );
}

const links = [
  {
    title: "Github",
    link: "",
    icons: IconBrandGithub,
  },
  {
    title: "Email",
    link: "",
    icons: IconMail,
  },
  {
    title: "WhatsApp",
    link: "",
    icons: IconBrandWhatsapp,
  },
  {
    title: "LinkedIn",
    link: "",
    icons: IconBrandLinkedin,
  },
];

function Links() {
  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
      {links.map((link, index) => {
        const Icon = link.icons;
        return (
          <li key={index}>
            <Link href={link.link} className="opacity-50 hover:opacity-100">
              <Icon
                className="flex sm:hidden md:hidden lg:hidden"
                size={24}
                stroke={2}
              />
              <Icon
                className="hidden sm:flex md:hidden lg:hidden"
                size={28}
                stroke={2}
              />
              <Icon
                className="hidden sm:hidden md:flex lg:hidden"
                size={32}
                stroke={2}
              />
              <Icon
                className="hidden sm:hidden md:hidden lg:flex"
                size={36}
                stroke={2}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function MeImage() {
  return (
    <div className="relative ">
      <Image
        src="/me.png"
        alt="Profile"
        width={500}
        height={500}
        className="w-[48px] md:w-[64px] lg:w-[89px] h-auto relative z-10 ml-1 -scale-x-100"
      />
      <div className="absolute top-1 left-0 scale-y-90">
        <Blob />
      </div>
      <div className="absolute top-3 left-0 scale-y-90">
        <Blob2 />
      </div>
    </div>
  );
}

function Blob() {
  return (
    <svg
      width="105"
      height="129"
      viewBox="0 0 105 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[120%] h-auto "
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.6559 3.74928C31.778 0.274452 9.38999 -5.54932 1.65497 12.3543C-6.50928 31.2515 18.1552 49.0912 18.7659 70.6188C19.326 90.3638 -5.7998 110.4 4.84583 124.842C15.3515 139.093 32.3923 112.344 47.6559 109.81C58.9766 107.932 70.499 119.146 80.547 112.278C93.0456 103.736 105.096 88.6066 104.999 70.6188C104.903 52.669 90.5286 41.6804 80.1025 29.5222C70.3389 18.1367 60.7337 6.6113 47.6559 3.74928Z"
        fill="#6B6868"
      />
    </svg>
  );
}

function Blob2() {
  return (
    <svg
      width="92"
      height="110"
      viewBox="0 0 92 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[120%] h-auto "
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.632 0.72757C39.5075 0.671949 25.3622 -1.47237 15.3589 9.08326C4.79318 20.2325 -2.54604 38.6863 0.829599 55.3904C3.94998 70.8313 20.3521 73.1054 30.319 83.1115C38.3142 91.1382 42.6245 104.479 52.632 107.397C64.9353 110.983 81.0464 112.672 88.6269 100.11C96.1698 87.6093 83.8372 71.0118 84.0137 55.3904C84.1958 39.2709 97.1864 22.5229 89.6516 9.39811C82.0714 -3.80558 65.686 0.782894 52.632 0.72757Z"
        fill="#C4C4C4"
      />
    </svg>
  );
}

function Details() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-700">
      <p className="">
        Whether it&apos;s automating workflows, enhancing system security, or
        developing full-stack applications, I thrive on solving complex problems
        with smart, innovative solutions.
      </p>
      <p className="">
        My expertise spans backend development, cloud-based solutions, data
        management, and security—helping businesses optimize their operations
        and stay ahead in the tech-driven world.
      </p>
      <p className="font-semibold">I specialize in:</p>
      <ul className="list-disc list-inside">
        <li>Building high-performance applications</li>
        <li>Automating workflows & improving system efficiency</li>
        <li>Securing data & optimizing enterprise solutions</li>
      </ul>
    </div>
  );
}
