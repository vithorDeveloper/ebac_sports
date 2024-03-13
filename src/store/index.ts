/* eslint-disable @typescript-eslint/no-explicit-any *//* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit"

import carrinhoReducer from './reducer/carrinho'
import favoritoReducer from './reducer/favoritos'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    [api.reducerPath]: api.reducer
  }, 
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>