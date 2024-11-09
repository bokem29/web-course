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
            <h3 className="mb-3">[Course name]</h3>
            <div className="progress mb-5" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{width: "0%"}}>0%</div>
            </div>

            <div className="mb-4">
                <h4 className="mb-3">[Set name]</h4>
                <div className="row">
                    <div className="col-md-12">
                        <Link to='/detless' className="card mb-3 text-decoration-none bg-body-tertiary">
                            <div className="card-body d-flex justify-content-between">
                                <div>
                                    <small className="text-muted">Lesson</small>
                                    <h5 className="mt-2">[Lesson name]</h5>
                                </div>
                                <div>
                                <div className="badge border">Current</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-12">
                        <a href="detail-lesson.html" className="card mb-3 text-decoration-none bg-body-tertiary">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <small className="text-muted">Lesson</small>
                                        <h5 className="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div className="badge border">Current</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-12">
                        <a href="#" className="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <small className="text-muted">Lesson</small>
                                        <h5 className="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div className="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center mb-4">
                <p className="mb-2"><b>Too easy?</b></p>
                <Link to='/jump' className="btn btn-outline-primary">Jump Here</Link>
            </div>

            <div className="mb-4">
                <h4 className="mb-3">[Set name]</h4>
                <div className="row">
                    <div className="col-md-12">
                        <a href="#" className="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <small className="text-muted">Lesson</small>
                                        <h5 className="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div className="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-12">
                        <a href="#" className="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <small className="text-muted">Lesson</small>
                                        <h5 className="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div className="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-12">
                        <a href="#" className="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <small className="text-muted">Lesson</small>
                                        <h5 className="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div className="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h4 className="mb-3">[Set name]</h4>
                <div className="row">
                    <div className="col-md-12">
                        <a href="#" className="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <small className="text-muted">Lesson</small>
                                        <h5 className="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div className="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-12">
                        <a href="#" className="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <small className="text-muted">Lesson</small>
                                        <h5 className="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div className="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-12">
                        <a href="#" className="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <small className="text-muted">Lesson</small>
                                        <h5 className="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div className="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
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