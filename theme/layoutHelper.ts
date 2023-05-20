import type { CSSProperties } from 'vue'

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

export function handleBackground(background?: string, dim = true, width = null, repeat = null, orientation = null): CSSProperties {
  const isColor = background && ['#', 'rgb', 'hsl'].some(v => background.indexOf(v) === 0)

  const style = {
    backgroundColor: isColor
      ? background
      : "#092e20",
    color: (background && !isColor)
      ? 'white'
      : undefined,
    backgroundImage: isColor
      ? undefined
      : background
        ? dim
          ? `radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${resolveAssetUrl(background)})`
          // ? `linear-gradient(#000c, #000c), url(${resolveAssetUrl(background)})`
          : `url("${resolveAssetUrl(background)}")`
        : undefined,
    backgroundRepeat: repeat ? 'space' : 'no-repeat',
    backgroundPosition: orientation ? orientation : 'center',
    backgroundSize: width ? width : 'cover',
  }

  if (!style.background)
    delete style.background

  return style
}
