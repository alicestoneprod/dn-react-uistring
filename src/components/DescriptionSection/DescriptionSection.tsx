import { FC, useEffect, useRef, useState } from "react"
import { GradientText } from "components"
import { UistringDisplayComponent } from "lib"
import s from "./DescriptionSection.module.scss"
import clsx from "clsx"

const PREVIEW_LANGUAGES = {
  Korean:
    "#y[용병 {0}레벨부터 사용 가능]#w\\n\\n전방 직선으로 강력한 바람을 발산한다. 공격 받은 적은 충격에 의해 크리티컬이 발생하지 않으며, 크리티컬이 발생할 확률이 추가되고 크리티컬 저항은 감소된다. 추가로 모든 속성 저항력도 감소한다.\\n#y물리 공격\\n#y크리티컬 확률 {1}% 감소\\n크리티컬 저항 {2}% 감소\\n대상 공격시 크리티컬 확률 {3}% 추가\\n모든 속성 저항력 {4}% 감소\\n지속 시간 {5}초",
  English:
    "#y[Can be used from Hero Lv{0}]#w\\n\\nReleases a powerful gust of wind straight to the front. Due to the shock, the attacked enemies will not give critical effect for their attacks, but have a higher chance of getting critical effect for themselves and have their critical resistance reduced. Additionally, all attribute resistance will also be reduced.\\n#yPhysical ATK\\n#yCritical rate -{1}%\\nCritical resistance -{2}%\\n{3}% additional critical rate when target is attacked\\nAll attribute resistance -{4}%\\nDuration {5} sec",
  Chinese:
    "#y[自{0}级佣兵开始可以使用]#w\\n\\n向前方直线发射强劲的风。受到攻击的敌人因冲击不能施展致命一击，施展者的致命一击概率提高，同时对致命一击的抵抗力减少。同时降低对方所有的属性抵抗力。\\n#y物理攻击\\n#y致命一击概率降低{1}%\\n致命一击抵抗力减少{2}%\\n攻击对方时致命一击概率增加{3}%\\n所有的属性抵抗力减少{4}%\\n持续时间{5}秒]",
  Russian:
    "#y[Может быть использован c {0} уровня героя]#w\\n\\nВыпускает мощный порыв ветра прямо перед собой. Пораженные ветром враги не смогут нанести критический удар своими атаками, они также станут уязвимы к чужим критическим атакам. Дополнительно снизится сопротивление всем стихиям.\\n#yФизическая атака\\n#yШанс крит.удара -{1}%\nСопротивление крит.удару -{2}%\\n{3}% дополнительный шанс крит.удару когда цель атакована\\nСнижение сопротивления всем стихиям -{4}%\\nДлительность {5} сек",
}

interface DescriptionSectionI {}
export const DescriptionSection: FC<DescriptionSectionI> = ({}) => {
  const [value, setValue] = useState<string>(PREVIEW_LANGUAGES["English"])

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const autoResize = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = "auto"
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  useEffect(() => {
    autoResize()
  }, [value, textareaRef])

  return (
    <section className={s.descriptionSectionCnt}>
      <div className={s.titleDescription}>
        <GradientText className={s.sectionTitle}>What is dn-react-uistring?</GradientText>
        <code className={s.installText}>
          npm install dn-react-uistring <br /> yarn add dn-react-uistring
        </code>
        <p className={s.descriptionText}>
          "dn-react-uistring is a powerful ⚡ <b>React library</b> that allows you to beautifully display 🖼️ and format strings from the uistring.xml
          file of the DragonNest game. It supports parameterized strings for dynamic content ✨ and is fully customizable with CSS 🎨 to fit any
          design. Plus, it comes with handy tools 🛠️ for working with uistring.xml files, making it the perfect choice for seamless integration into
          your project!"
        </p>
      </div>
      <div className={s.languageSupportSection}>
        <div className={s.titleDescription}>
          <GradientText className={s.languageSectionTitle}>Language supportable</GradientText>
          <p className={s.descriptionText}>
            Our library supports the most popular languages of Dragon Nest: Korean, English, Russian, Chinese and etc.
          </p>
        </div>
        <div className={s.examplesCnt}>
          <LanguageExample language={"Korean"} />
          <LanguageExample language={"English"} />
          <LanguageExample language={"Chinese"} />
          <LanguageExample language={"Russian"} />
        </div>
      </div>
      <div className={s.easyToUseSection}>
        <div className={s.titleDescription}>
          <GradientText className={s.languageSectionTitle}>Easy to use</GradientText>
          <p className={s.descriptionText}>
            Just import <b>UistringDisplayComponent</b> into your application and provide value via props. You also can provide inputProps or
            directValues. See our documentation: {<a href='https://github.com/alicestoneprod/dn-react-uistring/blob/main/README.md'>here</a>}.
          </p>
        </div>
      </div>
      <div className={s.playgroundCnt}>
        <div className={s.titleDescription}>
          <GradientText className={s.languageSectionTitle}>Try it yourself!</GradientText>
        </div>
        <div className={s.inputsCnt}>
          <div className={s.howItDisplays}>
            <GradientText className={clsx(s.descriptionText, s.previewText)}>How it displays in Dragon Nest</GradientText>
            <UistringDisplayComponent value={value} className={s.previewComponentPlayground} />
          </div>
          <div className={s.inputForDisplay}>
            <GradientText className={clsx(s.descriptionText, s.previewText)}>Type some text for preview</GradientText>
            <textarea ref={textareaRef} value={value} onChange={(e) => setValue(e.target.value)} className={s.valueInput}></textarea>
          </div>
        </div>
      </div>
    </section>
  )
}

interface LanguageExampleI {
  language: "Korean" | "English" | "Chinese" | "Russian"
}
export const LanguageExample: FC<LanguageExampleI> = ({ language }) => {
  const value = PREVIEW_LANGUAGES[language]

  return (
    <div className={s.languageExampleCnt}>
      <UistringDisplayComponent value={value} className={s.previewComponent}></UistringDisplayComponent>
      <GradientText className={s.languageName}>{language}</GradientText>
    </div>
  )
}
