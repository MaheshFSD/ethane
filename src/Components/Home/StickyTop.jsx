import axios from 'axios'
import React from 'react'
import { Input } from '../../Styles/Footer'
import { Categories, News, NewsContainer, SearchButton, StickyBar, StoryType, Top } from '../../Styles/SearchPage'
import { SearchResultPage } from './SearchResultPage'
import {GrSearch} from "react-icons/gr"

const StickyTop = ({data}) => {
    const [input , setInput] = React.useState(" ")
    const [search, setSearch] = React.useState(data)
    const handleClick = () => {
        axios.get(`http://newsapi.org/v2/everything?apiKey=afb0ad80492b485db131d463da513064&q=${input}`)
        .then(res => {
            setSearch(res.data.articles)
            data = search
        })
        .catch(err => console.log(err))
    }
    React.useEffect(()=>{
        setSearch(data)
    },[data])

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
                {search.map((item => <SearchResultPage {...item}/>))}
                </div>
            </NewsContainer>
        </div>
    )
}

export {StickyTop}
