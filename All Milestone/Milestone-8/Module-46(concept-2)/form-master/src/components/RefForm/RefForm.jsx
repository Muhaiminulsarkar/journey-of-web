import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus(); // for cursor focus
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef}
                    className="input input-bordered mb-2" type="text" placeholder="Name" name="name" />
                <br />
                <input ref={emailRef} defaultValue={'parosh@gmail.com'}
                    className="input input-bordered mb-2" type="email" placeholder="Email" name="email" />
                <br />
                <input ref={passwordRef}
                    className="input input-bordered mb-2" type="password" placeholder="Password" name="password" />
                <br />


                <input className="btn btn-active btn-neutral" type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;