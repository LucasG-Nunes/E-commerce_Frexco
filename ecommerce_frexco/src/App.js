
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Carrinho from "./Pages/Carrinho/Carrinho";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
