import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Card from './Components/Card';

function App() {
  return (
    <div>
      <Header />

      <div className='container'>

        <Futebol />

      </div>

    </div>
  );
}

function Futebol(){
  return(
    <>
      <h2>Itens de Futebol</h2>

      <section className='row'>
        <Card 
          imagem=""
          titulo="Bola de Futebol de Campo"
          preco={99}
          desconto={0.15}
        />

        <Card 
          imagem=""
          titulo="Bola de Futebol de Campo"
          preco={99}
          desconto={0.15}
        />

        <Card 
          imagem=""
          titulo="Bola de Futebol de Campo"
          preco={99}
          desconto={0.15}
        />

        <Card 
          imagem=""
          titulo="Bola de Futebol de Campo"
          preco={99}
          desconto={0.15}
        />
      </section>
    </>
  )
}

export default App;
