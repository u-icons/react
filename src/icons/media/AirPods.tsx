import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const AirPods = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string, _, inverted: boolean) => (
    <>
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 22V19"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 22V19"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.28 9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1V9.56Z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.77997 6.71997C5.25997 6.71997 4.83997 6.30003 4.83997 5.78003C4.83997 5.26003 5.25997 4.84003 5.77997 4.84003"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.2197 6.71979C18.7397 6.71979 19.1597 6.29985 19.1597 5.77985C19.1597 5.25985 18.7397 4.83984 18.2197 4.83984"
      />
    </>
  ))

  renderIcon.set('light', (color: string, _, inverted: boolean) => (
    <>
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 22V19"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 22V19"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.28 9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1V9.56Z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.77997 6.71997C5.25997 6.71997 4.83997 6.30003 4.83997 5.78003C4.83997 5.26003 5.25997 4.84003 5.77997 4.84003"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.2197 6.71979C18.7397 6.71979 19.1597 6.29985 19.1597 5.77985C19.1597 5.25985 18.7397 4.83984 18.2197 4.83984"
      />
    </>
  ))

  renderIcon.set('regular', (color: string, _, inverted: boolean) => (
    <>
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 22V19"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 22V19"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.28 9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1V9.56Z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.77997 6.71997C5.25997 6.71997 4.83997 6.30003 4.83997 5.78003C4.83997 5.26003 5.25997 4.84003 5.77997 4.84003"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.2197 6.71979C18.7397 6.71979 19.1597 6.29985 19.1597 5.77985C19.1597 5.25985 18.7397 4.83984 18.2197 4.83984"
      />
    </>
  ))

  renderIcon.set('bold', (color: string, _, inverted: boolean) => (
    <>
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={2}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 22V19"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={2}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 22V19"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.28 9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1V9.56Z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={2}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.77997 6.71997C5.25997 6.71997 4.83997 6.30003 4.83997 5.78003C4.83997 5.26003 5.25997 4.84003 5.77997 4.84003"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={2}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.2197 6.71979C18.7397 6.71979 19.1597 6.29985 19.1597 5.77985C19.1597 5.25985 18.7397 4.83984 18.2197 4.83984"
      />
    </>
  ))

  renderIcon.set('fill', (color: string, _, inverted: boolean) => (
    <>
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 22V19"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 22V19"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.28 9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1V9.56Z"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.77997 6.71997C5.25997 6.71997 4.83997 6.30003 4.83997 5.78003C4.83997 5.26003 5.25997 4.84003 5.77997 4.84003"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.2197 6.71979C18.7397 6.71979 19.1597 6.29985 19.1597 5.77985C19.1597 5.25985 18.7397 4.83984 18.2197 4.83984"
      />
    </>
  ))

  renderIcon.set('outline', (color: string, _, inverted: boolean) => (
    <>
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 22V19"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 22V19"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.28 9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1V9.56Z"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.77997 6.71997C5.25997 6.71997 4.83997 6.30003 4.83997 5.78003C4.83997 5.26003 5.25997 4.84003 5.77997 4.84003"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.2197 6.71979C18.7397 6.71979 19.1597 6.29985 19.1597 5.77985C19.1597 5.25985 18.7397 4.83984 18.2197 4.83984"
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
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 22V19"
      />
      <path
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 22V19"
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
        d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z"
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
        d="M17.28 9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1V9.56Z"
      />
      <path
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.77997 6.71997C5.25997 6.71997 4.83997 6.30003 4.83997 5.78003C4.83997 5.26003 5.25997 4.84003 5.77997 4.84003"
      />
      <path
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.2197 6.71979C18.7397 6.71979 19.1597 6.29985 19.1597 5.77985C19.1597 5.25985 18.7397 4.83984 18.2197 4.83984"
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

AirPods.displayName = 'AirPods'
