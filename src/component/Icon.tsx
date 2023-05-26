import { forwardRef, useContext, ReactNode } from 'react'
import { IconContext, Icon } from '../contexts/IconsContext'
import { IconWeight, CustomColors } from '../@types/ContextTypes'

export type IconInitialProps = (
  weight: IconWeight,
  color: string,
  customColors: CustomColors,
  inverted: boolean,
) => ReactNode | null

interface IconProps extends Icon {
  renderizeIcon: IconInitialProps
}

export type Colorize = (
  color: string,
  customColors: CustomColors,
  inverted: boolean,
) => ReactNode | null

export function RenderizeIconByWeight(
  color: string,
  customColors: CustomColors,
  renderIconByWeight: Map<IconWeight, Colorize>,
  weight?: IconWeight,
  inverted?: boolean,
): ReactNode | null {
  const svg = renderIconByWeight.get(weight)
  if (svg) return svg(color, customColors, inverted!)

  return null
}

export const IconBase = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    alt,
    children,
    color,
    customColors,
    size,
    inverted,
    weight,
    renderizeIcon,
    ...restProps
  } = props

  const {
    color: ctxColor = 'currentColor',
    size: ctxSize,
    weight: ctxWeight = 'regular',
    inverted: ctxInverted = false,
    customColors: ctxCustomColors = {
      fill: 'none',
      outter: 'currentColor',
      inner: 'currentColor',
    },
    ...restContext
  } = useContext(IconContext)

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? ctxSize}
      height={size ?? ctxSize}
      fill="none"
      viewBox="0 0 24 24"
      {...restContext}
      {...restProps}
    >
      {!!alt && <title>{alt}</title>}
      {children}
      <rect width="24" height="24" fill="none" />
      {renderizeIcon(
        weight ?? ctxWeight,
        color ?? ctxColor,
        customColors ?? ctxCustomColors,
        inverted ?? ctxInverted,
      )}
    </svg>
  )
})

IconBase.displayName = 'IconBase'
