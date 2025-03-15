export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  result: string[];
};

export const projects: Project[] = [
  {
    title: 'RoboSoDA',
    description: 'AI 팔레타이징 솔루션',
    image: '/public/images/pallet.png',
    technologies: ['React', 'Javascript', 'Three.js', 'Yarn Berry'],
    result: [
      '시뮬레이션 로딩 시간 50% 개선',
      '번들 사이즈 14% 감소',
      '특허 등록',
    ],
  },
  {
    title: 'ChipNSoDA',
    description: 'AI 반도체 설계 솔루션',
    image: '/public/images/chipnsoda.jpg',
    technologies: ['React', 'Typescript', 'SCSS'],
    result: [
      '자체 컴포넌트 개발',
      '디자인 토큰 도입 등 의사소통 개선',
      'Typescript 활성화',
    ],
  },
  {
    title: 'Gaiaworks',
    description: '회사 내부 라이브러리 개발',
    image: '/public/images/gaiaworks.png',
    technologies: ['React', 'react-query', 'react-virtual'],
    result: ['컴포넌트 초기 렌더링 속도 90% 개선', '리스트 렌더링 최적화'],
  },
];
