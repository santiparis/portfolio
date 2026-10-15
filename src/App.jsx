import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
