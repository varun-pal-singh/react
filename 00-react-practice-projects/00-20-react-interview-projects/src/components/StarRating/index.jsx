import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css'

export default function StarRating({noOfStars = 5}){
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurIdx){
        // console.log(getCurIdx)
        setRating(getCurIdx)
    }

    function handleMouseEnter(getCurIdx){
        // console.log(getCurIdx)
        setHover(getCurIdx)
    }

    function handleMouseLeave(){
        // console.log(getCurIdx)
        setHover(rating)
    }

    return (
        <>
            <div className="star-rating">
                {
                    [...Array(noOfStars)].map((_, idx) => {
                        idx += 1

                        return <FaStar 
                        className={idx <= (hover || rating) ? 'active' : 'inactive' }   
                        // we are not using === as it will only select one star but we have to select all stars that are having index less then and equal to current rating
                        key={idx}
                        onClick={() => handleClick(idx)}
                        onMouseMove={() => handleMouseEnter(idx)}
                        onMouseLeave={() => handleMouseLeave(idx)}
                        size={40} />
                    })
                }

            </div>
        </>
    )
}