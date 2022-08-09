import DisplayProdutos from "../../Components/DisplayProdutos/DisplayProdutos"
import Navbar from "../../Components/Navbar/Navbar"
import image from "../../Images/personFruits.png"
const Home = () => {

  return (
    <container>
        <Navbar/>
        <section className="containerIntrodutorio">
          <div className="text">
            <span>HortiFruit Ecommerce</span>
            <p>uma vida melhor começa por uma alimentação saudável</p>
          </div>
          <div className="image">
            <img src={image} alt="personfood" />
          </div>
        </section>
        <DisplayProdutos/>
        <footer>
          <p>
            <span>Desenvolvido por Lucas Gabriel @ 2022</span>
          </p>
        </footer>
    </container>
  )
}

export default Home