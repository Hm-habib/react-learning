import './App.css'
import NoteComponent from './component/notes/NoteComponent';

function App() {
  let user = "Someone Great";

  return (
    <div id='mainContainer'>
      <h1>Welcome to Notes</h1>
      <p>Hello, {user} </p>
      <NoteComponent/>
    </div>
  )
}

export default App
