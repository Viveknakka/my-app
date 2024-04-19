//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
/*function Temp(props){
  return(
    <h1 className='para'>How are {props.name}</h1>
  );
}*/
function App() {
 return(
  <>
  <Navbar/>
  <TextForm/>
  </>
 );

 /*return (
    <>
    <Temp name="vivek"/>
    <h1>Hellow</h1>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <img src="dsfd" alt="imgee" />
    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore nam non fugiat. Eaque, dolorum optio. Repellendus consectetur, velit beatae quisquam pariatur accusamus, blanditiis autem iusto commodi nesciunt nulla aspernatur.</p>
    </>
  );*/
 /* return (
    <>
  
     <h1>hello</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React hello
        </a>
      </header>
    </div>
    </>
  );*/
}

export default App;
