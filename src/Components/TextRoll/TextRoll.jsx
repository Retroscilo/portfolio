import "./TextRoll.css"
import { useEffect, useState } from "react"

const TextRoll = ({ words }) => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    for (let i = 1; i < words.length; i++) {
      setTimeout(() => {
        setCounter(i)
      }, 600 * i)
    }
  }, [words.length])
  return (
    <div className="textRoll__container">
      <div className="widthSet">{words[words.length - 1]}&nbsp;&nbsp;</div>
      {words.map((word, i) => (
        <div
          key={i}
          className={`textRoll ${
            i === counter ? "textRoll--visible" : "textRoll--hidden"
          }`}
        >
          {word}
        </div>
      ))}
    </div>
  )
}

export { TextRoll }
