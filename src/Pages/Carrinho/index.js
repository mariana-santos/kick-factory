import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Item from "./Item";

import itensData from './itens.json';
import './style.css'

export default function Carrinho(){

    const [itens, setItens] = useState(itensData);
    const [subtotal, setSubTotal] = useState(0);

    const formatarDouble = (valor) => {
        valor = valor.toFixed(2)
        valor = String(valor).replace('.', ',')
        return(valor)
    }

    useEffect(() => {
        const subTotal = itens.reduce((total, item) => {
            const valor = item.preco - (item.preco * item.desconto);
            return total + valor * item.qtd;
        }, 0);
        setSubTotal(subTotal);
    }, [itens]);

    const handleQtdChange = (itemId, newQtd) => {
        setItens(prevItens => prevItens.map(item => {
            if (item.id === itemId) {
                return { ...item, qtd: newQtd };
            }
            return item;
        }));
    };

    return(
        <div>
            <Header />

            <div className="container" id="carrinho">
                <div id="itens">
                    <h2>Itens</h2>
                    {itens.map((item) => (
                        <Item key={item.id} item={item} onQtdChange={handleQtdChange} />
                    ))}
                </div>

                <div id="resumo">
                    <h2>Resumo do pedido</h2>
                    <p>Subtotal: { formatarDouble(subtotal) }</p>
                </div>
            </div>
        </div>
    )
}
