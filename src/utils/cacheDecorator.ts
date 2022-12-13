type CacheMethodDecorator = <T>(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<T>
) => TypedPropertyDescriptor<T> | void

export function cache(cacheKey: string): CacheMethodDecorator {
  return function (target, propertyKey, descriptor) {
    const original = descriptor.value as Function
    ;(descriptor as any).value = function (this: any, ...args: any[]) {
      if (this.cache.has(cacheKey)) return this.cache.get(cacheKey)
      const result = original.call(this, ...args)
      this.cache.set(cacheKey, result)
      return result
    }
  }
}
