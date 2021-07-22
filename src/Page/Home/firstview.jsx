import React from 'react'
import styled from 'styled-components';
import Brand from '../../components/Brand/brand';
import { useMediaQuery } from 'react-responsive';

import topSectionBackground from '../../images/home.jpg';
import InnerSectionImg from '../../images/thinker.png';
import { device } from '../../components/devices/device';

const TopSection = styled.div`
  width:100%;
  height:100vh;
  background: url(${topSectionBackground});
  background-position: -450px -200px;
  
  @media screen and (max-width:${device.mobile}px){
    background-position: 0;
  }
`;

const BackgroundFilter = styled.div`
  width:100%;
  height:100%;
  background-color: hsla(219, 15%, 46%,.6);
  display:flex;
  flex-direction:column;
`;

const TopSectionInner = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:space-evenly;
  align-items:center;

  @media screen and (max-width: ${device.mobile}px){
    justify-content:center;
  }
`;

const InnerImage = styled.div`
  width:20em;
  height:20em;

  img{
    width:100%;
    height:100%;
  }
`;

const MainTitle = styled.h3`
  margin:0;
  font-family: 'Montserrat';
  line-height: 1.4;
  font-size: ${({ size }) => size ? size + "px" : "2.5rem"};
  color: #fff;
  font-weight: 450;
  text-align:left;

  @media screen and (max-width:${device.mobile}px){
    font-size: 1.5em;
    text-align:left;
  }

`;

const LogoContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
`;

export default function FirstView(props) {
  const { children } = props;

  const mobile = useMediaQuery({maxWidth: device.mobile});

  return (
    <TopSection>
      <BackgroundFilter>
        {children}
        <TopSectionInner>
            <LogoContainer>
              <Brand Logosize ={mobile?70:100} TextSize = {mobile?25:30} />
              <MainTitle size={mobile?30:35}>Looking for a new project. <br/>Here you Go!</MainTitle>
            </LogoContainer>
          { !mobile && (<InnerImage>
            <img src={InnerSectionImg} alt="GitHub"/>
          </InnerImage>)}
        </TopSectionInner>
      </BackgroundFilter>
    </TopSection>
  )
}
