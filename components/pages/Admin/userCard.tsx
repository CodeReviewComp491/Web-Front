import React from 'react';

import * as Styled from 'components/pages/Admin/styles';

const userCard = ({ name, email, role, id }) => {
    return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{role}</p>
            <p>{id}</p>
        </div>
    </div>
);};

export default userCard;