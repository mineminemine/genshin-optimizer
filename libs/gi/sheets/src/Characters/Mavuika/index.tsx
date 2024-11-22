import { objKeyMap } from '@genshin-optimizer/common/util'
import type { CharacterKey } from '@genshin-optimizer/gi/consts'
import { allStats } from '@genshin-optimizer/gi/stats'
import {
  constant,
  equal,
  greaterEq,
  infoMut,
  input,
  lookup,
  one,
  percent,
  prod,
  subscript,
  sum,
  target,
  unequal,
} from '@genshin-optimizer/gi/wr'
import { cond, st, stg } from '../../SheetUtil'
import { CharacterSheet } from '../CharacterSheet'
import type { TalentSheet } from '../ICharacterSheet.d'
import { charTemplates } from '../charTemplates'
import {
  customDmgNode,
  dataObjForCharacterSheet,
  dmgNode,
  plungingDmgNodes,
} from '../dataUtil'

const key: CharacterKey = 'Mavuika'
const skillParam_gen = allStats.char.skillParam[key]
const ct = charTemplates(key)

let a = 0,
  s = 0,
  b = 0,
  p1 = 0,
  p2 = 0
const dm = {
  normal: {
    hitArr: [
      skillParam_gen.auto[a++], // 1
      skillParam_gen.auto[a++], // 2
      skillParam_gen.auto[a++], // 3
      skillParam_gen.auto[a++], // 4
    ],
  },
  charged: {
    dmg: skillParam_gen.auto[a++],
    stamina: skillParam_gen.auto[a++][0],
  },
  plunging: {
    dmg: skillParam_gen.auto[a++],
    low: skillParam_gen.auto[a++],
    high: skillParam_gen.auto[a++],
  },
  skill: {
    skillDmg: skillParam_gen.skill[s++],
    radianceDmg: skillParam_gen.skill[s++],
    interval: skillParam_gen.skill[s++],
    flamestriderDmg1: skillParam_gen.skill[s++],
    flamestriderDmg2: skillParam_gen.skill[s++],
    flamestriderDmg3: skillParam_gen.skill[s++],
    flamestriderDmg4: skillParam_gen.skill[s++],
    flamestriderDmg5: skillParam_gen.skill[s++],
    flamestriderSprintDmg: skillParam_gen.skill[s++],
    flamestriderCACyclicDmg: skillParam_gen.skill[s++],
    flamestriderCAFinalDmg: skillParam_gen.skill[s++],
    flamestriderPlungeDmg: skillParam_gen.skill[s++],
    nightsoulPointLimit: skillParam_gen.skill[s++][0],
    cd: skillParam_gen.skill[s++][0],
  },
  burst: {
    dmg: skillParam_gen.burst[b++],
    duration: skillParam_gen.burst[b++][0],
    sunfellSliceDmgBonus: skillParam_gen.burst[b++],
    flamestriderNADmgBonus: skillParam_gen.burst[b++],
    flamestriderCADmgBonus: skillParam_gen.burst[b++],
    cd: skillParam_gen.burst[b++][0],
    fightingSpiritLimit: skillParam_gen.burst[b++][0],
  },
  passive1: {
    atkBonus: skillParam_gen.passive1[p1++][0],
  },
  passive2: {
    dmgBonus: skillParam_gen.passive2[p2++],
    energyGen: skillParam_gen.passive2[p2++][0],
    electroDmg_bonus: skillParam_gen.passive2[p2++][0],
  },
  constellation2: {
    def_ignore: skillParam_gen.constellation2[0],
  },
  constellation4: {
    atk_bonus: skillParam_gen.constellation4[0],
    duration: skillParam_gen.constellation4[1],
  },
} as const

const [condSkillEyePath, condSkillEye] = cond(key, 'skillEye')
const [condInBurstPath, condInBurst] = cond(key, 'InBurst')
const defIgn_ = greaterEq(
  input.constellation,
  2,
  equal(condInBurst, 'on', dm.constellation2.def_ignore)
)

function skillDmg(atkType: number[]) {
  // if Raiden is above or equal to C2, then account for DEF Ignore else not
  return dmgNode('atk', atkType, 'skill')
}

const energyCosts = [40, 50, 60, 70, 80, 90]
const [condSkillEyeTeamPath, condSkillEyeTeam] = cond(key, 'skillEyeTeam')

const resolveStacks = [10, 20, 30, 40, 50, 60]
const [condResolveStackPath, condResolveStack] = cond(key, 'burstResolve')

const [condC4Path, condC4] = cond(key, 'c4')
const c4AtkBonus_ = greaterEq(
  input.constellation,
  4,
  equal(
    'c4',
    condC4,
    unequal(input.activeCharKey, target.charKey, dm.constellation4.atk_bonus)
  )
)

