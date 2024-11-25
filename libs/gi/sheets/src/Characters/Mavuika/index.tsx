import { objKeyMap, range } from '@genshin-optimizer/common/util'
import type { CharacterKey, ElementKey } from '@genshin-optimizer/gi/consts'
import { allStats } from '@genshin-optimizer/gi/stats'
import {
  constant,
  equal,
  greaterEq,
  infoMut,
  input,
  lookup,
  naught,
  percent,
  prod,
  subscript,
  sum,
  target,
  threshold,
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
const elementKey: ElementKey = 'pyro'
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
    interval: skillParam_gen.skill[s++][0],
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
    what1: skillParam_gen.burst[b++],
    what2: skillParam_gen.burst[b++],
    cd: skillParam_gen.burst[b++][0],
    fightingSpiritLimit: skillParam_gen.burst[b++][0],
  },
  passive1: {
    atkBonus: skillParam_gen.passive1[p1++][0],
  },
} as const

const [condFightingSpiritPath, condFightingSpirit] = cond(key, 'FightingSpirit')
const burstFightingSpiritArr = range(50, dm.burst.fightingSpiritLimit, 10)
const fightingSpiritNum = lookup(
  condFightingSpirit,
  objKeyMap(burstFightingSpiritArr, (stacks) => constant(stacks)),
  naught
)
const burstFightingSpiritSunfellSliceDmg = prod(
  input.total.atk,
  fightingSpiritNum,
  subscript(input.total.burstIndex, dm.burst.sunfellSliceDmgBonus, {
    unit: '%',
    fixed: 2,
  })
)
const burstFightingSpiritFlamestriderNADmg = prod(
  input.total.atk,
  fightingSpiritNum,
  subscript(input.total.burstIndex, dm.burst.flamestriderNADmgBonus, {
    unit: '%',
    fixed: 2,
  })
)
const burstFightingSpiritFlamestriderCADmg = prod(
  input.total.atk,
  fightingSpiritNum,
  subscript(input.total.burstIndex, dm.burst.flamestriderCADmgBonus, {
    unit: '%',
    fixed: 2,
  })
)

const [condA1Path, condA1] = cond(key, 'a1')
const a1AtkBonus_ = greaterEq(
  input.asc,
  1,
  equal('a1', condA1, percent(dm.passive1.atkBonus, { path: 'atk_' }))
)
const [condA4StacksPath, condA4Stacks] = cond(key, 'a4Stacks')
const a4Stacks = range(0, 19)
const a4CommonDmgBonusDisp = greaterEq(
  input.asc,
  4,
  threshold(
    input.constellation,
    4,
    lookup(
      condA4Stacks,
      Object.fromEntries(
        a4Stacks.map((stacks) => [
          stacks,
          prod(fightingSpiritNum, percent(0.0025)),
        ])
      ),
      naught
    ),
    lookup(
      condA4Stacks,
      Object.fromEntries(
        a4Stacks.map((stacks) => [
          stacks,
          prod((20 - stacks) / 20, fightingSpiritNum, percent(0.0025)),
        ])
      ),
      naught
    )
  )
)
const a4CommonDmgBonus = equal(
  target.charKey,
  input.activeCharKey,
  a4CommonDmgBonusDisp
)

