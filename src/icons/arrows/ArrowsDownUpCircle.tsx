import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const ArrowsDownUpCircle = forwardRef<SVGSVGElement, Icon>(
  (props, ref) => {
    const renderIcon = new Map<IconWeight, Colorize>()

    renderIcon.set('thin', (color: string, _, inverted: boolean) => (
      <>
        <path
          fill="none"
          stroke={color}
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 6.85001L16.86 9.89001"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 17.15V6.85001"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 17.15L7.14001 14.11"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 6.85001V17.15"
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 6.85001L16.86 9.89001"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 17.15V6.85001"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 17.15L7.14001 14.11"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 6.85001V17.15"
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 6.85001L16.86 9.89001"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 17.15V6.85001"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 17.15L7.14001 14.11"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 6.85001V17.15"
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 6.85001L16.86 9.89001"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 17.15V6.85001"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 17.15L7.14001 14.11"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 6.85001V17.15"
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 6.85001L16.86 9.89001"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 17.15V6.85001"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 17.15L7.14001 14.11"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 6.85001V17.15"
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 6.85001L16.86 9.89001"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 17.15V6.85001"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 17.15L7.14001 14.11"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 6.85001V17.15"
        />
      </>
    ))

    renderIcon.set('custom', (_, customColors: CustomColors) => (
      <>
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 6.85001L16.86 9.89001"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.82 17.15V6.85001"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 17.15L7.14001 14.11"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.18 6.85001V17.15"
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

ArrowsDownUpCircle.displayName = 'ArrowsDownUpCircle'
