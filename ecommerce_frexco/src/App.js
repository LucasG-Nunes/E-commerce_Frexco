import { useAxios } from "./Hooks/useAxios";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  const {data} = useAxios();
  console.log(data)
  return (
    <div className="App">
     <h2>Iniciando o desenvolvimento</h2>
     <Navbar/>
    </div>
  );
}

export default App;
