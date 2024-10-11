export const MOCK = {
  BIG_CONTENT_1: {
    INPUT:
      "#y[Adaptability (Frozen World)]\n#hA chilly feeling as if frozen by the sudden onslaught of cold seeps through your body.\nIt seems that it will be difficult to be active before getting used to the cold.\nWhere did this sudden cold come from...\nMaybe new...?\n{1}\n\n\n#wMy Cold Resistance Adaptability (Frozen World):#y%d\n{0}\n\n\n#pThe higher adaptability Frozen World), the more immunity to curses or special effects in the Frozen Nest.\n\n{3}\n#s[Target Area] \n#yBalkov Nest #r[Minimum recommended value 0]\n#yMuertos Nest #r[Minimum recommended value 10]\n\n#s[Effect by Numerical]\n#wIf the target area is less than the minimum recommended value, the curse effect is applied\nMinimum recommended value for each target  area +10 cumulative special effects applied\n\n#r Curse effect #w: Max HP -90%%, Phy/Magical ATK -90%%, Attack Speed -15%%\n#y Special Effect (1 stage) #w: Attack Speed +10%%\n#y Special Effect (2 stage) #w: Additional damage +20%% on critical hit ",
    EXPECTED: `<span class='format-color-y'>[Adaptability (Frozen World)]<br /></span><span class='format-color-h'>A chilly feeling as if frozen by the sudden onslaught of cold seeps through your body.<br />It seems that it will be difficult to be active before getting used to the cold.<br />Where did this sudden cold come from...<br />Maybe new...?<br />PARAM 1<br /><br /><br /></span><span class='format-color-w'>My Cold Resistance Adaptability (Frozen World):</span><span class='format-color-y'>DIRECT VALUE FIRST<br />PARAM 0<br /><br /><br /></span><span class='format-color-p'>The higher adaptability Frozen World), the more immunity to curses or special effects in the Frozen Nest.<br /><br />PARAM 3<br /></span><span class='format-color-s'>[Target Area] <br /></span><span class='format-color-y'>Balkov Nest </span><span class='format-color-r'>[Minimum recommended value 0]<br /></span><span class='format-color-y'>Muertos Nest </span><span class='format-color-r'>[Minimum recommended value 10]<br /><br /></span><span class='format-color-s'>[Effect by Numerical]<br /></span><span class='format-color-w'>If the target area is less than the minimum recommended value, the curse effect is applied<br />Minimum recommended value for each target&nbsp;&nbsp;area +10 cumulative special effects applied<br /><br /></span><span class='format-color-r'> Curse effect </span><span class='format-color-w'>: Max HP -90%%, Phy/Magical ATK -90%%, Attack Speed -15%%<br /></span><span class='format-color-y'> Special Effect (1 stage) </span><span class='format-color-w'>: Attack Speed +10%%<br /></span><span class='format-color-y'> Special Effect (2 stage) </span><span class='format-color-w'>: Additional damage +20%% on critical hit </span>`,
    DIRECT_VALUES: ["DIRECT VALUE FIRST"],
    INPUT_PARAMS: [
      {
        index: 1,
        value: "PARAM 1",
      },
      {
        index: 0,
        value: "PARAM 0",
      },
      {
        index: 3,
        value: "PARAM 3",
      },
    ],
  },
  BIG_CONTENT_2: {
    INPUT: `#s[Cooking - Storage Dish Recipe] - Special Ability\n#wYou can get {0} #y{1}{2}#w when used.\n\n#s[{3}]\nFor #y{4}#w seconds, #g{5}#w is maintained\n#sCan be used by players above Lv{6}\n\n#vBlack Dragon Nest exclusive dish. It can only be used once in Black Dragon Nest. It will become inactive when used up. Also, invincibility effect will not be applied for certain patterns.\n\n#y[Required ingredients]\n#w-{7}\n#w-{8}\n`,
    EXPECTED: `<span class='format-color-s'>[Cooking - Storage Dish Recipe] - Special Ability<br /></span><span class='format-color-w'>You can get food param with index 0 </span><span class='format-color-y'>food param with index 1{2}</span><span class='format-color-w'> when used.<br /><br /></span><span class='format-color-s'>[food param with index 3]<br />For </span><span class='format-color-y'>{4}</span><span class='format-color-w'> seconds, </span><span class='format-color-g'>{5}</span><span class='format-color-w'> is maintained<br /></span><span class='format-color-s'>Can be used by players above Lv{6}<br /><br /></span><span class='format-color-v'>Black Dragon Nest exclusive dish. It can only be used once in Black Dragon Nest. It will become inactive when used up. Also, invincibility effect will not be applied for certain patterns.<br /><br /></span><span class='format-color-y'>[Required ingredients]<br /></span><span class='format-color-w'>-{7}<br /></span><span class='format-color-w'>-{8}<br /></span>`,
    DIRECT_VALUES: ["DIRECT VALUE FIRST"],
    INPUT_PARAMS: [
      {
        index: 1,
        value: "food param with index 1",
      },
      {
        index: 0,
        value: "food param with index 0",
      },
      {
        index: 3,
        value: "food param with index 3",
      },
    ],
  },
  BIG_CONTENT_3: {
    INPUT: `Uses the power of light to transform into #y[Oracle Elder]#w.\\n#y[Oracle Bubble]#w is created when #y[Main Skills]#w hit enemies. Up to #y{0}#w Bubbles can be created and when you reach the maximum limit, you will immediately transform into #y[Oracle Elder]#w. You will not earn Bubbles in #y[Oracle Elder]#w state but #y[Main Skills]#w will be enhanced,and you can use #y[Sharp Hurricane]#w by entering #y[Normal Attack Button]#w after using #y[Main Skills]#w.\\n\\n#yBubbles last for {1} sec\\nTransformation lasts for {2} sec\\n\\n[Main Skills]\\nWild Spada\\nTwister\\nVanishing Spada\\nRising Gust\\nSharp Hurricane\\nFlash Tempest\\n\\n[Enhancements]\\nAttack Area and Action Speed are increased`,
    EXPECTED: `<span class='format-color-w'>Uses the power of light to transform into </span><span class='format-color-y'>[Oracle Elder]</span><span class='format-color-w'>.<br /></span><span class='format-color-y'>[Oracle Bubble]</span><span class='format-color-w'> is created when </span><span class='format-color-y'>[Main Skills]</span><span class='format-color-w'> hit enemies. Up to </span><span class='format-color-y'>param with index 0</span><span class='format-color-w'> Bubbles can be created and when you reach the maximum limit, you will immediately transform into </span><span class='format-color-y'>[Oracle Elder]</span><span class='format-color-w'>. You will not earn Bubbles in </span><span class='format-color-y'>[Oracle Elder]</span><span class='format-color-w'> state but </span><span class='format-color-y'>[Main Skills]</span><span class='format-color-w'> will be enhanced,and you can use </span><span class='format-color-y'>[Sharp Hurricane]</span><span class='format-color-w'> by entering </span><span class='format-color-y'>[Normal Attack Button]</span><span class='format-color-w'> after using </span><span class='format-color-y'>[Main Skills]</span><span class='format-color-w'>.<br /><br /></span><span class='format-color-y'>Bubbles last for param with index 1 sec<br />Transformation lasts for {2} sec<br /><br />[Main Skills]<br />Wild Spada<br />Twister<br />Vanishing Spada<br />Rising Gust<br />Sharp Hurricane<br />Flash Tempest<br /><br />[Enhancements]<br />Attack Area and Action Speed are increased</span>`,
    DIRECT_VALUES: ["DIRECT VALUE FIRST"],
    INPUT_PARAMS: [
      {
        index: 1,
        value: "param with index 1",
      },
      {
        index: 0,
        value: "param with index 0",
      },
      {
        index: 3,
        value: "param with index 3",
      },
    ],
  },
}
