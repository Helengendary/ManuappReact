import style from './App.module.css'

function App() {

  return (
    <>
    <div className={style.headerFake}>
    <div className={style.wrapBtns}>
      <a className={style.botaun} href="/Produto">Produtos</a>
      <a className={style.botaun} href="/API">API</a>
      <a className={style.botaun} href="/Maps">Mapa</a>
      <a className={style.botaun} href="/Grafico">Gráficos</a>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
    </div>
    </div>
    </>
  )
}

export default App
