import LoginPage from './pages/LoginPage'
import CardPage from './pages/CardPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/cards" element={<CardPage />}/>
        </Routes>
      
      </BrowserRouter>
  );
}

export default App
