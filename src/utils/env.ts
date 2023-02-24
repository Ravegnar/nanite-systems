export const isBrowser = Boolean(
  typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement,
)

export const isServer = !isBrowser
