import React, { useState } from 'react'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'
import { motion as m } from 'framer-motion'



const TopRated = () => {

    const [endpoint, setEndpoint] = useState("movie")

    const { data, loading } = useFetch(`/${endpoint}/top_rated`)

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? 'movie' : 'tv')
    }

    return (
        <m.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='carouselSection'
        >
            <ContentWrapper>
                <span className="carouselTitle">
                    Top Rated
                </span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </m.div>
    )
}

export default TopRated