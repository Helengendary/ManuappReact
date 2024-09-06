import { useState, useEffect } from 'react'
import Card from './components/CardAPI'
import { api } from "./api/rmApi"
import style from './App.module.css'
import styleCard from './components/Card.module.css'

function API() {
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [name, setName] = useState("")

        
    useEffect(() => {
        api.get(`/character/?page=${page}&name=${name}`).then((response) => {
        if(!response.data.results){
            console.log("Vazio")
        }
        setData(response.data.results)
        }).catch((error) => {
        if(error.response.status === 404){
            alert("Esta pagina nao contem este personagem")
        }
        console.error(error)
        })
    }, [page, name])

    return(
    <>
          <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}
               />
               <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className={style.config}>
            {data.map((item) => { 
             return(
              <div key={item.id} className={styleCard.cards}>
                <Card name={item.name} desc={item.species} value={item.gender} image={item.image} species={item.species} gender={item.gender} type={item.type}/>
              </div>
              )
           })}
            </div>
       </>)
}

export default API