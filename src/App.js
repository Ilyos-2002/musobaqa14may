import { Route, Router, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home, Blog, Cource, NotFound } from './Pages';

function App() {
  return (
    <Router>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/course' element={<Cource />} />
      <Route path='*' element={<NotFound />} />

    </Router>
  );
}

export default App;
