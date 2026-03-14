import { use } from "react"

export default function Users ({userData}) {

    const user = use(userData)
    console.log(user)

    return (
        <div>
            <h1>User: {user.length}</h1>
        </div>
    )
}