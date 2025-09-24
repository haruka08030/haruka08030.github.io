export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const projectsData: { [key: string]: Project[] } = {
  en: [
    {
      id: 1,
      title: 'Project 1',
      description: 'A short description of the first project.',
      image: '/images/project1.svg',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A short description of the second project.',
      image: '/images/project2.svg',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A short description of the third project.',
      image: '/images/project3.svg',
    },
  ],
  ja: [
    {
      id: 1,
      title: '優待マップ',
      description: '保有している株主優待を一括で管理できるアプリです。',
      image: '/images/project1.svg', // NOTE: Using a placeholder image
    },
    {
      id: 2,
      title: 'プロジェクト 2',
      description: 'ここに簡単な説明が入ります。',
      image: '/images/project2.svg',
    },
    {
      id: 3,
      title: 'プロジェクト 3',
      description: 'ここに簡単な説明が入ります。',
      image: '/images/project3.svg',
    },
  ],
};
