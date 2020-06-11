import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho sobrenome="Silva"><strong>Pedro</strong></Filho>
        <Filho sobrenome="Augusto">José</Filho>
        <Filho sobrenome="Santos">Ricardo</Filho>
    </div>