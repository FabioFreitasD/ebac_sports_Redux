import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'
import { addFavorito, removeFavorito } from '../../store/reducers/favoritos'
import { RootReducer } from '../../store'

//1-podemos retirar o aoComprar de todo o codigo
type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  //2-vamos utilizar o dispach para acessar as actions do nosso slice importando o slice
  const dispatch = useDispatch()
  //3-uzando o dispatch e a função adicionar consiguimos ultilizar a função chamando o produto
  const favoritos = useSelector((state: RootReducer) => state.favoritos) //seleciona os favoritos do estado global
  const isFavorite = favoritos.includes(produto.id) //verifica se o produto é favorito

  const toggleFavorito = () => {
    if (isFavorite) {
      dispatch(removeFavorito(produto.id))
    } else {
      dispatch(addFavorito(produto.id))
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={toggleFavorito} type="button">
        {isFavorite ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
