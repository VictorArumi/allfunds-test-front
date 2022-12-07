import AppStyled from "./AppStyled";
import Header from "./components/Header/Header";
import NewsPage from "./pages/NewsPage/NewsPage";
import { Navigate, Route, Routes } from "react-router-dom";
import ArchivedNewsPage from "./pages/ArchivedNewsPage/ArchivedNewsPage";

function App() {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/news" />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/archived" element={<ArchivedNewsPage />} />
      </Routes>
    </AppStyled>
  );
}

export default App;
