import { BrowserRouter, Routes, Route } from "react-router-dom" //Librería para enrutado
import { AuthProvider } from "./context/AuthContext"

//importación de paginas
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

function App(){
  return (
    //Todos los componentes dentro de AuthProvider pueden acceder al contexto
    <AuthProvider> 
      <BrowserRouter> 
      {/* Configuración de rutas */}
      {/* Se crean multiples rutas y después una a una*/}
      <Routes>
        <Route path='/' element={<h1> Inicio </h1>}/> {/* Ruta inicial que ejecuta un element que nos lleva a la página de */}
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/> {/* Ruta inicial que ejecuta un element que nos lleva a la página de RegisterPage */}
        <Route path='/profile' element={<h1> Perfil </h1>}/>
        <Route path='/inicio' element={<h1> Hola </h1>}/>
        {/* <Route path='/inicio' element={<h1> Hola1 </h1>}/> */}
      </Routes>
    </BrowserRouter>  {/*Configuración */}
    </AuthProvider>
  )
}

export default App