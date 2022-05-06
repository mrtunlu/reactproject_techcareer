import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardsSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  background: #101522;  

`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;


  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardsHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

 
  
/* responsive görünüm için alt alta dizme */
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const CardsCard = styled(Link)`
  background: #242424;
  box-shadow: 0 3px 10px rgba(56, 125, 255, 0.2);
  width: 220px;
  height: 500px;
  text-decoration: none;
  border-radius: 70px;
  margin:30px;

 
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 6px 30px rgba(56, 125, 255, 0.2);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    height: 100%;
    &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
    }
    
  }
`;

export const CardsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;



export const CardsCardName = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const CardsCardCost = styled.h4`
  font-size: 40px;
`;

export const CardsCardFrom = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const CardsCardDesciriptions = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;
`;

export const CardsCardDesciription = styled.li`
  margin-bottom: 10px;
`;
export const CardsCardHobbies = styled.ul`
  margin: 5px 0 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;
`;
export const CardsCardHobby = styled.li`
  margin-bottom: 10px;
  
`;
export const CardsCardImg = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  border-radius: 50%;
`;
