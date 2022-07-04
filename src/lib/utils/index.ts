export const sleep = (ms = 0) => new Promise((r) => setTimeout(r, ms))

/**
 * Conditionally join class names together.
 */
export const cn = (...args: (string | unknown)[]) => {
	return args
		.filter(Boolean)
		.map((v) => `${v}`.trim())
		.join(' ')
}

/**
 * Disables all element transitions for the given duration.
 * @param ms milliseconds (default: 0)
 */
export const disabledTransitions = async (ms = 0) => {
	document.documentElement.classList.add('disable-transitions')
	await sleep(ms)
	document.documentElement.classList.remove('disable-transitions')
}

export const setThemeColor = (color: string) => {
	const meta = document.querySelector('meta[name="theme-color"]')
	if (meta) meta.setAttribute('content', color)
}
