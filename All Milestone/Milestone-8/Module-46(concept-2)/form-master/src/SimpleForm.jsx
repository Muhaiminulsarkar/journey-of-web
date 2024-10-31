

const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="input input-bordered mb-2" type="text" placeholder="Name" name="name" />
                <br />
                <input className="input input-bordered mb-2" type="email" placeholder="Email" name="email" />
                <br />
                <input className="input input-bordered mb-2" type="text" placeholder="Number" name="number" />
                <br />
                <input className="btn btn-active btn-neutral" type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;