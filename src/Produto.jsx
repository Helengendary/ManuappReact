import produtos from './constants/produtos.json'
import {Card} from './components/Card'
import style from './App.module.css'
import App from './App'

function Produto() {
    return (
        <>
          <App/>
          <div className={style.prods}>
            <h2>Showroom de produtos</h2>
              <div className={style.config}>
              {produtos.map((item) => {
                return(
                  <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status}/>
                )
              })}
              </div>
          </div>
        </>
    )
}

export default Produto