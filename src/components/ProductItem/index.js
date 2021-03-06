import React, { useState } from "react";

import { 
  Container,
  ProductPhotoArea,
  ProdcutPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductIngredients,
  ProductButtonArea,
  ProductButton
} from "./styled"


export default ({ data, onClick }) => {

  const handleClick = () => {
    onClick(data);
  }

  return (
   <Container onClick={handleClick}>

    <ProductPhotoArea>
      <ProdcutPhoto src={data.image} />
    </ProductPhotoArea>

    <ProductInfoArea>
      <ProductName>{data.name}</ProductName>
      <ProductPrice>R$ {data.price}</ProductPrice>
      <ProductIngredients>{data.ingredients}</ProductIngredients>
    </ProductInfoArea>

    <ProductButtonArea>
      <ProductButton src="/assets/next.png"/>
    </ProductButtonArea>

   </Container> 
  );
}