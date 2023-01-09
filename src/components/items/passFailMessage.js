import React from "react"
function passFailMessage(result, itemName) {
  if (result === true) {
    return (
      <div className="result-message">
        The Chaos Scroll 60% lights up, and its mysterious energy transfers to {itemName}.
      </div>
    )
  } else if (result === false) {
    return (
      <div className="result-message">
        The Chaos Scroll 60% lights up, but nothing happens to {itemName}.
      </div>
    )
  } else {
    return (
      <div className="result-message">
         
      </div>
    )
  }
}

export default passFailMessage