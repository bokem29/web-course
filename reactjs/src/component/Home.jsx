import '../bootstrap.css'
import '../style.css'
import { BrowserRouter, Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
        <Link to='/home' className="navbar-brand" >[App Name]</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#">[Full name]</a>
                </li>
                <li className="nav-item">
                    <Link to='/login' className="nav-link">Logout</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

<main className="py-5">
    <section className="my-courses">
        <div className="container">
            <h4 className="mb-3">My courses</h4>
            <div className="courses d-flex flex-column gap-3 ">
                <Link to='/detailcourse' className="card text-decoration-none bg-body-tertiary">
                    <div className="card-body">
                        <h5 className="mb-2">[Course title]</h5>
                        <p className="text-muted mb-0">[Course description]</p>
                    </div>
                </Link>
            </div>
        </div>
    </section>

    <section className="other-courses mt-4">
        <div className="container">
            <h4 className="mb-3">Other courses</h4>
            <div className="d-flex flex-column gap-3">
                <Link to='/detailcourse' className="card text-decoration-none bg-body-tertiary">
                    <div className="card-body">
                        <h5 className="mb-2">[Course title]</h5>
                        <p className="text-muted mb-0">[Course description]</p>
                    </div>
                </Link>
            </div>
        </div>
    </section>
</main>
        </>
    )
}

export default Home;