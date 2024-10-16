import Footer from "./component/Footer"
import Header from "./component/Header"
import Manga from "./component/Manga"

import Landing from "./component/Landing"
import {BrowserRouter, Routes,Route} from "react-router-dom" 
function App() {

  return (
   
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={ <Landing/>}/>
      <Route path='/manga'element={ <Manga/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
  
  )
}

export default App
