import { useAxios } from "../../Hooks/useAxios"
import { useContext } from "react"
import { CarrinhoContext } from "../../Context/CarrinhoContext"
import {InputContext} from "../../Context/InputContext"
const DisplayProdutos = () => {
  const {  setFruit } = useContext(CarrinhoContext); //tentei criar um context colocar em local storage e indo adicionando no carrinho
  const {input} = useContext(InputContext) // caso tenha algo no input fazer um filter mostrando os produtos que tenham a letra
  const { data } = useAxios()
  return (
    <>
    {data && !input ? 
    <div className="container">
    {data.map((produto) => (
      <div className="modalProduto">
        <img src={produto.image} alt="" />
        <div className="downModal">
          <div>
            <h4>{produto.name}</h4>
            <span>${produto.price}</span>
          </div>
          <button onClick={()=>{setFruit(produto._id)}}>Adicionar ao carrinho</button>
        </div>
      </div>
    ))}
  </div> 
  :null
 

  }

  {data && input ?
  <div className="container">
  {data.map((fruta)=>
    fruta.name.includes(input)?(
        <div className="modalProduto">
        <img src ={fruta.image} alt=""/>
        <div className="downModal">
          <div>
            <h4>{fruta.name}</h4>
            <span>${fruta.price}</span>
          </div>
          <button onClick={()=>{setFruit(fruta._id)}}>Adicionar ao carrinho</button>
        </div>
        </div>
    ): (console.log('null'))
  )}</div>
  :null
    }</>
)
}

export default DisplayProdutos
