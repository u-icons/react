import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const AlignCenterVertical = forwardRef<SVGSVGElement, Icon>(
  (props, ref) => {
    const renderIcon = new Map<IconWeight, Colorize>()

    renderIcon.set('thin', (color: string) => (
      <>
        <path
          stroke={color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22V19.6"
        />
        <path
          stroke={color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 13V11"
        />
        <path
          stroke={color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2V4.69"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.4 10.75H8.6C7.1 10.75 6.5 10.11 6.5 8.52V7.48C6.5 5.89 7.1 5.25 8.6 5.25H15.4C16.9 5.25 17.5 5.89 17.5 7.48V8.52C17.5 10.11 16.9 10.75 15.4 10.75Z"
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
          d="M12 22V19.6"
        />
        <path
          stroke={color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 13V11"
        />
        <path
          stroke={color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2V4.69"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.4 10.75H8.6C7.1 10.75 6.5 10.11 6.5 8.52V7.48C6.5 5.89 7.1 5.25 8.6 5.25H15.4C16.9 5.25 17.5 5.89 17.5 7.48V8.52C17.5 10.11 16.9 10.75 15.4 10.75Z"
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
          d="M12 22V19.6"
        />
        <path
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 13V11"
        />
        <path
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2V4.69"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.4 10.75H8.6C7.1 10.75 6.5 10.11 6.5 8.52V7.48C6.5 5.89 7.1 5.25 8.6 5.25H15.4C16.9 5.25 17.5 5.89 17.5 7.48V8.52C17.5 10.11 16.9 10.75 15.4 10.75Z"
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
          d="M12 22V19.6"
        />
        <path
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 13V11"
        />
        <path
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2V4.69"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.4 10.75H8.6C7.1 10.75 6.5 10.11 6.5 8.52V7.48C6.5 5.89 7.1 5.25 8.6 5.25H15.4C16.9 5.25 17.5 5.89 17.5 7.48V8.52C17.5 10.11 16.9 10.75 15.4 10.75Z"
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
          d="M12 22V19.6"
        />
        <path
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 13V11"
        />
        <path
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2V4.69"
        />
        <path
          fill={color}
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"
        />
        <path
          fill={color}
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.4 10.75H8.6C7.1 10.75 6.5 10.11 6.5 8.52V7.48C6.5 5.89 7.1 5.25 8.6 5.25H15.4C16.9 5.25 17.5 5.89 17.5 7.48V8.52C17.5 10.11 16.9 10.75 15.4 10.75Z"
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
          d="M12 22V19.6"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 13V11"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2V4.69"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.4 10.75H8.6C7.1 10.75 6.5 10.11 6.5 8.52V7.48C6.5 5.89 7.1 5.25 8.6 5.25H15.4C16.9 5.25 17.5 5.89 17.5 7.48V8.52C17.5 10.11 16.9 10.75 15.4 10.75Z"
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
          d="M12 22V19.6"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 13V11"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2V4.69"
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
          d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"
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
          d="M15.4 10.75H8.6C7.1 10.75 6.5 10.11 6.5 8.52V7.48C6.5 5.89 7.1 5.25 8.6 5.25H15.4C16.9 5.25 17.5 5.89 17.5 7.48V8.52C17.5 10.11 16.9 10.75 15.4 10.75Z"
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

AlignCenterVertical.displayName = 'AlignCenterVertical'
