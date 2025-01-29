import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

//5-para nossa requisição com o redux tookit funcionar precisamos integrar o api na store
import api from '../services/api'

//1-precisamos fazer uma função de configuração que recebe um objeto reducer
//3-para fazer o consumo de toda nossa store alocando os reducers corretamente precisamos exportar a store
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer, //2-depois de configurar o slice do carrinho agora podemos importar na store e passar esse objeto para nosso rootReducer global da store que vai ser o centralizador de todos os nossos reducers
    [api.reducerPath]: api.reducer //6-precisamos acessar a propriedade de um objeto com o redecer path
  }, //7-precisamos criar um middlerware que vai fazer o meio de campo entre a despath e a store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

//4-vamos criar um tipo para o RootReducer inferencidado para o proprio redux se resolver agora so exportar para ser usado no header
export type RootReducer = ReturnType<typeof store.getState>
