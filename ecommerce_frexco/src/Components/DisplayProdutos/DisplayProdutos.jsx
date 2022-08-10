import { useAxios } from "../../Hooks/useAxios"
import { useContext } from "react"
import { CarrinhoContext } from "../../Context/CarrinhoContext"
import { InputContext } from "../../Context/InputContext"
import { NavLink } from "react-router-dom"
const DisplayProdutos = () => {
  const { setFruit } = useContext(CarrinhoContext);
  const { input } = useContext(InputContext)
  const { data } = useAxios()
  return (
    <>
      {data && !input ?
        <container className="container">
          {data.map((produto) => (
            <section className="modalProduto">
              <img src={produto.image} alt="" />
              <div className="downModal">
                <div>
                  <h4>{produto.name}</h4>
                  <span>${produto.price}</span>
                </div>
                <NavLink to="/carrinho">
                  <button onClick={() => { setFruit(produto._id) }}>+</button>
                </NavLink>
              </div>
            </section>
          ))}
        </container>
        : null
      }

      {data && input ?
        <container className="container">
          {data.map((fruta) =>
            fruta.name.includes(input) ? (
              <section className="modalProduto">
                <img src={fruta.image} alt="" />
                <div className="downModal">
                  <div>
                    <h4>{fruta.name}</h4>
                    <span>${fruta.price}</span>
                  </div>
                  <NavLink to="/carrinho">
                    <button onClick={() => { setFruit(fruta._id) }}>+</button>
                  </NavLink>
                </div>
              </section>
            ) : (console.log('null'))
          )}</container>
        : null
      }</>
  )
}

export default DisplayProdutos
