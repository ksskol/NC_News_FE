import { useEffect, useState } from "react";
import { getAllUsers } from "../../../api";

export default function Login(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then((usersData) => {
            console.log(usersData.data)
            setUsers(usersData.data);
        });
    }, []);

    return(
        <div>
            here is log in
        </div>
    )
}