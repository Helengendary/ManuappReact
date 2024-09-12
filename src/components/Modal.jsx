import Draggable from 'react-draggable';
import style from './Card.module.css'

const Modal = (props) => {
    return(
        <>
        <Draggable>
        <div  className={style.cardsModal}>
          <h1>{props.data.name}</h1>
          <p className={props.data.status ? style.bolinhaVermelha : style.bolinhaVerde}>⨂</p>
          <p>{props.data.species}</p>
          <p>{props.data.type}</p>
          <h2>{props.data.gender}</h2>
          <img src={props.data.image} alt={props.data.name} width={150} height={"auto"}/>
        </div>
        </Draggable>
        </>
    )
}
export default Modal;