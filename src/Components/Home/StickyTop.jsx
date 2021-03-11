import axios from 'axios'
import React from 'react'
import { Input } from '../../Styles/Footer'
import { Categories, News, NewsContainer, SearchButton, StickyBar, StoryType, Top } from '../../Styles/SearchPage'
import { SearchResultPage } from './SearchResultPage'
import {GrSearch} from "react-icons/gr"
import { useDispatch, useSelector } from 'react-redux'
import { getSearchData } from '../../Redux/SearchPage/action'

const StickyTop = () => {
    const [input , setInput] = React.useState(" ")
    const dispatch = useDispatch()
    const data = useSelector((state) => state.search.data)
    const handleClick = () => {
        dispatch(getSearchData(input))
    }

    return (
        <div>
            <Top>
            <StickyBar>
                <div stye={{display:"flex", alignItems:"center"}}>
                <Input value={input}  onChange={e => setInput(e.target.value)}/>
                <SearchButton onClick={handleClick}>
                    <GrSearch style={{color:"white", fontSize:"25px"}}/>
                </SearchButton>
                </div>
                <StoryType>
                    <h3>Everything</h3>
                    <h4>Stories</h4>
                    <h4>Videos</h4>
                    <h4>Photos</h4>
                    <div style={{border:"1px solid grey", width:"60px", textAlign:"center"}}>
                        <p>Date  +</p>
                    </div>
                </StoryType>
            </StickyBar>
            </Top>
            <NewsContainer>
                <Categories>
                    <input type="radio" value="allCnn"/>
                    <label for="allCnn">All CNN</label>
                    <br/>
                    <input type="radio" value="business"/>
                    <label for="business">Business</label>
                    <br/>
                    <input type="radio" value="sports"/>
                    <label for="sports">Sports</label>
                    <br/>
                    <input type="radio" value="Entertainment"/>
                    <label for="Entertainment">Entertainment</label>
                    <br/>
                    <input type="radio" value="Travel"/>
                    <label for="Travel">Travel</label>
                    <br/>
                </Categories>
                <div>
                {data.map((item => <SearchResultPage {...item}/>))}
                </div>
            </NewsContainer>
        </div>
    )
}

export {StickyTop}
