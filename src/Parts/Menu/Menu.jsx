/** @jsxImportSource theme-ui */
import { MenuItem } from "./MenuItem"
import Block from "../../Components/Block"
import "./Menu.css"
import vitrine from "../../assets/images/vitrine.jpg"
import commerce from "../../assets/images/commerce.jpeg"
import app from "../../assets/images/app.jpeg"

const Menu = () => (
  <Block
    background="#90C098"
    style={{
      position: "sticky",
      zIndex: 10,
      bottom: 0,
      height: "130vh",
      paddingTop: "30vh",
    }}
  >
    <div className="menu">
      <span sx={{ mb: 4 }}>
        <MenuItem
          // background="#C86A6A"
          shapeOptions={{ imgSrc: vitrine, skew: { x: 5, y: 5 } }}
        >
          SITE VITRINE
        </MenuItem>
      </span>
      <span sx={{ mb: 4 }}>
        <MenuItem
          // background="#90C0C0"
          shapeOptions={{ imgSrc: commerce, skew: { x: -10, y: 15 } }}
          left
        >
          E-COMMERCE
        </MenuItem>
      </span>
      <MenuItem
        // background="#6A73C8"
        shapeOptions={{ imgSrc: app, skew: { x: -10, y: 15 } }}
      >
        APPLICATION
      </MenuItem>
    </div>
  </Block>
)

export { Menu }
