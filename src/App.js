import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Roster from './components/Roster';

function App() {
  return (
    <div className="container">
      <div className="content-container">
        <Header />
        <Roster />
        <Footer />
      </div>
    </div>
  );
}

export default App;
