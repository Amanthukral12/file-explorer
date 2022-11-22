import { useState } from "react";
import "./App.css";
import Folder from "./components/Folder";
import explorer from "./Data/folderData";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
