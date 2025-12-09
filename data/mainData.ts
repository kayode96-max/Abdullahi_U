export interface Project {
  type: 'work' | 'self' | 'opensource'
  title: string
  description?: string
  imgSrc: string
  url?: string
  repo?: string
  builtWith: string[]
  hidden?: boolean

}

export interface Company {
  name: string
  location?: string
  imgSrc?: string
  startDate?: string
  endDate?: string
  url?: string
  active?: boolean
  hidden?: boolean
  description?: string
  descCard?: string
  items: Experience[]

}

export interface TechStackType {
  name: string
  href?: string

}
export interface Experience {
  title: string
  roleType: 'Fulltime' | 'Part-time' | 'Consultant' | 'Freelance' | 'Intern'
  startDate: string
  endDate?: string
  description: string
  active?: boolean
  techStack?: TechStackType[]
  hidden?: boolean
}

export interface Skill {
  name: string
  id: string
  category: "Languages" | "Web Dev" | "AI & Data Science" | "DevOps & Tools" 
  field?: string
  subfield?: string
  description?: string
  imgSrc?: string
  level: 'advanced' | 'familiar' | 'learning'
  hidden?: boolean
  href?: string
  mostUsed?: boolean
}

export let projectsData: Project[] = [

  {
    type: 'self',
    title: 'Personal website',
    imgSrc: '/static/images/projects/personal.png',
    repo: 'Abdullahi_U',
    url: 'https://abdullahiusman.tech',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Shadcn UI', 'Framer', 'Prisma', 'NextAuth', 'Mongodb', 'Umami'],
  },
  {
    type: 'self',
    title: 'Signature Pen',
    imgSrc: '/static/images/projects/signpen.png',
    description: "Signpen is a digital graduation sign-out platform that lets final-year students collect signatures, messages, and well-wishes from anyone—whether they’re physically present or far away. Friends and family can sign creatively using handwriting, text, or doodles on a shared interactive canvas.",
    repo: 'studio_signout',
    url: 'https://signpen.vercel.app/',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Shadcn UI', 'Firebase', 'Firestore', 'Genkit', 'Vercel'],
  },
  {
    type: 'opensource',
    title: 'FreeLance Website',
    imgSrc: '/static/images/projects/freelance.png',
    builtWith: ['TypeScript', 'CSS', 'Html', 'Next.js', 'Mongodb', 'TailwindCSS', 'Bun', 'Clerk', 'Socket.io' ],
    description: "A modern freelance marketplace connecting clients with skilled freelancers, featuring secure job postings, chat, reporting, and seamless project management.",
    repo: 'freelance-web',
    url:'https://freelance-web-blue.vercel.app/'
  },
  {
    type: 'opensource',
    title: 'Recruiter Website',
    imgSrc: '/static/images/projects/smoothhire.png',
    builtWith: ['TypeScript', 'CSS', 'Html', 'Next.js', 'Mongodb', 'TailwindCSS', 'Github', 'ESLint', 'MongoDB', 'JavaScript', 'React', 'LeetCode', 'Shadcn UI' ],
    description: "SmoothHire is a SaaS job application platform that simplifies the hiring process. Offer a seamless experience to applicants and streamline recruitment for companies, eliminating the complexities of traditional portals.",
    repo: 'smooth-hire',
    url:'https://smooth-hire.vercel.app/'
  },
{
    type: 'opensource',
    title: 'Developer Profile',
    imgSrc: '/static/images/projects/skillsync.png',
    builtWith: ['TypeScript', 'CSS', 'Html', 'Next.js', 'Mongodb', 'TailwindCSS', 'Bun', 'Clerk', 'Socket.io' ],
    description: "SkillSync is a project that helps developers create stunning profiles by seamlessly fetching data from GitHub and LeetCode. With customizable features like profile images, banners, skill visualizations, and social links, Skillsync empowers you to showcase your expertise effortlessly. Built with Next.js 14, MongoDB, and more.",
    repo: 'SkillSync',
    url:'https://profile-sable-nu.vercel.app/'
  },
  {
    type: 'self',
    title: 'Agricultural Enhancement',
    imgSrc: '/static/images/projects/agropal.png',
    builtWith: ['TypeScript', 'Tailwind', 'React', 'Next.js', 'Firebase', 'Google Genkit', 'Radix UI', 'Vercel' ],
    description: "Agropal is a comprehensive digital platform designed to transform agricultural practices across Nigeria through the power of artificial intelligence. Built with modern web technologies and multilingual support, it bridges the gap between traditional farming and digital innovation.",
    repo: 'agropal_3mtt',
    url:'https://agropalai.vercel.app/'
  },
  {
    type: 'self',
    title: 'National Department Website Draft',
    imgSrc: '/static/images/projects/nammesng.png',
    builtWith: ['TypeScript', 'Tailwind', 'React', 'Next.js', 'Firebase', 'Google Genkit', 'Radix UI', 'Vercel' ],
    description: "NAMMES Portal is a modern membership and community platform for the Nigerian Association of Materials and Metallurgical Engineering Students. It features a public landing page showcasing membership benefits, a secure member-only dashboard with news/resources/networking sections, and membership registration capabilities",
    repo: 'nammesng-draft',
    url:'https://nammesng-draft-theta.vercel.app/'
  }
  
];

