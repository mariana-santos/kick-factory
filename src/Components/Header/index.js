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
                        <a href='/#futebol'>Futebol</a>
                    </li>
                    <li>
                        <GiHighKick />
                        <a href='/#kick boxing'>Kick Boxing</a>
                    </li>
                    <li>
                        <GiRunningNinja />
                        <a href='/#corrida'>Corrida</a>
                    </li>
                    <li>
                        <GiHighPunch />
                        <a href='/#muay thai'>Muay Thai</a>
                    </li>
                    <li>
                        <HiShoppingCart />
                        <a href='/carrinho'>Carrinho</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}