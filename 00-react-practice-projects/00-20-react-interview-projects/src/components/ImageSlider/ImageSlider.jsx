import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css';

export default function ImageSlider({ url, page = 1, limit = 5 }) {
    const modifedUrl = `${url}?page=${page}&limit=${limit}`;
    const [images, setImages] = useState([]);
    const [curSlide, setCurSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    function handlePrev() {
        setCurSlide(curSlide === 0 ? images.length - 1 : curSlide - 1);
    }

    function handleNext() {
        setCurSlide(curSlide === images.length - 1 ? 0 : curSlide + 1);
    }

    async function fetchImages(url) {
        try {
            setLoading(true);
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setImages(data);
        } catch (err) {
            setErrorMsg(err.message);
        } finally {
            setLoading(false);
            console.log('done fetching...')
        }
    }

    useEffect(() => {
        if (modifedUrl !== '') {
            fetchImages(modifedUrl);
        }
    }, [modifedUrl]);

    if (loading) {
        return <div>Loading data, please wait !!</div>
    }

    if (errorMsg) {
        return <div>Error occured &quot;{errorMsg}&quot; </div>
    }

    return <>
        <div className="container">
            <BsArrowLeftCircleFill
                onClick={() => handlePrev()}
                className="arrow arrow-left" />

            {
                images && images.length > 0 ?
                    images.map((imageItem, idx) => (
                        <img
                            key={imageItem.id}
                            src={imageItem.download_url}
                            alt={imageItem.author}
                            className={curSlide === idx ?
                                "current-image" :
                                "current-image hide-current-image"}
                        />
                    )) : null
            }

            <BsArrowRightCircleFill
                onClick={() => handleNext()}
                className='arrow arrow-right' />

            <span className="circle-indicators">
                {
                    images && images.length > 0 ?
                        images.map((imageItem, idx) => (
                            <button
                                key={imageItem.id}
                                className={curSlide === idx ?
                                    "current-indicator" :
                                    "current-indicator inactive-indicator"
                                }
                                onClick={() => setCurSlide(idx)}
                            >
                            </button>
                        )) : null
                }
            </span>
        </div >
    </>
}