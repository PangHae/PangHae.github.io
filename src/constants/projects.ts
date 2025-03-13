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
    image:
      'https://public.readdy.ai/ai/img_res/58231ee680b7b8f1c7bb6ffa8a21c1ef.jpg',
    technologies: ['React', 'Three.js', 'MUI'],
    result: [
      '시뮬레이션 로딩 시간 50% 개선',
      '번들 사이즈 14% 감소',
      '특허 등록',
    ],
  },
  {
    title: 'ChipNSoDA',
    description: 'AI 반도체 설계 솔루션',
    image:
      'https://public.readdy.ai/ai/img_res/d89362055b0cfcccb615b126ec74325f.jpg',
    technologies: ['React'],
    result: [
      '자체 컴포넌트 개발',
      '디자인 토큰 도입 등 의사소통 개선',
      'Typescript 활성화',
    ],
  },
  {
    title: 'React Library',
    description: '회사 내부 솔루션용 라이브러리 개발',
    image:
      'https://public.readdy.ai/ai/img_res/bbed7ff61ae11a1d89d679b610ee931a.jpg',
    technologies: ['React', 'react-query', 'react-virtual'],
    result: ['컴포넌트 초기 렌더링 속도 90% 개선', '리스트 렌더링 최적화'],
  },
];
