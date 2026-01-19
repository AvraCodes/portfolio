"use client";
import React, { useEffect, useState } from "react";
import { DiPostgresql } from "react-icons/di";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaReact,
  FaChartLine,
  FaChartBar,
} from "react-icons/fa6";
import {
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiScikitlearn,
  SiFastapi,
} from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "eminentavra9836@gmail.com",
    href: "mailto:eminentavra9836@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "1234567890",
    href: "tel:1234567890",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "",
    content: "",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/AvraCodes",
    content: "/AvraCodes",
    icon: <FaGithub height={"50px"} />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/avras.distress?igsh=Z2MyaXNza3A3bDNw&utm_source=qr",
    content: "/avras.distress",
    icon: <FaInstagram height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Python",
    content: "Data & scripting language",
    icon: <SiPython size={"50px"} color="#3776AB" />,
    color: "#3776AB",
  },
  {
    name: "Pandas",
    content: "Data manipulation library",
    icon: <SiPandas size={"50px"} color="#150458" />,
    color: "#150458",
  },
  {
    name: "NumPy",
    content: "Numerical computing",
    icon: <SiNumpy size={"50px"} color="#013243" />,
    color: "#013243",
  },
  {
    name: "Matplotlib",
    content: "Plotting & charts",
    icon: <FaChartLine size={"50px"} color="#11557C" />,
    color: "#11557C",
  },
  {
    name: "Seaborn",
    content: "Statistical visualization",
    icon: <FaChartBar size={"50px"} color="#4C72B0" />,
    color: "#4C72B0",
  },
  {
    name: "Scikit-learn",
    content: "ML algorithms library",
    icon: <SiScikitlearn size={"50px"} color="#F7931E" />,
    color: "#F7931E",
  },
  {
    name: "TensorFlow",
    content: "Deep learning framework",
    icon: <SiTensorflow size={"50px"} color="#FF6F00" />,
    color: "#FF6F00",
  },
  {
    name: "FastAPI",
    content: "Modern Python API",
    icon: <SiFastapi size={"50px"} color="#009688" />,
    color: "#009688",
  },
  {
    name: "PostgreSQL",
    content: "Relational database",
    icon: <DiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "JavaScript",
    content: "Web scripting language",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "Typed JavaScript",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "React",
    content: "UI component library",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    content: "React framework",
    icon: <RiNextjsFill size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Tailwind CSS",
    content: "Utility-first CSS",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Avra Paul</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Data Scientist & Full-Stack
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey there! I&apos;m Avra, a data scientist and full-stack developer focused on building reliable data pipelines, APIs, and visualizations that help teams make informed decisions.
            </p>
            <p className="mb-10">
              When I&apos;m not coding, you can find me [Your
              Interests/Hobbies], exploring new technologies, or sipping coffee
              while brainstorming my next project.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Experience</h1>
            <div className="mb-6">
              <h2 className="text-xl">Independent Developer — AI, ML & Full-Stack Systems</h2>
              <div className="text-sm text-zinc-400">2025 – Present</div>
              <ul className="list-disc ml-6 mb-4">
                <li>Designed and deployed Alvyn, an AI-powered data analyst agent that automates data scraping, analysis, and visualization through a REST API</li>
                <li>Built end-to-end data pipelines involving large-scale web scraping (55,000+ records), data cleaning, preprocessing, and statistical analysis</li>
                <li>Developed production-ready backend systems using Python and FastAPI with structured JSON responses and automated chart generation</li>
                <li>Applied machine learning and statistical techniques (EDA, PCA, correlation analysis, ranking and scoring) to extract insights from real-world datasets</li>
                <li>Optimized LLM-based workflows for latency, cost, and reliability</li>
                <li>Deployed and maintained full-stack applications with scalable, API-first architecture</li>
              </ul>
              <div className="text-sm"><strong>Tech:</strong> Python, FastAPI, LLMs, Web Scraping, Pandas, NumPy, Data Visualization, REST APIs, PostgreSQL, Vercel</div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl">Machine Learning & Data Science — Competitive & Applied Projects</h2>
              <div className="text-sm text-zinc-400">2025 – Present</div>
              <ul className="list-disc ml-6 mb-4">
                <li>Achieved ~80% scores in multiple Kaggle competitions, focusing on feature engineering, model selection, and evaluation</li>
                <li>Worked with structured and unstructured datasets, performing preprocessing, modeling, and validation</li>
                <li>Translated competition learnings into real-world ML pipelines</li>
              </ul>
              <div className="text-sm"><strong>Tech:</strong> Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn</div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl">Full-Stack Development Projects</h2>
              <div className="text-sm text-zinc-400">2025 – Present</div>
              <ul className="list-disc ml-6 mb-4">
                <li>Built and deployed full-stack web applications integrating modern JavaScript frontends with Python backend APIs</li>
                <li>Implemented clean, responsive UI using component-based design and integrated them with data-driven backend services</li>
                <li>Focused on maintainability, modular code, and real-world usability</li>
              </ul>
              <div className="text-sm"><strong>Tech:</strong> JavaScript, React, Next.js, Tailwind CSS, FastAPI, REST APIs</div>
            </div>

            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
