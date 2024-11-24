import type { WeaponKey } from '@genshin-optimizer/gi/consts'
import {
  equal,
  input,
  percent,
  prod,
  subscript,
  sum,
} from '@genshin-optimizer/gi/wr'
import { cond, st, stg } from '../../../SheetUtil'
import type { IWeaponSheet } from '../../IWeaponSheet'
import { WeaponSheet, headerTemplate } from '../../WeaponSheet'
import { dataObjForWeaponSheet } from '../../util'

const key: WeaponKey = 'AThousandBlazingSuns'

const critDmg_Src = [-1, 0.2, 0.25, 0.3, 0.35, 0.4]
const atk_Src = [-1, 0.28, 0.35, 0.42, 0.49, 0.56]
const [condPassivePath, condPassive] = cond(key, 'SunsetReignitesTheDawn')
const critDmg_ = equal(
  input.weapon.key,
  key,
  equal(
    condPassive,
    'on',
    subscript(input.weapon.refinement, critDmg_Src, {
      path: 'critDMG_',
    })
  )
)
const atk_ = equal(
  input.weapon.key,
  key,
  equal(
    condPassive,
    'on',
    subscript(input.weapon.refinement, atk_Src, {
      path: 'atk_',
    })
  )
)

const [condPassivePath2, condPassive2] = cond(
  key,
  'SunsetReignitesTheDawnNightSoul'
)
const critDmgNightSoulBlessingBuff = equal(
  input.weapon.key,
  key,
  equal(condPassive2, 'on', prod(critDmg_, percent(0.75)), {
    path: 'critDMG_',
  })
)
const atkNightSoulBlessingBuff = equal(
  input.weapon.key,
  key,
  equal(condPassive2, 'on', prod(atk_, percent(0.75)), {
    path: 'atk_',
  })
)

const data = dataObjForWeaponSheet(key, {
  premod: {
    atk_: sum(atk_, atkNightSoulBlessingBuff),
    critDMG_: sum(critDmg_, critDmgNightSoulBlessingBuff),
  },
})
const sheet: IWeaponSheet = {
  document: [
    {
      value: condPassive,
      path: condPassivePath,
      header: headerTemplate(key, st('conditional')),
      name: st('afterUse.skillOrBurst'),
      states: {
        on: {
          fields: [
            {
              node: critDmg_,
            },
            {
              node: atk_,
            },
            {
              text: stg('duration'),
              value: 6,
              unit: 's',
            },
          ],
        },
      },
    },
    {
      value: condPassive2,
      path: condPassivePath2,
      header: headerTemplate(key, st('conditional')),
      name: st('nightsoul.blessing'),
      states: {
        on: {
          fields: [
            {
              node: critDmgNightSoulBlessingBuff,
            },
            {
              node: atkNightSoulBlessingBuff,
            },
          ],
        },
      },
    },
  ],
}
export default new WeaponSheet(sheet, data)
