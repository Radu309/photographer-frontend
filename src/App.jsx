import {Route, Routes} from "react-router-dom";
import Home from "/src/pages/Home.jsx"
import Header from "/src/components/Header.jsx"
import Contact from "./pages/Contact.jsx";
import "/src/styles/App.css"

const App = () => {

  return (
    <div className="app-container">
        <Header />
        <main className="main-content">
            <Routes>
                <Route path={"/photographer-frontend/"} element={<Home/>} />
                <Route path={"/photographer-frontend/contact"} element={<Contact/>} />
            </Routes>
        </main>
    </div>
  )
}

export default App
