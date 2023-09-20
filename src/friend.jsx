export default function Friend (friend) {
    console.log(friend)
    const {name,email,id,phone} = friend.friend;
    return (
        <div className="box">
            <h3>Id : {id}</h3>
            <h4 style={{textAlign:"left"}}>Name : {name}</h4>
            <p style={{textAlign:"left"}}>Email : {email}</p>
            <p style={{textAlign:"left"}}>Phone : {phone}</p>
        </div>
    )
}