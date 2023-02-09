import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const AirDrop = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string, _, inverted: boolean) => (
    <>
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.0099 17.19C19.7199 15.59 20.7899 13.32 20.7899 10.79C20.7899 5.92998 16.85 2 12 2C7.14995 2 3.20996 5.93998 3.20996 10.79C3.20996 13.33 4.28996 15.62 6.01996 17.22"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.1297 11.3401C14.5197 9.70008 13.0897 8.27003 11.4497 8.66003C10.6797 8.85003 10.0497 9.48005 9.85974 10.2501C9.46974 11.8901 10.8997 13.32 12.5397 12.93C13.3197 12.74 13.9497 12.1101 14.1297 11.3401Z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.00002 14.55C7.08002 13.57 6.51001 12.25 6.51001 10.79C6.51001 7.75998 8.97002 5.29999 12 5.29999C15.03 5.29999 17.49 7.75998 17.49 10.79C17.49 12.25 16.92 13.56 16 14.55"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.2997 16.6603L8.85973 18.4503C7.71973 19.8803 8.72973 21.9903 10.5597 21.9903H13.4297C15.2597 21.9903 16.2797 19.8703 15.1297 18.4503L13.6897 16.6603C12.8297 15.5703 11.1697 15.5703 10.2997 16.6603Z"
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
        d="M18.0099 17.19C19.7199 15.59 20.7899 13.32 20.7899 10.79C20.7899 5.92998 16.85 2 12 2C7.14995 2 3.20996 5.93998 3.20996 10.79C3.20996 13.33 4.28996 15.62 6.01996 17.22"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.1297 11.3401C14.5197 9.70008 13.0897 8.27003 11.4497 8.66003C10.6797 8.85003 10.0497 9.48005 9.85974 10.2501C9.46974 11.8901 10.8997 13.32 12.5397 12.93C13.3197 12.74 13.9497 12.1101 14.1297 11.3401Z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.00002 14.55C7.08002 13.57 6.51001 12.25 6.51001 10.79C6.51001 7.75998 8.97002 5.29999 12 5.29999C15.03 5.29999 17.49 7.75998 17.49 10.79C17.49 12.25 16.92 13.56 16 14.55"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.2997 16.6603L8.85973 18.4503C7.71973 19.8803 8.72973 21.9903 10.5597 21.9903H13.4297C15.2597 21.9903 16.2797 19.8703 15.1297 18.4503L13.6897 16.6603C12.8297 15.5703 11.1697 15.5703 10.2997 16.6603Z"
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
        d="M18.0099 17.19C19.7199 15.59 20.7899 13.32 20.7899 10.79C20.7899 5.92998 16.85 2 12 2C7.14995 2 3.20996 5.93998 3.20996 10.79C3.20996 13.33 4.28996 15.62 6.01996 17.22"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.1297 11.3401C14.5197 9.70008 13.0897 8.27003 11.4497 8.66003C10.6797 8.85003 10.0497 9.48005 9.85974 10.2501C9.46974 11.8901 10.8997 13.32 12.5397 12.93C13.3197 12.74 13.9497 12.1101 14.1297 11.3401Z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.00002 14.55C7.08002 13.57 6.51001 12.25 6.51001 10.79C6.51001 7.75998 8.97002 5.29999 12 5.29999C15.03 5.29999 17.49 7.75998 17.49 10.79C17.49 12.25 16.92 13.56 16 14.55"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.2997 16.6603L8.85973 18.4503C7.71973 19.8803 8.72973 21.9903 10.5597 21.9903H13.4297C15.2597 21.9903 16.2797 19.8703 15.1297 18.4503L13.6897 16.6603C12.8297 15.5703 11.1697 15.5703 10.2997 16.6603Z"
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
        d="M18.0099 17.19C19.7199 15.59 20.7899 13.32 20.7899 10.79C20.7899 5.92998 16.85 2 12 2C7.14995 2 3.20996 5.93998 3.20996 10.79C3.20996 13.33 4.28996 15.62 6.01996 17.22"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.1297 11.3401C14.5197 9.70008 13.0897 8.27003 11.4497 8.66003C10.6797 8.85003 10.0497 9.48005 9.85974 10.2501C9.46974 11.8901 10.8997 13.32 12.5397 12.93C13.3197 12.74 13.9497 12.1101 14.1297 11.3401Z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.00002 14.55C7.08002 13.57 6.51001 12.25 6.51001 10.79C6.51001 7.75998 8.97002 5.29999 12 5.29999C15.03 5.29999 17.49 7.75998 17.49 10.79C17.49 12.25 16.92 13.56 16 14.55"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.2997 16.6603L8.85973 18.4503C7.71973 19.8803 8.72973 21.9903 10.5597 21.9903H13.4297C15.2597 21.9903 16.2797 19.8703 15.1297 18.4503L13.6897 16.6603C12.8297 15.5703 11.1697 15.5703 10.2997 16.6603Z"
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
        d="M18.0099 17.19C19.7199 15.59 20.7899 13.32 20.7899 10.79C20.7899 5.92998 16.85 2 12 2C7.14995 2 3.20996 5.93998 3.20996 10.79C3.20996 13.33 4.28996 15.62 6.01996 17.22"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.1297 11.3401C14.5197 9.70008 13.0897 8.27003 11.4497 8.66003C10.6797 8.85003 10.0497 9.48005 9.85974 10.2501C9.46974 11.8901 10.8997 13.32 12.5397 12.93C13.3197 12.74 13.9497 12.1101 14.1297 11.3401Z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.00002 14.55C7.08002 13.57 6.51001 12.25 6.51001 10.79C6.51001 7.75998 8.97002 5.29999 12 5.29999C15.03 5.29999 17.49 7.75998 17.49 10.79C17.49 12.25 16.92 13.56 16 14.55"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.2997 16.6603L8.85973 18.4503C7.71973 19.8803 8.72973 21.9903 10.5597 21.9903H13.4297C15.2597 21.9903 16.2797 19.8703 15.1297 18.4503L13.6897 16.6603C12.8297 15.5703 11.1697 15.5703 10.2997 16.6603Z"
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
        d="M18.0099 17.19C19.7199 15.59 20.7899 13.32 20.7899 10.79C20.7899 5.92998 16.85 2 12 2C7.14995 2 3.20996 5.93998 3.20996 10.79C3.20996 13.33 4.28996 15.62 6.01996 17.22"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.1297 11.3401C14.5197 9.70008 13.0897 8.27003 11.4497 8.66003C10.6797 8.85003 10.0497 9.48005 9.85974 10.2501C9.46974 11.8901 10.8997 13.32 12.5397 12.93C13.3197 12.74 13.9497 12.1101 14.1297 11.3401Z"
      />
      <path
        fill="none"
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.00002 14.55C7.08002 13.57 6.51001 12.25 6.51001 10.79C6.51001 7.75998 8.97002 5.29999 12 5.29999C15.03 5.29999 17.49 7.75998 17.49 10.79C17.49 12.25 16.92 13.56 16 14.55"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.2997 16.6603L8.85973 18.4503C7.71973 19.8803 8.72973 21.9903 10.5597 21.9903H13.4297C15.2597 21.9903 16.2797 19.8703 15.1297 18.4503L13.6897 16.6603C12.8297 15.5703 11.1697 15.5703 10.2997 16.6603Z"
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
        d="M18.0099 17.19C19.7199 15.59 20.7899 13.32 20.7899 10.79C20.7899 5.92998 16.85 2 12 2C7.14995 2 3.20996 5.93998 3.20996 10.79C3.20996 13.33 4.28996 15.62 6.01996 17.22"
      />
      <path
        fill="none"
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.1297 11.3401C14.5197 9.70008 13.0897 8.27003 11.4497 8.66003C10.6797 8.85003 10.0497 9.48005 9.85974 10.2501C9.46974 11.8901 10.8997 13.32 12.5397 12.93C13.3197 12.74 13.9497 12.1101 14.1297 11.3401Z"
      />
      <path
        fill="none"
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.00002 14.55C7.08002 13.57 6.51001 12.25 6.51001 10.79C6.51001 7.75998 8.97002 5.29999 12 5.29999C15.03 5.29999 17.49 7.75998 17.49 10.79C17.49 12.25 16.92 13.56 16 14.55"
      />
      <path
        fill={customColors?.fill === undefined ? 'none' : customColors?.fill}
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.2997 16.6603L8.85973 18.4503C7.71973 19.8803 8.72973 21.9903 10.5597 21.9903H13.4297C15.2597 21.9903 16.2797 19.8703 15.1297 18.4503L13.6897 16.6603C12.8297 15.5703 11.1697 15.5703 10.2997 16.6603Z"
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

AirDrop.displayName = 'AirDrop'
