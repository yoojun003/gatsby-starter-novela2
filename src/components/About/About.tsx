import React from "react";
import styled from "@emotion/styled";

import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import Image from "@narative/gatsby-theme-novela/src/components/Image";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

const About: React.FC = ({ author }) => {
    return (
        <AboutContainer>
            <AboutHeading>About Me</AboutHeading>
            <AboutSpotlight>
                <AboutContent>
                    <br />
                    <p>
                        안녕하세요. 데이터 분석가 박용준입니다.
                        <br />
                        수자원 연구 경력과 데이터 분석 경험을 정리한 블로그 입니다.  
                    </p>
                    <p>
                        ■     경력 및 교육이수
                        <br />
                        - 수자원조사기술원(연구원)                        
                        <br />
                        - 파이썬과 R을 활용한 빅데이터 머신러닝 전문가 양성과정(아이티윌)
                        <br />
                        <br /> 
                        ■      기술
                        <br /> 
                        - 파이썬, R, SQL, PLSQL, TUNNING, HADOOP
                        <br /> 
                        - 데이터수집 및 전처리, 분석, 시각화, 웹 크롤링, 머신러닝, 딥러닝
                        <br /> 
                        <br /> 
                        ■      자격증
                        <br />
                        데이터분석준전문가(ADsP), 정보처리기사, 컴퓨터활용능력 1급
                    </p>
                </AboutContent>
                <AboutImage>
                    <RoundedImage src={author.avatar.medium} />
                </AboutImage>
            </AboutSpotlight>
        </AboutContainer>
    );
    
};

export default About;

const AboutContainer = styled.div`
    ${mediaqueries.tablet`
        width: 100%;
    `}
`;

const AboutSpotlight = styled.div`
    margin: 20px 0;
    display: flex;

    ${mediaqueries.tablet`
        width: 100%;
        flex-direction: column-reverse;
    `}
`;

const AboutHeading = styled(Headings.h2)`
    color: ${p => p.theme.colors.primary};

    a {
        color: ${p => p.theme.colors.accent};
    }
`;

const AboutContent = styled.div`
    font-size: 21px;
    color: ${p => p.theme.colors.secondary};
    flex: 1 1;

    p {
        margin: 0 0 2em;
    }
`;

const AboutImage = styled.div`
    width: 300px;
    height: 390px;
    border-radius: 50%;
    margin-left: 4em;

    border: solid 1px #ddd;

    ${mediaqueries.desktop`
        width: 200px;
        height: 200px;
    `}

    ${mediaqueries.tablet`
        margin: 1em auto;
    `};
`;

const RoundedImage = styled(Image)`
    padding: 0.65em;
    margin: 10px;
    border-radius: 50%;
`;
