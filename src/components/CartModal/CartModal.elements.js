import styled from "styled-components";

export const CartModalContainer = styled.div`
  height: auto;
  width: 300px;
  background-color: #d9eee1;
  position: absolute;
  border: 1px solid #101522;
  padding: 1em;
  border-radius: 10px;
`;

export const ProductContainer = styled.div`
  border: 0.5px solid #101522;
  margin-top: 1em;
  background-color:#101522;
  border-radius: 10px;
`;

export const ProductTitle = styled.h1`
  color: #04AA6D;
`;

export const ProductPrice = styled.h3`
  color: #d9eee1;
`;

export const CheckoutButton = styled.button`
  border-radius: 10px;
  background: #242424;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  margin: 1rem;
  margin-top: 0;
  &:hover {
		color: #fff;
		transition: background-color 0.3s ease-in;
		background-color: red;
	}
 
`;
export const CheckinButton = styled.button`
  border-radius: 10px;
  background: #242424;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  margin: 1rem;
  &:hover {
		color: #fff;
		transition: background-color 0.3s ease-in;
		background-color:#04AA6D;
	}
  
 
`;


export const CartSumPrice = styled.h2`
  color: #101522;
  margin-top: 1em;
`;