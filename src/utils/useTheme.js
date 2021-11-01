import React, { createContext, useContext, useState } from "react"

const themeContext = createContext({})

export const ThemeBackground = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState()
  const [overflow, setOverflow] = useState({ x: false, y: true })

  return (
    <themeContext.Provider value={{ setBackgroundColor, setOverflow }}>
      {children}
      <style>{`
        body { 
          background: ${backgroundColor};
          overflow-x: ${!overflow.x ? "hidden" : "visible"};
          overflow-y: ${!overflow.y ? "hidden" : "visible"};
        }
        `}</style>
    </themeContext.Provider>
  )
}

export const useTheme = () => {
  const { setBackgroundColor, setOverflow } = useContext(themeContext)

  return { setBackgroundColor, setOverflow }
}
