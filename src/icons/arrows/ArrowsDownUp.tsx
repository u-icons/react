import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const ArrowsDownUp = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72949 21V3"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.2695 3V21"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.4498 6.71997L6.72974 3L3.00977 6.71997"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5498 17.2803L17.2698 21.0002L20.9898 17.2803"
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
        d="M6.72949 21V3"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.2695 3V21"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.4498 6.71997L6.72974 3L3.00977 6.71997"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5498 17.2803L17.2698 21.0002L20.9898 17.2803"
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
        d="M6.72949 21V3"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.2695 3V21"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.4498 6.71997L6.72974 3L3.00977 6.71997"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5498 17.2803L17.2698 21.0002L20.9898 17.2803"
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
        d="M6.72949 21V3"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.2695 3V21"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.4498 6.71997L6.72974 3L3.00977 6.71997"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5498 17.2803L17.2698 21.0002L20.9898 17.2803"
      />
    </>
  ))

  renderIcon.set('fill', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72949 21V3"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.2695 3V21"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.4498 6.71997L6.72974 3L3.00977 6.71997"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5498 17.2803L17.2698 21.0002L20.9898 17.2803"
      />
    </>
  ))

  renderIcon.set('outline', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72949 21V3"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.2695 3V21"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.4498 6.71997L6.72974 3L3.00977 6.71997"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5498 17.2803L17.2698 21.0002L20.9898 17.2803"
      />
    </>
  ))

  renderIcon.set('custom', (_, customColors: CustomColors) => (
    <>
      <path
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 6.72949H21"
      />
      <path
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 17.2695H3"
      />
      <path
        fill="none"
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.2803 10.4498L21.0002 6.72974L17.2803 3.00977"
      />
      <path
        fill="none"
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.71997 13.5497L3 17.2698L6.71997 20.9897"
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

ArrowsDownUp.displayName = 'ArrowsDownUp'
