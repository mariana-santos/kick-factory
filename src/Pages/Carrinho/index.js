import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Item from "./Item";

import itensData from './itens.json';
import './style.css'

export default function Carrinho(){

    const [itens, setItens] = useState([itensData[0], itensData[4], itensData[8], itensData[12]]);
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
                    <h3>Pagamento </h3>
                    <p><span>Total: </span> R$  { formatarDouble(subtotal) }</p>
                    <p><span>Forma de pagamento: </span> Crédito Mastercard (2x) </p>
                    <p><span>Cupom de desconto: </span> ABC123 </p>

                    <h3>Dados de entrega</h3>
                    <p><span>Endereço: </span> Av. Paulista, 1755 </p>
                    <p><span>Frete: </span> R$ 7,99 </p>
                    <p><span>Recebedor: </span> Wellington Cidade </p>

                    <a href="" className="button">Finalizar Compra</a>
                </div>
            </div>
        </div>
    )
}
