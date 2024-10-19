import { FC } from "react"
import { DescriptionSection, Header } from "components"
import s from "./MainPage.module.scss"

interface MainPageI {}
export const MainPage: FC<MainPageI> = ({}) => {
  return (
    <div className={s.mainPageCnt}>
      <Header />
      <DescriptionSection />
    </div>
  )
}
