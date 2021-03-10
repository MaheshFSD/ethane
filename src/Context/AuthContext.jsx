import React from "react"
export const AuthContext = React.createContext()

export const AuthContextProvider = ({children})=>{
    const [isAuth,setIsAuth]=React.useState(true)
    const [token,setToken]=React.useState("")
    const [language,setLanguage]=React.useState("en")
    const inputRef=React.useRef(null)

    const loginSuccess = (value)=>{
        setToken(value);
        setIsAuth(true)
    }
    const logout = () => {
        setToken("")
        setIsAuth(false)
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
        loginSuccess,
        logout,
        handleLanguage
    }
    return <AuthContext.Provider value={value} > {children} </AuthContext.Provider>
}