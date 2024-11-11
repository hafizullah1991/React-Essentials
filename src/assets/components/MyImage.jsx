import React from 'react'
const userData = {
    name: "hafiz",
    lastName : "Amiri",
    Job: "Sotware Developer",
    
}
const MyImage = () => {
  return (
    <div>
      <h2>you new instructor is {userData.lastName}</h2>
      
    </div>
  )
}

export default MyImage
