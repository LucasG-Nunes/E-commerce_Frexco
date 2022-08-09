import { NavLink } from "react-router-dom"
import { useContext } from "react"
import {InputContext} from "../../Context/InputContext"
const Navbar = () => {
  const {setInput}= useContext(InputContext)
  return (
    <nav className='Navbar'>
      <h1>FREXCO</h1>
      <input type='text' onChange={(event)=>{setInput(event.target.value)}} />
      <div className='Itens'>
        <NavLink className="NavLink" to="/">Home</NavLink>
        <NavLink className="NavLink" to="/carrinho">Carrinho</NavLink>
      </div>
    </nav>
  )
}

export default Navbar