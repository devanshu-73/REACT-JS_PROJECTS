import React from 'react'

function AddBlog() {
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Blog</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-body">
                                    <form role="form">
                                        <div className="form-group">
                                            <label>About</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Blog</label>
                                            <textarea className="form-control" rows={30} defaultValue={""} />
                                        </div>
                                        <button type="submit" className="btn btn-info">Add Blog</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /. PAGE-INNER  */}
            </div>
        </div>
    )
}

export default AddBlog