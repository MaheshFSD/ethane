import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { business, getfinance } from '../../Redux/Business/action'
import styled from 'styled-components'
import { Footer } from '../Footer/Footer'
import { Link, useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

const Business = () => {
  const dispatch = useDispatch()
  // console.log(dispatch(business()))

  const { businessNews, isLoading, isError } = useSelector(
    (state) => state.business,
    shallowEqual
  )
  const { finance } = useSelector((state) => state.finances, shallowEqual)

  const history = useHistory()
  const goToLink = (data) => {
    history.push(`/business/${data}`)
  }

  useEffect(() => {
    dispatch(business())
    dispatch(getfinance())
  }, [dispatch])
  return isLoading ? (
    <div
      style={{
        position: 'relative',
        marginTop: '100px',
        fontFamily: 'serif',
      }}
    >
      {/* <h1 style={{ textAlign: 'center' }}>HAPPINESS</h1> */}
      <CircularProgress
        color='primary'
        size={100}
        left={-20}
        top={10}
        status={'loading'}
        style={{ marginLeft: '46%', marginTop: '100px' }}
      />
      <p style={{ textAlign: 'center', fontSize: '20px' }}>Loading...</p>
    </div>
  ) : (
    <div>
      <Market></Market>
      <TopBusiness>
        <TopLeftBusiness>
          {businessNews.slice(0, 1).map((item, index) => (
            <TopLeftData key={index}>
              <h1>{item.title}</h1>
              <img src={item.urlToImage} alt={item.title}></img>
            </TopLeftData>
          ))}
          {businessNews.slice(1, 2).map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
            </div>
          ))}

          {businessNews.slice(2, 10).map((item, index) => (
            <TopLeftCard key={index} onClick={() => goToLink(item.publishedAt)}>
              <div>{item.title}</div>
            </TopLeftCard>
          ))}
        </TopLeftBusiness>
        <TopMiddleBusiness>
          {businessNews.slice(12, 15).map((item, index) => (
            <TopMiddlecard
              key={index}
              onClick={() => goToLink(item.publishedAt)}
            >
              <img src={item.urlToImage} alt={item.title}></img>

              <h4>{item.title}</h4>
            </TopMiddlecard>
          ))}
        </TopMiddleBusiness>
        <TopRightBusiness></TopRightBusiness>
      </TopBusiness>
      <MiddleBusiness>
        {businessNews.slice(10, 12).map((item, index) => (
          <MiddleCard key={index}>
            <div>
              <img src={item.urlToImage} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
            <div>
              {businessNews.slice(8, 12).map((item, index) => (
                <TopLeftCard key={index}>
                  <div>{item.title}</div>
                </TopLeftCard>
              ))}
            </div>
          </MiddleCard>
        ))}
      </MiddleBusiness>
      <Header>Success</Header>

      <Success>
        {businessNews.slice(15, 19).map((item, index) => (
          <SuccessCard key={index}>
            <div>
              <img src={item.urlToImage} alt={item.title} />
              <p>{item.title}</p>
            </div>
          </SuccessCard>
        ))}
      </Success>
      <Header>Tech</Header>

      <Success>
        {businessNews.slice(1, 5).map((item, index) => (
          <SuccessCard key={index}>
            <div>
              <img src={item.urlToImage} alt={item.title} />
              <p>{item.title}</p>
            </div>
          </SuccessCard>
        ))}
      </Success>
      <Header>Media</Header>

      <Success>
        {businessNews.slice(6, 10).map((item, index) => (
          <SuccessCard key={index}>
            <div>
              <img src={item.urlToImage} alt={item.title} />
              <p>{item.title}</p>
            </div>
          </SuccessCard>
        ))}
      </Success>
      <Footer />
    </div>
  )
}

export { Business }

const TopBusiness = styled.div`
  display: flex;
  /* border: 1px solid black; */
  /* height: 800px; */
  width: 80%;
  margin: auto;
  margin-top: 2%;
  /* font-family: helvetica; */
  h2 {
    text-align: left;
  }
  cursor: pointer;
`

const TopLeftBusiness = styled.div`
  /* border: 1px solid black; */
  width: 45%;
`

const TopMiddleBusiness = styled.div`
  /* border: 1px solid black; */
  width: 30%;
  margin: 0px 1%;
`

const TopRightBusiness = styled.div`
  border: 1px solid black;
  width: 30%;
  height: 400px;
`

const Market = styled.div`
  border: 1px solid black;
  height: 150px;
`

const TopLeftData = styled.div`
  img {
    width: 100%;
    height: 40%;
  }
  h1 {
    padding: 0 10%;
    text-align: center;
  }
  div:hover {
    color: #26f126;
    background-color: white;
  }
`

const TopLeftCard = styled.p`
  border-top: 1px solid grey;
  padding-top: 2%;
  &:hover {
    color: #26f126;
  }
`
const TopMiddlecard = styled.div`
  border: 1px solid #e1e1e1;
  margin-bottom: 10%;
  img {
    width: 100%;
    height: 30%;
  }
  h4 {
    font-size: 110%;
    text-align: center;
  }
  &:hover {
    color: #26f126;
  }
`
const MiddleBusiness = styled.div`
  display: flex;

  width: 80%;
  margin: auto;
  margin-top: 2%;
  h2 {
    text-align: left;
  }
`

const MiddleCard = styled.div`
  width: 30%;
  img {
    width: 100%;
    height: 200px;
  }
  margin-right: 5%;
`

const Success = styled.div`
  display: flex;
  /* border: 1px solid black; */
  /* height: 800px; */
  width: 80%;
  margin: auto;
  margin-top: 2%;
  column-gap: 20px;
`

const SuccessCard = styled.div`
  /* border: 1px solid #b1b1b1; */

  width: 100%;
  img {
    width: 100%;
    height: 200px;
  }
  margin-bottom: 10px;
`

const Header = styled.h2`
  border-bottom: 2px solid #26f126;
  width: 80%;
  margin: auto;
  margin-top: 1%;
  padding-bottom: 10px;
`
