import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

// 6- Porque nossos itens dentro do estado estão do tipo never, nós precisamos tipar ele
type CarrinhoState = {
  itens: Produto[]
}

// 7- Agora um objeto para o estado inicial do estado do carrinho
const initialState: CarrinhoState = {
  itens: []
}

// 1- Slice é uma fatia das nossas funcionalidades, nesse caso a função adicionar ao carrinho
const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState, // 2- O reducer precisa receber um estado inicial que vai ser os itens que vão ser adicionados no carrinho (foi transferido para o passo 7)
  // 3- No reducers deve ser escrita toda a parte de mudança do estado
  reducers: {
    // 4- A função adicionar ao carrinho vai receber o estado inicial, uma ação e depois o PayloadAction que terá dentro de si o produto adicionado
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload // 5- Nessa constante vamos armazenar o produto adicionado no payload que é do tipo Produto

      if (state.itens.find((p) => p.id === produto.id)) {
        // 8- Agora que temos o produto tipado em itens, podemos procurar com o .find o item dentro do estado
        alert('Item já adicionado')
      } else {
        state.itens.push(produto) // 9- Se o produto não foi adicionado, vai ser adicionado com o .push
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions // 10- Aqui podemos exportar nossa fatia adicionar desestruturando o carrinhoSlice
export default carrinhoSlice.reducer // 11- Exportando o reducer
