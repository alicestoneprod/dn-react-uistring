import { FC } from "react"
import s from "./Header.module.scss"

interface HeaderI {}
export const Header: FC<HeaderI> = ({}) => {
  return (
    <div className={s.headerCnt}>
      <div className={s.iconTextCnt}>
        <img src='/icon.png' width={48} height={48} />
        <a href={"https://github.com/alicestoneprod/dn-react-uistring"}>
          <p className={s.text}>dn-react-uistring</p>
        </a>
      </div>
    </div>
  )
}
