import { BrowserRouter, Routes, Route } from "react-router-dom" //Librería para enrutado
import { AuthProvider } from "./context/AuthContext"
//importación de paginas
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import UpdateUserName from "./pages/UpdateUserNamePage"
import EquiposPage from "./pages/EquiposPage"
import StatisticsPage from "./pages/StatisticsPage"
import ProtecterRouter from "./ProtecterRouter"
import NotFoundPage from "./pages/NotFounPage"

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

            <Route element={<ProtecterRouter/>}>
              <Route path='/equipos' element={<EquiposPage/>}/>
              <Route path='/profile' element={<ProfilePage/>}/>
              <Route path="/updateUserName" element={<UpdateUserName/>}/>
              <Route path="/estadisticas" element={<StatisticsPage/>}/>
            </Route>
            
            {/* <Route path='/inicio' element={<h1> Hola1 </h1>}/> */}
          <Route path="*" element={<NotFoundPage />} /> {/* Ruta para manejar páginas no encontradas */}
          </Routes>
        </Layout>
      </BrowserRouter>  {/*Configuración */}
    </AuthProvider>
  )
}

export default App