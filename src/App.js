import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Nav from "./component/Nav";
import ViewContent from "./component/ViewContent";
import Writing from "./component/Writing";

function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/viewContent/:id" element={<ViewContent />} />
            </Routes>
        </div>
    );
}

export default App;
