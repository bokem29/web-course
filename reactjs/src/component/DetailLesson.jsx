import '../bootstrap.css'
import '../style.css'
import { Link } from 'react-router-dom';

function DetailLesson() {
    return (
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
        <a className="navbar-brand" href="index.html">[App name]</a>
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
    <section>
        <div className="container">
            <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="mb-0">[Lesson name]</h4>
            </div>
            <div className="progress mb-5" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{width: 0}}></div>
            </div>

            <div className="mb-4">
                <p className="mb-4">
                    [Lesson content text]
                </p>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <Link to='/detquiz' className="btn btn-primary w-100 mt-2">Continue</Link>
                </div>
            </div>

        </div>
    </section>
</main>
        </>
    )
}

export default DetailLesson;