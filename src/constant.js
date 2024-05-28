import brain1 from "./assets/images/brains/brain1.jpeg";
import brain2 from "./assets/images/brains/brain2.jpg";
import brain3 from "./assets/images/brains/brain3.jpeg";
import brain4 from "./assets/images/brains/brain4.png";
import brain5 from "./assets/images/brains/brain5.jpeg";
import brain6 from "./assets/images/brains/brain6.jpeg";
import brain7 from "./assets/images/brains/brain7.jpeg";
import brain8 from "./assets/images/brains/brain8.jpeg";
import brain9 from "./assets/images/brains/brain9.jpeg";
import brain10 from "./assets/images/brains/brain10.jpeg";
import avatar from "./assets/images/brains/avatar9.jpg";

import logo1 from "./assets/Logo.png";
import logo2 from "./assets/happiedinner.jpg";
import logo3 from "./assets/logoPII.png";


export const routes = [
  // {
  //   name: "Who we are",
  //   link: "/",
  //   subRoutes: [
  //     {
  //       name: "Our Story",
  //       link: "/dev-Ops",
  //     },
  //     {
  //       name: "FAQ's",
  //       link: "/service/serverless-computing",
  //     },
  //     {
  //       name: "Connect With Us",
  //       link: "/service/mobile-app-development",
  //     },
  //     {
  //       name: "Plugin Development",
  //       link: "/service/plugin-development",
  //     },
  //     {
  //       name: "Software Application Development",
  //       link: "/service/software-application-development",
  //     },
  //     {
  //       name: "Cloud Migration",
  //       link: "/service/cloud-migration",
  //     },
  //   ],
  // },
  {
    id: 1,
    name: "What we do",
    link: "/services",

    subRoutes: [
      {
        id: 1,
        titel: "Services",
        link1:"Serverless Computing",
        url1:'/service/Serverless Computing',
        link2:"DevOps",
        url2:'/service/DevOps',
        link3:"Mobile App Development",
        url3:'/service/mobile-app-development',
        link4:"Plugin Development",
        url4:'/service/plugin-development',
        link5:"Software Application Development",
        url5:'/service/software-application-development',
        link6:"Cloud Migration",
        url6:'/service/cloud-migration'
        
      
      },
      {
        id: 2,

        titel: "Industry",
         link1:"Heavy Construction Companies,",
        // url1:'/service/cloud-migration',
        link2:"Power Transmission & Distribution,",
        // url2:'/service/cloud-migration',
        link3:"Financial institutions",

        // url3:'/service/mobile-app-development',
        link4:"AWS enterprises (CSPM tool – ClouSec)",
        // url4:'/service/cloud-migration',
        link5:"Digital Solutions for all enterprises",

        // url5:'/service/mobile-app-development',
        // link4:"Plugin Development",
        // url4:'/service/plugin-development',
        // link5:"Software Application Development",
        // url5:'/service/software-application-development',
        // link6:"Cloud Migration",
        // url6:'/service/cloud-migration'


        // link: "/service/serverless-computing",
      },
      // {
      //   id: 3,

      //   titel: "Region",

      //   link1:"India",
      //  url1:'/service/cloud-migration',
      //  link2:"Canada",
      //  url2:'/service/cloud-migration',
      // //  link3:"Singapore",
      // //  url3:'/service/mobile-app-development',
      // },
    
    ],
  },
  {
    id: 2,
    name: "Our Products",
    link: "/products",
    subRoutes: [
      {
        title: "ClouSec",
        des: "ClouSec is a intelligent CSPM tool addressing regulatory compliance, data risks, infrastructure gap in the security policy with comprehensive account view, saving cost on the workloads and solutions to known configuration issues. ",
        link: "https://clousec.io/",
        img: logo1,
      },
      {
        title: "Happiedinner",
        des: "Happiediner is a complete digital solution for the restaurants involving super admin, restaurant owner, customers and kitchen modules with unique feature like last minute deal, data driven recommendation system, digitalized kitchen process and food order tracking.",
        link: "https://clousec.io/",
        img: logo2,
      },
      {
        title: "PII Protector",
        des: "PII Protector is a 1st AI based plugin to monitor sensitive PII (personally identifiable information like credit card numbers, passwords, country code, AWS / Google secret keys, email address, JWT tokens etc.)",
        link: "https://clousec.io/",
        img: logo3,
      },
    ],
  },
  {
    id: 3,

    name: "Company",
    // link: "/about",
    subRoutes: [
      {
        id: 1,
        titel: "Company",
        link1:"About US",
        url1:'/about-us',
        link2:"Contact US",
        url2:'/service/DevOps',
        link3:"Careers",
        url3:'/service/mobile-app-development',

       
        // link4:"Plugin Development",
        // url4:'/service/plugin-development',
        // link5:"Software Application Development",
        // url5:'/service/software-application-development',
        // link6:"Cloud Migration",
        // url6:'/service/cloud-migration'
        
        // subRoutes: [
        //   {
        //     name: "manii",
        //     link: "/dev-Ops",
        //   },
        //   {
        //     name: "manii",
        //     link: "/dev-Ops",
        //   },  {
        //     name: "manii",
        //     link: "/dev-Ops",
        //   },
        // ],
      },
      // {
      //   id: 2,

      //   titel: "Industry",
      //    link1:"E-commers",
      //   url1:'/service/cloud-migration',
      //   link2:"E_learning",
      //   url2:'/service/cloud-migration',
      //   link3:"B2B Sass",

      //   url3:'/service/mobile-app-development',
      //   // link4:"Plugin Development",
      //   // url4:'/service/plugin-development',
      //   // link5:"Software Application Development",
      //   // url5:'/service/software-application-development',
      //   // link6:"Cloud Migration",
      //   // url6:'/service/cloud-migration'


      //   // link: "/service/serverless-computing",
      // },
      // {
      //   id: 3,

      //   titel: "Region",

      //   link1:"Eroupe",
      //  url1:'/service/cloud-migration',
      //  link2:"USA",
      //  url2:'/service/cloud-migration',
      //  link3:"Singapore",
      //  url3:'/service/mobile-app-development',
      // },
    
    ],
    
    // subRoutes: [
    //   {
    //     name: "Dev Ops",
    //     link: "/dev-Ops",
    //   },
    //   {
    //     name: "Serverless Computing",
    //     link: "/service/serverless-computing",
    //   },
    // ],
  },

  {
    id: 4,
    name: "Insights",
    link: "/blog",
    subRoutes: [
      // {
      //   id: 3,
      //   titel: "Insights",
      //   link1:"Serverless Computing",
      //   url1:'/service/Serverless Computing',
      //   link2:"DevOps",
      //   url2:'/service/DevOps',
      //   link3:"Mobile App Development",
      //   url3:'/service/mobile-app-development',
      //   link4:"Plugin Development",
      //   url4:'/service/plugin-development',
      //   link5:"Software Application Development",
      //   url5:'/service/software-application-development',
      //   link6:"Cloud Migration",
      //   url6:'/service/cloud-migration'
        
      
      // },
      {
        id: 2,

              titel: "Insights",
         link1:"Blog",
        url1:'/service/cloud-migration',
        link2:"Youtube",
        url2:'/service/cloud-migration',
        link3:"News",

        url3:'/service/mobile-app-development',
        // link4:"Plugin Development",
        // url4:'/service/plugin-development',
        // link5:"Software Application Development",
        // url5:'/service/software-application-development',
        // link6:"Cloud Migration",
        // url6:'/service/cloud-migration'


        // link: "/service/serverless-computing",
      },
      // {
      //   id: 3,

      //   titel: "Region",

      //   link1:"Eroupe",
      //  url1:'/service/cloud-migration',
      //  link2:"USA",
      //  url2:'/service/cloud-migration',
      //  link3:"Singapore",
      //  url3:'/service/mobile-app-development',
      // },
    
    ],
  },

  {
    id: 5,

    name: "Contact Us",
    link: "/contact",
  },
];

