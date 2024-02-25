import { useParams } from "react-router-dom"

export default function User(){
    const {userId, userName} = useParams()
    return (
        <div>
            User: {userId} and {userName}
        </div>
    )
}