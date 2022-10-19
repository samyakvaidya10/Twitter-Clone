import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed/Feed';
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
                <Feed />
            
          </div>
              <div className='col d-none d-lg-block'>
              <form className="col d-flex " role="search">
                <input className="form-control-esm me-2 rounded-pill" type="search" placeholder="     Search Twitter" aria-label="Search" />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
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
