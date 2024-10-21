

const User = ({user}) => {
    const {name} = user;
    return (
        <div>
            <h3>Name: {name}</h3>
        </div>
    );
};

export default User;