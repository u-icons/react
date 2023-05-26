import { CustomColors, IconWeight } from '../@types/ContextTypes'
import {
  createContext,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
  Context,
} from 'react'

export interface Icon extends ComponentPropsWithoutRef<'svg'> {
  alt?: string
  color?: string
  customColors?: CustomColors
  size?: string | number
  weight?: IconWeight
  inverted?: boolean
}

export const DefaultContext: Icon = {
  color: 'currentColor',
  customColors: {
    fill: 'none',
    outter: 'currentColor',
    inner: 'currentColor',
  },
  size: '1rem',
  weight: 'regular',
  inverted: false,
}

type IconComponentProps = Icon & RefAttributes<SVGSVGElement>

export type IconBase = ForwardRefExoticComponent<IconComponentProps>

export const IconContext: Context<Icon> = createContext(DefaultContext)
