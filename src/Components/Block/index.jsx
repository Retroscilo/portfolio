import { useEffect, useRef } from "react"
import styles from "./Block.module.css"
import { createBackgroundObserver } from "../../utils/useObserver"

const Block = ({ children, background, style }) => {
  const block = useRef()
  const blockObserver = createBackgroundObserver(background)

  useEffect(() => {
    blockObserver.observe(block.current)
    return () => blockObserver.disconnect()
  }, [background, blockObserver])
  return (
    <div ref={block} className={styles.Block} style={style}>
      {children}
    </div>
  )
}

export default Block
