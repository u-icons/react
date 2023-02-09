import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const SquarePile = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17v2.38c0 1.87-.75 2.62-2.63 2.62H4.62C2.75 22 2 21.25 2 19.38v-4.75C2 12.75 2.75 12 4.62 12H7v2.37C7 16.25 7.75 17 9.62 17H12z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 12v2.37c0 1.88-.75 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12v2.37c0 1.88.75 2.63 2.62 2.63H17z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62z"
      />
    </>
  ))

  renderIcon.set('light', (color: string) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17v2.38c0 1.87-.75 2.62-2.63 2.62H4.62C2.75 22 2 21.25 2 19.38v-4.75C2 12.75 2.75 12 4.62 12H7v2.37C7 16.25 7.75 17 9.62 17H12z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 12v2.37c0 1.88-.75 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12v2.37c0 1.88.75 2.63 2.62 2.63H17z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62z"
      />
    </>
  ))

  renderIcon.set('regular', (color: string) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17v2.38c0 1.87-.75 2.62-2.63 2.62H4.62C2.75 22 2 21.25 2 19.38v-4.75C2 12.75 2.75 12 4.62 12H7v2.37C7 16.25 7.75 17 9.62 17H12z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 12v2.37c0 1.88-.75 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12v2.37c0 1.88.75 2.63 2.62 2.63H17z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62z"
      />
    </>
  ))

  renderIcon.set('bold', (color: string) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17v2.38c0 1.87-.75 2.62-2.63 2.62H4.62C2.75 22 2 21.25 2 19.38v-4.75C2 12.75 2.75 12 4.62 12H7v2.37C7 16.25 7.75 17 9.62 17H12z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 12v2.37c0 1.88-.75 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12v2.37c0 1.88.75 2.63 2.62 2.63H17z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62z"
      />
    </>
  ))

  renderIcon.set('fill', (color: string) => (
    <>
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17v2.38c0 1.87-.75 2.62-2.63 2.62H4.62C2.75 22 2 21.25 2 19.38v-4.75C2 12.75 2.75 12 4.62 12H7v2.37C7 16.25 7.75 17 9.62 17H12z"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 12v2.37c0 1.88-.75 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12v2.37c0 1.88.75 2.63 2.62 2.63H17z"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62z"
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
        d="M12 17v2.38c0 1.87-.75 2.62-2.63 2.62H4.62C2.75 22 2 21.25 2 19.38v-4.75C2 12.75 2.75 12 4.62 12H7v2.37C7 16.25 7.75 17 9.62 17H12z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 12v2.37c0 1.88-.75 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12v2.37c0 1.88.75 2.63 2.62 2.63H17z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62z"
      />
    </>
  ))

  renderIcon.set('custom', (_, customColors: CustomColors) => (
    <>
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17v2.38c0 1.87-.75 2.62-2.63 2.62H4.62C2.75 22 2 21.25 2 19.38v-4.75C2 12.75 2.75 12 4.62 12H7v2.37C7 16.25 7.75 17 9.62 17H12z"
      />
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 12v2.37c0 1.88-.75 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12v2.37c0 1.88.75 2.63 2.62 2.63H17z"
      />
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62z"
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

SquarePile.displayName = 'SquarePile'
