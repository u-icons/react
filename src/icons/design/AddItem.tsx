import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const AddItem = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.87 15H18.13"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 16.63V13.37"
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
        d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.87 15H18.13"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 16.63V13.37"
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
        d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.87 15H18.13"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 16.63V13.37"
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
        d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.87 15H18.13"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 16.63V13.37"
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
        d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.87 15H18.13"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 16.63V13.37"
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
        d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.87 15H18.13"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 16.63V13.37"
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
        d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"
      />
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z"
      />
      <path
        fill="none"
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.87 15H18.13"
      />
      <path
        fill="none"
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 16.63V13.37"
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

AddItem.displayName = 'AddItem'
