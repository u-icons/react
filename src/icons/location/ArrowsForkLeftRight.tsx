import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const ArrowsForkLeftRight = forwardRef<SVGSVGElement, Icon>(
  (props, ref) => {
    const renderIcon = new Map<IconWeight, Colorize>()

    renderIcon.set('thin', (color: string, _, inverted: boolean) => (
      <>
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22V20"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18V16"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14V11C12 7.13 15.13 4 19 4H22"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 4H5C8.87 4 12 7.13 12 11V12V14"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 2L2 4L4 6"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 2L22 4L20 6"
        />
      </>
    ))

    renderIcon.set('light', (color: string, _, inverted: boolean) => (
      <>
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22V20"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18V16"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14V11C12 7.13 15.13 4 19 4H22"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 4H5C8.87 4 12 7.13 12 11V12V14"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 2L2 4L4 6"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 2L22 4L20 6"
        />
      </>
    ))

    renderIcon.set('regular', (color: string, _, inverted: boolean) => (
      <>
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22V20"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18V16"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14V11C12 7.13 15.13 4 19 4H22"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 4H5C8.87 4 12 7.13 12 11V12V14"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 2L2 4L4 6"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 2L22 4L20 6"
        />
      </>
    ))

    renderIcon.set('bold', (color: string, _, inverted: boolean) => (
      <>
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22V20"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18V16"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14V11C12 7.13 15.13 4 19 4H22"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 4H5C8.87 4 12 7.13 12 11V12V14"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 2L2 4L4 6"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 2L22 4L20 6"
        />
      </>
    ))

    renderIcon.set('fill', (color: string, _, inverted: boolean) => (
      <>
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22V20"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18V16"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14V11C12 7.13 15.13 4 19 4H22"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 4H5C8.87 4 12 7.13 12 11V12V14"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 2L2 4L4 6"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 2L22 4L20 6"
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
          d="M12 22V20"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18V16"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14V11C12 7.13 15.13 4 19 4H22"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 4H5C8.87 4 12 7.13 12 11V12V14"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 2L2 4L4 6"
        />
        <path
          fill="none"
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 2L22 4L20 6"
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
          d="M12 22V20"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18V16"
        />
        <path
          fill="none"
          stroke={
            customColors?.outter === undefined
              ? '#000000'
              : customColors?.outter
          }
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14V11C12 7.13 15.13 4 19 4H22"
        />
        <path
          fill="none"
          stroke={
            customColors?.outter === undefined
              ? '#000000'
              : customColors?.outter
          }
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 4H5C8.87 4 12 7.13 12 11V12V14"
        />
        <path
          fill="none"
          stroke={
            customColors?.outter === undefined
              ? '#000000'
              : customColors?.outter
          }
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 2L2 4L4 6"
        />
        <path
          fill="none"
          stroke={
            customColors?.outter === undefined
              ? '#000000'
              : customColors?.outter
          }
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 2L22 4L20 6"
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

ArrowsForkLeftRight.displayName = 'ArrowsForkLeftRight'