const dmgFormulas = {
  normal: Object.fromEntries(
    dm.normal.hitArr.map((arr, i) => [i, dmgNode('atk', arr, 'normal')])
  ),
  charged: {
    dmg: dmgNode('atk', dm.charged.dmg, 'charged'),
  },
  plunging: plungingDmgNodes('atk', dm.plunging),
  skill: {
    dmg: skillDmg(dm.skill.skillDmg),
  },
  burst: {
  },
  passive2: {
  },
}
const nodeC3 = greaterEq(input.constellation, 3, 3)
const nodeC5 = greaterEq(input.constellation, 5, 3)

export const data = dataObjForCharacterSheet(key, dmgFormulas, {
  premod: {
    skillBoost: nodeC5,
    burstBoost: nodeC3,
    enemyDefIgn_: defIgn_,
  },
  teamBuff: {
    premod: {
      atk_: c4AtkBonus_,
    },
  },
})

const sheet: TalentSheet = {
  auto: ct.talentTem('auto', [
    {
      text: ct.chg('auto.fields.normal'),
    },
    {
      fields: dm.normal.hitArr.map((_, i) => ({
        node: infoMut(dmgFormulas.normal[i], {
          name: ct.chg(`auto.skillParams.${i}`),
        }),
      })),
    },
    {
      text: ct.chg('auto.fields.charged'),
    },
    {
      fields: [
        {
          node: infoMut(dmgFormulas.charged.dmg, {
            name: ct.chg(`auto.skillParams.4`),
          }),
        },
        {
          text: ct.chg('auto.skillParams.5'),
          value: dm.charged.stamina,
        },
      ],
    },
    {
      text: ct.chg('auto.fields.plunging'),
    },
    {
      fields: [
        {
          node: infoMut(dmgFormulas.plunging.dmg, {
            name: stg('plunging.dmg'),
          }),
        },
        {
          node: infoMut(dmgFormulas.plunging.low, {
            name: stg('plunging.low'),
          }),
        },
        {
          node: infoMut(dmgFormulas.plunging.high, {
            name: stg('plunging.high'),
          }),
        },
      ],
    },
  ]),

  skill: ct.talentTem('skill', [
    {
      fields: [
        {
          node: infoMut(dmgFormulas.skill.dmg, {
            name: ct.chg(`skill.skillParams.0`),
          }),
        },
        {
          text: ct.chg('skill.skillParams.4'),
          value: dm.skill.cd,
          unit: 's',
        },
      ],
    },
  ]),

  burst: ct.talentTem('burst', [
    {
      fields: [
        {
          text: ct.chg('burst.skillParams.13'),
          value: dm.burst.duration,
          unit: 's',
        },
        {
          text: ct.chg('burst.skillParams.14'),
          value: dm.burst.cd,
          unit: 's',
        },
      ],
    },
    ct.condTem('burst', {
      value: condInBurst,
      path: condInBurstPath,
      name: ct.ch('burst.active'),
      states: {
        on: {
          fields: [
            {
              text: st('infusion.electro'),
              variant: 'electro',
            },
            {
              text: st('incInterRes'),
            },
            {
              text: st('immuneToElectroCharged'),
            },
          ],
        },
      },
    }),
    ct.headerTem('constellation2', {
      canShow: equal(condInBurst, 'on', 1),
      fields: [
        {
          node: defIgn_,
        },
      ],
    }),
  ]),

  passive1: ct.talentTem('passive1'),
  passive2: ct.talentTem('passive2', [

  ]),
  passive3: ct.talentTem('passive3'),
  constellation1: ct.talentTem('constellation1'),
  constellation2: ct.talentTem('constellation2'),
  constellation3: ct.talentTem('constellation3', [
    { fields: [{ node: nodeC3 }] },
  ]),
  constellation4: ct.talentTem('constellation4', [
    ct.condTem('constellation4', {
      value: condC4,
      path: condC4Path,
      teamBuff: true,
      canShow: unequal(input.activeCharKey, target.charKey, 1),
      name: ct.ch('c4.expires'),
      states: {
        c4: {
          fields: [
            {
              node: c4AtkBonus_,
            },
            {
              text: ct.chg('skill.skillParams.2'),
              value: dm.constellation4.duration,
              unit: 's',
            },
          ],
        },
      },
    }),
  ]),
  constellation5: ct.talentTem('constellation5', [
    { fields: [{ node: nodeC5 }] },
  ]),
  constellation6: ct.talentTem('constellation6'),
}

export default new CharacterSheet(sheet, data)
