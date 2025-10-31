export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  websiteUrl?: string;
};

export const projectsData: { [key: string]: Project[] } = {
  en: [
    {
      id: 1,
      title: 'Loanly',
      description: 'AI-powered loan application platform that streamlines the loan process with dual AI architecture.',
      image: '/images/Loanly.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/haruka08030/Loanly',
      websiteUrl: 'https://loanly-one.vercel.app/',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A short description of the second project.',
      image: '/images/project2.svg',
      tags: ['React', 'Node.js', 'Express'],
      githubUrl: 'https://github.com/example/project2',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A short description of the third project.',
      image: '/images/project3.svg',
      tags: ['Vue.js', 'Firebase'],
      githubUrl: 'https://github.com/example/project3',
    },
  ],
  ja: [
    {
      id: 1,
      title: 'Loanly',
      description: 'デュアルAIアーキテクチャでローン申請プロセスを効率化する、AI搭載ローン申請プラットフォーム。',
      image: '/images/Loanly.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/haruka08030/Loanly',
      websiteUrl: 'https://loanly-one.vercel.app/',
    },
    {
      id: 2,
      title: 'プロジェクト 2',
      description: 'ここに簡単な説明が入ります。',
      image: '/images/project2.svg',
      tags: [''],
      githubUrl: 'https://github.com/example/project2',
    },
    {
      id: 3,
      title: 'プロジェクト 3',
      description: 'ここに簡単な説明が入ります。',
      image: '/images/project3.svg',
      tags: [],
      githubUrl: 'https://github.com/example/project3',
    },
  ],
};
