export const useLocalStorage = () => {
  function read<T = unknown>(key: string): T {
    const json = localStorage.getItem(key) || '[]'

    return JSON.parse(json)
  }

  function write<T = unknown>(key: string, value: T): void {
    const json = JSON.stringify(value)
    localStorage.setItem(key, json)
  }

  function has<T = unknown>(key: string): boolean {
    const value: T = read(key)

    if (Array.isArray(value)) {
      return !!value.length
    }

    return !!value
  }

  return { read, write, has }
}