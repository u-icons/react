import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const ArrowsLeftRightSquare = forwardRef<SVGSVGElement, Icon>(
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
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 13.82L14.11 16.86"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 13.82H17.15"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 10.18L9.88998 7.14"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={0.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 10.18H6.84998"
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
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 13.82L14.11 16.86"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 13.82H17.15"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 10.18L9.88998 7.14"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 10.18H6.84998"
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
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 13.82L14.11 16.86"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 13.82H17.15"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 10.18L9.88998 7.14"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 10.18H6.84998"
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
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 13.82L14.11 16.86"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 13.82H17.15"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 10.18L9.88998 7.14"
        />
        <path
          stroke={inverted ? '#000000' : color}
          strokeWidth={2.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 10.18H6.84998"
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
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 13.82L14.11 16.86"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 13.82H17.15"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 10.18L9.88998 7.14"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 10.18H6.84998"
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
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 13.82L14.11 16.86"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 13.82H17.15"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 10.18L9.88998 7.14"
        />
        <path
          stroke={inverted ? '#000000' : '#ffffff'}
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 10.18H6.84998"
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
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 13.82L14.11 16.86"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 13.82H17.15"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.84998 10.18L9.88998 7.14"
        />
        <path
          stroke={
            customColors?.inner === undefined ? '#000000' : customColors?.inner
          }
          strokeWidth={1.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.15 10.18H6.84998"
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

ArrowsLeftRightSquare.displayName = 'ArrowsLeftRightSquare'
