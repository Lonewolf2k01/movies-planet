import React, { useEffect, useState } from 'react'
import './HeroBanner.scss'

import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import { motion as m } from 'framer-motion'

import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'


const HeroBanner = () => {

    const navigate = useNavigate()
    const { url } = useSelector((state) => state.home)

    const [background, setBackground] = useState('')
    const [query, setQuery] = useState('')
    const { data, loading } = useFetch('/tv/top_rated')
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = []
    for (let i = 0; i < 20; i++) {
        let image = (url.backdrop + data?.results?.[i]?.backdrop_path).toString()
        images.push(image)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            // Calculate the next image index
            const nextImageIndex = (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(nextImageIndex);
        }, 10000);

        // Clear the timer when the component unmounts or when the currentImageIndex changes
        return () => clearTimeout(timer);
    }, [currentImageIndex, images.length]);


    // useEffect(() => {
    // const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    //     const bg = images[currentImageIndex]
    //     setBackground(bg)
    // }, [images])

    const searchQueryHandler = (event) => {
        if (event.key === 'Enter' && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }


    return (
        <div className="heroBanner">
            {
                !loading &&
                <div className="image-slider">
                    {
                        images.map((image, index) => (

                            <img
                                key={index}
                                src={image}
                                alt="Slider"
                                className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
                            />
                        ))
                    }
                </div>
                // <div className="backdrop-img">
                //     <Img src={background} />
                // </div>
            }

            <div className="opacity-layer"></div>

            <ContentWrapper>
                <m.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }} 
                    className="heroBannerContent">
                    <span className="subTitle" style={{marginBottom:"1px"}} data-text="Welcome">
                        Welcome To
                    </span>
                    <span className="title">
                        MoviesPlanet
                    </span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to Discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder='Search for a movie or TV show.....'
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>
                            Search
                        </button>
                    </div>
                </m.div>

            </ContentWrapper>

        </div>
    )
}

export default HeroBanner