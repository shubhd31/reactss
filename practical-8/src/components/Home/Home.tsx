import * as React from 'react';
import './Home.css'
const Home = () => {
    const [info, setInfo] = React.useState('"Great software is built by great teams. We help build and manage a team of world-class developers to bring your vision to life!"')
    return (
        <>
            <p className="Homep">{info}</p>
        </>
    )
};
export default Home;
