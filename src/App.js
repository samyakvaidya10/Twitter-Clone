import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <div className='container '>
        <div className='row'>  
          <div className='col-3'>
              <Sidebar />
          </div>
          
          <div className='col-6 layout p-0'>
                <Navbar />
                <h4 className='feed layout'> news feed</h4>
            
          </div>
              <div className='col d-none d-lg-block'>
              <form class="col d-flex " role="search">
                <input class="form-control-esm me-2 rounded-pill" type="search" placeholder="     Search Twitter" aria-label="Search" />
                {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                </form>
                <br></br>
                <h4>Whats happening</h4>
              </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
