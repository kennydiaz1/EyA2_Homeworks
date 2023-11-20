import { doc } from "firebase/firestore";
import { db } from "./config";
import { collection, getDocs, addDoc, where, query } from "firebase/firestore/lite";
import { useState } from "react";

export const useCollection = (table) => {
    const [result, setResult] = useState([]);
    const [ error, setError ] = useState(null);
    const [ isPending, setIsPending ] = useState(false);

    const getAll = async (condition) => {
        setResult([])
        let resDocs = null, q = null;
        if (condition && condition.length == 3){
            q = query(collection(db, table), where(condition[0], condition[1], condition[2]));
        } else {
            q = collection(db, table);
        }
        resDocs = await getDocs(q);

        resDocs.forEach(doc => {
            setResult(list => [...list, {...doc.data(), id: doc.id}]);
        });
    }
    
    const add = async (doc) => {
        setError(null);
        setIsPending(true);
        try {
            let resDoc = await addDoc(collection(db, table), doc);
            console.log('document id: '+resDoc.id)
            setIsPending(false);
            return resDoc;
        }
        catch (err){
            console.log(err.message);
            setError('No se pudo agregar el documento');
            setIsPending(false);
            return resDoc;
        }
    }

    return {result, error, isPending, getAll, add};
}