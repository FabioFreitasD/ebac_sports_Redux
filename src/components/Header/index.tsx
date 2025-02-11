import { useSelector } from 'react-redux'
import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

//4-depois de importar nosso RooterReducer criado na store podemos atribuir no state
import { RootReducer } from '../../store'

//1- removido da props itens no carrinho

//2-para extrair os dados da store vamos usar seletores
const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens) //3-para acessar o estado do carrinho e os itens que la estaram precisamos configurar o typescript para trrabalhar com o redux la na store...
  const favoritos = useSelector((state: RootReducer) => state.favoritos)
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>Favoritos: {favoritos.length}</span>
        <img src={cesta} alt="img" />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
