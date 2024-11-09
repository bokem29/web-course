import '../bootstrap.css';
import '../style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit =  async (e) => {
        e.preventDefault();
        setError(''); 

        try {
            const response = await axios.post('http://localhost:8000/api/login', { username, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/home');
        } catch (err) {
            setError('Invalid username or password');
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
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <Link to='/register' className='nav-link'>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="py-5">
                <section>
                    <div className="container">
                        <h3 className="mb-3 text-center">Login</h3>

                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group mb-2">
                                                <label htmlFor="username">Username</label>
                                                <input
                                                    type="text"
                                                    required
                                                    name="username"
                                                    id="username"
                                                    className="form-control"
                                                    placeholder='Username or Email'
                                                    autoFocus
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group mb-2">
                                                <label htmlFor="password">Password</label>
                                                <input
                                                    type="password"
                                                    required
                                                    name="password"
                                                    id="password"
                                                    placeholder='Password'
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
                                                    disabled={!username || !password} // Disable button if username or password is empty
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <p className="text-center">You don't have an account yet?   
                                    <Link to='/register'> Register</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Login;
