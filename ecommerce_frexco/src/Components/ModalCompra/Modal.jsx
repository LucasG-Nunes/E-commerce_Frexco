

const Modal = ({setModal}) => {
  return (
    <div className='fade'>
        <div className="modal">
          <div className="header">
            <h1>Dados do cartão</h1>
            <button onClick={()=>{setModal(false)}}>x</button>
          </div>
        <form>
          <label htmlFor="">Numero do cartão:</label>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
        </div>
    </div>
  )
}

export default Modal