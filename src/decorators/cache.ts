import { MethodDecorator } from '../../typings/decorator'

export function cache(cacheKey: string, isArgsAffectKey: boolean = false): MethodDecorator {
  return function (target, propertyKey, descriptor) {
    const original = descriptor.value as Function
    ;(descriptor as any).value = function (this: any, ...args: any[]) {
      if (args.length > 0 && isArgsAffectKey) {
        const argsStr = JSON.stringify(args)
        cacheKey += argsStr
      }
      if (this.cache.has(cacheKey)) return this.cache.get(cacheKey)
      const result = original.call(this, ...args)
      this.cache.set(cacheKey, result)
      return result
    }
  }
}
