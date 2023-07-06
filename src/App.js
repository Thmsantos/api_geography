import './App.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {

  let array_tudo = []
  let array_capitais = []
  let array_continentes = []
  let array_idiomas = []
  let array_moedas = []
  let array_nomes = []

  const[nomes, setNomes] = useState([])
  const[capitais, setCapitais] = useState([])
  const[idiomas, setIdiomas] = useState([])
  const[continentes, setContinentes] = useState([])
  const[moedas, setMoedas] = useState([])

  useEffect(() => {
    Axios.get("https://restcountries.com/v3.1/all")
    .then((res) => {
      

      for(let i = 0; i < res.data.length; i++){

        array_tudo.push(res['data'][i])
        array_nomes.push(res['data'][i]['name']['common'])
        array_capitais.push(res['data'][i]['capital'])
        array_continentes.push(res['data'][i]['continents'])

        if(i != 6){ 
          i = 7
        }
        //posição 6 se trata da antartica, não há idioma oficial la.
        /* let lista_idiomas = Object.values(array_tudo[i].languages)
        array_idiomas.push(lista_idiomas[0]) */
        console.log(i, array_tudo[i])
      }

    })
  }, [])

  return (
    <div className="App">
     <p>th</p>
    </div>
  );
}

export default App;
