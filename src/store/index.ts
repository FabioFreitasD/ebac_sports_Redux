import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

//1-precisamos fazer uma função de configuração que recebe um objeto reducer
//3-para fazer o consumo de toda nossa store alocando os reducers corretamente precisamos exportar a store
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer //2-depois de configurar o slice do carrinho agora podemos importar na store e passar esse objeto para nosso rootReducer global da store que vai ser o centralizador de todos os nossos reducers
  }
})

//4-vamos criar um tipo para o RootReducer inferencidado para o proprio redux se resolver agora so exportar para ser usado no header
export type RootReducer = ReturnType<typeof store.getState>
