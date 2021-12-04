import { useState } from "react";

export const useFavourites = () => {
    const [favs, setFavs] = useState(localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites")) : []);
    localStorage.setItem("favourites", JSON.stringify(favs));

    const updateFavs = (proccess, value) => {
        if(proccess == "delete") {
            setFavs(favs.filter(item => item!=value));
            localStorage.setItem("favourites", JSON.stringify(favs))
        }
        else if(proccess == "add") {
            setFavs([...favs, value]);
            localStorage.setItem("favourites", JSON.stringify(favs));
        }
    }

    return [favs, updateFavs];

}