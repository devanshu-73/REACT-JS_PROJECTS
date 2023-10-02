import './Style.scss';
export default function Sass() {
    return (
        <div>
            <h1 className="dev">Hello</h1>
            <div>    <nav>
                <ul>
                    <li><a href="">One</a></li>
                    <li><a href="">Two</a></li>
                    <li><a href="">Three</a></li>
                    <li><a href="">Four</a></li>
                </ul>
            </nav></div>
            <div className="myfont">Hello How r u?</div>

            {/* // 4)Extend(inheritence) in sass */}

            <div>
                <button className='btn-1'>Submit 1</button>
                <button className='btn-2'>Submit 2</button>
                <button className='btn-3'>Submit 3</button>
                <button className='btn-4'>Submit 4</button>
            </div>
        </div>
    )
}

