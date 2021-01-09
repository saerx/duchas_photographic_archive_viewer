import { useState, useEffect } from "react";

const CountyChanger = ({changeCountyID}) => {

    const [countyID, setCountyID] = useState("100000")

    const handleCountyChange = (event) => {
        setCountyID(event.target.value)
    }

    useEffect ((countyID) => {
        changeCountyID(countyID)
    }, [countyID])


    return (

        <>
            <h1>County Changer </h1>
            <select name="county-changer"
                    onChange={handleCountyChange}>
                <option value="100000">Antrim</option>
                <option value="100001">Armagh</option>
                <option value="100002">Dublin</option>
                <option value="100003">Cavan</option>
                <option value="100004">Carlow</option>
                <option value="100005">Kerry</option>


            </select>

        </>
    )
};

export default CountyChanger;