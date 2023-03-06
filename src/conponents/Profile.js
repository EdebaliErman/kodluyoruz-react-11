import React, { useState } from 'react'
import { useUser } from '../context/UserContext'


function Profile() {

    const { user, setUser } = useUser()
    console.log(user)
    const [loading, setLoading] = useState(false)
    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({ id: 1, username: "edebali54", bio: "lorem ipsum" })
            setLoading(false)
        }, 1500);

    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>

            {
                !user && (
                    <button onClick={handleLogin}>
                        {loading ? "Loading...." : "login"}
                    </button>
                )
            }

            {
                user && <button onClick={handleLogout}>Logout</button>
            }<br></br>
            {JSON.stringify(user)}
        </div>
    )
}

export default Profile
