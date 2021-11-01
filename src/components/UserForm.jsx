import React, { useState } from  'react';
    
    
const UserForm = (props) => {
//     const [firstName, setfirstName] = useState("");
//     const [lastName, setlastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");  
//     const [confirmPassword, setconfirmPassword] = useState("");  

    const [formInfo, setFormInfo] = useState({  
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleFormChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }
    // onChange={ (e) => setfirstName(e.target.value) }
    
    const createUser = (e) => {
        
        e.preventDefault();
        const newUser = {
            user1: formInfo
        }
        console.log(newUser);
//         const newUser = { firstName, lastName, email, password, confirmPassword};
//         console.log("Welcome", newUser);
    };

    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input name="firstName" type="text" onChange={ handleFormChange} />
                    {
                        formInfo.firstName.length<2 && formInfo.firstName.length!=0?
                            <p>Field must be at least 2 characters</p>:
                            <p></p>
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input name="lastName" type="text" onChange={ handleFormChange} />
                    {
                        formInfo.lastName.length<2&&formInfo.lastName.length!=0?
                            <p>Field must be at least 2 characters</p>:
                            <p></p>
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input name="email" type="text" onChange={ handleFormChange} />
                    {
                        formInfo.email.length<5&&formInfo.email.length!=0?
                            <p>Field must be at least 5 characters</p>:
                            <p></p>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input name="password" type="text" onChange={ handleFormChange} />
                    {
                        formInfo.password.length<8&&formInfo.password.length!=0?
                            <p>Field must be at least 8 characters</p>:
                            <p></p>
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input name="confirmPassword" type="text" onChange={ handleFormChange} />
                    {
                        formInfo.confirmPassword.length<8&&formInfo.confirmPassword.length!=0?
                            <p>Field must be at least 8 characters</p>:
                            <p></p>
                    }
                    {
                        formInfo.confirmPassword!=formInfo.password?
                            <p>Must match password</p>:
                            <p></p>
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <p>First Name: {formInfo.firstName}</p>
                <p>Last Name: {formInfo.lastName}</p>
                <p>Email Address: {formInfo.email}</p>
                <p>Password: {formInfo.password}</p>
                <p>Confirm Password: {formInfo.confirmPassword}</p>
            </div>
        </>
    );
};
    
export default UserForm;
