import Header from '../../Components/Header';
import Cards from '../../Components/Cards';

import { GiHighPunch, GiHighKick, GiRunningNinja } from 'react-icons/gi'
import { RiFootballFill } from 'react-icons/ri'
import Footer from '../../Components/Footer';

export default function Home(){
    return(
        <div>
            <Header />

            <div className='container'>

                <Cards categoria="futebol" icon={ <RiFootballFill /> } />
                <Cards categoria="kick boxing" icon={ <GiHighKick /> } />
                <Cards categoria="corrida" icon={ <GiRunningNinja /> } />
                <Cards categoria="muay thai" icon={ <GiHighPunch /> } />

            </div>

            <Footer />
        </div>
    )
}