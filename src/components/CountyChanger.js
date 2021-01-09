import { useState } from "react";

const CountyChanger = () => {

    const [countyID, setCountyID] = useState("")

    const handleCountyChange = (event) => {
        setCountyID(event.target.value)
    }

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