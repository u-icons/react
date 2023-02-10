import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const AirPodCase = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.62 15.75V8.25C2.62 7.48 2.65 6.79 2.73 6.18C3.1 2.89 4.65 2 8.88 2H15.13C19.35 2 20.91 2.89 21.27 6.18C21.36 6.79 21.38 7.48 21.38 8.25V15.75C21.38 16.52 21.35 17.21 21.27 17.83C20.9 21.11 19.35 22 15.12 22H8.88C4.66 22 3.1 21.11 2.74 17.83C2.65 17.21 2.62 16.52 2.62 15.75Z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.23 8.91998H17.13"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.86953 8.91992H2.76953"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.13 8.92C17.13 10.05 16.21 10.97 15.08 10.97H8.92C8.36 10.97 7.84 10.74 7.47 10.36C7.1 9.99999 6.87 9.49 6.87 8.92C6.87 7.79 7.79 6.87 8.92 6.87H15.07C15.63 6.87 16.15 7.1 16.52 7.48C16.9 7.85 17.13 8.36 17.13 8.92Z"
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
        d="M2.62 15.75V8.25C2.62 7.48 2.65 6.79 2.73 6.18C3.1 2.89 4.65 2 8.88 2H15.13C19.35 2 20.91 2.89 21.27 6.18C21.36 6.79 21.38 7.48 21.38 8.25V15.75C21.38 16.52 21.35 17.21 21.27 17.83C20.9 21.11 19.35 22 15.12 22H8.88C4.66 22 3.1 21.11 2.74 17.83C2.65 17.21 2.62 16.52 2.62 15.75Z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.23 8.91998H17.13"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.86953 8.91992H2.76953"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.13 8.92C17.13 10.05 16.21 10.97 15.08 10.97H8.92C8.36 10.97 7.84 10.74 7.47 10.36C7.1 9.99999 6.87 9.49 6.87 8.92C6.87 7.79 7.79 6.87 8.92 6.87H15.07C15.63 6.87 16.15 7.1 16.52 7.48C16.9 7.85 17.13 8.36 17.13 8.92Z"
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
        d="M2.62 15.75V8.25C2.62 7.48 2.65 6.79 2.73 6.18C3.1 2.89 4.65 2 8.88 2H15.13C19.35 2 20.91 2.89 21.27 6.18C21.36 6.79 21.38 7.48 21.38 8.25V15.75C21.38 16.52 21.35 17.21 21.27 17.83C20.9 21.11 19.35 22 15.12 22H8.88C4.66 22 3.1 21.11 2.74 17.83C2.65 17.21 2.62 16.52 2.62 15.75Z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.23 8.91998H17.13"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.86953 8.91992H2.76953"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.13 8.92C17.13 10.05 16.21 10.97 15.08 10.97H8.92C8.36 10.97 7.84 10.74 7.47 10.36C7.1 9.99999 6.87 9.49 6.87 8.92C6.87 7.79 7.79 6.87 8.92 6.87H15.07C15.63 6.87 16.15 7.1 16.52 7.48C16.9 7.85 17.13 8.36 17.13 8.92Z"
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
        d="M2.62 15.75V8.25C2.62 7.48 2.65 6.79 2.73 6.18C3.1 2.89 4.65 2 8.88 2H15.13C19.35 2 20.91 2.89 21.27 6.18C21.36 6.79 21.38 7.48 21.38 8.25V15.75C21.38 16.52 21.35 17.21 21.27 17.83C20.9 21.11 19.35 22 15.12 22H8.88C4.66 22 3.1 21.11 2.74 17.83C2.65 17.21 2.62 16.52 2.62 15.75Z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.23 8.91998H17.13"
      />
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.86953 8.91992H2.76953"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.13 8.92C17.13 10.05 16.21 10.97 15.08 10.97H8.92C8.36 10.97 7.84 10.74 7.47 10.36C7.1 9.99999 6.87 9.49 6.87 8.92C6.87 7.79 7.79 6.87 8.92 6.87H15.07C15.63 6.87 16.15 7.1 16.52 7.48C16.9 7.85 17.13 8.36 17.13 8.92Z"
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
        d="M2.62 15.75V8.25C2.62 7.48 2.65 6.79 2.73 6.18C3.1 2.89 4.65 2 8.88 2H15.13C19.35 2 20.91 2.89 21.27 6.18C21.36 6.79 21.38 7.48 21.38 8.25V15.75C21.38 16.52 21.35 17.21 21.27 17.83C20.9 21.11 19.35 22 15.12 22H8.88C4.66 22 3.1 21.11 2.74 17.83C2.65 17.21 2.62 16.52 2.62 15.75Z"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.23 8.91998H17.13"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.86953 8.91992H2.76953"
      />
      <path
        fill={color}
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.13 8.92C17.13 10.05 16.21 10.97 15.08 10.97H8.92C8.36 10.97 7.84 10.74 7.47 10.36C7.1 9.99999 6.87 9.49 6.87 8.92C6.87 7.79 7.79 6.87 8.92 6.87H15.07C15.63 6.87 16.15 7.1 16.52 7.48C16.9 7.85 17.13 8.36 17.13 8.92Z"
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
        d="M2.62 15.75V8.25C2.62 7.48 2.65 6.79 2.73 6.18C3.1 2.89 4.65 2 8.88 2H15.13C19.35 2 20.91 2.89 21.27 6.18C21.36 6.79 21.38 7.48 21.38 8.25V15.75C21.38 16.52 21.35 17.21 21.27 17.83C20.9 21.11 19.35 22 15.12 22H8.88C4.66 22 3.1 21.11 2.74 17.83C2.65 17.21 2.62 16.52 2.62 15.75Z"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.23 8.91998H17.13"
      />
      <path
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.86953 8.91992H2.76953"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.13 8.92C17.13 10.05 16.21 10.97 15.08 10.97H8.92C8.36 10.97 7.84 10.74 7.47 10.36C7.1 9.99999 6.87 9.49 6.87 8.92C6.87 7.79 7.79 6.87 8.92 6.87H15.07C15.63 6.87 16.15 7.1 16.52 7.48C16.9 7.85 17.13 8.36 17.13 8.92Z"
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
        d="M2.62 15.75V8.25C2.62 7.48 2.65 6.79 2.73 6.18C3.1 2.89 4.65 2 8.88 2H15.13C19.35 2 20.91 2.89 21.27 6.18C21.36 6.79 21.38 7.48 21.38 8.25V15.75C21.38 16.52 21.35 17.21 21.27 17.83C20.9 21.11 19.35 22 15.12 22H8.88C4.66 22 3.1 21.11 2.74 17.83C2.65 17.21 2.62 16.52 2.62 15.75Z"
      />
      <path
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.23 8.91998H17.13"
      />
      <path
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.86953 8.91992H2.76953"
      />
      <path
        fill="none"
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.13 8.92C17.13 10.05 16.21 10.97 15.08 10.97H8.92C8.36 10.97 7.84 10.74 7.47 10.36C7.1 9.99999 6.87 9.49 6.87 8.92C6.87 7.79 7.79 6.87 8.92 6.87H15.07C15.63 6.87 16.15 7.1 16.52 7.48C16.9 7.85 17.13 8.36 17.13 8.92Z"
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

AirPodCase.displayName = 'AirPodCase'
