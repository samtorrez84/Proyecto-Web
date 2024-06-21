import { BrowserRouter, Routes, Route } from "react-router-dom" //Librería para enrutado
import { AuthProvider } from "./context/AuthContext"
//importación de paginas
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import MainPage from "./pages/MainPage"
import TestPage from "./pages/TestPage"

import ProtecterRouter from "./ProtecterRouter"

import Layout from "./components/Layout"

function App(){
  return (
    //Todos los componentes dentro de AuthProvider pueden acceder al contexto
    <AuthProvider> 
      <BrowserRouter> 
      {/* Configuración de rutas */}
      {/* Se crean multiples rutas y después una a una*/}
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage/>}/> {/* Ruta inicial que ejecuta un element que nos lleva a la página de */}
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/> {/* Ruta inicial que ejecuta un element que nos lleva a la página de RegisterPage */}
            <Route path='/test' element={<TestPage/>}/>

            <Route element={<ProtecterRouter/>}>
              <Route path='/main' element={<MainPage/>}/>
              <Route path='/profile' element={<ProfilePage/>}/>
            </Route>
            
            {/* <Route path='/inicio' element={<h1> Hola1 </h1>}/> */}
          </Routes>
        </Layout>
      </BrowserRouter>  {/*Configuración */}
    </AuthProvider>
  )
}

export default App