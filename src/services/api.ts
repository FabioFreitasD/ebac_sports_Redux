import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' //1-import para criar o api do redux toolkit

import { Produto } from '../App'

//2-objeto para construir nosso api
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app' //3-baseUrl é o dominio da api
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'api/ebac_sports'
    })
  }) //4-para construir as requisições https usamos os endpoints
})

export const { useGetProdutosQuery } = api
export default api
