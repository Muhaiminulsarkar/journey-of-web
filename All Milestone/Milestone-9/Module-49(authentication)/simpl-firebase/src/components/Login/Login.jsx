import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log(auth, provider)
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch((error) => {
                console.log('error', error);
                setUser(null)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out done');
                setUser(null);
            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <h2>This is a login page</h2>
            {/* <button onClick={handleGoogleSignIn}>Login With Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}

            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :

                    <button onClick={handleGoogleSignIn}>Login with Google</button>

            }
            {
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;