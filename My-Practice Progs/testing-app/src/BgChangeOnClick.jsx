import { useState } from "react";

const BgChangeOnClick = () => {
    const colors = ['red', 'blue', 'green', 'black', 'yellow'];
    const [index, setIndex] = useState(-1);
    const bgChange = () => {
        if (index === colors.length - 1) {
            setIndex(0); // Reset to the first color when reaching the end
        } else {
            setIndex(index + 1);
        }
    }
    return (
        <>
            <div
                id="bgDiv"
                style={{
                    width: '100px',
                    height: '100px',
                    border: '1px solid black',
                    backgroundColor: index === -1 ? 'transparent' : colors[index], // Set transparent background for -1 index
                }}
            ></div>
            <button onClick={bgChange}>Click</button>
        </>
    )
}

export default BgChangeOnClick
