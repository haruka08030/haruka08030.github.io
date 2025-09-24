export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
};

export const projectsData: { [key: string]: Project[] } = {
  en: [
    {
      id: 1,
      title: 'Project 1',
      description: 'A short description of the first project.',
      image: '/images/project1.svg',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/example/project1',
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
      title: '優待マップ',
      description: '保有している株主優待を一括で管理できるアプリです。',
      image: '/images/project1.svg', // NOTE: Using a placeholder image
      tags: ['Flutter', 'Dart', 'Supabase'],
      githubUrl: 'https://github.com/haruka08030/yuutai-map',
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
