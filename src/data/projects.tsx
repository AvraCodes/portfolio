import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiPython } from "react-icons/si";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
        <Button variant={"default"} size={"sm"}>
          Visit
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

const PROJECT_SKILLS: Record<string, { title: string; bg: string; fg: string; icon: ReactNode }> = {
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

export type ProjectType = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: ProjectType[] = [
  {
    id: "brewweb",
    category: "Web Development Agency (Co-Founder)",
    title: "BrewWeb — Web & App Development",
    src: `${BASE_PATH}/BrewWeb/brewweb-landing.png`,
    screenshots: ["brewweb-landing.png", "brewweb-about.png", "brewweb-noir-project.png"],
    skills: {
      frontend: [],
      backend: [],
    },
    live: "https://brew-web.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            BrewWeb is a small, developer-led web and application development agency focused on building clean, 
            reliable digital products for startups and local businesses. We work closely with clients to design 
            and deliver fast, mobile-friendly websites, internal dashboards, and custom web applications that 
            solve real business problems.
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            As Co-Founder & Developer, I'm involved end-to-end — from understanding requirements and planning 
            architecture to development, deployment, and iteration. Our work emphasizes performance, usability, 
            and long-term maintainability over unnecessary complexity.
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            <strong>Selected Work:</strong>
          </TypographyP>
          <ul className="font-mono list-disc pl-6 mt-2">
            <li>
              <strong>Noir Cafe</strong> — Designed and built a responsive landing page to showcase the brand, 
              menu, and location, helping improve online discoverability and walk-ins.
            </li>
            <li className="mt-2">
              <strong>Datawise</strong> — Developed a data-focused web platform with dashboards and structured 
              views to support analysis and decision-making.
            </li>
          </ul>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <p className="font-mono mb-2">Clean, production-ready web applications and landing pages</p>
          <SlideShow images={[
            `${BASE_PATH}/BrewWeb/brewweb-landing.png`,
            `${BASE_PATH}/BrewWeb/brewweb-about.png`,
            `${BASE_PATH}/BrewWeb/brewweb-noir-project.png`
          ]} />
        </div>
      );
    },
  },
  {
    id: "rag-ai-chatbot",
    category: "AI/Education",
    title: "RAG-Based AI Chatbot",
    src: `${BASE_PATH}/AI chatbot/screenshot-landing.png`,
    screenshots: ["screenshot-landing.png", "screenshot-response.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python as unknown as Skill],
    },
    github: "https://github.com/AvraCodes/RAG-Ai-Chatbot",
    live: "https://rag-chatbot-five-pi.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A RAG (Retrieval-Augmented Generation) based AI chatbot designed specifically for educational purposes. 
            The chatbot leverages document retrieval to provide accurate, context-aware responses to learning queries.
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            Tech stack: Python, RAG framework, vector databases for document storage and retrieval, natural language processing for intelligent responses.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <p className="font-mono mb-2">AI-powered educational assistant with document retrieval</p>
          <SlideShow images={[
            `${BASE_PATH}/AI chatbot/screenshot-landing.png`,
            `${BASE_PATH}/AI chatbot/screenshot-response.png`
          ]} />
        </div>
      );
    },
  },
  {
    id: "alvyn",
    category: "Data Analyst Agent",
    title: "Alvyn - Data Analyst Agent",
    src: `${BASE_PATH}/Alvyn/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python as unknown as Skill],
    },
    github: "https://github.com/AvraCodes/Alvyn-V2",
    live: "https://github.com/AvraCodes/Alvyn-V2",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Alvyn is a data analyst agent built to automate data processing, visualization, and web scraping tasks.
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            Tech stack: Python, FastAPI (API layer), Pandas, NumPy, Matplotlib/Seaborn, Requests/BeautifulSoup or Playwright for scraping.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <p className="font-mono mb-2">AI-powered data analysis automation</p>
          <SlideShow images={[`${BASE_PATH}/Alvyn/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "kaggle-competitions",
    category: "Machine Learning",
    title: "Kaggle Competitions",
    src: `${BASE_PATH}/Kaggle-Competitions/kaggle-screenshot.png`,
    screenshots: ["kaggle-screenshot.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python as unknown as Skill],
    },
    github: "",
    live: "https://www.kaggle.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Participated in multiple Kaggle competitions, achieving ~80% scores through feature engineering, model selection, and hyperparameter tuning.
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            Tech stack: Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn. Worked with structured and unstructured datasets.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/Kaggle-Competitions/kaggle-screenshot.png`]} />
        </div>
      );
    },
  },
  {
    id: "parakh-pipeline",
    category: "Data Pipeline",
    title: "Parakh Data Pipeline",
    src: `${BASE_PATH}/Parakh-pipeline/parakh-screenshot.png`,
    screenshots: ["parakh-screenshot.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python as unknown as Skill],
    },
    github: "",
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Built an end-to-end data pipeline for processing, analyzing, and visualizing large-scale datasets.
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            Tech stack: Python, Pandas, NumPy, SQL, data cleaning and preprocessing workflows, automated reporting.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/Parakh-pipeline/parakh-screenshot.png`]} />
        </div>
      );
    },
  },
];

export default projects;
