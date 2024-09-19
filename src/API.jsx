import { useState, useEffect } from 'react'
import {CardAPI} from './components/CardAPI'
import { api } from "./api/rmApi"
import App from './App'
import style from './App.module.css'
import Modal from './components/Modal'

function API() {
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [name, setName] = useState("")

    const [modal, setModal] = useState();
        
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
    {modal !== undefined && <Modal data={data[modal]} close = {() => setModal()}/>}
    <App/>
        <div className={style.rick}>
          <h2>Rick and Morty API</h2>
            <div>
               <input style={{padding: '1%', margin: '1%', fontSize: '20px'}} type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}
               />
               <input style={{padding: '1%', margin: '1%', fontSize: '20px'}} type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className={style.config}>
            {data.map((item, index) => { 
             return(
              <div key={item.id} onClick={() => setModal(index)}>
                <CardAPI name={item.name} status={item.status} desc={item.species} value={item.gender} image={item.image} species={item.species} gender={item.gender} type={item.type}/>
              </div>
              )
           })}
            </div>
        </div>
       </>)
}

export default API;