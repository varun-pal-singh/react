import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId, userName} = useParams()
    return (
        <div>UserId : {userId} and Usename = {userName} </div>
    )
}

export default User