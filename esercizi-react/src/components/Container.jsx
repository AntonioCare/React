import { useState } from "react";
export default function Container({ title, children }) {
  const [collapse, setCollapse] = useState(false);

  function handleCollapse() {
    setCollapse((t) => !t);
  }
  return (
    <div className="container">
      <div className="Title-container">
        {<button onClick={handleCollapse}>{title}</button>}
      </div>
      {collapse && children}
    </div>
  );
}
