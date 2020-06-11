import React from 'react'
import produtos from '../data/produtos'

export default props => {

    function getProdutosList(){
        return produtos.map(produto => {
            return <li key={produto.id}>
                {produto.nome} - R$ {produto.preco}
            </li>
        })
    }

    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosList()}
            </ul>
        </div>
    )
}