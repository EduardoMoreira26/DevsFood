import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

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

export default ({ data, setStatus }) => {
  const dispath = useDispatch();

  const [qt, setQt] = useState(1);

  useEffect(() => {
    setQt(1);
  }, [data])
  
  const handleCancelButton = () => {
    setStatus(false);
  }

  const hanldeMinusQt = () => {
    if (qt > 1) {
      setQt(qt - 1);
    }
  }

  const hanldePlusQt = () => {
    setQt(qt + 1);
  }

  const handleAddToCart = () => {
    //juntar as infos
    //mandar pro reducer
    dispath({
      type: 'ADD_PRODUCT',
      payload:{data, qt}
    });

    setStatus(false);
  }

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
              <ProductQtImage 
                onClick={hanldeMinusQt} 
                src="/assets/minus.png" 
              />
              <ProductQtText>{qt}</ProductQtText>
              <ProductQtImage 
                onClick={hanldePlusQt} 
                src="/assets/plus.png" 
              />
            </ProductQuantity>
            <ProductPrice>
            € {(data.price * qt).toFixed(2)}
            </ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>

      <ProductButtons>
        <ProductButton small={true} onClick={handleCancelButton}>Cancelar</ProductButton>
        <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
      </ProductButtons>
    </Container> 

  );
}