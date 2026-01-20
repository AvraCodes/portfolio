const config = {
  title: "Avra Paul | Data Analyst",
  description: {
    long: "Explore the portfolio of Avra, a data analyst and developer specializing in data pipelines, API-driven services, and visualization. Discover my work including Alvyn — a data analyst agent built with Python and FastAPI.",
    short: "Discover the portfolio of Avra Paul — data analyst and developer.",
  },
  keywords: [
    "Avra",
    "portfolio",
    "data analyst",
    "data engineering",
    "data visualization",
    "Python",
    "FastAPI",
    "Pandas",
    "NumPy",
  ],
  author: "Avra Paul",
  email: "eminentavra9836@gmail.com",
  site: "",

  // for github stars button
  githubUsername: "AvraCodes",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/avra-paul-1924631b5/",
    instagram: "https://www.instagram.com/avras.distress?igsh=Z2MyaXNza3A3bDNw&utm_source=qr",
    facebook: "",
    github: "https://github.com/AvraCodes",
  },
};
export { config };
