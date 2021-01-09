import { useState, useEffect } from 'react'

const DateRangeChanger = ({changeParentDateRange}) => {

    const [startDate, setStartDate] = useState("1930")

    const handleDateChange = (event) => {
        setStartDate(event.target.value)
    }

    useEffect ((startDate) => {
        changeParentDateRange(startDate)
    }, [startDate])

    return (
        <> 
            <label>Change Decade: </label>
            <select name="decade-changer"
                    onChange={handleDateChange}
            >
                    
                <option value="1930">1930s</option>
                <option value="1940">1940s</option>
                <option value="1950">1950s</option>
                <option value="1960">1960s</option>
                <option value="1970">1970s</option>
                <option value="1980">1980s</option>


            </select>
        </>
    )
};

export default DateRangeChanger;