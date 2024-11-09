import '../bootstrap.css'
import '../style.css'
import { Link } from 'react-router-dom';

function DetailCourse() {
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
                <h3 className="mb-0">[Course name]</h3>
                <Link to='/coursereg' className="btn btn-primary">Register to this course</Link>
            </div>

            <p className="mb-5">
                [Course description]
            </p>

            <div className="mb-4">
                <h4 className="mb-3">Outline</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="mb-0">1. [Set name]</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="mb-0">2. [Set name]</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="mb-0">3. [Set name]</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</main>

        </>
    )
}

export default DetailCourse;