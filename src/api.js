let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {  
  getCategories: async () => {
    // GET /categories
    const response = await fetch(BASE+'/categories');
    const json = await response.json();
    return json;
  },

  getProducts: async () => {
    // GET /products ([search, page, category])
    const response = await fetch(BASE+'/products');
    const json = await response.json();
    return json;
  }
};