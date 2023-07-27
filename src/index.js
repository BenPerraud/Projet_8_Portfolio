import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Accueil from './pages/acceuil'
import Presentation from './pages/presentation'
import Competences from './pages/competences'
import Realisations from './pages/realisations'
import Header from './components/header'
import Footer from './components/footer'
import { ThemeProvider } from '@emotion/react'
import theme from "./style/theme"


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/realisations" element={<Realisations />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
)
