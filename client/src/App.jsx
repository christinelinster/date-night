import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home';
import '../src/styles/App.css'

function App() {

  return (
    <>
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
