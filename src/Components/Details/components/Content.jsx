import { useState, useEffect } from "react"
import { useDetailsContext } from "../UseDetailsContext"

const Content = ({ title, children, timeout }) => {
  const { display } = useDetailsContext()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (display) setTimeout(() => setVisible(true), timeout)
    else setVisible(false)
  }, [display, timeout])
  return (
    <span>
      <div
        style={{ display: visible ? "block" : "none" }}
        className={`details__title ${visible ? "--is-in" : "--is-out"}`}
      >
        {title}
      </div>
      <div
        style={{ display: visible ? "block" : "none" }}
        className={`details__paragraph ${
          visible ? "--is-opaque" : "--is-faded"
        }`}
      >
        {children}
      </div>
    </span>
  )
}

export { Content }