const [condC1Path, condC1] = cond(key, 'c1')
const c1AtkBonus_ = greaterEq(
  input.constellation,
  1,
  equal('c1', condC1, percent(0.4, { path: 'atk_' }))
)
const [condC2Path, condC2] = cond(key, 'c2')
const c2AtkBonus = greaterEq(
  input.constellation,
  2,
  equal('c2', condC2, constant(300, { path: 'atk' }))
)
const c2EnemyRedBonus_ = greaterEq(
  input.constellation,
  2,
  equal('c2', condC2, percent(0.2, { path: 'enemyDefRed_' }))
)
const [condC2FlamestriderPath, condC2Flamestrider] = cond(key, 'c2Flamestrider')
const c2NADmgInc_ = greaterEq(
  input.constellation,
  2,
  equal(
    'c2Flamestrider',
    condC2Flamestrider,
    prod(input.total.atk, percent(0.8))
  )
)
const c2CADmgInc_ = greaterEq(
  input.constellation,
  2,
  equal(
    'c2Flamestrider',
    condC2Flamestrider,
    prod(input.total.atk, percent(1.3))
  )
)
const c2SunfellSliceDmgInc_ = greaterEq(
  input.constellation,
  2,
  equal(
    'c2Flamestrider',
    condC2Flamestrider,
    prod(input.total.atk, percent(1.8))
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
    skillDmg: dmgNode('atk', dm.skill.skillDmg, 'skill'),
    radianceDmg: dmgNode('atk', dm.skill.radianceDmg, 'skill'),
    flamestriderDmg1: dmgNode('atk', dm.skill.flamestriderDmg1, 'skill', {
      premod: {
        skill_dmgInc: sum(burstFightingSpiritFlamestriderNADmg, c2NADmgInc_),
      },
    }),
    flamestriderDmg2: dmgNode('atk', dm.skill.flamestriderDmg2, 'skill', {
      premod: {
        skill_dmgInc: sum(burstFightingSpiritFlamestriderNADmg, c2NADmgInc_),
      },
    }),
    flamestriderDmg3: dmgNode('atk', dm.skill.flamestriderDmg3, 'skill', {
      premod: {
        skill_dmgInc: sum(burstFightingSpiritFlamestriderNADmg, c2NADmgInc_),
      },
    }),
    flamestriderDmg4: dmgNode('atk', dm.skill.flamestriderDmg4, 'skill', {
      premod: {
        skill_dmgInc: sum(burstFightingSpiritFlamestriderNADmg, c2NADmgInc_),
      },
    }),
    flamestriderDmg5: dmgNode('atk', dm.skill.flamestriderDmg5, 'skill', {
      premod: {
        skill_dmgInc: sum(burstFightingSpiritFlamestriderNADmg, c2NADmgInc_),
      },
    }),
    flamestriderSprintDmg: dmgNode(
      'atk',
      dm.skill.flamestriderSprintDmg,
      'skill'
    ),
    flamestriderCACyclicDmg: dmgNode(
      'atk',
      dm.skill.flamestriderCACyclicDmg,
      'skill',
      {
        premod: {
          skill_dmgInc: sum(burstFightingSpiritFlamestriderCADmg, c2CADmgInc_),
        },
      }
    ),
    flamestriderCAFinalDmg: dmgNode(
      'atk',
      dm.skill.flamestriderCAFinalDmg,
      'skill',
      {
        premod: {
          skill_dmgInc: sum(burstFightingSpiritFlamestriderCADmg, c2CADmgInc_),
        },
      }
    ),
    flamestriderPlungeDmg: dmgNode(
      'atk',
      dm.skill.flamestriderPlungeDmg,
      'skill'
    ),
  },
  burst: {
    dmg: dmgNode('atk', dm.burst.dmg, 'burst', {
      premod: {
        burst_dmgInc: sum(
          burstFightingSpiritSunfellSliceDmg,
          c2SunfellSliceDmgInc_
        ),
      },
    }),
  },
  constellation6: {
    flamestriderDmg: greaterEq(
      input.constellation,
      6,
      customDmgNode(prod(input.total.atk, percent(2)), 'elemental', {
        hit: { ele: constant(elementKey) },
      })
    ),
    ringsOfSearingRadianceDmg: greaterEq(
      input.constellation,
      6,
      customDmgNode(prod(input.total.atk, percent(4)), 'elemental', {
        hit: { ele: constant(elementKey) },
      })
    ),
  },
}
const nodeC3 = greaterEq(input.constellation, 3, 3)
const nodeC5 = greaterEq(input.constellation, 5, 3)

