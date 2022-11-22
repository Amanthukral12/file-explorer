import React, { useState } from "react";
import "../styles/folder.css";
const Folder = ({ explorer }) => {
  console.log(explorer);
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div className="container">
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
        </div>
        <div
          className="folderSubList"
          style={{ display: expand ? "block" : "none" }}
        >
          {explorer.items.map((exp, index) => {
            return (
              <span key={exp.id}>
                <Folder explorer={exp} />
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
};

export default Folder;
