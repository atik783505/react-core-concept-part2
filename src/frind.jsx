export default function Frind ({friend}){

    return(
        <div className="card">
            <h1>Name: {friend.name}</h1>
            <h4>email: {friend.email}</h4>
        </div>
    )
}