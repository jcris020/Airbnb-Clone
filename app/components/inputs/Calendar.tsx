'use client'

import { Range, RangeKeyDict, DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface calendarProps {
    value: Range;
    onChange: (value: RangeKeyDict) => void;
    disabledDates?: Date[]
}

function Calendar({ value, onChange, disabledDates }: calendarProps) {
    return (
        <DateRange 
            rangeColors={["#262626"]}
            ranges={[value]}
            date={new Date()}
            onChange={onChange}
            direction="vertical"
            showDateDisplay={false}
            minDate={new Date()}
            disabledDates={disabledDates}
        />
    )
}

export default Calendar
