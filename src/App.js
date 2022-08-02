import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import AddStudent from './Components/AddStudents';
import EditStudent from './Components/EditStudents';
import { GlobalProvider } from './Context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ maxWidth: '30rem', margin: '4rem auto' }}>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/AddStudent' element={<AddStudent />} />
            <Route path='/EditStudent/:id' element={<EditStudent />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>

  );
}

export default App;
