import React from "react";
import ReactDOM from "react-dom/client";

const Book = () => {
  return (
    <article>
        <div>
            <p>HELLO WORLD!</p>
        </div>
    </article>
  )
}


export default Book

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Book/>)