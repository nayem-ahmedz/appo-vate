import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

export default function Register() {
    const [error, setError] = useState('');
    const { registerUser, updateUserProfile, continueWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    // sign in notification
    const showSuccessModal = (username) => {
        const firstName = username ? username.split(' ')[0] : 'User';
        Swal.fire({
            title: `<h2>Welcome ${firstName}</h2>`,
            icon: 'success',
            html: `<h3>You have succesfully created your account</h3>`,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Homepage',
            cancelButtonText: 'Explore Apps'
        })
            .then(result => {
                if (result.isConfirmed) {
                    navigate('/');
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    navigate('/apps');
                } else if (result.dismiss === Swal.DismissReason.close) {
                    navigate('/');
                }
            });
    }
    // email and password register
    const handleRegister = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const photoURL = e.target.photoUrl.value.trim();
        const password = e.target.password.value.trim();
        setError('');
        // form validation
        const regexUpLow = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (password.length < 6) {
            setError('Password should be atleast 6 characters!');
            return;
        } else if (!regexUpLow.test(password)) {
            setError('Atleast one uppercase and lowercase required');
            return;
        }
        // creating a new user using email and password
        registerUser(email, password)
            .then(userCredential => {
                e.target.reset();
                updateUserProfile(userCredential.user, { displayName, photoURL })
                    .then(() => showSuccessModal(displayName))
                    .catch(error => setError(error.message));
            })
            .catch(error => setError(error.message));
    }
    // continue with google
    const googleAuth = () => {
        continueWithGoogle()
            .then(result => showSuccessModal(result.user.displayName))
            .catch(error => setError(error.message));
    }
    return (
        <section className="hero min-h-[80vh] py-0">
            <title>Register</title>
            <div className="hero-content flex-col lg:flex-row-reverse md:gap-10 w-auto">
                <div className="text-center lg:text-left lg:shrink-0">
                    <h1 className="text-3xl md:text-5xl font-bold">Welcome to Appvate!</h1>
                    <h3 className="text-2xl text-center py-3">Create your Free Account</h3>
                    <p className="pb-3 text-center">
                        to browse and access any apps, install them or uninstall <br /> already installed applications
                    </p>
                </div>
                <motion.div
                    className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input w-full placeholder:opacity-50" placeholder="Full Name" required />
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input w-full placeholder:opacity-50" placeholder="Email" required />
                                <label className="label">Photo URL</label>
                                <input type="url" name="photoUrl" className="input w-full placeholder:opacity-50" placeholder="Photo URL" required />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input w-full placeholder:opacity-50 mb-2" placeholder="Password" required />
                                {
                                    error && <p className="text-base text-red-400 ">{error}</p>
                                }
                                <button className="btn btn-primary mt-4">Register</button>
                            </fieldset>
                        </form>
                        <p className="text-center text-lg">Or</p>
                        {/* Google */}
                        <button onClick={googleAuth} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Continue with Google
                        </button>
                        <p className="text-sm mt-2">Already Have a account ? <Link to='/login' className="underline">Login</Link></p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}