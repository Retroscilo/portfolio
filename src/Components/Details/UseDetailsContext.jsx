import { useContext, createContext } from "react"

const DetailsContext = createContext(null)

const DetailsContextProvider = ({ children, value }) => (
  <DetailsContext.Provider value={value}>{children}</DetailsContext.Provider>
)

function useDetailsContext() {
  const context = useContext(DetailsContext)
  if (!context)
    throw new Error(
      "useDetailsContext must be used within the details provider"
    )
  return context
}

export { DetailsContextProvider, useDetailsContext }
