import { Route, Routes } from "react-router-dom"
import { Menu } from "../../shared/Menu/Menu"
import { Home } from "../../Home/Home"
import { Footer } from "../../shared/Footer/Footer"

export function Rutas() {
    return (
        <>       
        <Menu /> 
        <Routes>
            <Route path="/" element={<Home />} />            
        </Routes>   
        <Footer></Footer>     
        </>
    )
}