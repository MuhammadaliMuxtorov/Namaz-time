import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Time.css";

function Times() {
    const [time, setTime] = useState({});
    const [inputVal, setInputVal] = useState("")
    const [query, setQuery] = useState("Bukhara")
    const [error, setError] = useState("");
    const Api_Key = "bba7ab9bd035d049765305fef6073578";
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(inputVal);
    };

    useEffect(() => {
        axios
            .get(
                `https://muslimsalat.com/${query}.json?key=${Api_Key}`
            )

            .then((res) => {
                setTime(res.data);
                setError("")
            })
            .catch((err) => setError("Aniqroq Yozing!!!"));
    }, [query]);
    console.log(time)
    return (
        <div className="time-page">
            <h1>Namoz Vaqtlari</h1>
            <div className="time-card">
                <form action="" onSubmit={handleSubmit}>
                    <input onChange={(e) => setInputVal(e.target.value)} type="text" placeholder='Write...' />
                </form>
                {error && <h3>{error}</h3>}
                <h2>City:{time.city}</h2>
                <h2>Title: {time.country}</h2>
                <h3>Date: {time.items[0].date_for}</h3>
                <h3>Fajr: {time.items[0].fajr}</h3>
                <h3>Dhuhr: {time.items[0].dhuhr}</h3>
                <h3>Isha: {time.items[0].isha}</h3>
                <h3>Maghrib: {time.items[0].maghrib}</h3>
                <h3>Shurooq: {time.items[0].shurooq}</h3>
        
                </div>
        </div>
    );
}

export default Times