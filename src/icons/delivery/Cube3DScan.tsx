import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const Cube3DScan = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.7 9.26l5.3 3.07 5.26-3.05M12 17.77v-5.45"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.39c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.39-1.81-.39-2.49 0z"
      />
    </>
  ))

  renderIcon.set('light', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.7 9.26l5.3 3.07 5.26-3.05M12 17.77v-5.45"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.39c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.39-1.81-.39-2.49 0z"
      />
    </>
  ))

  renderIcon.set('regular', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.7 9.26l5.3 3.07 5.26-3.05M12 17.77v-5.45"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.39c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.39-1.81-.39-2.49 0z"
      />
    </>
  ))

  renderIcon.set('bold', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.7 9.26l5.3 3.07 5.26-3.05M12 17.77v-5.45"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.39c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.39-1.81-.39-2.49 0z"
      />
    </>
  ))

  renderIcon.set('fill', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.7 9.26l5.3 3.07 5.26-3.05M12 17.77v-5.45"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.39c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.39-1.81-.39-2.49 0z"
      />
    </>
  ))

  renderIcon.set('outline', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.7 9.26l5.3 3.07 5.26-3.05M12 17.77v-5.45"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.39c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.39-1.81-.39-2.49 0z"
      />
    </>
  ))

  renderIcon.set('custom', (_, customColors: CustomColors) => (
    <>
      <path
        fill="none"
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2"
      />
      <path
        fill="none"
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.7 9.26l5.3 3.07 5.26-3.05M12 17.77v-5.45"
      />
      <path
        fill="none"
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.39c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.39-1.81-.39-2.49 0z"
      />
    </>
  ))

  const renderizeIcon: IconInitialProps = (
    weight: IconWeight,
    color: string,
    customColors: CustomColors,
    inverted: boolean,
  ) => RenderizeIconByWeight(color, customColors, renderIcon, weight, inverted)

  return <IconBase ref={ref} {...props} renderizeIcon={renderizeIcon} />
})

Cube3DScan.displayName = 'Cube3DScan'
