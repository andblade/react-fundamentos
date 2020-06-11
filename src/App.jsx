import React from 'react';

import './app.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default (props) => (
    <div>
        <h1>Olá Mundo!</h1>

        <div className="App">            
            <Card titulo="Condicional Versão 1">
                <CondicionalComIf numero={21}></CondicionalComIf>
            </Card>

            <Card titulo="Condicional Versão 2">
                <Condicional numero={10}></Condicional>
            </Card>

            <Card titulo="Repetição">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="Componete com Filhos">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Calors</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="Componete com Parametro">
                <ComParametro titulo="Esse é um título" subtitulo="Esse é o subtitulo" />
                <ComParametro titulo="Opa" subtitulo="Epa" />
            </Card>
            
            <Card titulo="Primeiro Componente">
                <Primeiro />
            </Card>
        </div>
    </div>  
);