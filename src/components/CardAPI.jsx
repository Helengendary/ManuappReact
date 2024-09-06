import style from './Card.module.css'

/* eslint-disable react/prop-types */
export const CardAPI = ({name, image,status, species, type, gender}) => {
  return(
      <div  className={style.cards}>
          <h1>{name}</h1>
          <p className={status ? style.bolinhaVermelha : style.bolinhaVerde}>⨂</p>
          <p>{species}</p>
          <p>{type}</p>
          <h2>{gender}</h2>
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}