import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className='container'>
      <DataProvider>
        <Header title='Task Tracker' />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
