// // ProfileForm.js
// import React, { useState } from 'react';

// const ProfileForm = () => {
//     const [companyName, setCompanyName] = useState('');
//     const [industry, setIndustry] = useState('');

//     const handleProfileSubmit = (e) => {
//         e.preventDefault();
//         // Add profile submission functionality here
//     };

//     return (
//         <form onSubmit={handleProfileSubmit}>
//             <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

// <br/><br/>

//             <input type="text" placeholder="Industry" value={industry} onChange={(e) => setIndustry(e.target.value)} />

//             <br/><br/>


//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default ProfileForm;



// ProfileForm.js
import React, { useState } from 'react';

const ProfileForm = ({ onSubmit }) => {
    const [companyName, setCompanyName] = useState('');
    const [industry, setIndustry] = useState('');

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        // Call the onSubmit function with form data
        onSubmit({ companyName, industry });
    };

    return (
        <form onSubmit={handleProfileSubmit}>
            <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            <br/><br/>
            <input type="text" placeholder="Industry" value={industry} onChange={(e) => setIndustry(e.target.value)} />
            <br/><br/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ProfileForm;
