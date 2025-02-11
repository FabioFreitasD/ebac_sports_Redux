import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, error, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>
  if (error) return <div>Erro ao Carregar produtos</div>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            //1-removemos o aoComprar da props e o adicionar ao carrinho de todo codigo
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