export let experienceData: Company[] = [
  // {
  //   name: 'Valsoft - Aspire',
  //   location: 'Remote - Canada',
  //   description: 'Aspire Software is a division of Valsoft that focuses on acquiring, managing, and building vertical market software businesses.',
  //   imgSrc: 'https://www.valsoftcorp.com/wp-content/uploads/2017/10/valsoft-logo.svg',
  //   url: 'https://www.valsoftcorp.com/',
  //   active: true,
  //   items: [
  //     {
  //       title: 'Software Developer - DockMaster',
  //       roleType: 'Fulltime',
  //       startDate: '2024/04/15',
  //       description: 'Implemented new features and fixed bugs, ensuring the continuous improvement and reliability of the software. Maintained server configurations, ensuring optimal performance and availability. Attended product meetings to ideate and discuss feature enhancements, contributing to the strategic growth and development of the software. Collaborated closely with cross-functional teams to ensure the alignment of development efforts with business goals and user needs. Developing prototypes for AI features to be integrated within the software.',
  //       techStack: [
  //         { name: 'Django', href: 'https://www.djangoproject.com/' },
  //         { name: 'Python', href: 'https://www.python.org/' },
  //         { name: 'AWS', href: 'https://aws.amazon.com/' },
  //         { name: 'Redis', href: 'https://redis.io/' },
  //         { name: 'Datadog', href: 'https://www.datadoghq.com/' },
  //         { name: 'GitHub', href: 'https://github.com/' },
  //         // { name: 'OpenSearch', href: 'https://opensearch.org/' },
  //         { name: 'Bash', href: 'https://www.gnu.org/software/bash/' },
  //         { name: 'Postgres', href: 'https://www.postgresql.org/' },
  //         // { name: 'DjangoRQ', href: 'https://github.com/rq/django-rq' },
  //         { name: 'NGINX', href: 'https://www.nginx.com/' },
  //         { name: 'Locust', href: 'https://locust.io/' },
  //       ],
  //       active: true,
  //     },
  //     {
  //       title: 'AI Backend Developer - Hospitality Portfolio',
  //       roleType: 'Fulltime',
  //       startDate: '2023/10/15',
  //       endDate: '2024/04/15',
  //       description: 'Developed prototypes for AI features tailored to the hospitality department, enhancing support and operational efficiency. Created a RAG documentation chat for the support team, streamlining access to information and reducing response times. Implemented automated ticket first replies with suggested solutions, improving customer service efficiency and response accuracy. Designed AI-driven BI solutions to generate insights from databases and software APIs, facilitating data-driven decision-making. Developed tools for summarization and classification of backlog tickets, assisting the product team in prioritizing and addressing issues effectively.',
  //       techStack: [
  //         { name: 'FastAPI', href: 'https://fastapi.tiangolo.com/' },
  //         { name: 'OpenAI', href: 'https://openai.com/' },
  //         { name: 'Pinecone', href: 'https://www.pinecone.io/' },
  //         // { name: 'Serverless Functions', href: 'https://vercel.com/docs/serverless-functions' },
  //         { name: 'Docker', href: 'https://www.docker.com/' },
  //         { name: 'Langchain', href: 'https://www.langchain.com/' },
  //         { name: 'Pandas', href: 'https://pandas.pydata.org/' },
  //         { name: 'Scikitlearn', href: 'https://scikit-learn.org/' },
  //         { name: 'Nextjs', href: 'https://nextjs.org/' },
  //         { name: 'Gradio', href: 'https://gradio.app/' },
  //         { name: 'Postgres', href: 'https://www.postgresql.org/' },
  //       ],
  //     },
  //     {
  //       title: 'API Implementation Engineer - InnQuest',
  //       roleType: 'Fulltime',
  //       startDate: '2022/10/24',
  //       endDate: '2023/10/15',
  //       description: 'Created, configured, tested, and deployed Agora API integration functionalities, ensuring seamless connectivity and optimal performance. Coordinated the implementation of third-party systems connections with active system monitoring, ensuring reliable and efficient integrations. Developed multiple automation tools to facilitate the search and investigation of issues, significantly improving the efficiency of the troubleshooting process.',
  //       techStack: [
  //         { name: 'Postman', href: 'https://www.postman.com/' },
  //         { name: 'Testrail', href: 'https://www.gurock.com/testrail' },
  //         { name: 'Selenium', href: 'https://www.selenium.dev/' },
  //         { name: 'Python', href: 'https://www.python.org/' },
  //         // { name: 'APIs', href: '#' },
  //         { name: 'Pandas', href: 'https://pandas.pydata.org/' },
  //       ],
  //     },
  //   ],
  // },
  {
    name: 'Cademit',
    location: 'Minna - Nigeria',
    description: 'Cademit is a company dedicated to building the home and frontiers of STEM Innovations and advancement through education capacity building and products development. Currently serves as Digital Skills Career-Track Mentorship provider',
    imgSrc: 'https://media.licdn.com/dms/image/v2/C560BAQEnB9yXvj3OOA/company-logo_200_200/company-logo_200_200/0/1647344284429/cademit_logo?e=1766620800&v=beta&t=u4Cybic_MmXfV5gu6rh8-QQqYkNZdRAdFZeMrUYRoZ0',
    url: 'https://www.linkedin.com/company/cademit',
    active: false,
    items: [
      {
        title: 'Frontend Development Intern',
        roleType: 'Intern',
        startDate: '2023/10/01',
        endDate: '2024/01/01',
        description: 'Building responsive interfaces, improving UI/UX, and strengthening my knowledge of modern web technologies. Worked with senior developers to implement features, fix bugs, and learn best practices in React, component design, and clean code.',
        techStack: [
          { name: 'HTML', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
          { name: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
          { name: 'Javascript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
          { name: 'React', href: 'https://reactjs.org/' },
          { name: 'Tailwind', href: 'https://tailwindcss.com/' },
          { name: 'Typescript', href: 'https://www.typescriptlang.org/' },
          { name: 'Node.js', href: 'https://nodejs.org/' },
          { name: 'GitHub', href: 'https://github.com/' },
        ],
        active: false,
      },
    ],
  },
];


export let skillsData: Skill[] = [
  {
    name: 'Javascript',
    id: 'javascript',
    category: 'Languages',
    level: 'advanced',
  },
  {
    name: 'Typescript',
    id: 'typescript',
    category: 'Languages',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'React',
    id: 'react',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'advanced',
  },
  {
    name: 'Next.js',
    id: 'nextjs',
    category: 'Web Dev',
    field: 'Fullstack',
    subfield: 'Frameworks',
    level: 'advanced',
    mostUsed: true,

  },
  {
    name: 'Tailwind',
    id: 'tailwind',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'advanced',
    mostUsed: true,

  },
  // {
  //   name: 'Fiber',
  //   id: 'fiber',
  //   category: 'Web Dev',
  //   field: 'Backend',
  //   level: 'learning',
  // },
  {
    name: 'ShadCN',
    id: 'shadcn',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'advanced',
  },
  {
    name: 'CSS',
    id: 'css',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'advanced',
  },
  // {
  //   name: 'Prisma',
  //   id: 'prisma',
  //   category: 'Web Dev',
  //   field: 'Backend',
  //   subfield: 'ORM',
  //   level: 'advanced',
  // },
  // {
  //   name: 'OpenAI',
  //   id: 'openai',
  //   category: 'AI & Data Science',
  //   field: 'AI',
  //   description: 'GPTs, Whisper',
  //   level: 'familiar',
  //   mostUsed: true,

  // },
  // {
  //   name: 'LangChain',
  //   id: 'langchain',
  //   category: 'AI & Data Science',
  //   field: 'AI',
  //   subfield: 'Frameworks',
  //   level: 'familiar',
  //   mostUsed: true,

  // },
  {
    name: 'Python',
    id: 'python',
    category: 'Languages',
    level: 'familiar',
    mostUsed: true,

  },
  // {
  //   name: 'C Lang',
  //   id: 'clang',
  //   category: 'Languages',
  //   level: 'familiar',
  // },
  {
    name: 'Node.js',
    id: 'nodejs',
    category: 'Web Dev',
    field: 'Backend',
    level: 'familiar',
  },
  {
    name: 'Fast API',
    id: 'fastapi',
    category: 'Web Dev',
    field: 'Backend',
    level: 'familiar',
    

  },
  // {
  //   name: 'Django',
  //   id: 'django',
  //   category: 'Web Dev',
  //   field: 'Backend',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Flask',
  //   id: 'flask',
  //   category: 'Web Dev',
  //   field: 'Backend',
  //   level: 'advanced',
  // },
  {
    name: 'Docker',
    id: 'docker',
    category: 'DevOps & Tools',
    field: 'Containers',
    level: 'familiar',
  

  },
  {
    name: 'AWS',
    id: 'aws',
    category: 'DevOps & Tools',
    field: 'Cloud Providers',
    level: 'familiar',
  },
  {
    name: 'Azure',
    id: 'azure',
    category: 'DevOps & Tools',
    field: 'Cloud Providers',
    level: 'familiar',
  },
  {
    name: 'Git',
    id: 'git',
    category: 'DevOps & Tools',
    field: 'Source Control',
    level: 'advanced',
  },
  {
    name: 'Github',
    id: 'github',
    category: 'DevOps & Tools',
    field: 'Source Control',
    level: 'advanced',
  },
  // {
  //   name: 'Azure DevOps',
  //   id: 'azuredevops',
  //   category: 'DevOps & Tools',
  //   field: 'Source Control',
  //   level: 'advanced',
  // },
  {
    name: 'Bash',
    id: 'bash',
    category: 'DevOps & Tools',
    field: 'Shell',
    level: 'familiar',
  },
  {
    name: 'Powershell',
    id: 'powershell',
    category: 'DevOps & Tools',
    field: 'Shell',
    level: 'advanced',
  },
  // {
  //   name: 'Linux',
  //   id: 'linux',
  //   category: 'DevOps & Tools',
  //   field: 'OS',
  //   level: 'advanced',
  // },
  {
    name: 'SQL',
    id: 'sql',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'familiar',
    
  },
  // {
  //   name: 'NoSQL',
  //   id: 'nosql',
  //   category: 'Web Dev',
  //   field: 'Backend',
  //   subfield: 'Databases',
  //   level: 'advanced',
  //   hidden: true,

  // },
  {
    name: 'MongoDB',
    id: 'mongodb',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'familiar',
  },
  {
    name: 'PostgreSQL',
    id: 'postgres',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'learning',

  },
  {
    name: 'MySQL',
    id: 'mysql',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'familiar',
  },
  // {
  //   name: 'Redis',
  //   id: 'redis',
  //   category: 'Web Dev',
  //   field: 'Backend',
  //   subfield: 'Databases',
  //   level: 'advanced',
  //   mostUsed: true,

  // },
  {
    name: 'Bootstrap',
    id: 'bootstrap',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'familiar',
  },
  // {
  //   name: 'Pandas',
  //   id: 'pandas',
  //   category: 'AI & Data Science',
  //   field: 'Data Science',
  //   subfield: 'Analytics',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Numpy',
  //   id: 'numpy',
  //   category: 'AI & Data Science',
  //   field: 'Data Science',
  //   subfield: 'Analytics',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Anaconda',
  //   id: 'anaconda',
  //   category: 'AI & Data Science',
  //   field: 'Data Science',
  //   subfield: 'Tools',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Jupyter',
  //   id: 'jupyter',
  //   category: 'AI & Data Science',
  //   field: 'Data Science',
  //   subfield: 'Tools',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Matplotlib',
  //   id: 'matplotlib',
  //   category: 'AI & Data Science',
  //   field: 'Data Science',
  //   subfield: 'Visualization',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Plotly',
  //   id: 'plotly',
  //   category: 'AI & Data Science',
  //   field: 'Data Science',
  //   subfield: 'Visualization',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Seaborn',
  //   id: 'seaborn',
  //   category: 'AI & Data Science',
  //   field: 'Data Science',
  //   subfield: 'Visualization',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Scikit-learn',
  //   id: 'scikitlearn',
  //   category: 'AI & Data Science',
  //   field: 'Data Science',
  //   subfield: 'ML',
  //   level: 'advanced',
  // },
  {
    name: 'Postman',
    id: 'postman',
    category: 'DevOps & Tools',
    field: 'Tools',
    level: 'advanced',
  },
  // {
  //   name: 'DataDog',
  //   id: 'datadog',
  //   category: 'DevOps & Tools',
  //   field: 'Analytics',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Umami',
  //   id: 'umami',
  //   category: 'DevOps & Tools',
  //   field: 'Analytics',
  //   level: 'advanced',
  // },
  // {
  //   name: 'PowerBI',
  //   id: 'powerbi',
  //   category: 'AI & Data Science',
  //   field: 'Data Science',
  //   subfield: 'Visualization',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Celery',
  //   id: 'celery',
  //   category: 'Web Dev',
  //   field: 'Backend',
  //   level: 'advanced',
  // },
  // {
  //   name: 'NGINX',
  //   id: 'nginx',
  //   category: 'Web Dev',
  //   field: 'Backend',
  //   level: 'advanced',
  // },
  {
    name: 'Vercel',
    id: 'vercel',
    category: 'DevOps & Tools',
    field: 'Cloud Providers',
    level: 'advanced',
  },
  // {
  //   name: 'VLLM',
  //   id: 'vllm',
  //   category: 'AI & Data Science',
  //   field: 'AI',
  //   subfield: 'Frameworks',
  //   level: 'advanced',
  // },
  // {
  //   name: 'OpenSource LLMs, Mistral, LLAMA, Vicuna',
  //   id: 'mistral',
  //   category: 'AI & Data Science',
  //   field: 'AI',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Streamlit',
  //   id: 'streamlit',
  //   category: 'AI & Data Science',
  //   field: 'Prototyping',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Gradio',
  //   id: 'gradio',
  //   category: 'AI & Data Science',
  //   field: 'Prototyping',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Huggingface',
  //   id: 'huggingface',
  //   category: 'AI & Data Science',
  //   field: 'AI',
  //   level: 'advanced',
  // },
  // {
  //   name: 'GoLang',
  //   id: 'golang',
  //   category: 'Languages',
  //   level: 'learning',
  // },
  // {
  //   name: 'Jira',
  //   id: 'jira',
  //   category: 'DevOps & Tools',
  //   field: 'DevOps & Tools',
  //   subfield: 'Fullstack',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Sanity',
  //   id: 'sanity',
  //   category: 'Web Dev',
  //   field: 'CMS',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Pinecone',
  //   id: 'pinecone',
  //   category: 'AI & Data Science',
  //   field: 'AI',
  //   subfield: 'Vectors',
  //   level: 'advanced',
  // },
  // {
  //   name: 'TestRail',
  //   id: 'testrail',
  //   category: 'DevOps & Tools',
  //   field: 'DevOps & Tools',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Locust',
  //   id: 'locust',
  //   category: 'DevOps & Tools',
  //   field: 'DevOps & Tools',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Grafana',
  //   id: 'grafana',
  //   category: 'DevOps & Tools',
  //   field: 'DevOps & Tools',
  //   subfield: 'Fullstack',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Selenium',
  //   id: 'selenium',
  //   category: 'DevOps & Tools',
  //   field: 'DevOps & Tools',
  //   level: 'advanced',
  // },
  // {
  //   name: 'PyTest',
  //   id: 'pytest',
  //   category: 'DevOps & Tools',
  //   field: 'DevOps & Tools',
  //   level: 'advanced',
  // },
  // {
  //   name: 'Svelte',
  //   id: 'svelte',
  //   category: 'Web Dev',
  //   field: 'Frontend',
  //   subfield: 'Fullstack',
  //   level: 'advanced',
  // },
  // {
  //   name: 'SvelteKit',
  //   id: 'sveltekit',
  //   category: 'Web Dev',
  //   field: 'Fullstack',
  //   level: 'advanced',
  // },
  {
    name: 'Vite',
    id: 'vite',
    category: 'DevOps & Tools',
    field: 'DevOps & Tools',
    level: 'advanced',
  },
  {
    name: 'Yarn',
    id: 'yarn',
    category: 'DevOps & Tools',
    field: 'DevOps & Tools',
    level: 'familiar',
    

  },
  // {
  //   name: 'Tableau',
  //   id: 'tableau',
  //   category: 'AI & Data Science',
  //   field: 'Analytics',
  //   level: 'advanced',
  // },
  {
    name: 'Three.js',
    id: 'threejs',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'familiar',
  },
  // {
  //   name: 'Poetry',
  //   id: 'poetry',
  //   category: 'DevOps & Tools',
  //   field: 'Tools',
  //   level: 'advanced',
  // },  
  {
    name: 'PNPM',
    id: 'pnpm',
    category: 'DevOps & Tools',
    field: 'Tools',
    level: 'familiar',
    
  },
   {
    name: 'Github Actions',
    id: 'githubactions',
    category: 'DevOps & Tools',
    field: 'Deployment',
    level: 'familiar',
  },
   {
    name: 'Framer Motion',
    id: 'framermotion',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'familiar',
  },
  {
    name: 'VS Code',
    id: 'vscode',
    category: 'DevOps & Tools',
    field: 'Tools',
    level: 'advanced',
    mostUsed: true,
  },
  // {
  //   name: 'MeiliSearch',
  //   id: 'meilisearch',
  //   category: 'Web Dev',
  //   field: 'Backend',
  //   level: 'advanced',
  // },
  {
    name: 'Stripe',
    id: 'stripe',
    category: 'Web Dev',
    field: 'Backend',
    level: 'learning',
  },
  {
    name: 'Notion',
    id: 'notion',
    category: 'DevOps & Tools',
    field: 'Tools',
    level: 'familiar',
  },
]

