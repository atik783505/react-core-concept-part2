import { use } from "react"

export default function Friend ({friendInfo}){

    const friend = use(friendInfo)
    

    return(
        <div>
            <h1>Friends: {friend.length}</h1>
        </div>
    )
}