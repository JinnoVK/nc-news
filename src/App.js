import "./App.css";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import ArticleContainer from "./components/ArticleContainer";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/topics/:topic" element={<ArticleList />} />
        <Route path="/article/:articleID" element={<ArticleContainer />} />
      </Routes>
    </div>
  );
}

export default App;
