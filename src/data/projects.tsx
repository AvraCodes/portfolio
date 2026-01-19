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
