import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const AlignBottom = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.26 5.10001V16.9C19.26 18.4 18.62 19 17.03 19H15.99C14.4 19 13.76 18.4 13.76 16.9V5.10001"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.26001 5.10001V11.9C5.26001 13.4 5.90001 14 7.49001 14H8.53001C10.12 14 10.76 13.4 10.76 11.9V5.10001"
      />
      <path
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 5H22"
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
        d="M19.26 5.10001V16.9C19.26 18.4 18.62 19 17.03 19H15.99C14.4 19 13.76 18.4 13.76 16.9V5.10001"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.26001 5.10001V11.9C5.26001 13.4 5.90001 14 7.49001 14H8.53001C10.12 14 10.76 13.4 10.76 11.9V5.10001"
      />
      <path
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 5H22"
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
        d="M19.26 5.10001V16.9C19.26 18.4 18.62 19 17.03 19H15.99C14.4 19 13.76 18.4 13.76 16.9V5.10001"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.26001 5.10001V11.9C5.26001 13.4 5.90001 14 7.49001 14H8.53001C10.12 14 10.76 13.4 10.76 11.9V5.10001"
      />
      <path
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 5H22"
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
        d="M19.26 5.10001V16.9C19.26 18.4 18.62 19 17.03 19H15.99C14.4 19 13.76 18.4 13.76 16.9V5.10001"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.26001 5.10001V11.9C5.26001 13.4 5.90001 14 7.49001 14H8.53001C10.12 14 10.76 13.4 10.76 11.9V5.10001"
      />
      <path
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 5H22"
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
        d="M19.26 5.10001V16.9C19.26 18.4 18.62 19 17.03 19H15.99C14.4 19 13.76 18.4 13.76 16.9V5.10001"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.26001 5.10001V11.9C5.26001 13.4 5.90001 14 7.49001 14H8.53001C10.12 14 10.76 13.4 10.76 11.9V5.10001"
      />
      <path
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 5H22"
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
        d="M19.26 5.10001V16.9C19.26 18.4 18.62 19 17.03 19H15.99C14.4 19 13.76 18.4 13.76 16.9V5.10001"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.26001 5.10001V11.9C5.26001 13.4 5.90001 14 7.49001 14H8.53001C10.12 14 10.76 13.4 10.76 11.9V5.10001"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 5H22"
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
        d="M19.26 5.10001V16.9C19.26 18.4 18.62 19 17.03 19H15.99C14.4 19 13.76 18.4 13.76 16.9V5.10001"
      />
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.26001 5.10001V11.9C5.26001 13.4 5.90001 14 7.49001 14H8.53001C10.12 14 10.76 13.4 10.76 11.9V5.10001"
      />
      <path
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 5H22"
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

AlignBottom.displayName = 'AlignBottom'
