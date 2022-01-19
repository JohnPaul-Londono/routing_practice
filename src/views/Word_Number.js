import React from "react";
import { useParams } from "react-router-dom";


const Word_Number = (props) => {
    const { word } = useParams();

    return (
        isNaN(word) ?
            <h1 className="name"> You typed in the word : {word}</h1> :
            <h1 className="name"> You typed in the number : {word}</h1>
    )
}

export default Word_Number;