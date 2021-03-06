import React from 'react'
import PropTypes from 'prop-types'


const Header = (props) => {
    return (
        <div>
            <>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a href="/task-app/#/" className="navbar-brand">{props.title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/task-app/#/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/task-app/#/setting">Setting</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </>
        </div>
    )
}

Header.defaultProps = {
    title: "Your Title Here",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;