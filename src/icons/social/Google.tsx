'use client'

import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const Google = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M21.6 10.2h-9.4v3.7h5.5c-.1.9-.7 2.3-2 3.2-.8.6-2 1-3.5 1-2.6 0-4.9-1.7-5.7-4.2-.2-.6-.3-1.3-.3-2s.1-1.4.3-2c.1-.2.1-.4.2-.5.9-2.1 3-3.6 5.5-3.6 1.9 0 3.1.8 3.9 1.5l2.8-2.8C17.2 3 14.9 2 12.2 2 8.3 2 4.9 4.2 3.3 7.5c-.7 1.4-1.1 2.9-1.1 4.5s.4 3.1 1.1 4.5c1.6 3.3 5 5.5 8.9 5.5 2.7 0 5-.9 6.6-2.4 1.9-1.7 3-4.3 3-7.4 0-.8-.1-1.4-.2-2z"
      />
    </>
  ))

  renderIcon.set('light', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M21.6 10.2h-9.4v3.7h5.5c-.1.9-.7 2.3-2 3.2-.8.6-2 1-3.5 1-2.6 0-4.9-1.7-5.7-4.2-.2-.6-.3-1.3-.3-2s.1-1.4.3-2c.1-.2.1-.4.2-.5.9-2.1 3-3.6 5.5-3.6 1.9 0 3.1.8 3.9 1.5l2.8-2.8C17.2 3 14.9 2 12.2 2 8.3 2 4.9 4.2 3.3 7.5c-.7 1.4-1.1 2.9-1.1 4.5s.4 3.1 1.1 4.5c1.6 3.3 5 5.5 8.9 5.5 2.7 0 5-.9 6.6-2.4 1.9-1.7 3-4.3 3-7.4 0-.8-.1-1.4-.2-2z"
      />
    </>
  ))

  renderIcon.set('regular', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M21.6 10.2h-9.4v3.7h5.5c-.1.9-.7 2.3-2 3.2-.8.6-2 1-3.5 1-2.6 0-4.9-1.7-5.7-4.2-.2-.6-.3-1.3-.3-2s.1-1.4.3-2c.1-.2.1-.4.2-.5.9-2.1 3-3.6 5.5-3.6 1.9 0 3.1.8 3.9 1.5l2.8-2.8C17.2 3 14.9 2 12.2 2 8.3 2 4.9 4.2 3.3 7.5c-.7 1.4-1.1 2.9-1.1 4.5s.4 3.1 1.1 4.5c1.6 3.3 5 5.5 8.9 5.5 2.7 0 5-.9 6.6-2.4 1.9-1.7 3-4.3 3-7.4 0-.8-.1-1.4-.2-2z"
      />
    </>
  ))

  renderIcon.set('bold', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M21.6 10.2h-9.4v3.7h5.5c-.1.9-.7 2.3-2 3.2-.8.6-2 1-3.5 1-2.6 0-4.9-1.7-5.7-4.2-.2-.6-.3-1.3-.3-2s.1-1.4.3-2c.1-.2.1-.4.2-.5.9-2.1 3-3.6 5.5-3.6 1.9 0 3.1.8 3.9 1.5l2.8-2.8C17.2 3 14.9 2 12.2 2 8.3 2 4.9 4.2 3.3 7.5c-.7 1.4-1.1 2.9-1.1 4.5s.4 3.1 1.1 4.5c1.6 3.3 5 5.5 8.9 5.5 2.7 0 5-.9 6.6-2.4 1.9-1.7 3-4.3 3-7.4 0-.8-.1-1.4-.2-2z"
      />
    </>
  ))

  renderIcon.set('fill', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill={color}
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M21.6 10.2h-9.4v3.7h5.5c-.1.9-.7 2.3-2 3.2-.8.6-2 1-3.5 1-2.6 0-4.9-1.7-5.7-4.2-.2-.6-.3-1.3-.3-2s.1-1.4.3-2c.1-.2.1-.4.2-.5.9-2.1 3-3.6 5.5-3.6 1.9 0 3.1.8 3.9 1.5l2.8-2.8C17.2 3 14.9 2 12.2 2 8.3 2 4.9 4.2 3.3 7.5c-.7 1.4-1.1 2.9-1.1 4.5s.4 3.1 1.1 4.5c1.6 3.3 5 5.5 8.9 5.5 2.7 0 5-.9 6.6-2.4 1.9-1.7 3-4.3 3-7.4 0-.8-.1-1.4-.2-2z"
      />
    </>
  ))

  renderIcon.set('outline', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M21.6 10.2h-9.4v3.7h5.5c-.1.9-.7 2.3-2 3.2-.8.6-2 1-3.5 1-2.6 0-4.9-1.7-5.7-4.2-.2-.6-.3-1.3-.3-2s.1-1.4.3-2c.1-.2.1-.4.2-.5.9-2.1 3-3.6 5.5-3.6 1.9 0 3.1.8 3.9 1.5l2.8-2.8C17.2 3 14.9 2 12.2 2 8.3 2 4.9 4.2 3.3 7.5c-.7 1.4-1.1 2.9-1.1 4.5s.4 3.1 1.1 4.5c1.6 3.3 5 5.5 8.9 5.5 2.7 0 5-.9 6.6-2.4 1.9-1.7 3-4.3 3-7.4 0-.8-.1-1.4-.2-2z"
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
        strokeMiterlimit="10"
        d="M21.6 10.2h-9.4v3.7h5.5c-.1.9-.7 2.3-2 3.2-.8.6-2 1-3.5 1-2.6 0-4.9-1.7-5.7-4.2-.2-.6-.3-1.3-.3-2s.1-1.4.3-2c.1-.2.1-.4.2-.5.9-2.1 3-3.6 5.5-3.6 1.9 0 3.1.8 3.9 1.5l2.8-2.8C17.2 3 14.9 2 12.2 2 8.3 2 4.9 4.2 3.3 7.5c-.7 1.4-1.1 2.9-1.1 4.5s.4 3.1 1.1 4.5c1.6 3.3 5 5.5 8.9 5.5 2.7 0 5-.9 6.6-2.4 1.9-1.7 3-4.3 3-7.4 0-.8-.1-1.4-.2-2z"
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

Google.displayName = 'Google'
