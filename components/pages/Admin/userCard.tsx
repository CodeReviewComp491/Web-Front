import React from 'react';

import * as Styled from 'components/pages/Admin/styles';

const userCard = ({ name, email, role, id }) => {
    return (
    <div style={{backgroundColor: 'white'}}>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{role}</p>
            <p>{id}</p>
        </div>
    </div>
);};

export default userCard;