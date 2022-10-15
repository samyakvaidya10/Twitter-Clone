import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
              <Sidebar />
          </div>
          <div className='col'>
            <div className='col'>
                <Navbar />
            </div>
            <div className='row'>
              <div className='col-8 feed'>
                <h4>news feed</h4>
              </div>
              <div className='col feed'>
                <h4>Whats happening</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
