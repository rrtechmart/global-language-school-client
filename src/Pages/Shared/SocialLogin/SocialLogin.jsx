import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";



const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://global-language-school-server-rrtechmart.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(saveUser)

                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true })

                    })

            })
    }
    return (
        <div>
            <div className="divider"> </div>

            <div className="w-full text-center mb-4">
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">
                    Google SignIn
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;