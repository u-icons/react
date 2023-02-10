import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const AndroidLogo = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 18V21C11 21.5 10.6 22 10 22C9.4 22 9 21.5 9 21V18H11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 18V21C15 21.5 14.6 22 14 22C13.4 22 13 21.5 13 21V18H15Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 11V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V11C7 9.9 7.9 9 9 9H15C16.1 9 17 9.9 17 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 11V15C5 15.6 4.6 16 4 16C3.4 16 3 15.6 3 15V11C3 10.4 3.4 10 4 10C4.6 10 5 10.4 5 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11V15C21 15.6 20.6 16 20 16C19.4 16 19 15.6 19 15V11C19 10.4 19.4 10 20 10C20.6 10 21 10.4 21 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.6 7H14.4C15.3 7 16 6.25 16 5.28571C16 2.92857 14.2 1 12 1C9.8 1 8 2.92857 8 5.28571C8 6.25 8.7 7 9.6 7Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 18H11"
      />
    </>
  ))

  renderIcon.set('light', (color: string) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 18V21C11 21.5 10.6 22 10 22C9.4 22 9 21.5 9 21V18H11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 18V21C15 21.5 14.6 22 14 22C13.4 22 13 21.5 13 21V18H15Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 11V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V11C7 9.9 7.9 9 9 9H15C16.1 9 17 9.9 17 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 11V15C5 15.6 4.6 16 4 16C3.4 16 3 15.6 3 15V11C3 10.4 3.4 10 4 10C4.6 10 5 10.4 5 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11V15C21 15.6 20.6 16 20 16C19.4 16 19 15.6 19 15V11C19 10.4 19.4 10 20 10C20.6 10 21 10.4 21 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.6 7H14.4C15.3 7 16 6.25 16 5.28571C16 2.92857 14.2 1 12 1C9.8 1 8 2.92857 8 5.28571C8 6.25 8.7 7 9.6 7Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 18H11"
      />
    </>
  ))

  renderIcon.set('regular', (color: string) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 18V21C11 21.5 10.6 22 10 22C9.4 22 9 21.5 9 21V18H11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 18V21C15 21.5 14.6 22 14 22C13.4 22 13 21.5 13 21V18H15Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 11V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V11C7 9.9 7.9 9 9 9H15C16.1 9 17 9.9 17 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 11V15C5 15.6 4.6 16 4 16C3.4 16 3 15.6 3 15V11C3 10.4 3.4 10 4 10C4.6 10 5 10.4 5 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11V15C21 15.6 20.6 16 20 16C19.4 16 19 15.6 19 15V11C19 10.4 19.4 10 20 10C20.6 10 21 10.4 21 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.6 7H14.4C15.3 7 16 6.25 16 5.28571C16 2.92857 14.2 1 12 1C9.8 1 8 2.92857 8 5.28571C8 6.25 8.7 7 9.6 7Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 18H11"
      />
    </>
  ))

  renderIcon.set('bold', (color: string) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 18V21C11 21.5 10.6 22 10 22C9.4 22 9 21.5 9 21V18H11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 18V21C15 21.5 14.6 22 14 22C13.4 22 13 21.5 13 21V18H15Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 11V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V11C7 9.9 7.9 9 9 9H15C16.1 9 17 9.9 17 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 11V15C5 15.6 4.6 16 4 16C3.4 16 3 15.6 3 15V11C3 10.4 3.4 10 4 10C4.6 10 5 10.4 5 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11V15C21 15.6 20.6 16 20 16C19.4 16 19 15.6 19 15V11C19 10.4 19.4 10 20 10C20.6 10 21 10.4 21 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.6 7H14.4C15.3 7 16 6.25 16 5.28571C16 2.92857 14.2 1 12 1C9.8 1 8 2.92857 8 5.28571C8 6.25 8.7 7 9.6 7Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 18H11"
      />
    </>
  ))

  renderIcon.set('fill', (color: string) => (
    <>
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 18V21C11 21.5 10.6 22 10 22C9.4 22 9 21.5 9 21V18H11Z"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 18V21C15 21.5 14.6 22 14 22C13.4 22 13 21.5 13 21V18H15Z"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 11V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V11C7 9.9 7.9 9 9 9H15C16.1 9 17 9.9 17 11Z"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 11V15C5 15.6 4.6 16 4 16C3.4 16 3 15.6 3 15V11C3 10.4 3.4 10 4 10C4.6 10 5 10.4 5 11Z"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11V15C21 15.6 20.6 16 20 16C19.4 16 19 15.6 19 15V11C19 10.4 19.4 10 20 10C20.6 10 21 10.4 21 11Z"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.6 7H14.4C15.3 7 16 6.25 16 5.28571C16 2.92857 14.2 1 12 1C9.8 1 8 2.92857 8 5.28571C8 6.25 8.7 7 9.6 7Z"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 18H11"
      />
    </>
  ))

  renderIcon.set('outline', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 18V21C11 21.5 10.6 22 10 22C9.4 22 9 21.5 9 21V18H11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 18V21C15 21.5 14.6 22 14 22C13.4 22 13 21.5 13 21V18H15Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 11V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V11C7 9.9 7.9 9 9 9H15C16.1 9 17 9.9 17 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 11V15C5 15.6 4.6 16 4 16C3.4 16 3 15.6 3 15V11C3 10.4 3.4 10 4 10C4.6 10 5 10.4 5 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11V15C21 15.6 20.6 16 20 16C19.4 16 19 15.6 19 15V11C19 10.4 19.4 10 20 10C20.6 10 21 10.4 21 11Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.6 7H14.4C15.3 7 16 6.25 16 5.28571C16 2.92857 14.2 1 12 1C9.8 1 8 2.92857 8 5.28571C8 6.25 8.7 7 9.6 7Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 18H11"
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
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 18V21C11 21.5 10.6 22 10 22C9.4 22 9 21.5 9 21V18H11Z"
      />
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 18V21C15 21.5 14.6 22 14 22C13.4 22 13 21.5 13 21V18H15Z"
      />
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 11V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V11C7 9.9 7.9 9 9 9H15C16.1 9 17 9.9 17 11Z"
      />
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 11V15C5 15.6 4.6 16 4 16C3.4 16 3 15.6 3 15V11C3 10.4 3.4 10 4 10C4.6 10 5 10.4 5 11Z"
      />
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11V15C21 15.6 20.6 16 20 16C19.4 16 19 15.6 19 15V11C19 10.4 19.4 10 20 10C20.6 10 21 10.4 21 11Z"
      />
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.6 7H14.4C15.3 7 16 6.25 16 5.28571C16 2.92857 14.2 1 12 1C9.8 1 8 2.92857 8 5.28571C8 6.25 8.7 7 9.6 7Z"
      />
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 18H11"
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

AndroidLogo.displayName = 'AndroidLogo'
