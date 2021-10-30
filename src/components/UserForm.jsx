import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setconfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
    };

    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setfirstName(e.target.value) } />
                    {
                        firstName.length<2&&firstName.length!=0?
                            <p>Field must be at least 2 characters</p>:
                            <p></p>
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setlastName(e.target.value) } />
                    {
                        lastName.length<2&&lastName.length!=0?
                            <p>Field must be at least 2 characters</p>:
                            <p></p>
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                    {
                        email.length<5&&email.length!=0?
                            <p>Field must be at least 5 characters</p>:
                            <p></p>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                    {
                        password.length<8&&password.length!=0?
                            <p>Field must be at least 8 characters</p>:
                            <p></p>
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setconfirmPassword(e.target.value) } />
                    {
                        confirmPassword.length<8&&confirmPassword.length!=0?
                            <p>Field must be at least 8 characters</p>:
                            <p></p>
                    }
                    {
                        confirmPassword!=password?
                            <p>Must match password</p>:
                            <p></p>
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email Address: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    );
};
    
export default UserForm;
