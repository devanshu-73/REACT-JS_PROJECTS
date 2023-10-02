/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Dashboard() {
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">DASHBOARD</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="main-box mb-red">
                                <a href="#">
                                    <i className="fa fa-bolt fa-5x" />
                                    <h5>Zero Issues</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="main-box mb-dull">
                                <a href="#">
                                    <i className="fa fa-plug fa-5x" />
                                    <h5>40 Task In Check</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="main-box mb-pink">
                                <a href="#">
                                    <i className="fa fa-dollar fa-5x" />
                                    <h5>200K Pending</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <div id="reviews" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <div className="col-md-10 col-md-offset-1">
                                                    <h4><i className="fa fa-quote-left" />Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit onec molestie non sem vel condimentum. <i className="fa fa-quote-right" /></h4>
                                                    <div className="user-img pull-right">
                                                        <img src="assets/img/user.gif" alt className="img-u image-responsive" />
                                                    </div>
                                                    <h5 className="pull-right"><strong className="c-black">Lorem Dolor</strong></h5>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="col-md-10 col-md-offset-1">
                                                    <h4><i className="fa fa-quote-left" />Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit onec molestie non sem vel condimentum. <i className="fa fa-quote-right" /></h4>
                                                    <div className="user-img pull-right">
                                                        <img src="assets/img/user.png" alt className="img-u image-responsive" />
                                                    </div>
                                                    <h5 className="pull-right"><strong className="c-black">Lorem Dolor</strong></h5>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="col-md-10 col-md-offset-1">
                                                    <h4><i className="fa fa-quote-left" />Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, consectetur adipiscing elit onec molestie non sem vel condimentum. <i className="fa fa-quote-right" /></h4>
                                                    <div className="user-img pull-right">
                                                        <img src="assets/img/user.gif" alt className="img-u image-responsive" />
                                                    </div>
                                                    <h5 className="pull-right"><strong className="c-black">Lorem Dolor</strong></h5>
                                                </div>
                                            </div>
                                        </div>
                                        {/*INDICATORS*/}
                                        <ol className="carousel-indicators">
                                            <li data-target="#reviews" data-slide-to={0} className="active" />
                                            <li data-target="#reviews" data-slide-to={1} />
                                            <li data-target="#reviews" data-slide-to={2} />
                                        </ol>
                                        {/*PREVIUS-NEXT BUTTONS*/}
                                    </div>
                                </div>
                            </div>
                            {/* /. ROW  */}
                            <hr />
                            <div className="panel panel-default">
                                <div id="carousel-example" className="carousel slide" data-ride="carousel" style={{ border: '5px solid #000' }}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="assets/img/slideshow/1.jpg" alt />
                                        </div>
                                        <div className="item">
                                            <img src="assets/img/slideshow/2.jpg" alt />
                                        </div>
                                        <div className="item">
                                            <img src="assets/img/slideshow/3.jpg" alt />
                                        </div>
                                    </div>
                                    {/*INDICATORS*/}
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel-example" data-slide-to={0} className="active" />
                                        <li data-target="#carousel-example" data-slide-to={1} />
                                        <li data-target="#carousel-example" data-slide-to={2} />
                                    </ol>
                                    {/*PREVIUS-NEXT BUTTONS*/}
                                    <a className="left carousel-control" href="#carousel-example" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left" />
                                    </a>
                                    <a className="right carousel-control" href="#carousel-example" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* /.REVIEWS &  SLIDESHOW  */}
                        <div className="col-md-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Recent Chat History
                                </div>
                                <div className="panel-body" style={{ padding: 0 }}>
                                    <div className="chat-widget-main">
                                        <div className="chat-widget-left">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                        <div className="chat-widget-name-left">
                                            <h4>Amanna Seiar</h4>
                                        </div>
                                        <div className="chat-widget-right">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                        <div className="chat-widget-name-right">
                                            <h4>Donim Cruseia </h4>
                                        </div>
                                        <div className="chat-widget-left">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                        <div className="chat-widget-name-left">
                                            <h4>Amanna Seiar</h4>
                                        </div>
                                        <div className="chat-widget-right">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                        <div className="chat-widget-name-right">
                                            <h4>Donim Cruseia </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-footer">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Enter Message" />
                                        <span className="input-group-btn">
                                            <button className="btn btn-success" type="button">SEND</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/.Chat-Panel End*/}
                    </div>
                    {/*/.Row*/}
                </div>
                {/* /. PAGE INNER  */}
            </div>
        </div>

    )
}

export default Dashboard