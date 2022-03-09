import * as React from 'react';


const months = ['January', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];

const d = new Date();
const date = d.getDate();
const year = d.getFullYear();
const month = months[d.getMonth()].toUpperCase();
const day = weekdays[d.getDay()].toUpperCase();

const dayStyle = {
    fontSize: "12px",
}
const dateYear = {
    lineHeight: "1.2",
    fontSize: "12px",
    marginTop: "9px",
    marginLeft: "5px"
}


const HeaderDate = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="row ml-2 align-items-center">
                    <h1 className="col font-weight-bold p-0" style={{ fontSize: "2rem" }}>{date}</h1>
                    <span className="col justify-content-inline p-0">
                        <p className=" text-muted" style={dateYear}>
                            <span className=" text-black">
                                {month}
                            </span>
                            <br />
                            {year}
                        </p>
                    </span>
                </div>
                <p className="font-weight-bold mt-1 text-muted" style={dayStyle}>{day}</p>
            </div>
        </div>
    )
}

export default HeaderDate