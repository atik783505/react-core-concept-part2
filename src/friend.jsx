import { use } from "react"
import Frind from "./frind"

export default function Friend ({friendInfo}){

    const friends = use(friendInfo)
    

    return(
        <div>
            <h1>Friends: {friends.length}</h1>
            {
                friends.map(friend => <Frind friend={friend}></Frind>)
            }
        </div>
    )
}