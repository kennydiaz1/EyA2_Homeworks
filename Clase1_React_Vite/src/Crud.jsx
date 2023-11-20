import React, { useState, useEffect } from 'react'
import {useCollection} from './firebase/firestore'

export const Crud = () => {
    const [user, setUser] = useState({name:""});
    const {add, getAll, isPending, error} = useCollection("users");

    const getAllDocs = async () => {
        await getAll([]);

    }

    const save = async () => {
        await add(user);
        await getAllDocs();
    }

    const handleSetUser = (event) => {
        setUser({name: event.target.value});
    }

    useEffect(() => {
        getAllDocs();
    }, []);

    return (
        <>
        <input type="text" onChange={handleSetUser} value = {user.name} />
        <button onClick={save}>Save...</button>
        {
            isPending ? <span> Cargando . . .</span> :""
        }
        <ul>
            {
                results.map((item) => {
                    return <il key = {item.id} >{JSON.stringify(item)}</il>
                })
            }
            </ul>
        </>
    )
}
