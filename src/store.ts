// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'; // Agora a importação deve funcionar corretamente

const store = configureStore({
  reducer: {
    cart: cartReducer, // Integrando o reducer do carrinho
  },
});

export default store;
