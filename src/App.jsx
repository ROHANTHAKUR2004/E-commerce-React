
import './App.css'
import Header from './components/Navbar/Header'
import Footer from './components/Navbar/footer/Footer';
import Home from './pages/home/Home';

function App() {
  

  return (
    <div className='app-wrapper'>
      <Header color="white" light={true} expand="md"  container="md"/>
        <Home/>
      <Footer/>
    </div>
  )
}

export default App;
