import React from 'react'
import Footer from '../Footer/Footer'
import EditorsPick from './EditorsPick'
import RandomNewsBlock from './RandomNewsBlock'
// import GetNews from './getNews'
import StylePageCarousel from './StylePageCarousel'

const StylePage = () => {
    // GetNews()
    return (
        <div>
            <StylePageCarousel/>
            <EditorsPick/>
            <RandomNewsBlock/>
            <Footer/>
        </div>
    )
}

export default StylePage

