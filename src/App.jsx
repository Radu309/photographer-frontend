import {Route, Routes} from "react-router-dom";
import Home from "/src/pages/Home.jsx"
import Header from "/src/components/Header.jsx"
import Contact from "./pages/Contact.jsx";
import "/src/App.css"

const App = () => {

  return (
    <div className="app-container">
        <Header />
        <main className="main-content">
            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/contact"} element={<Contact/>} />
            </Routes>
        </main>
    </div>
  )
}

export default App
