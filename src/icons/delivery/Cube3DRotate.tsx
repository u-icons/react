import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const Cube3DRotate = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.70117 9.25977L12.0012 12.3298L17.2612 9.27976"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.002 17.7698V12.3198"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.7603 6.28986L7.56024 8.06986C6.84024 8.46986 6.24023 9.47985 6.24023 10.3099V13.6999C6.24023 14.5299 6.83024 15.5399 7.56024 15.9399L10.7603 17.7199C11.4403 18.0999 12.5602 18.0999 13.2502 17.7199L16.4503 15.9399C17.1703 15.5399 17.7702 14.5299 17.7702 13.6999V10.2999C17.7702 9.46986 17.1803 8.45985 16.4503 8.05985L13.2502 6.27985C12.5602 5.89985 11.4403 5.89986 10.7603 6.28986Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
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
        d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.70117 9.25977L12.0012 12.3298L17.2612 9.27976"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.002 17.7698V12.3198"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.7603 6.28986L7.56024 8.06986C6.84024 8.46986 6.24023 9.47985 6.24023 10.3099V13.6999C6.24023 14.5299 6.83024 15.5399 7.56024 15.9399L10.7603 17.7199C11.4403 18.0999 12.5602 18.0999 13.2502 17.7199L16.4503 15.9399C17.1703 15.5399 17.7702 14.5299 17.7702 13.6999V10.2999C17.7702 9.46986 17.1803 8.45985 16.4503 8.05985L13.2502 6.27985C12.5602 5.89985 11.4403 5.89986 10.7603 6.28986Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
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
        d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.70117 9.25977L12.0012 12.3298L17.2612 9.27976"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.002 17.7698V12.3198"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.7603 6.28986L7.56024 8.06986C6.84024 8.46986 6.24023 9.47985 6.24023 10.3099V13.6999C6.24023 14.5299 6.83024 15.5399 7.56024 15.9399L10.7603 17.7199C11.4403 18.0999 12.5602 18.0999 13.2502 17.7199L16.4503 15.9399C17.1703 15.5399 17.7702 14.5299 17.7702 13.6999V10.2999C17.7702 9.46986 17.1803 8.45985 16.4503 8.05985L13.2502 6.27985C12.5602 5.89985 11.4403 5.89986 10.7603 6.28986Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
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
        d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.70117 9.25977L12.0012 12.3298L17.2612 9.27976"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.002 17.7698V12.3198"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.7603 6.28986L7.56024 8.06986C6.84024 8.46986 6.24023 9.47985 6.24023 10.3099V13.6999C6.24023 14.5299 6.83024 15.5399 7.56024 15.9399L10.7603 17.7199C11.4403 18.0999 12.5602 18.0999 13.2502 17.7199L16.4503 15.9399C17.1703 15.5399 17.7702 14.5299 17.7702 13.6999V10.2999C17.7702 9.46986 17.1803 8.45985 16.4503 8.05985L13.2502 6.27985C12.5602 5.89985 11.4403 5.89986 10.7603 6.28986Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
      />
    </>
  ))

  renderIcon.set('fill', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.70117 9.25977L12.0012 12.3298L17.2612 9.27976"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.002 17.7698V12.3198"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.7603 6.28986L7.56024 8.06986C6.84024 8.46986 6.24023 9.47985 6.24023 10.3099V13.6999C6.24023 14.5299 6.83024 15.5399 7.56024 15.9399L10.7603 17.7199C11.4403 18.0999 12.5602 18.0999 13.2502 17.7199L16.4503 15.9399C17.1703 15.5399 17.7702 14.5299 17.7702 13.6999V10.2999C17.7702 9.46986 17.1803 8.45985 16.4503 8.05985L13.2502 6.27985C12.5602 5.89985 11.4403 5.89986 10.7603 6.28986Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
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
        d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.70117 9.25977L12.0012 12.3298L17.2612 9.27976"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.002 17.7698V12.3198"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.7603 6.28986L7.56024 8.06986C6.84024 8.46986 6.24023 9.47985 6.24023 10.3099V13.6999C6.24023 14.5299 6.83024 15.5399 7.56024 15.9399L10.7603 17.7199C11.4403 18.0999 12.5602 18.0999 13.2502 17.7199L16.4503 15.9399C17.1703 15.5399 17.7702 14.5299 17.7702 13.6999V10.2999C17.7702 9.46986 17.1803 8.45985 16.4503 8.05985L13.2502 6.27985C12.5602 5.89985 11.4403 5.89986 10.7603 6.28986Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
      />
    </>
  ))

  renderIcon.set('custom', (_, customColors: CustomColors) => (
    <>
      <path
        fill="none"
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
      />
      <path
        fill="none"
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.70117 9.25977L12.0012 12.3298L17.2612 9.27976"
      />
      <path
        fill="none"
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.002 17.7698V12.3198"
      />
      <path
        fill="none"
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.7603 6.28986L7.56024 8.06986C6.84024 8.46986 6.24023 9.47985 6.24023 10.3099V13.6999C6.24023 14.5299 6.83024 15.5399 7.56024 15.9399L10.7603 17.7199C11.4403 18.0999 12.5602 18.0999 13.2502 17.7199L16.4503 15.9399C17.1703 15.5399 17.7702 14.5299 17.7702 13.6999V10.2999C17.7702 9.46986 17.1803 8.45985 16.4503 8.05985L13.2502 6.27985C12.5602 5.89985 11.4403 5.89986 10.7603 6.28986Z"
      />
      <path
        fill="none"
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
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

Cube3DRotate.displayName = 'Cube3DRotate'