export const data = dataObjForCharacterSheet(key, dmgFormulas, {
  premod: {
    atk_: sum(a1AtkBonus_, c1AtkBonus_),
    skillBoost: nodeC5,
    burstBoost: nodeC3,
  },
  base: {
    atk: c2AtkBonus,
  },
  teamBuff: {
    premod: {
      all_dmg_: a4CommonDmgBonus,
      enemyDefRed_: c2EnemyRedBonus_,
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
          multi: i === 1 ? 2 : i === 2 ? 3 : undefined,
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
          node: infoMut(dmgFormulas.skill.skillDmg, {
            name: ct.chg(`skill.skillParams.0`),
          }),
        },
        {
          node: infoMut(dmgFormulas.skill.radianceDmg, {
            name: ct.chg(`skill.skillParams.1`),
          }),
        },
        {
          text: ct.chg('skill.skillParams.2'),
          value: dm.skill.interval,
          unit: 's',
        },
        {
          node: infoMut(dmgFormulas.skill.flamestriderDmg1, {
            name: ct.chg(`skill.skillParams.3`),
          }),
        },
        {
          node: infoMut(dmgFormulas.skill.flamestriderDmg2, {
            name: ct.chg(`skill.skillParams.4`),
          }),
        },
        {
          node: infoMut(dmgFormulas.skill.flamestriderDmg3, {
            name: ct.chg(`skill.skillParams.5`),
          }),
        },
        {
          node: infoMut(dmgFormulas.skill.flamestriderDmg4, {
            name: ct.chg(`skill.skillParams.6`),
          }),
        },
        {
          node: infoMut(dmgFormulas.skill.flamestriderDmg5, {
            name: ct.chg(`skill.skillParams.7`),
          }),
        },
        {
          node: infoMut(dmgFormulas.skill.flamestriderSprintDmg, {
            name: ct.chg(`skill.skillParams.8`),
          }),
        },
        {
          node: infoMut(dmgFormulas.skill.flamestriderCACyclicDmg, {
            name: ct.chg(`skill.skillParams.9`),
          }),
        },
        {
          node: infoMut(dmgFormulas.skill.flamestriderCAFinalDmg, {
            name: ct.chg(`skill.skillParams.10`),
          }),
        },
        {
          node: infoMut(dmgFormulas.skill.flamestriderPlungeDmg, {
            name: ct.chg(`skill.skillParams.11`),
          }),
        },
        {
          text: ct.chg('skill.skillParams.12'),
          value: (data) =>
            data.get(input.constellation).value >= 1
              ? dm.skill.nightsoulPointLimit + 40
              : dm.skill.nightsoulPointLimit,
        },
        {
          text: ct.chg('skill.skillParams.13'),
          value: dm.skill.cd,
          unit: 's',
        },
      ],
    },
    ct.condTem('constellation2', {
      value: condC2,
      path: condC2Path,
      name: ct.ch('ringsOfSearingRadiance'),
      states: {
        c2: {
          fields: [
            {
              node: c2EnemyRedBonus_,
            },
          ],
        },
      },
    }),
    ct.condTem('constellation2', {
      value: condC2Flamestrider,
      path: condC2FlamestriderPath,
      name: ct.ch('flamestriderForm'),
      states: {
        c2Flamestrider: {
          fields: [
            {
              node: infoMut(c2NADmgInc_, {
                name: ct.ch('c2NADmgInc_'),
              }),
            },
            {
              node: infoMut(c2CADmgInc_, {
                name: ct.ch('c2CADmgInc_'),
              }),
            },
          ],
        },
      },
    }),
  ]),

  burst: ct.talentTem('burst', [
    {
      fields: [
        {
          node: infoMut(dmgFormulas.burst.dmg, {
            name: ct.chg(`burst.skillParams.0`),
          }),
        },
        {
          text: ct.chg('burst.skillParams.1'),
          value: dm.burst.duration,
          unit: 's',
        },
        {
          text: ct.chg('burst.skillParams.5'),
          value: dm.burst.cd,
          unit: 's',
        },
        {
          text: ct.chg('burst.skillParams.6'),
          value: dm.burst.fightingSpiritLimit,
        },
      ],
    },
    ct.condTem('burst', {
      value: condFightingSpirit,
      path: condFightingSpiritPath,
      name: ct.ch('fightingSpiritPoints'),
      teamBuff: true,
      states: () =>
        objKeyMap(burstFightingSpiritArr, (points) => ({
          name: st('stack', { count: points }),
          fields: [
            {
              node: infoMut(burstFightingSpiritSunfellSliceDmg, {
                name: ct.chg(`burst.skillParams.2`),
              }),
            },
            {
              node: infoMut(burstFightingSpiritFlamestriderNADmg, {
                name: ct.chg(`burst.skillParams.3`),
              }),
            },
            {
              node: infoMut(burstFightingSpiritFlamestriderCADmg, {
                name: ct.chg(`burst.skillParams.4`),
              }),
            },
          ],
        })),
    }),
    ct.condTem('passive2', {
      path: condA4StacksPath,
      value: condA4Stacks,
      teamBuff: true,
      name: st('afterUse.burst'),
      states: Object.fromEntries(
        a4Stacks.map((stack) => [
          stack,
          {
            name: st('seconds', { count: stack }),
            fields: [
              {
                node: infoMut(a4CommonDmgBonus, { path: 'all_dmg_' }),
              },
            ],
          },
        ])
      ),
    }),
    ct.condTem('constellation2', {
      value: condC2Flamestrider,
      path: condC2FlamestriderPath,
      name: ct.ch('flamestriderForm'),
      states: {
        c2Flamestrider: {
          fields: [
            {
              node: infoMut(c2SunfellSliceDmgInc_, {
                name: ct.ch('c2SunfellSliceDmgInc_'),
              }),
            },
          ],
        },
      },
    }),
  ]),

  passive1: ct.talentTem('passive1', [
    ct.condTem('passive1', {
      value: condA1,
      path: condA1Path,
      name: st('nightsoul.partyBurst'),
      states: {
        a1: {
          fields: [
            {
              node: a1AtkBonus_,
            },
            {
              text: ct.ch('duration'),
              value: '10',
              unit: 's',
            },
          ],
        },
      },
    }),
  ]),
  passive2: ct.talentTem('passive2'),
  passive3: ct.talentTem('passive3'),
  constellation1: ct.talentTem('constellation1', [
    ct.condTem('constellation1', {
      value: condC1,
      path: condC1Path,
      name: ct.ch('fightingSpiritGained'),
      states: {
        c1: {
          fields: [
            {
              node: c1AtkBonus_,
            },
            {
              text: ct.ch('duration'),
              value: '8',
              unit: 's',
            },
          ],
        },
      },
    }),
  ]),
  constellation2: ct.talentTem('constellation2'),
  constellation3: ct.talentTem('constellation3', [
    { fields: [{ node: nodeC3 }] },
  ]),
  constellation4: ct.talentTem('constellation4'),
  constellation5: ct.talentTem('constellation5', [
    { fields: [{ node: nodeC5 }] },
  ]),
  constellation6: ct.talentTem('constellation6', [
    {
      fields: [
        {
          node: infoMut(dmgFormulas.constellation6.flamestriderDmg, {
            name: ct.ch('c6FlamestriderDmg'),
          }),
        },
        {
          node: infoMut(dmgFormulas.constellation6.ringsOfSearingRadianceDmg, {
            name: ct.ch('c6RingsOfSearingRadianceDmg'),
          }),
        },
      ],
    },
  ]),
}

export default new CharacterSheet(sheet, data)
