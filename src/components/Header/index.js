import React, { useState } from "react";

import { 
  Container,
  Logo,
  SearchInput
} from "./styled"


export default ({ search, onSearch }) => {
  const [inputActive, setInputActive] = useState(search === '' ? false : true);
  
  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    if(search === '') {
      setInputActive(false);
    }
  };

  const handleChange = (e) => {
    onSearch(e.target.value);
  }

  return (
   <Container>
     <Logo src='/assets/logo.png' />
     <SearchInput 
      value={search}
      onChange={handleChange}
      type="text" 
      placeholder="O que quer comer?" 
      active={inputActive}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      />
   </Container>
  );
}