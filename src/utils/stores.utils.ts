export const isStorageAccessible = Boolean(typeof window === "object" && window.localStorage)

/**
 * SAVE TO STORAGE
 * ---
 * Saves given data to persistent storage
 */
export function saveToStorage(key: string, data: any, stringify = true): void {
	isStorageAccessible && window.localStorage.setItem(key, stringify ? JSON.stringify(data) : data)
}

/**
 * LOAD FROM STORAGE
 * ---
 * Loads data saved in local storage with given key
 */
export function loadFromStorage(key: string) {
	if (!isStorageAccessible) {
		return null
	}

	const data = window.localStorage.getItem(key)

	return data
}

/**
 * REMOVE FROM STORAGE
 * ---
 * Remove data from local storage according to given key
 */
export function removeFromStorage(key: string) {
	isStorageAccessible && window.localStorage.removeItem(key)
}

// stringify JSON
export function doStringify(input: Record<string, unknown>): string {
	try {
		return JSON.stringify(input)
	} catch {
		// silent catch
	}

	return ""
}

// parse JSON
export function doParse(input: string): Record<string, unknown> {
	try {
		return JSON.parse(input)
	} catch {
		// silent catch
	}

	return {}
}
