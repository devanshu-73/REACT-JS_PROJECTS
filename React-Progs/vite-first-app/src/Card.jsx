
// eslint-disable-next-line react/prop-types
export default function Card({ title, img }) {
    return (
        <>
            <div className="col-3">
                <div className="card " style={{ width: "100%" }}>
                    <img className="card-img-top" src={img} alt="Card image" style={{ height:'100'}} />
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">Some example text some example text. John Doe is </p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        </>
    )
}
  