import { CreatePalette } from './type'
import { darken, getLuminance, lighten, transparentize, shade } from "polished";


/**
 * `createPalette` - Create color palette.
 * @param color - Main Color
 * @param altColor Alternative to the main color, for example, if the main color is too light or too dark, alternate a color with a darker tone to the light color, or a lighter tone to the dark color.
 * @returns Palette 
 */
export const createPalette:CreatePalette = (color, altColor) => {
  const initialColor = altColor ?? color

  let luminance = getLuminance(initialColor) 
      luminance = Number(luminance.toString().slice(0, 4))
  const isLight = luminance >= 0.50 ? true : false

  const colorAlt = altColor 
    ?? (isLight ? shade(0.05, lighten(luminance > 0.50 ? 0.1 : 0.3, color)) 
    : lighten(luminance > 0.3 ? 0.08 : 0.10, darken(0.05, color)));

  //console.log('luminance:', luminance )
  //console.log('isLight:', isLight )

  return {
    light: lighten(isLight ? luminance > 0.50 ? 0.15 : 0.3 : 0.1, color),
    main: initialColor,
    hover: isLight ? darken(0.08, initialColor) : lighten(0.08, initialColor),
    alt: colorAlt,
    dark: shade(isLight ? 0.2 : 0.2, color),
    shad: transparentize(0.6, darken(0.1, color)),
    over: transparentize(0.4, color)
  }
}
