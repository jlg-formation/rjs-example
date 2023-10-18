export const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay))

const debounceMap = new Map<string, ReturnType<typeof setTimeout>>()

export const debounce = (func: () => void, timeout = 300) => {
  const key = func.toString()

  const timer = debounceMap.get(key)
  return () => {
    if (timer !== undefined) {
      clearTimeout(timer)
    }
    const newTimer = setTimeout(() => {
      func()
      debounceMap.delete(key)
    }, timeout)
    debounceMap.set(key, newTimer)
  }
}
