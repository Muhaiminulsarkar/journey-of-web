/* eslint-disable react/prop-types */


const ReusableForm = ({ formTitle, handleSubmit, submitBtnText = "Submit", children }) => {
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data);
    }

    return (
        <div>
            {/* <h3 className="text-3xl">{formTitle}</h3> */}
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input className="input input-bordered mb-2" type="text" placeholder="Name" name="name" />
                <br />
                <input className="input input-bordered mb-2" type="email" placeholder="Email" name="email" />
                <br />
                <input className="input input-bordered mb-2" type="password" placeholder="password" name="password" />
                <br />
                <input className="btn btn-active btn-neutral" type="Submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;