import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState('parosh@gmail.com');
    const [password, setPassword] = useState(null);
    const [error,setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('* Password must be minimum 6 character *')
        }
        else {
            setError('')
            console.log(name, email, password);
        }
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value); 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} 
                    className="input input-bordered mb-2" type="text" placeholder="Name" name="name" />
                <br />
                <input onChange={handleEmailChange} value={email}
                    className="input input-bordered mb-2" type="email" placeholder="Email" name="email" />
                <br />
                <input onChange={handlePasswordChange}
                    className="input input-bordered mb-2" type="password" placeholder="Password" name="password" required />
                <br />
                {
                    error && <p className="text-red-600 text-sm mb-3">{error}</p>
                }

                <input className="btn btn-active btn-neutral" type="Submit" value="Submit" />
            </form>

        </div>
    );
};

export default StatefulForm;