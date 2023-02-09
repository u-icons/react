import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const Ankr = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22V16.4"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        d="M11.9996 16.4001C14.4297 16.4001 16.3996 14.4302 16.3996 12.0001C16.3996 9.57004 14.4297 7.6001 11.9996 7.6001C9.56956 7.6001 7.59961 9.57004 7.59961 12.0001C7.59961 14.4302 9.56956 16.4001 11.9996 16.4001Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 9.8V6.4L11.9996 2L20.8996 6.4V9.8"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 14.2002V17.6002L11.9996 22.0002L20.8996 17.6002V14.2002"
      />
    </>
  ))

  renderIcon.set('light', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22V16.4"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeMiterlimit="10"
        d="M11.9996 16.4001C14.4297 16.4001 16.3996 14.4302 16.3996 12.0001C16.3996 9.57004 14.4297 7.6001 11.9996 7.6001C9.56956 7.6001 7.59961 9.57004 7.59961 12.0001C7.59961 14.4302 9.56956 16.4001 11.9996 16.4001Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 9.8V6.4L11.9996 2L20.8996 6.4V9.8"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 14.2002V17.6002L11.9996 22.0002L20.8996 17.6002V14.2002"
      />
    </>
  ))

  renderIcon.set('regular', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22V16.4"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        d="M11.9996 16.4001C14.4297 16.4001 16.3996 14.4302 16.3996 12.0001C16.3996 9.57004 14.4297 7.6001 11.9996 7.6001C9.56956 7.6001 7.59961 9.57004 7.59961 12.0001C7.59961 14.4302 9.56956 16.4001 11.9996 16.4001Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 9.8V6.4L11.9996 2L20.8996 6.4V9.8"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 14.2002V17.6002L11.9996 22.0002L20.8996 17.6002V14.2002"
      />
    </>
  ))

  renderIcon.set('bold', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22V16.4"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeMiterlimit="10"
        d="M11.9996 16.4001C14.4297 16.4001 16.3996 14.4302 16.3996 12.0001C16.3996 9.57004 14.4297 7.6001 11.9996 7.6001C9.56956 7.6001 7.59961 9.57004 7.59961 12.0001C7.59961 14.4302 9.56956 16.4001 11.9996 16.4001Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 9.8V6.4L11.9996 2L20.8996 6.4V9.8"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 14.2002V17.6002L11.9996 22.0002L20.8996 17.6002V14.2002"
      />
    </>
  ))

  renderIcon.set('fill', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22V16.4"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        d="M11.9996 16.4001C14.4297 16.4001 16.3996 14.4302 16.3996 12.0001C16.3996 9.57004 14.4297 7.6001 11.9996 7.6001C9.56956 7.6001 7.59961 9.57004 7.59961 12.0001C7.59961 14.4302 9.56956 16.4001 11.9996 16.4001Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 9.8V6.4L11.9996 2L20.8996 6.4V9.8"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 14.2002V17.6002L11.9996 22.0002L20.8996 17.6002V14.2002"
      />
    </>
  ))

  renderIcon.set('outline', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22V16.4"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        d="M11.9996 16.4001C14.4297 16.4001 16.3996 14.4302 16.3996 12.0001C16.3996 9.57004 14.4297 7.6001 11.9996 7.6001C9.56956 7.6001 7.59961 9.57004 7.59961 12.0001C7.59961 14.4302 9.56956 16.4001 11.9996 16.4001Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 9.8V6.4L11.9996 2L20.8996 6.4V9.8"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 14.2002V17.6002L11.9996 22.0002L20.8996 17.6002V14.2002"
      />
    </>
  ))

  renderIcon.set('custom', (_, customColors: CustomColors) => (
    <>
      <path
        fill="none"
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22V16.4"
      />
      <path
        fill="none"
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        d="M11.9996 16.4001C14.4297 16.4001 16.3996 14.4302 16.3996 12.0001C16.3996 9.57004 14.4297 7.6001 11.9996 7.6001C9.56956 7.6001 7.59961 9.57004 7.59961 12.0001C7.59961 14.4302 9.56956 16.4001 11.9996 16.4001Z"
      />
      <path
        fill="none"
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 9.8V6.4L11.9996 2L20.8996 6.4V9.8"
      />
      <path
        fill="none"
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 14.2002V17.6002L11.9996 22.0002L20.8996 17.6002V14.2002"
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

Ankr.displayName = 'Ankr'
