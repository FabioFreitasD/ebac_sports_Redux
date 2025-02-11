import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'

import { store } from './store'

export type Produto = {
  id: number | string
  nome: string
  preco: number
  imagem: string
}

function App() {
  //1-podemos apagar o carrinho do useState pq agora temos um reducer para ele

  //5-para corrigir o erro vamos colocar uma função qualquer apos verificar podemos limpar e o adicionar ao carrinho...

  return (
    //2-importando o Provider ele se torna o container de toda a aplicação so assim temos acesso ao estado recebendo a store
    //3-é necessario importar a store para o provider receber corretamente o estado
    //4-foi retirado o itensNoCarrinho do Header pq não precisamos mais do useState
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
