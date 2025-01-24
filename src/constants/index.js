export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Ravi Ranjan Kumar",
    position: "PhD (ECE)",
    img: "assets/review2.png",
    review:
      "Manan’s dedication to crafting a visually appealing and responsive frontend for our website was impressive. His skill in merging our brand's aesthetic with a user-friendly interface enhanced engagement. The modern design and animations he implemented surpassed our expectations, and we’re excited to work with him again.",
  },
  {
    id: 2,
    name: "Neha Sharma",
    position: "Assistant Professor",
    img: "assets/review1.png",
    review:
      "Manan did a great job developing our employee management system using Java Swing and JDBC. His work on the interface was smooth and user-friendly, and he handled the database integration efficiently. He was responsive to feedback and ensured the project was completed on time. It was a pleasure working with him.",
  },
  {
    id: 3,
    name: "Dr. Aashish Kumar",
    position: "Assistant Professor, Chitkara University",
    img: "assets/review3.png",
    review:
      "Manan's expertise in image processing was vital for our research. His algorithms for facial recognition and nanoparticle analysis were efficient and innovative, offering valuable insights. His technical skills and commitment to precision significantly enhanced our project's success, making him a key contributor to our research efforts.",
  },
  {
    id: 4,
    name: "Anjali Verma",
    position: "Software Engineer",
    img: "assets/review4.png",
    review:
      "Manan helped us design a load balancing algorithm using CloudSim for our cloud project. His solution improved resource distribution and reduced delays. Manan was clear in his explanations and ensured the solution fit our needs. His practical approach and dedication were impressive. Highly recommended for cloud system improvements.",
  },
];

export const myProjects = [
  {
    title: "NatureXplora - An Immersive Journey into the Wilderness",
    desc: "NatureXplora is a captivating nature tour website built using HTML, SASS, and JavaScript. It showcases advanced animations that bring the beauty of nature to life, offering users an immersive and visually stunning experience.",
    subdesc:
      "Designed to inspire exploration, NatureXplora combines seamless functionality with a modern aesthetic, making it an ideal platform for nature enthusiasts.",
    href: "https://naturexplora.netlify.app/",
    texture: "/textures/project/naturexoplora.mp4",
    logo: "/assets/naturex.png",
    logoStyle: {
      backgroundColor: "#60f581",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
      filter: "contrast(100%)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/html.svg",
      },
      {
        id: 2,
        name: "Javascript",
        path: "assets/js.svg",
      },
      {
        id: 3,
        name: "SASS",
        path: "/assets/sass.svg",
      },
    ],
  },
  {
    title: "LearnLynx - Empowering Learning",
    desc: "LearnLynx is a cutting-edge learning management system built with the MERN stack (MongoDB, Express, React, Node.js). It features dynamic student and teacher dashboards, enabling streamlined course management and communication. Integrated calendar events help users stay organized, while secure email login ensures data privacy.",
    subdesc:
      "With efficient MongoDB database management and smooth payment processing via Razorpay, LearnLynx delivers a modern, user-friendly platform designed for effective learning and teaching experiences.",
    href: "https://github.com/manan5657/LMS-Frontend-fork/",
    texture: "/textures/project/learn.mp4",
    logo: "/assets/learn.png",
    logoStyle: {
      backgroundColor: "#f9c365",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Express",
        path: "assets/express.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/mongo.svg",
      },
      {
        id: 4,
        name: "RazorPay",
        path: "/assets/razor.svg",
      },
    ],
  },
  {
    title: "FigPro - Real-Time Collaborative Design Platform",
    desc: "FigPro is a powerful design platform that enables real-time collaboration, allowing teams to work seamlessly on design projects. Built with Next.js, TypeScript, Tailwind, and ShadCN, FigPro offers tools like vector editing, prototyping, and design system management. With Liveblocks integration, users can collaborate live, seeing updates instantly.",
    subdesc:
      "The platform also supports shared libraries, team project organization, and easy export options, providing an efficient and dynamic workspace for designers to create and iterate together in real-time.",
    href: "https://fig-draw.vercel.app/",
    texture: "/textures/project/figpro.mp4",
    logo: "/assets/fig.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "NextJS",
        path: "/assets/next.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "LiveBlocks",
        path: "/assets/liveblock.svg",
      },
    ],
  },
  // {
  //   title: "CarePulse - Health Management System",
  //   desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
  //   subdesc:
  //     "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
  //   href: "https://www.youtube.com/watch?v=lEflo_sc82g",
  //   texture: "/textures/project/project3.mp4",
  //   logo: "/assets/project-logo3.png",
  //   logoStyle: {
  //     backgroundColor: "#60f5a1",
  //     background:
  //       "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
  //     border: "0.2px solid rgba(208, 213, 221, 1)",
  //     boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
  //   },
  //   spotlight: "/assets/spotlight3.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
  // {
  //   title: "Horizon - Online Banking Platform",
  //   desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
  //   subdesc:
  //     "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
  //   href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
  //   texture: "/textures/project/project4.mp4",
  //   logo: "/assets/project-logo4.png",
  //   logoStyle: {
  //     backgroundColor: "#0E1F38",
  //     border: "0.2px solid #0E2D58",
  //     boxShadow: "0px 0px 60px 0px #2F67B64D",
  //   },
  //   spotlight: "/assets/spotlight4.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
  {
    title: "BreezyBnB - Seamless Property Rentals at Your Fingertips",
    desc: "BreezyBnB is a property rental platform designed for both hosts and guests, offering a seamless and intuitive booking experience. Built with EJS, Node.js, and MongoDB, it enables users to explore, book, and list accommodations efficiently. The platform's features include a user-friendly interface, dynamic filters, and secure authentication.",
    subdesc:
      "Although payment gateway integration is yet to be added, BreezyBnB sets the foundation for a robust, scalable solution for property rentals.",
    href: "https://breeezybnb.onrender.com/listings",
    texture: "/textures/project/breeezy.mp4",
    logo: "/assets/bb.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/html.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "assets/js.svg",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/express.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/mongo.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.082,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.3, -6.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [10, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [13, 4, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-26, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-15, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Research Intern",
    pos: "Nano Materials Research Lab, Chitkara University",
    duration: "2023 - Present",
    title:
      "Conducting research on SnO₂ nanoparticles, with a published paper on morphological analysis, and contributing to interdisciplinary projects involving image processing and material science.",
    icon: "/assets/3.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "BE-(CSE)",
    pos: "Chitkara University, Rajpura, Punjab",
    duration: "2022 - Present",
    title:
      "Currently pursuing a B.E. in CSE at Chitkara University, specializing in Machine Learning and Web Development, and actively involved in research and technical projects.",
    icon: "/assets/chitkara.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Higher Secondary Education",
    pos: "KL Arya DAV Public School",
    duration: "2020 - 2022",
    title:
      "Completed 10ᵗʰ to 12ᵗʰ grade at KL Arya DAV Public School, excelling in Science and Mathematics, with notable achievements in academics and extracurricular activities.",
    icon: "/assets/1.svg",
    animation: "salute",
  },
];
