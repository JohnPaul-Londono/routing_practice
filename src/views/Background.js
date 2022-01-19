import React from "react";
import {useParams} from "react-router-dom";

const Background = (props) => {
    const {word, color1, color2} = useParams();

    const style = {
        color: color1,
        backgroundColor: color2
    }


    return (
        <div>
            <h1 style={style}> You typed in the word : {word}</h1>
        </div>
    )
}

export default Background;