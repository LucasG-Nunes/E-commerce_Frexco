import React from 'react'

const ModalCEP = ({setModalCep}) => {

  return (
 
       <div className='fade'>
        <div className="modal">
          <div className="header">
            <h1>Dados do cartão</h1>
            <button onClick={()=>{setModalCep(false)}}>x</button>
          </div>
        <form>
          <div>
          <label htmlFor="">Com que cartões você pode pagar</label>
          <select name="" id="">
          <option value="">Visa</option>
          <option value="">Mastercard</option>
          <option value="">3</option>
          </select>
          </div>
          <label htmlFor="">Numero do cartão:</label>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
        </div>
    </div>

  )
}

export default ModalCEP