import { useState } from 'react';
import React from 'react';
import './styles.css';
import axios from 'axios';
import qs from 'qs';
import { Buffer } from 'buffer'

function App() {

  const accountSid = 'AC71230577c4c3fcffaf94a923d26556c6';
  const authToken = 'bc87729c0aab94733a126e6449fdda4c';
  const serviceSid = 'IS13c307b864999ec2fd76068a0b53825b'
  const mapSid = 'MP6b1cde8237674a62bac02245464d7367'
  const base64Token = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

  const [anotation, setAnotation] = useState('')
  const [anotationTitle, setAnotationTitle] = useState('')

    async function save(){

      if (anotationTitle === ''){
        alert('Escreva um título')
        return
      }

      try{

        alert('título: ' + anotationTitle)

        const api = await axios ({
          method: "POST",
            url: `https://sync.twilio.com/v1/Services/${serviceSid}/Maps/${mapSid}/Items/`,
            headers: {
              Authorization: `Basic ${base64Token}`,
              "Content-Type": "application/x-www-form-urlencoded"
            },
            
            data: qs.stringify({ Key: anotationTitle, Data: {"anotation": anotation}})
        })

        console.log(api)


      }catch(erro){
        console.error(erro)
      }
    }

  


    return (
      <div className="container">
        <header className="containerHeader">
            <h1> Anotações armazenadas no Twilio Sync </h1>
        </header>

        <div className='containerInput'>
          <input
          type="text"
          placeholder='Digite aqui o título da sua anotação'
          value={anotationTitle}
          onChange={(event) => setAnotationTitle(event.target.value)}
          ></input>

          <textarea 
          type="text" 
          placeholder='Digite aqui sua anotação'
          value={anotation}
          onChange={(event) => setAnotation(event.target.value)}
          />

          <div className='containerButton'>
            <button className='saveButton'
            onClick={save}>
                Salvar anotação
            </button> 
          </div>

        </div>

      </div>
    );
}

export default App;