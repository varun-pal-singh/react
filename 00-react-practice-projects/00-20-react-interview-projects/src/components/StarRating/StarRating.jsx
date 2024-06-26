import { useState } from "react";
import { FaStar } from "react-icons/fa"
import './styles.css';

export default function StarRating({ noOfStars=5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const starArr = new Array(noOfStars);
    console.log(starArr);

    function handleClick(curIdx) {
        console.log(curIdx);
        setRating(curIdx);
    }

    function handleMouseEnter(curIdx) {
        setHover(curIdx);
        console.log(curIdx);
    }

    function handleMouseLeave(curIdx) {
        setHover(rating);
        // console.log(curIdx);
    }


    return <>
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, idx) => <FaStar
                    className={
                        idx <= Math.max(hover, rating) ?
                            'active' :
                            'inactive'
                    }
                    key={idx}
                    onClick={() => handleClick(idx)}
                    onMouseMove={() => handleMouseEnter(idx)}
                    onMouseLeave={() => handleMouseLeave(idx)}
                    size={40}
                />
                )
            }
        </div>
    </>
}