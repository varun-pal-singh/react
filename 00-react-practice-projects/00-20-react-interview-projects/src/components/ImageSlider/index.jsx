import { useEffect, useState } from "react"
import { BsAppIndicator, BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css'


export default function ImageSlider({ url, page, limit }) {
    const [images, setImages] = useState([])
    const [curSlide, setCurSlide] = useState(0)
    const [errMsg, setErrMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages() {
        setLoading(true)
        try {
            const response = await fetch(`${url}?page=${page}&limit=${limit}`)

            const data = await response.json()
            console.log('data', data)
            if (data) {
                setImages(data)
            }
        } catch (e) {
            setErrMsg(e.message)
        }
        setLoading(false)
    }

    function handlePrev(){
        setCurSlide(curSlide === 0 ? images.length -1 : curSlide - 1)
    }

    function handleNext(){
        setCurSlide(curSlide === images.length - 1 ? 0 : curSlide + 1)
    }

    useEffect(() => {
        if (url !== '')
            fetchImages()
    }, [url])

    // console.log(images)

    if (loading) {
        return <div>Loading images !!</div>
    }

    if (errMsg) {
        return <div>An error occured: {errMsg} </div>
    }

    return (
        <>
            <div className="container">
                <BsArrowLeftCircleFill
                onClick={handlePrev} 
                className="arrow arrow-left" />

                {
                    images && images.length ?
                        images.map((item, idx) => (
                            <img key={item.id}
                                alt={item.download_url}
                                src={item.download_url}
                                className={curSlide === idx ? 'current-image' : ' current-image hide-current-image'} />
                        )) :
                        null
                }

                <BsArrowRightCircleFill 
                onClick={handleNext}
                className="arrow arrow-right" />
                <span className="circle-indicator">
                    {
                        images && images.length ?
                            images.map((_, idx) => (
                                <button key={idx} className={curSlide === idx ? 
                                'current-indicator' :
                                'current-indicator inactive-indicator'}
                                onClick={() => setCurSlide(idx)}
                                >
                                </button>
                            )) :
                            null
                    }

                </span>
            </div>
        </>
    )
}