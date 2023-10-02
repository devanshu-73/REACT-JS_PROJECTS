import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div id='wrapper'>
                <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="index.html">Hotel Management</a>
                    </div>
                    <div className="header-right">
                        <a href="message-task.html" className="btn btn-info" title="New Message"><b>30 </b><i className="fa fa-envelope-o fa-2x" /></a>
                        <a href="message-task.html" className="btn btn-primary" title="New Task"><b>40 </b><i className="fa fa-bars fa-2x" /></a>
                        <a href="login.html" className="btn btn-danger" title="Logout"><i className="fa fa-exclamation-circle fa-2x" /></a>
                    </div>
                </nav>
                {/* /. NAV TOP  */}
                <nav className="navbar-default navbar-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav" id="main-menu">
                            <li>
                                <div className="user-img-div">
                                    <img src="assets/img/user.png" className="img-thumbnail" alt='...' />
                                    <div className="inner-text">
                                        <h2> {localStorage.getItem('username')}</h2>
                                        <small>Last Login : 27 sec Ago </small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <NavLink to="/dashboard"><i className="fa fa-dashboard " />Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="/"><i className="fa fa-sign-in " />Login Page</NavLink>
                            </li>
                            <li>
                                <Link to="#"><i className="fa fa-desktop "></i>Add<span className="fa arrow"></span></Link>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <NavLink to="/addProduct"><i className="fa fa-edit "></i>Add Product</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/addBlog"><i className="fa fa-edit "></i>Add Blog</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#"><i className="fa fa-desktop "></i>Manage<span className="fa arrow"></span></Link>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <NavLink to="/manageUser"><i className="fa fa-send"></i>Manage User</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/manageOrder"><i className="fa fa-send "></i>Manage Order</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/manageProduct"><i className="fa fa-send "></i>Manage Product</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/manageContact"><i className="fa fa-send "></i>Manage Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/manageBlog"><i className="fa fa-send "></i>Manage Blog</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/logout"><i className="fa fa-sign-in " />Logout</NavLink>
                            </li>
                            <li>
                                <NavLink to="/error"><i className="fa fa-bug " />Error</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header