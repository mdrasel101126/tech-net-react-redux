import { configureStore } from '@reduxjs/toolkit';
import cartReduter from './features/cart/cartSlice';
const store = configureStore({
  reducer: {
    cart: cartReduter,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
