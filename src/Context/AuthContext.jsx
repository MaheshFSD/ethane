import React from "react"
export const AuthContext = React.createContext()

export const AuthContextProvider = ({children})=>{
    const [isAuth,setIsAuth]=React.useState(true)
    const [token,setToken]=React.useState("")
    const [language,setLanguage]=React.useState("en")
    const [mock,setMock]=React.useState(false)
    const [idMock,setIdMock]=React.useState()
    const [mockData,setMockData]=React.useState([])
    const inputRef=React.useRef(null)

    const loginSuccess = (value)=>{
        setToken(value);
        setIsAuth(true)
    }
    const logout = () => {
        setToken("")
        setIsAuth(false)
    }
    const handleMockState = (s) => {
        setMock(s)
    }
    const handleIdMock = (stat) => {
        setIdMock(stat)
    }
    const handleMockData = (stat) => {
        setMockData(stat)
    }
    const handleLanguage = (lan)=>{
        setLanguage(lan)
        console.log(" language -",lan)
    }
    const value={
        isAuth,
        token,
        inputRef, 
        language,
        mock,
        idMock,
        mockData,
        loginSuccess,
        logout,
        handleLanguage,
        handleMockState,
        handleIdMock,
        handleMockData
    }
    return <AuthContext.Provider value={value} > {children} </AuthContext.Provider>
}