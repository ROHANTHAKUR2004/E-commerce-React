
import './App.css'
import Header from './components/Navbar/Header'
import Footer from './components/Navbar/footer/Footer';

function App() {
  

  return (
    <div className='app-wrapper'>
      <Header color="white" light={true} expand="md"  container="md"/>
      <div>
        Some content
      </div>
      <Footer/>
    </div>
  )
}

export default App;
