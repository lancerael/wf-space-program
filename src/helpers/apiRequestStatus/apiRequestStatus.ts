export const controllers: { [key: string]: AbortController } = {}

export const apiRequestStatus = async (endpoint: string, controllerKey?: string, timeout?: number): Promise<200 | 500> => {
	if (controllerKey) controllers[controllerKey] = new AbortController()
	return new Promise(resolve => {
		if (timeout !== undefined) setTimeout(() => {
			if (controllerKey) abortRequestStatus(controllerKey)
			resolve(500)
		}, timeout)
		fetch(endpoint, { signal: controllerKey ? controllers[controllerKey].signal : undefined } )
			.then(({status}) => resolve(status ? status as 200 | 500 : 500))
			.catch(() => resolve(500))
	})
}

export const abortRequestStatus = (controllerKey: string): void => {
	const controller = controllers[controllerKey]
	if (controller) controller.abort()
}
