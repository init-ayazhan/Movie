import { Route, Routes } from "react-router-dom"
import { ErrorPage, MovieDetailPage, MoviesPage} from "./pages"
import AboutPage from "./pages/AboutPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage />} />
      <Route path="/detail/:id" element={<MovieDetailPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>

  )
}

export default App
