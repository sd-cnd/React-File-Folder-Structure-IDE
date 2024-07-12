import "./App.css";
import Folder from "./components/Folder";
import explorer from "./data/folderData";

function App() {

  return (
    <div className="App">
      <span className="text">File folder structure implementation as present in IDE</span>
      <Folder explorer={explorer}/>
    </div>
  );
}

export default App;