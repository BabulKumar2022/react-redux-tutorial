import React from 'react';

const First = (props) => {
const {name, email, phone}= props;
    return (
        <div>
       
            <h2>Name: {name} </h2>
            <h2>Email: {email} </h2>
            <h2>Phone: {phone} </h2>
        </div>
    );
};

export default First;