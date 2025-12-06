import { BrowserRouter, Routes, Route } from "react-router-dom"
import Alta from "./components/Alta"
import CarritoDeCompras from "./components/CarritoDeCompras"
import Catalogo from "./components/Catalogo"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ContextAPIProvider from "./components/context/ContextAPI"

function App() {
  return (
    <ContextAPIProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Catalogo />} />
          <Route path={"/categoria/:id"} element={<Catalogo />} />
          <Route path={"/alta"} element={<Alta />} />
          <Route path={"/carrito"} element={<CarritoDeCompras />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextAPIProvider>
  )
}

export default App
