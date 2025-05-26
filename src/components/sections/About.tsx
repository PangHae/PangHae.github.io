import { useRef } from 'react';
import {
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Button, message, Tooltip } from 'antd';

export function AboutSection() {
  const aboutRef = useRef(null);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '../../../이광해_CV.pdf';
    link.download = '이광해_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success('CV downloaded successfully!');
  };

  return (
    <section id="about" className={`py-20`} ref={aboutRef}>
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-16 font-pretendard text-white`}
        >
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <img
              src="../../../images/me.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className={`text-lg font-noto-sans text-gray-300 mb-6`}>
              2021년부터 프론트엔드 개발자로 일하며, 사용자에게 더 나은 경험을
              전달하는 인터페이스를 고민하고 구현해 왔습니다. 그 결과,
              <p className="text-xl">
                로딩 시간 50% 단축, 번들 사이즈 14% 개선, 초기 렌더링 속도 90%
                향상 등 사용자가 만족할 수 있는 결과를 도출해냈습니다.
              </p>
              저는 언제나 &apos;더 빠르게, 더 직관적으로&apos;라는 질문을
              스스로에게 던지는, 사용자가 머무르고 싶어 하는 웹을 만드는
              개발자입니다.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                icon={<MailOutlined />}
                className="!rounded-button font-pretendard"
                onClick={() =>
                  (window.location.href = 'mailto:yds05074@gmail.com')
                }
              >
                Contact Me
              </Button>
              <Button
                icon={<DownloadOutlined />}
                className="!rounded-button font-pretendard"
                onClick={handleDownloadCV}
              >
                Download CV
              </Button>
            </div>
            <div className="flex space-x-4">
              <Tooltip title="GitHub">
                <Button
                  icon={<GithubOutlined />}
                  shape="circle"
                  className="!rounded-button"
                  onClick={() => window.open('https://github.com/PangHae')}
                />
              </Tooltip>
              <Tooltip title="LinkedIn">
                <Button
                  icon={<LinkedinOutlined />}
                  shape="circle"
                  className="!rounded-button"
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/%EA%B4%91%ED%95%B4-%EC%9D%B4-283aa0247/',
                    )
                  }
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
