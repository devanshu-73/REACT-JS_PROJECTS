import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 set-pad">
                        <strong className="error-txt">ERROR ! 404</strong>
                        <p className="p-err">Lorem ipsum dolor sit amet posuere lectus et, fringilla augue.</p>
                    </div>
                </div>
            </div>
            <div className="c-err">
                <div className="container">
                    {/*Search Section Start*/}
                    <div className="row ">
                        <div className="form-group input-group col-md-6 col-md-offset-3">
                            <input type="text" className="form-control" placeholder="Enter Keywords" />
                            <span className="input-group-btn">
                                <a className="btn btn-primary" href="index.html">
                                    <i className="fa fa-gear fa-spin" />&nbsp;&nbsp;SEARCH HERE
                                </a>
                            </span>
                        </div>
                        <br />
                    </div>
                    {/*Search-Section end*/}
                </div>
            </div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <br />
                        <br />
                        <Link to="/dashboard" className="btn btn-danger"><i className="fa fa-mail-reply" />&nbsp; PLEASE GO BACK</Link>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        All Rights Reserved | © Yourdomain.com
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Error