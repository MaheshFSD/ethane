import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getData } from '../../Redux/styles/action'

const RandomNewsBlock = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.style,shallowEqual)

    React.useEffect(() => {
        dispatch(getData())
    },[dispatch])
    console.log(data)
    return (
        <div>
            {data.map((item) => <img src={item.urlToImage} alt=""/>)}
        </div>
    )
}

export default RandomNewsBlock
