import React from 'react';
import './app.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';

export default (props) => (
    <div>
        <h1>Olá Mundo!</h1>

        <div className="App">
            <Card titulo="Comunicação Indireta" color="#453353">
                <Super></Super>
            </Card>

            <Card titulo="Comunicação Direta" color="#888888">
                <Pai></Pai>
            </Card>

            <Card titulo="Condicional Versão 1" color="#fa6900">
                <CondicionalComIf numero={21}></CondicionalComIf>
            </Card>

            <Card titulo="Condicional Versão 2" color="#e94c6f">
                <Condicional numero={10}></Condicional>
            </Card>

            <Card titulo="Repetição" color="#008bba">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="Componete com Filhos" color="#d96459">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Calors</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="Componete com Parametro" color="#ff85cb">
                <ComParametro titulo="Esse é um título" subtitulo="Esse é o subtitulo" />
                <ComParametro titulo="Opa" subtitulo="Epa" />
            </Card>
            
            <Card titulo="Primeiro Componente" color="#92b06a">
                <Primeiro />
            </Card>
        </div>
    </div>  
);