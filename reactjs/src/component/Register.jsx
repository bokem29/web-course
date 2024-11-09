import '../bootstrap.css';
import '../style.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

function Register() {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset error message
        setError('');

        // Dummy check (this would be replaced with actual registration logic)
        if (fullName && username && password) {
            navigate('/home'); // Redirect to home if registration is successful
        } else {
            setError('Please fill out all fields.');
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">[App Name]</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/login' className='nav-link'>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#' className='nav-link'>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="py-5">
                <section>
                    <div className="container">
                        <h3 className="mb-3 text-center">Register</h3>

                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group mb-2">
                                                <label htmlFor="full_name">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="full_name"
                                                    id="full_name"
                                                    className="form-control"
                                                    autoFocus
                                                    value={fullName}
                                                    onChange={(e) => setFullName(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group mb-2">
                                                <label htmlFor="username">Username</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    id="username"
                                                    className="form-control"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group mb-2">
                                                <label htmlFor="password">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            {error && <p className="text-danger text-center">{error}</p>}
                                            <div className="mt-3">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary w-100"
                                                    disabled={!fullName || !username || !password} // Disable button if any field is empty
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <p className="text-center">You have an account?  
                                    <Link to='/login'>Login</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Register;
