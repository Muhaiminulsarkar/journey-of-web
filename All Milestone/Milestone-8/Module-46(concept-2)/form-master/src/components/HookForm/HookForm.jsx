import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    // ---use it for ARRAY return---
    // const [name, handleNameChange] = useInputState();
    // const [email, handleEmailChange] = useInputState('parosh@gmail.com');


    // ---use it for OBJECT return---
    const emailState = useInputState('parosh@gmail.com');


    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailState.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>



                {/* -----use it for ARRAY return---- */}

                {/* <input  onChange={handleNameChange} className="input input-bordered mb-2" type="text" placeholder="Name" name="name" />
                <br />
                <input value={email} onChange={handleEmailChange} className="input input-bordered mb-2" type="email" placeholder="Email" name="email" />
                <br /> */}




                {/* -----use it for OBJECT return---- */}

                <input className="input input-bordered mb-2" type="text" placeholder="Name" name="name" />
                <br />
                {/* -----here use {...emailState} this system for directly call the object---- */}
                <input {...emailState} className="input input-bordered mb-2" type="email" placeholder="Email" name="email" /> 
                <br />



                <input className="input input-bordered mb-2" type="password" placeholder="Password" name="password" />
                <br />
                <input className="btn btn-active btn-neutral" type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;