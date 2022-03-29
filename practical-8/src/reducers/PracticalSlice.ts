import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        id: 1,
        title: "Practical - 1",
        description: "Created an App with CRA and deployed it to Netlify",
        image: "https://github.com/shubhd31/reactssextra/blob/0ebbbe54a7667757b58811b64e3ba01ab302ba9f/prac_1.png?raw=true",
        demoLink: "https://react-pract1.netlify.app/",
    },
    {
        id: 2,
        title: "Practical - 2",
        description: "Created a React App from scratch using a flexible toolchain",
        image: "https://github.com/shubhd31/reactssextra/blob/Practical-SS/prac_2.png?raw=true",
        demoLink: "https://loving-kare-8a835a.netlify.app/AboutUS",
    },
    {
        id: 3,
        title: "Practical - 3",
        description: "Added functionality to To-do list created in Practical-4",
        image: "https://github.com/shubhd31/reactssextra/blob/Practical-SS/prac_3.png?raw=true",
        demoLink: "https://jolly-goldstine-978839.netlify.app/Todo"
    },
    {
        id: 4,
        title: "Practical - 4",
        description: "Designed and created a layout for a simple To-do list",
        image: "https://github.com/shubhd31/reactssextra/blob/Practical-SS/prac_4.png?raw=true",
        demoLink: "https://serene-fermat-ff93be.netlify.app/",
    },
    {
        id: 5,
        title: "Practical - 5",
        description: "Created a Userlist App with boilerplate having hover effect",
        image: "https://github.com/shubhd31/reactssextra/blob/Practical-SS/prac_5.png?raw=true",
        demoLink: "https://heuristic-elion-12ee96.netlify.app/",
    },
    {
        id: 6,
        title: "Practical - 6",
        description: "Added dynamic data and API implementation to Userlist App",
        image: "https://github.com/shubhd31/reactssextra/blob/Practical-SS/prac_%206.png?raw=true",
        demoLink: "https://react-practical-6.netlify.app/",
    },
    {
        id: 7,
        title: "Practical - 7",
        description: "Deployment Practise where app deployed to 5 cloud platforms",
        image: "https://github.com/shubhd31/reactssextra/blob/Practical-SS/prac_7.png?raw=true",
        demoLink: "https://deploymentfinal.netlify.app/",
    },
];
const recordSlice = createSlice({
    name: "practicals",
    initialState,
    reducers: {},
});



export default recordSlice.reducer;