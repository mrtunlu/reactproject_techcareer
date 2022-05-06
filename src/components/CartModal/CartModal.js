import React, { useContext } from "react";
import {
  CartModalContainer,
  ProductContainer,
  ProductPrice,
  ProductTitle,
  CheckoutButton,
  CheckinButton,
  CartSumPrice,
} from "./CartModal.elements";
import { ProductContext } from "../../contexts/productContext";
import { useEffect } from "react";
import { useState } from "react";

const CartModal = () => {
  const [products,setProducts] = useContext(ProductContext);
  const [sumPrice, setSumPrice] = useState(0);

  const clearCart = ()=>{
    setProducts([])
    setSumPrice(0)
  }

  useEffect(() => {
let sum =0
    for(const product of products){
      sum+=Number(product.planCost)
    } 
    setSumPrice(sum)
  }, [products]);

  return (
    <CartModalContainer>
      {products.length === 0 && <ProductTitle>Henüz ürün eklenmedi</ProductTitle>}
      {products.map((product,index) => (
        <ProductContainer key={index}>
          <ProductTitle>{product.planName}</ProductTitle>
          <ProductPrice>{product.planCost}</ProductPrice>
        </ProductContainer>
      ))}
      <CartSumPrice>Toplam Tutar ₺{sumPrice}</CartSumPrice>
      <CheckinButton secondary>Satın Al</CheckinButton>
      <CheckoutButton secondary onClick={clearCart}>Temizle</CheckoutButton>
    </CartModalContainer>
  );
};

export default CartModal;