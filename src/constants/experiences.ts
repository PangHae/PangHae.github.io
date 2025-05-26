export type Experience = {
  company: string;
  position?: string;
  period: string;
  description: string;
  details?: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Tmax CoreAI',
    position: 'CA-1-2-1팀 / 연구원',
    period: '2024.04.12 - 2024.10.04',
    description: 'React Library 개발',
    details: [
      'Room(여러 사용자를 하나의 그룹으로 구성해 다양한 협업 기능에 활용할 수 있는 단위) 컴포넌트 개발',
      '컴포넌트 디자인 및 기능 QA 대응',
      '릴리즈 노트 작성/관리 및 배포',
    ],
  },
  {
    company: '애자일소다',
    position: 'ChipNSoDA팀 / 선임 연구원',
    period: '2022.07.01 - 2024.04.12',
    description: 'AI 솔루션 Frontend 개발',
    details: [],
  },
  {
    company: '애자일소다',
    position: '강화학습팀 / 인턴',
    period: '2021.12.20 - 2022.06.30',
    description: "강화학습 MLOps 솔루션 'BakingSoDA' Frontend 개발",
    details: [
      '모델 학습 파라미터 분석 시각화 기능 개발',
      '학습 알고리즘 및 파라미터 제어 기능 개발',
      'Parallel Coordinates Plot UI/UX 개선',
      'LG CNS AI 강화학습 최적화 사업 PoC 참여',
    ],
  },
];

export const educations: Experience[] = [
  {
    company: '신한투자증권 프로 디지털 아카데미',
    period: '2025.04.22 - 현재',
    description: '클라우드 기반 금융 ICT 개발자 양성 과정',
  },
];
