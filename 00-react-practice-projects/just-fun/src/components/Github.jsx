import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    return (
        <>
            <p>
                name: {data?.login} <br />
                followers: {data?.followers}
                {!data && <p>fail to fetch</p>}
            </p>
        </>
    )
}

export default Github

export async function githubDataLoader() {
    try {
        const res = await fetch('https://api.github.com/users/LionInTheCity14')
        return await res.json()
    } catch (error) {
        throw new Error(error)
    }
}