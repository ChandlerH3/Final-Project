import { useState, useEffect } from "react"

export const Homepage = () => {
    const [message, setMessage] = useState('No messages')
    useEffect(() => {
        fetch('/fetch-message').then(res => res.json()).then(data => setMessage(data.message)).catch(e => console.log('Got error', e))
        }, [])
    return (
        <>{message}</>
    )
}