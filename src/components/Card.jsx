import style from './Card.module.css'

/* eslint-disable react/prop-types */
export const Card = ({name, image, desc, value, status}) => {
  return(
      <div  className={style.cards}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <p>{value}</p>
          <p className={status ? style.bolinhaVermelha : style.bolinhaVerde}>⨂</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}