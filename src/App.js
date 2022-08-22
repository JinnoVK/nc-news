import "./App.css";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/topics/:topic" element={<ArticleList />} />
      </Routes>
    </div>
  );
}

export default App;
