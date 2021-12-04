import {useState} from "react";

export const useLocalStorage = (key, initial_values) => {
    const [storage, setStorage] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initial_values);

    localStorage.setItem(key, JSON.stringify(storage));

    const updateStorage = (value)  => {
        if(storage.length < 3) storage.push(value);
        else {
            storage.shift();
            storage.push(value);
        }
        localStorage.setItem(key, JSON.stringify(value));
        setStorage(storage);
    }

    return [storage, updateStorage];
}