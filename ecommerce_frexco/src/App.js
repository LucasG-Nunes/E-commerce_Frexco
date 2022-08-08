import { useAxios } from "./Hooks/useAxios";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home";

function App() {
  const {data} = useAxios();
  console.log(data)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
