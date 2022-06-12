import { useState, React } from 'react'

const AddContactCounter = ({ countCurrentIds }) => {

  const [currentCount, setCurrentCount] = useState(countCurrentIds())

  return (
    <div className="add-title-section">
    <h2>Add Contact</h2>       
    <h4><span className="added-counter"
    style={{
      color: "white",
      backgroundColor: "blue",
      padding: "7px",
      width: "2em",
      borderRadius: "80px 80px"
    }}>
      {currentCount}</span> Contacts Saved
    </h4>
  </div>
  )
}

export default AddContactCounter