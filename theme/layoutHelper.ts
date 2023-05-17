import type { CSSProperties } from 'vue'

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

export function handleBackground(background?: string, dim = false): CSSProperties {
  console.log(background)
  const isColor = background && ['#', 'rgb', 'hsl'].some(v => background.indexOf(v) === 0)

  const style = {
    background: isColor
      ? background
      : undefined,
    color: (background && !isColor)
      ? 'white'
      : undefined,
    backgroundImage: isColor
      ? undefined
      : background
        ? (dim || true)
          ? `linear-gradient(#000c, #000c), url(${resolveAssetUrl(background)})`
          : `url("${resolveAssetUrl(background)}")`
        : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  if (!style.background)
    delete style.background

  return style
}
