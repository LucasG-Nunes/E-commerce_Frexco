import Navbar from "../../Components/Navbar/Navbar"
import { useContext } from "react"
import { CarrinhoContext } from "../../Context/CarrinhoContext"
import { useAxiosParams } from "../../Hooks/useAxios"
import { useState } from "react"
import Modal from "../../Components/ModalCompra/Modal"
import ModalCEP from "../../Components/ModalCep/ModalCEP"

const Carrinho = () => {
  const { fruit, setFruit } = useContext(CarrinhoContext);
  const { data } = useAxiosParams(fruit);
  const [plus, setPlus] = useState(1)
  const [modal, setModal] = useState(false)
  const [modalCEP,setModalCep] = useState(false)
  return (
    <div className="background">
      <Navbar />

      {!fruit && <p className="avisoVazio">Não há nada no seu carrinho!</p>}

      {data ?

        <container className={"containerCarrinho"}>
          <div>
            <img src={data.image} alt="ImagemFruta" />
          </div>
          <section className="Informations">

            <article className="header">
              <h4>{data.name}</h4>
              <button onClick={() => {
                setFruit('')
                window.location.reload();
              }}>x</button>
            </article>

            <article className="nutritions">
              <span>Valor: ${data.price}</span>
              <span>Calorias: {data.nutritions.calories}</span>
              <span>Gordura: {data.nutritions.fat}</span>
              <span>Carboidrato: {data.nutritions.carbohydrates}</span>
              <span>Proteina:{data.nutritions.protein}</span>
              <span>Açucar: {data.nutritions.sugar}</span>
            </article>

            <span className="Quantidade">Quantidade: {plus}</span>

            <div className="buttons">

              <button onClick={() => {
                setPlus(plus + 1)
              }}>+</button>
              <button onClick={() => {
                setPlus(plus - 1)
              }}>-</button>

            </div>

            <span className="valorTotal">Valor Total: $ {data.price * plus}</span>

            {plus > 0 ?
              <div className="buttonsConfirmarCompra">
                <button onClick={() => { setModal(true) }}>Confirmar Compra</button>
                <button onClick={()=> {setModalCep(true)}} >Simular Frete</button>
              </div>
              :
              null
            }

            {modal ?
              <Modal setModal={setModal} />
              :
              null}
            {
              modalCEP?
              <ModalCEP setModalCep={setModalCep}/>
              :
              null
            }
              
          </section>
        </container>
        : null}
    </div>
  )
}

export default Carrinho