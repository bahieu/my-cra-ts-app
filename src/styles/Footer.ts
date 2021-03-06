import styled from 'styled-components';
import TwitterIcon from '../assets/imgs/png/Twitter-logo.png';
import FacebookIcon from '../assets/imgs/png/Facebook-Logo.png';
import InstagramIcon from '../assets/imgs/png/Instagram_icon.png';
import { Link } from 'react-router-dom';
import { device } from '../constant/devices';

export const Footer = styled.footer`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  background-color: #f5f5f5;

  @media ${device.pc} {
    text-align: left;
  }
`;

export const TopBar = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 40px 0;

  @media ${device.pc} {
    padding: 45px 80px;
    display: flex;
  }
`;

export const DesktopSocialList = styled.div`
  display: none;

  @media ${device.pc} {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  } ;
`;

export const MobileSocialList = styled.div`
  padding-bottom: 40px;
  width: 100%;

  @media ${device.pc} {
    display: none;
  } ;
`;

export const Twitter = styled.div`
  background: url(${TwitterIcon}) no-repeat center;
  width: 35px;
  height: 35px;
  margin-left: 5px;
  cursor: pointer;
`;

export const Facebook = styled.div`
  background: url(${FacebookIcon}) no-repeat center;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-left: 5px;
  cursor: pointer;
`;

export const Instagram = styled.div`
  background: url(${InstagramIcon}) no-repeat center;
  border-radius: 30%;
  border-style: 0;
  width: 35px;
  height: 35px;
  margin-left: 5px;
  cursor: pointer;
`;

export const HR = styled.div`
  display: none;

  @media ${device.pc} {
    height: 0;
    padding: 0;
    margin: 0;
    display: block;
    border-bottom: 1px #cacada solid;
  } ;
`;

export const BottomBar = styled.div`
  max-width: 1280px;
  margin: auto;
  display: block;
  justify-content: center;

  @media ${device.pc} {
    padding: 40px 80px 60px;
    justify-content: space-between;
  } ;
`;

export const Menu = styled.div`
  margin-bottom: 30px;
  min-width: 50%;

  @media ${device.pc} {
    min-width: unset;
    margin-bottom: 0;
    margin-right: 40px;
  }
`;

export const MenuHead = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: #2b2738;
`;

export const MenuLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: #2f6cb3;

  @media ${device.pc} {
    white-space: nowrap;
  }
`;

export const Policy = styled.div`
  width: 100%;
  max-width: 764px;
  font-size: 12px;
  line-height: 1.33;
  color: #2b2738;
  margin: 0 20px;
`;

export const PolicyRow = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;
