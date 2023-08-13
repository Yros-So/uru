import React, { Fragment } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

const Profile = () => {

    const { user, loading } = useSelector(state => state.auth)
    console.log(' Profile Class Parle ')
    const  goto = useNavigate();

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Your Profile'} />

                    <h2 className="mt-5 ml-5">My Profile</h2>
                    <div className="row justify-content-around mt-5 user-info">
                        <div className="col-12 col-md-3">
                            <figure className='avatar avatar-profile'>
                                <img className="rounded-circle img-fluid" src={ user !== null ? user.avatar && user.avatar.url
                                 : goto('/login') } alt={ user !== null ? user && user.name
                                 : console.log('Connect toi') } />
                            </figure>
                            <Link to="/me/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                                Edit Profile
                            </Link>
                        </div>

                        <div className="col-12 col-md-5">
                            <h4>Full Name</h4>
                            <p>{ user !== null ? user && user.name
                                 : console.log('Connect toi')}</p>

                            <h4>Email Address</h4>
                            <p>{user !== null ? user && user.email
                                 : console.log('Connect toi')}</p>

                            <h4>Joined On</h4>
                            <p>{String(user !== null ? user && user.createdAt
                                 : console.log('Connect toi')).substring(0, 10)}</p>

                            {user !== null ? user && user.role
                                 : console.log('Connect toi') !== 'admin' && (
                                <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
                                    My Orders
                                </Link>
                            )}

                            <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                                Change Password
                            </Link>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Profile
