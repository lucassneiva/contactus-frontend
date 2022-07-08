import styled from 'styled-components'
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin';
import {Facebook} from '@styled-icons/boxicons-logos/Facebook';
import {PinterestAlt} from '@styled-icons/boxicons-logos/PinterestAlt';
import {Twitter} from '@styled-icons/boxicons-logos/Twitter';
import pinkImage from './assets/pink.png';
import yellowImage from './assets/yellow.png';
import mapImage from './assets/map.png';
import yellowRightImage from './assets/yellowRight.png';
import blueImage from './assets/blue.png';

export const Box = styled.div`
    margin-top: 170px;
    height: 550px;
    margin-bottom: 150px;
    @media (min-width: 900px) {
        margin-left: 170px;
        }
        @media (min-width: 700px) {
        margin-left: 170px;
        }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 40px;

    input {
        padding: 35px;
        width: 30%;
        border-radius: 10px;
        border: 1px solid #DCDCDC;
        :nth-child(3) {
            padding-bottom: 100px;
            margin-bottom: 20px;
        }
        @media (max-width: 699px) {
            display: flex;
            align-self: center;
            left: 0;
        }
    }

`;

export const Title = styled.h2`
    font-size: 40px;
    line-height: 52px;
    font-weight: 400;
    @media (max-width: 699px) {
        display: flex;
        justify-content: center;
        left: 0;
    }
`;

export const Button = styled.button`
    background-color: #FAD34F;
    padding: 20px;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    border-width: 0;
    border-radius: 500px;
    width: 150px;
    @media (min-width: 320px) {
        display: flex;
        justify-content: center;
        width: 150px;
        margin: 0 auto;
    }
    @media (min-width: 700px) {
        display: flex;
        justify-content: center;
        width: 200px;
        margin: 0 auto;
    }
    @media (min-width: 699px) {
        display: flex;
        justify-content: center;
        width: 180px;
        margin-left: 0px;
    }
`;

export const Footer = styled.footer`
    display: flex;
    position: relative;
    height: 200px;
    bottom: 0;
    background: #FAFAFA;
    border-top: 1px solid #D8D8D8;
`;

export const SocialMedia = styled.section`
    display: flex;
    align-items: center;
    width: 150px;
    justify-content: space-between;
    margin-left: 300px;
    @media (max-width: 400px) {
        margin-left: 65%;
    }
`;


export const FacebookIcon = styled(Facebook)`
    width: 24px;
    height: 20px;
    color: #696969;
`;

export const LinkedinIcon = styled(Linkedin)`
    width: 24px;
    height: 20px;
    color: #696969;
`;

export const PinterestIcon = styled(PinterestAlt)`
    width: 24px;
    height: 20px;
    color: #696969;

`;

export const TwitterIcon = styled(Twitter)`
    width: 24px;
    height: 20px;
    color: #696969;
`;

export const Pink = styled.img`
    position: absolute;
    width: 260px;
    height: 200px;
    background-image: url(${pinkImage});
    background-size: cover;
    @media (max-width: 400px) {
        width: 250px;
        height: 200px;
        left: -20px;
    }
`;

export const Blue = styled.img`
    position: absolute;
    top: 0;
    right: 5%;
    width: 80px;
    height: 100px;
    background-image: url(${blueImage});
    background-size: cover;
`;

export const Yellow = styled.img`
    position: absolute;
    top: 5%;
    left: 10%;
    width: 100px;
    height: 100px;
    background-image: url(${yellowImage});
    background-size: cover;
`;

export const YellowRight = styled.img`
    position: absolute;
    top: 72%;
    right: 20%;
    width: 100px;
    height: 100px;
    background-image: url(${yellowRightImage});
    background-size: cover;
    z-index: 9;
    @media (max-width: 699px) {
        display: none;
    }
    @media (min-width: 699px) {
        right: 25%;
    }
    @media (min-width: 800px) {
        right: 30%;
    }
    @media (min-width: 900px) {
        right: 35%;
    }
    @media (min-width: 1050px) {
        right: 40%;
    }
`;

export const PinkRight = styled.img`
    position: absolute;
    width: 250px;
    top: 75%;
    right: 1%;
    height: 250px;
    background-image: url(${pinkImage});
    background-size: cover;
    @media (max-width: 699px) {
        display: none;
    }
    @media (min-width: 699px) {
        right: 6%;
    }
    @media (min-width: 800px) {
        right: 11%;
    }
    @media (min-width: 900px) {
        right: 16%;
        top: 72%;
    }
    @media (min-width: 950px) {
        right: 18%;
    }
    @media (min-width: 1050px) {
        right: 24%;
    }
    @media (min-width: 1200px) {
        right: 28%;
    }
`;


export const Map = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 350px;
    height: 869px;
    background-image: url(${mapImage});
    background-size: cover;
    @media (max-width: 699px) {
        display: none;
    }
    @media (min-width: 699px) {
        width: 30%;
        height: 890px;
    }
    @media (min-width: 750px) {
        width: 32%;
        height: 890px;
    }
    @media (min-width: 800px) {
        width: 35%;
        height: 890px;
    }
    @media (min-width: 900px) {
        width: 37%;
        height: 880px;
    }
    @media (min-width: 950px) {
        width: 40%;
        height: 870px;
    }
    @media (min-width: 1050px) {
        width: 42%;
        height: 865px;
    }
    @media (min-width: 1200px) {
        width: 45%;
        height: 865px;
    }
    @media (min-width: 1350px) {
        width: 45%;
        height: 920px;
        top: -55px;
    }
`;
