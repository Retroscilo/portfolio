import { useEffect, useRef } from "react"
import Block from "../Components/Block"

const Third = () => {
  const thirdBlock = useRef(null)

  useEffect(() => {
    console.log(thirdBlock)
  }, [thirdBlock])

  return (
    <Block background="royalblue">
      <div ref={thirdBlock}>Third</div>
    </Block>
  )
}

export { Third }
