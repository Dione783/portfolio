import './App.css'
import { Card } from './Card';
import { Sobre } from './Sobre';

function App() {
  let texto:string="Olá meu nome é Dione sou o criador do código deste portfolio,atualmente em busca da minha primeira oportunidade";
  let texto1:string="Olá! Meu nome é Pablo mas todo mundo me chama de Goiaba..."
  return (
    <div className='App'>
      <div className='titulo'><h1>Select a player</h1></div>
        <Card cardRef="Dione_Chibi.gif"></Card>
        <Card cardRef="Goiaba_Chibi.gif"></Card>
      <Sobre titulo='Dione J Xavier' texto={texto} obs='Programador desde 2018'></Sobre>
      <Sobre titulo='Goiaba' texto={texto1} obs='Artista de jogos pixel art e desenhista'></Sobre>
    </div>
  )
}

export default App;