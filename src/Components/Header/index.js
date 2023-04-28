import './style.css'

import { GiHighPunch, GiHighKick, GiRunningNinja } from 'react-icons/gi'
import { RiFootballFill } from 'react-icons/ri'
import { HiShoppingCart } from 'react-icons/hi'

export default function Header(){
    return(
        <header>
            <div id='logo'>
            <h1>Kick Factory</h1>
            </div>

            <nav>
                <ul>
                    <li>
                        <RiFootballFill />
                        <a>Futebol</a>
                    </li>
                    <li>
                        <GiHighKick />
                        <a>Kick Boxing</a>
                    </li>
                    <li>
                        <GiRunningNinja />
                        <a>Atletismo</a>
                    </li>
                    <li>
                        <GiHighPunch />
                        <a>Muay Thai</a>
                    </li>
                    <li>
                        <HiShoppingCart />
                        <a>Carrinho</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}