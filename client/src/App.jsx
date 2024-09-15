import Logo from './assets/emoji.svg'
import Logo2 from './assets/migae-semibold-1.png'
import './App.css'

function App() {


  return (
    <>
      <div>
        <a>
          <img src={Logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>WELCOME TO</h1>
      <div className="card">
        <img src={Logo2} className='logo2'></img>
      </div>
      <button className="read-the-docs">
      Explore
      </button>
    </>
  )
}

export default App
