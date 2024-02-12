// ProfileInfo.js
import React from 'react';

const ProfileInfo = ({ companyName, industry }) => {
    return (
        <div>
            <h2>Company Name: {companyName}</h2>
            <p>Industry: {industry}</p>
        </div>
    );
};

export default ProfileInfo;
