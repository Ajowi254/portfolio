/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Beryl's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Beryl Irene Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Beryl Irene",
  logo_name: "BerylIrene",
  nickname: "Bera",
  subTitle:
    " I’m Beryl, a passionate full-stack developer skilled in leveraging IT innovation for business process re-engineering. I utilize open-source tools like React, Ruby on Rails, and RESTful APIs to enhance operations and user experience. My toolkit includes Git, GitHub, HTML, CSS, Bootstrap, JavaScript, and AngularJS. I also have knowledge of Google Cloud Services, webhooks, and Firebase. Always ready for new challenges and risk management. Feel free to reach out for further queries and consultations. ",
  resumeLink:
    "https://drive.google.com/file/d/1bshwqARxAKfR4pd2b6Kr2jeAYYq6QH-7/view",
  portfolio_repository: "https://github.com/Ajowi254",
  githubProfile: "https://github.com/Ajowi254",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Ajowi254",
  // linkedin: "https://www.linkedin.com/in/beryl-irene-a78b23177",
  // gmail: "ajowi.beryl@gmail.com",
  // instagram: "https://www.instagram.com/ajowi?igsh=MXdjdTIyajd0eWJ2cQ%3D%3D&utm_source=qr"

  {
    name: "Github",
    link: "https://github.com/Ajowi254",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/beryl-irene-a78b23177",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ajowi.beryl@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link:
      "https://www.instagram.com/ajowi?igsh=MXdjdTIyajd0eWJ2cQ%3D%3D&utm_source=qr",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter and React Native ",
        "⚡ Creating application backend in Node, Python, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Proficient in using Firebase for managing user authentication and storing and syncing data in real-time",
        "⚡ Skilled in real-time data streaming jobs from databases to servers on Google Cloud Platform (GCP).",
        "⚡ Experienced with webhooks for triggering custom callbacks for real-time data updates.",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jomo Kenyatta University of Agriculture and Technology",
      subtitle: "B.Science in Innovation Technology Management",
      logo_path: "JKUAT-tender-2021-modified.png",
      alt_name: "IIITDM Kurnool",
      duration: "2017 - 2022",
      descriptions: [
        "⚡ Innovation Technology & Management: Studied the integration of innovative technologies into business processes and strategic planning for technology development.",
        "⚡ Business Process Re-engineering & Project Management: Learned how to analyze and redesign business processes for improved efficiency and quality, and how to manage projects effectively.",
        "⚡ Human Resource Management & Industrial Psychology: Studied strategies for effectively managing an organization’s most valuable assets - its people, and explored the psychological principles in the workplace.",
        "⚡ Regulations and Rules: Learned about the legal and regulatory environment that businesses operate in, and how to ensure business operations adhere to all relevant laws and standards.",
        "⚡ Intellectual Property Rights: Gained insights into the process of obtaining patents to protect inventions and intellectual property, and learned about the legal rights that creators have over their literary and artistic works.",
      ],
      website_link: "https://www.jkuat.ac.ke/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Software Engineering",
      subtitle: "Moringa School",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1scpK20VXMrS6gHYii2oayzeCmbNkra3p/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Artificial Intelligence for Practioners",
      subtitle: "Safaricom-Percipio",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Kk9roXFtGg3rD7AJwzo2De5SvI40Q99p/view",
      alt_name: "Safaricom",
      color_code: "#0C9D5899",
    },
    {
      title: "Robotic Process Automation",
      subtitle: "Safaricom-Percipio",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1OkfZOGINhrUsmOSwLozIVtJy9FqsT0-b/view",
      alt_name: "Safaricom",
      color_code: "#0C9D5899",
    },
    {
      title: "Java Programming",
      subtitle: "Safaricom-Percipio",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1xLh2TG7QHsVcTqyB1Zjzq5_-6Qmkyg_a/view",
      alt_name: "Safaricom",
      color_code: "#0C9D5899",
    },
    {
      title: "IT Security",
      subtitle: "Google Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/J7JXLDF6PM9L?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Operating Systems",
      subtitle: "Google Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/JZGAYXHXSGPL?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "System Administration & IT infrastructure",
      subtitle: "Google Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/R34CLSUSWCEU?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Technical Support Fundamentals",
      subtitle: "Google Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YZKUPMC8MEDQ?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Bits & bytes of computer networking",
      subtitle: "Google Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/E4XV6HX2WMBZ?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and  Internship",
  description:
    "I’ve been actively engaged in various roles across the tech industry, contributing to both startups and established companies. My experience spans from being in Software Developer to  IT support, with a focus on leveraging innovative technologies to drive business growth and process re-engineering.",
  header_image_path: "",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "IT Support Engineer",
          company: "Safaricom (TBM)",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "AUGUST 2024 - CURRENT",
          location: "Nairobi, Kenya",
          description:
            "As an IT Support Engineer , I provide critical technical support to Safaricom staff nationwide, ensuring their systems operated smoothly and efficiently. I am responsible for monitoring system performance, performing preventive maintenance, and troubleshooting complex issues to minimize downtime.",
          color: "#fc1f20",
        },
        {
          title: "Full Stack Developer",
          company: "EngSoft Valley solutions limited",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "legato_logo.png",
          duration: "July 2021 - July 2024",
          location: "Nairobi, Kenya",
          description:
            " With my experience here, I’ve had the opportunity to work on a variety of projects, consistently expanding my knowledge and skills in different areas of software and mobile development. This includes working on projects like the NextGen Food Court, a customizable software developer portfolio, the UTIBU-HEALTH-MOBILE-APP, and LBYM(a budget app).Throughout these experiences, I’ve been able to not only develop technical solutions but also understand the business implications of these solutions.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Developer intern",
          company: "Fountain Credit Services Limited",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "legato_logo.png",
          duration: "Feb 2020 - April 2021",
          location: "Nairobi, Kenya",
          description:
            "As a Developer Intern at Fountain Credit Services Limited from February 2020 to April 2021, I had the opportunity to immerse myself in the financial services industry and implement my technical skills. During this period, I was exposed to the knowledge of deployment and testing of sacco softwares necessary in credit management.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I have worked on a couple of projects individually and as a team to  create web & mobile applications projects and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh2.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with  React, Android, Cloud and Opensource Development.",
  },
  blogSection: {},
  addressSection: {
    title: "Address",
    country: "Kenya",
    region: "Nairobi",
    postalCode: "30238",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Nairobi/@-1.3032035,36.6822333,11z/data=!3m1!4b1!4m6!3m5!1s0x182f1172d84d49a7:0xf7cf0254b297924c!8m2!3d-1.2920659!4d36.8219462!16zL20vMDVkNDk?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
