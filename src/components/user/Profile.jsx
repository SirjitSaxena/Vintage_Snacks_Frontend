import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Profile = () => {
    const {user}=useContext(AppContext)
  return (
    <>
    <div className="container text-center my-5">
        <h1>Welcome, {user?.name}</h1>
        <h2>{user?.email}</h2>
    </div>
    <div className="desc">
    <h3 className='my-3' style={{textAlign:'center'}}>Watch our business document here. <button><a href="https://www.canva.com/design/DAFfCxc0K7E/4UTXfWqOflRTX75nnxpFkA/edit">PDF</a></button> </h3>
    <h3  style={{textAlign:'center'}}>Here's our feasibility analysis and how we are empowering lives. <button><a href="https://www.canva.com/design/DAFfJsmZ-s8/9ROJ9o2lN1NhAQzCMNXnMA/edit">PDF</a></button> </h3>
    </div>
    </>
  )
}

export default Profile