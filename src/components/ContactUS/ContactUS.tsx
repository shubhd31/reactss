import * as React from 'react';
import './ContactUS.css';


const ContactUS = () => {
    const [name, setName] = React.useState("");
    const [value, setValue] = React.useState("");
    const display = () => {
        setName(value + " " + "your response has been submitted!")
    }

    return <div>
        <h2>{name}</h2>
        <div className="data">
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder='eg. Shubh Dave' onChange={e => setValue(e.target.value)} />
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='eg. shubh2020@gmail.com' />
            <label htmlFor="idea">Propose Your Idea:</label>
            <textarea name="idea" id="" cols={30} rows={10} placeholder='Write about your idea in brief!'></textarea>
            <button className="submit" type="button" onClick={display}>Submit</button>
        </div>
    </div>;
};
export default ContactUS;