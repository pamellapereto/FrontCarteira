import { useEffect, useState } from "react";
import Balance from "./Balance";
import Cards from "./Cards";
import Panel from "./Panel";
import Plans from "./Plans";
import Waitlist from "./Waitlist";
import {path} from "../../config/path";

export default function Container() {
    const [datacards,setDataCards] = useState ([]);
    

    useEffect(() => {
        fetch(`${path}wallet/list/user/629510eb329d001ac6028066`, {
            method: "GET",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTUxMGViMzI5ZDAwMWFjNjAyODA2NiIsInVzZXIiOiJqb8OjbyIsImVtYWlsIjoiam9hb0BnbWFpbC5jb20iLCJpYXQiOjE2NTQ4ODg5NTMsImV4cCI6MTY1NTA2MTc1M30.WbHh6HdunETM0iCKrUbjiZ8lPVV80139UEq0IUxP4V0"
            }
        })
        .then ((result) => result.json())
        .then ((data) => {
            console.log(data.payload);
            setDataCards(data.payload);

        }).catch((err) => console.error(`Error at loading API ➙ ${err}`));
    },[])

    const [balance, setBalance] = useState ([]);

    const mudarDados = (content) =>  {
        setBalance(content);
      }


    return (
        <div className="container">
            <Cards data = {datacards} action = {mudarDados}/>
            <Panel data = {balance} />
            <Waitlist />
            <Plans />
            <Balance data = {balance} />
        </div>
    )

}