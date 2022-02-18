import * as React from 'react';

const Blog = () => {
    const center: {} = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,50%)"
    }
    return <div>
        <h1 style={center}>This is blog page!</h1>
    </div>;
};

export default Blog;
