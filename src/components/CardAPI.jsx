import style from './Card.module.css'
import { Tilt } from 'react-tilt'

/* eslint-disable react/prop-types */
export const CardAPI = ({name, image,status, species, type, gender}) => {
  console.log(status);
  return(
    <Tilt>
      <div  className={style.cards}>
          <h1>{name}</h1>
          <p className={status == 'Alive' ? style.bolinhaVerde : status == 'Dead' ? style.bolinhaVermelha : style.bolinhaCinza }>⨂</p>
          <p>{species}</p>
          <p>{type}</p>
          <h2>{gender}</h2>
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
    </Tilt>
  )
}