import Navbar from "../../Components/Navbar/Navbar"
import image from "../../Images/personFruits.png"
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="containerIntrodutorio">
          <div className="text">
            <span>teste</span>
            <p>Lorem ipsum dolor etc</p>
          </div>
          <div className="image">
            <img src={image} alt="personfood" />
          </div>
        </div>
    </div>
  )
}

export default Home