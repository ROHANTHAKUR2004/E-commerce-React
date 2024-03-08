
import './App.css'
import Header from './components/Navbar/Header'
import Footer from './components/Navbar/footer/Footer';
import MainRoutes from './routes/MainRoutes';

function App() {
  

  return (
    <div className='app-wrapper'>
      <Header color="white" light={true} expand="md"  container="md"/>
        <MainRoutes/>
      <Footer/>
    </div>
  )
}

export default App;
