import '../bootstrap.css'
import '../style.css'
import { Link } from 'react-router-dom';

function DetailQuiz() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
        <a className="navbar-brand" href="index.html">[App Name]</a>
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
            <div className="progress mb-5" role="progressbar" aria-label="Example with label" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{width: 0}}></div>
            </div>

            <div className="mb-4">
                <p className="mb-4">
                    [Lesson content text]
                </p>

                <div>
                    <div className="my-2">
                        <input type="radio" id="choice-1" name="answer" className="input-choice"/>
                        <label htmlFor="choice-1" className="card">
                            <div className="card-body">
                                [Option text]
                            </div>
                        </label>
                    </div>
                    <div className="my-2">
                        <input type="radio" id="choice-2" name="answer" className="input-choice"/>
                        <label htmlFor="choice-2" className="card">
                            <div className="card-body">
                                [Option text]
                            </div>
                        </label>
                    </div>
                    <div className="my-2">
                        <input type="radio" id="choice-3" name="answer" className="input-choice"/>
                        <label htmlFor="choice-3" className="card">
                            <div className="card-body">
                                [Option text]
                            </div>
                        </label>
                    </div>
                    <div className="my-2">
                        <input type="radio" id="choice-4" name="answer" className="input-choice"/>
                        <label htmlFor="choice-4" className="card">
                            <div className="card-body">
                                [Option text]
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <Link to='#' className="btn btn-primary w-100 mt-2">Check</Link>
                </div>
            </div>

        </div>
    </section>
</main>
        </>
    )
}

export default DetailQuiz;