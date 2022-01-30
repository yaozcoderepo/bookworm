import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Book Worm</h1>
                    <p className="lead">
                        Register as a bookworm and share your opinions about
                        various books with others
                    </p>
                    <div className="buttons">
                        <div>
                            <Link
                                to="register"
                                className="btn btn-primary my-1"
                            >
                                Sign Up
                            </Link>
                        </div>
                        <div>
                            <Link to="login" className="btn btn-light">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
