
import './App.css';
import Footer from './components/base/Footer';
import Navbar from './components/base/Navbar';
import {Routes, Route} from 'react-router-dom';
import routes from './routes';

function App() {
 
  return (
    <>
      <Navbar/>
      <Routes>
        {routes.map((item,index) => <Route key= {index}  path={item.path} element= {<item.element />} />)}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
