export function writeToStorage(key: string) {
  return function(target: Function, propertyName: string, descriptor: PropertyDescriptor) {
    return function() {
      const data = target()
      localStorage.setItem(key, JSON.stringify(data))
    }
  }
} 