export const ourBrains = [
  {
    id: 1,
    name: "Jerome Melkisidak B.E, M.B.A",
    position: "Director",
    img: brain1,

    skills: [
      {
        skill: "Scrum master",
        precentage: 70,
      },
      {
        skill: "Manual testing",
        precentage: 50,
      },
      {
        skill: "Client Acquisition",
        precentage: 70,
      },
      {
        skill: "Business Development",
        precentage: 60,
      },
    ],
  },
  {
    id: 2,
    name: "Arun Deivendran",
    position: "Co-Founder",
    img: brain2,

    skills: [
      {
        skill: "Business Development",
        precentage: 80,
      },
    ],
  },
  {
    id: 3,
    name: "Maria Lourdu Diana",
    position: "Human Resource Head &Social Media Analyst",
    img: brain3,

    skills: [
      {
        skill: "Social media listening",
        precentage: 70,
      },
      {
        skill: "Social media analytics",
        precentage: 70,
      },
      // {
      //   skill: "Engagement analysis",
      //   precentage: 70,
      // },
      {
        skill: "Trend analysis",
        precentage: 90,
      },
      {
        skill: "Content creation",
        precentage: 70,
      },
      {
        skill: "Social media management",
        precentage: 90,
      },
    ],
  },
  {
    id: 4,
    name: "Lawrence",
    position: "BUSINESS DEVELOPMENT HEAD-ZIMBABWE",
    img: brain4,

    skills: [
      {
        skill: "Business Development",
        precentage: 80,
      },
    ],
  },
  {
    id: 5,
    name: "Praveen K",
    position: "Senior Full Stack Developer",
    img: brain5,

    skills: [
      {
        skill: "React",
        precentage: 70,
      },
      {
        skill: "React Native",
        precentage: 50,
      },
      {
        skill: "MongoDB",
        precentage: 70,
      },
      {
        skill: "MySQL",
        precentage: 90,
      },
      {
        skill: "Javascript",
        precentage: 60,
      },
      {
        skill: "Java",
        precentage: 80,
      },
    ],
  },
  {
    id: 6,
    name: "Naveen",
    position: "Full Stack Developer",
    img: brain6,

    skills: [
      {
        skill: "React",
        precentage: 90,
      },
      {
        skill: "React Native",
        precentage: 70,
      },

      {
        skill: "AWS(amplify,lambda)",
        precentage: 70,
      },
      {
        skill: "Javascript",
        precentage: 60,
      },
      {
        skill: "Java",
        precentage: 80,
      },
    ],
  },
  {
    id: 7,
    name: "Moorthy",
    position: "Senior Java Developer",
    img: brain7,

    skills: [
      {
        skill: "Java",
        precentage: 90,
      },
      {
        skill: "JavaScript",
        precentage: 60,
      },
    ],
  },
  {
    id: 8,
    name: "Suresh",
    position: "Full Stack Developer",
    img: brain8,

    skills: [
      {
        skill: "React",
        precentage: 90,
      },
      {
        skill: "JavaScript",
        precentage: 60,
      },
      {
        skill: "Python",
        precentage: 90,
      },
      {
        skill: "AWS",
        precentage: 60,
      },
    ],
  },
  {
    id: 9,
    name: "A. Backia Ananthi",
    position: "Juinor Backend Developer",
    img: brain9,

    skills: [
      {
        skill: "JavaScript",
        precentage: 60,
      },
      {
        skill: "Asp.net",
        precentage: 90,
      },
      {
        skill: ".Net core",
        precentage: 60,
      },
    ],
  },
  {
    id: 10,
    name: "Pandi",
    position: "Full Stack Developer",
    img: brain10,

    skills: [
      {
        skill: "Java",
        precentage: 100,
      },
      {
        skill: "JavaScript",
        precentage: 90,
      },
      {
        skill: "SQL",
        precentage: 70,
      },
    ],
  },
];
