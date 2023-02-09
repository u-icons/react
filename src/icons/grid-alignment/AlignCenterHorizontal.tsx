import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const AlignCenterHorizontal = forwardRef<SVGSVGElement, Icon>(
  (props, ref) => {
    const renderIcon = new Map<IconWeight, Colorize>()

    renderIcon.set('thin', (color: string) => (
      <>
        <path
          stroke={color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12H4.4"
        />
        <path
          stroke={color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 12H13"
        />
        <path
          stroke={color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22.0001 12H19.3101"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z"
        />
      </>
    ))

    renderIcon.set('light', (color: string) => (
      <>
        <path
          stroke={color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12H4.4"
        />
        <path
          stroke={color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 12H13"
        />
        <path
          stroke={color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22.0001 12H19.3101"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z"
        />
      </>
    ))

    renderIcon.set('regular', (color: string) => (
      <>
        <path
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12H4.4"
        />
        <path
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 12H13"
        />
        <path
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22.0001 12H19.3101"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z"
        />
      </>
    ))

    renderIcon.set('bold', (color: string) => (
      <>
        <path
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12H4.4"
        />
        <path
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 12H13"
        />
        <path
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22.0001 12H19.3101"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z"
        />
      </>
    ))

    renderIcon.set('fill', (color: string) => (
      <>
        <path
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12H4.4"
        />
        <path
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 12H13"
        />
        <path
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22.0001 12H19.3101"
        />
        <path
          fill={color}
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z"
        />
        <path
          fill={color}
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z"
        />
      </>
    ))

    renderIcon.set('outline', (color: string, _, inverted: boolean) => (
      <>
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12H4.4"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 12H13"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22.0001 12H19.3101"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z"
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
          d="M2 12H4.4"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 12H13"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22.0001 12H19.3101"
        />
        <path
          fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
          stroke={
            customColors?.outter === undefined
              ? '#000000'
              : customColors?.outter
          }
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z"
        />
        <path
          fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
          stroke={
            customColors?.outter === undefined
              ? '#000000'
              : customColors?.outter
          }
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z"
        />
      </>
    ))

    const renderizeIcon: IconInitialProps = (
      weight: IconWeight,
      color: string,
      customColors: CustomColors,
      inverted: boolean,
    ) =>
      RenderizeIconByWeight(color, customColors, renderIcon, weight, inverted)

    return <IconBase ref={ref} {...props} renderizeIcon={renderizeIcon} />
  },
)

AlignCenterHorizontal.displayName = 'AlignCenterHorizontal'
