const controllers: { [key: string]: AbortController } = {}

export const apiRequestStatus = async (endpoint: string, controllerKey?: string, timeout?: number): Promise<200 | 500> => {
  if (controllerKey) controllers[controllerKey] = new AbortController()
  return new Promise(async resolve => {
    if (timeout) setTimeout(() => {
      if (controllerKey) abortRequestStatus(controllerKey)
      resolve(500)
    }, timeout)
    try {
      const response = await fetch(endpoint, { signal: controllerKey ? controllers[controllerKey].signal : undefined } )
      if (response) resolve(response.status as 200 | 500)
      else resolve(500)
    } catch (e) {
      return resolve(500)
    }
  })
}

export const abortRequestStatus = (controllerKey: string): void => {
  const controller = controllers[controllerKey]
  if (controller) controller.abort()
}
