import Header from '../../Components/Header';
import Futebol from '../../Components/Futebol';

export default function Home(){
    return(
        <div>
            <Header />

            <div className='container'>

                <Futebol />
                <Futebol />

            </div>

        </div>
    )
}