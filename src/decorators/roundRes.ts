import { MethodDecorator } from '../../typings/decorator'
import { roundDecimal } from '../utils'

export function roundRes(
  defaultRound: [number, number, number] | number = [0, 2, 2],
  roundModFlag: 0 | 1 = 0,
  roundDefault: boolean | number = true,
  roundParamIdx: number = 0
): MethodDecorator {
  return function (target, propertyKey, descriptor) {
    const original = descriptor.value as Function
    ;(descriptor as any).value = function (this: any, ...args: any[]) {
      const round: number | boolean =
        args[roundParamIdx] === void 0 ? roundDefault : args[roundParamIdx]
      const res = original.call(this, ...args)
      if (round === false) return res
      const roundOffset = typeof round === 'number' ? Math.round(round) : 0
      const newDefaultRound =
        typeof defaultRound === 'number' ? new Array(res.length).fill(defaultRound) : defaultRound
      const roundList = newDefaultRound.map(v =>
        roundModFlag === 1 ? (typeof round === 'number' ? roundOffset : v) : v + roundOffset
      )
      return res.map((v: number, i: number) => roundDecimal(v, roundList[i]))
    }
  }
}
