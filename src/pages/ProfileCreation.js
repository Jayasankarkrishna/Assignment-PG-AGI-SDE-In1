// import React, { useState } from 'react';
// import ProfileForm from '../Components/Profile/ProfileForm';
// import ProfileInfo from '../Components/Profile/ProfileInfo';

// const ProfileCreation = () => {
//     const [companyName, setCompanyName] = useState('');
//     const [industry, setIndustry] = useState('');

//     const handleProfileSubmit = (data) => {
//         setCompanyName(data.companyName);
//         setIndustry(data.industry);
//     };

//     return (
//         <div>
//             <h1>Create Company Profile</h1>
//             <ProfileForm onSubmit={handleProfileSubmit} />
//             {companyName && industry && (
//                 <div>
//                     <h2>Profile Information</h2>
//                     <ProfileInfo companyName={companyName} industry={industry} />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProfileCreation;



// ProfileCreation.js
import React, { useState } from 'react';
import ProfileForm from '../Components/Profile/ProfileForm';
import ProfileInfo from '../Components/Profile/ProfileInfo';

const ProfileCreation = () => {
    const [companyName, setCompanyName] = useState('');
    const [industry, setIndustry] = useState('');

    const handleProfileSubmit = (data) => {
        setCompanyName(data.companyName);
        setIndustry(data.industry);
    };

    return (
        <div>
            <h1>Create Company Profile</h1>
            <ProfileForm onSubmit={handleProfileSubmit} />
            {companyName && industry && (
                <div>
                    <h2>Profile Information</h2>
                   <h3><ProfileInfo companyName={companyName} industry={industry} /></h3>
                </div>
            )}
        </div>
    );
};

export default ProfileCreation;
