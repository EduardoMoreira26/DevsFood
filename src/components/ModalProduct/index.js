import React from "react";

import { 
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQuantityArea,
  ProductButtons,
  ProductName,
  ProductIgredients,
  ProductButton,
  ProductQuantity,
  ProductQtImage,
  ProductQtText,
  ProductPrice
} from "./styled"

export default ({ data }) => {
  
  

  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image}/>

        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{data.name}</ProductName>
            <ProductIgredients>{data.ingredients}</ProductIgredients>
          </ProductDetails>
          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImage src="/assets/minus.png" />
              <ProductQtText>900</ProductQtText>
              <ProductQtImage src="/assets/plus.png" />
            </ProductQuantity>
            <ProductPrice>
              R$ {data.price}
            </ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>

      <ProductButtons>
        <ProductButton small={true}>Cancelar</ProductButton>
        <ProductButton>Adicionar ao carrinho</ProductButton>
      </ProductButtons>
    </Container> 

  );
}