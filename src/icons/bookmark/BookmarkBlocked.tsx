import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const BookmarkBlocked = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.68 8.70999V19.71C20.68 21.72 19.24 22.57 17.48 21.59L11 17.54"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.32031 19.95V5.86C3.32031 3.74 5.05031 2 7.18031 2H16.8303C18.0403 2 19.1203 2.56 19.8303 3.44"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 2L2 22"
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
        d="M20.68 8.70999V19.71C20.68 21.72 19.24 22.57 17.48 21.59L11 17.54"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.32031 19.95V5.86C3.32031 3.74 5.05031 2 7.18031 2H16.8303C18.0403 2 19.1203 2.56 19.8303 3.44"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 2L2 22"
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
        d="M20.68 8.70999V19.71C20.68 21.72 19.24 22.57 17.48 21.59L11 17.54"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.32031 19.95V5.86C3.32031 3.74 5.05031 2 7.18031 2H16.8303C18.0403 2 19.1203 2.56 19.8303 3.44"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 2L2 22"
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
        d="M20.68 8.70999V19.71C20.68 21.72 19.24 22.57 17.48 21.59L11 17.54"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.32031 19.95V5.86C3.32031 3.74 5.05031 2 7.18031 2H16.8303C18.0403 2 19.1203 2.56 19.8303 3.44"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 2L2 22"
      />
    </>
  ))

  renderIcon.set('fill', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.68 8.70999V19.71C20.68 21.72 19.24 22.57 17.48 21.59L11 17.54"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.32031 19.95V5.86C3.32031 3.74 5.05031 2 7.18031 2H16.8303C18.0403 2 19.1203 2.56 19.8303 3.44"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 2L2 22"
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
        d="M20.68 8.70999V19.71C20.68 21.72 19.24 22.57 17.48 21.59L11 17.54"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.32031 19.95V5.86C3.32031 3.74 5.05031 2 7.18031 2H16.8303C18.0403 2 19.1203 2.56 19.8303 3.44"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 2L2 22"
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
        d="M20.68 8.70999V19.71C20.68 21.72 19.24 22.57 17.48 21.59L11 17.54"
      />
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.32031 19.95V5.86C3.32031 3.74 5.05031 2 7.18031 2H16.8303C18.0403 2 19.1203 2.56 19.8303 3.44"
      />
      <path
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 2L2 22"
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

BookmarkBlocked.displayName = 'BookmarkBlocked'
