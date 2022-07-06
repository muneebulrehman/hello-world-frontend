import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Greeting from './greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/greeting" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
