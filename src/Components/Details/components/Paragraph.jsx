import { useDetailsContext } from "../UseDetailsContext"

const Paragraph = ({ children }) => {
  const { display } = useDetailsContext()
  return (
    <div
      className={`details__paragraph ${display ? "--is-opaque" : "--is-faded"}`}
    >
      {children}
    </div>
  )
}

export { Paragraph }
