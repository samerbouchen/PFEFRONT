import React, { userState, useState } from 'react';

function LoginForm({ Login, error }) {
const[details, setDetails] = useState({matricule: "", username: "", password:"" });

const submitHandler = e => {
    e.preventDefault();

    Login(details);
}

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? ( <div className="error">{error} </div>) : ""  }
                <div className="form-group">
                    <label htmlFor="">Matricule:</label>
                    <input type="text" name="matricule" id="matricule" onChange={e => setDetails({...details, matricule: e.target.value }) value={details.matricule}} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value }) value={details.username}} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value }) value=(details.password) } />
                </div>
            </div>
        </form>
    )
}

export default LoginForm;