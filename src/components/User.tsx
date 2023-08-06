const user = {
    name: "julio",
    lastname: "alexandre"
}


function User() {
   return <span>{`${user.name} ${user.lastname}`}</span>
}
export default User;