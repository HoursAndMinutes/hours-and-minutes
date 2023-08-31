import {useState, useEffect} from "react"

const AdminUserList = () => {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const result = await fetch("./api/users");
            const data = await result.json();
            setUserList(data)
        };
        fetchUsers();
    }, [])

    //TO DO: put section in scroll bar so it doesnt take infinite space
    //TO DO: Loop through all users
    return (
        <section>
            <h2>All Users</h2>
            {
                userList.map((user) => (
                    <ul key={user.id}>
                        <li>Name: {user.firstname} {user.lastname}</li>
                        <li>Email: {user.email}</li>
                    </ul>
                ))
            }
        </section>
    )
}

export default AdminUserList