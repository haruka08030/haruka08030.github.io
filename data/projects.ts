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
      description: 'AI-powered loan application platform replacing traditional credit scores with a "Trust Score" based on behavioral data and community reputation to empower underbanked individuals.',
      image: '/images/Loanly.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/haruka08030/Loanly',
      websiteUrl: 'https://loanly-one.vercel.app/',
    },
    {
      id: 2,
      title: 'SF Parking Map',
      description: 'An interactive web application for visualizing San Francisco parking regulations with time-based filtering, powered by Leaflet and Mapbox.',
      image: '/images/project2.svg',
      tags: ['React', 'Leaflet', 'Mapbox', 'Vite'],
      githubUrl: 'https://github.com/haruka08030/sf-parking-map',
      websiteUrl: 'https://sf-parking-map.vercel.app/',
    },
    {
      id: 3,
      title: 'From Lunchbox Shame to Pride',
      description: 'A website developed as the final project for ETHN-101, exploring food culture and belonging through stories, history, and resources.',
      image: '/images/project3.svg',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Figma'],
      githubUrl: 'https://github.com/haruka08030/ETHN101-website',
      websiteUrl: 'https://ethnic-final-project.vercel.app/',
    },
  ],
  ja: [
    {
      id: 1,
      title: 'Loanly',
      description: '従来の信用スコアに代わり、行動データやコミュニティ評価に基づく「トラストスコア」を用いて、信用履歴のない人々へ公平な融資機会を提供する、AI搭載ローン申請プラットフォーム。',
      image: '/images/Loanly.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/haruka08030/Loanly',
      websiteUrl: 'https://loanly-one.vercel.app/',
    },
    {
      id: 2,
      title: 'SF Parking Map',
      description: `サンフランシスコの駐車規制を時間帯ごとにフィルタリングして地図上で可視化するインタラクティブなWebアプリケーション。`,
      image: '/images/project2.svg',
      tags: ['React', 'Leaflet', 'Mapbox', 'Vite'],
      githubUrl: 'https://github.com/haruka08030/sf-parking-map',
      websiteUrl: 'https://sf-parking-map.vercel.app/',
    },
    {
      id: 3,
      title: 'From Lunchbox Shame to Pride',
      description: 'ETHN-101（民族学）の最終課題として制作されたWebサイト。「食文化と帰属意識」をテーマに、ストーリーや歴史、関連リソースを紹介しています。',
      image: '/images/project3.svg',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Figma'],
      githubUrl: 'https://github.com/haruka08030/ETHN101-website',
      websiteUrl: 'https://ethnic-final-project.vercel.app/',
    },
    {
      id: 4,
      title: '優待マップ (Yuutai Map)',
      description: '株主優待の期限切れを防ぎ、現在地から使える店舗を地図上で探せるモバイルアプリ。Supabaseによる認証とデータ管理、Google Maps APIを活用した店舗可視化機能を搭載。',
      image: '/images/project3.svg',
      tags: ['Flutter', 'Dart', 'Supabase', 'Google Maps'],
      githubUrl: 'https://github.com/haruka08030/yuutai-map',
    },
  ],
};
