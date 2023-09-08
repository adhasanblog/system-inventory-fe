import './App.css'
import {Route, Routes} from "react-router-dom";
import Products from "./componets/Pages/Products.tsx";


function App() {



    return (
        <>
          <Routes>
            <Route path="/" element={<Products />} />
          </Routes>
        </>
    )
}

export default App
