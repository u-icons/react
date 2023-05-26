import { forwardRef } from 'react'

import { CustomColors, IconWeight } from '../../@types/ContextTypes'
import { Icon } from '../../contexts/IconsContext'

import {
  Colorize,
  IconBase,
  IconInitialProps,
  RenderizeIconByWeight,
} from '../../component/Icon'

export const Sad = forwardRef<SVGSVGElement, Icon>((props, ref) => {
  const renderIcon = new Map<IconWeight, Colorize>()

  renderIcon.set('thin', (color: string, _, inverted: boolean) => (
    <>
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={0.5}
        d="M21.712 11.146c0 5.327-4.348 9.645-9.712 9.645s-9.713-4.318-9.713-9.645S6.636 1.5 12 1.5c5.364 0 9.712 4.319 9.712 9.646z"
      />
      <path
        fill="#3291FF"
        fillRule="evenodd"
        d="M17.833 12.072H15.5v7.693a74.483 74.483 0 00-3.5-.08c-1.227 0-2.405.028-3.5.08v-7.693H6.167v7.85c-2.814.252-4.667.682-4.667 1.17C1.5 21.87 6.201 22.5 12 22.5s10.5-.63 10.5-1.408c0-.488-1.853-.918-4.667-1.17v-7.85z"
        clipRule="evenodd"
      />
      <path
        fill={inverted ? '#000000' : color}
        d="M12 16.588c.967 0 1.75-.778 1.75-1.737 0-.958-.783-1.736-1.75-1.736-.966 0-1.75.778-1.75 1.736 0 .96.784 1.737 1.75 1.737z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        d="M11.475 11.667c-2.926-1.452-6.693-.298-6.825-.233h.32m14.38.233c-2.924-1.451-6.825 0-6.825 0"
      />
      <path
        fill={inverted ? '#000000' : color}
        d="M19 9.408a.58.58 0 01-.216-.042c-3.05-1.211-4.3-3.036-4.353-3.113a.576.576 0 01.162-.804.585.585 0 01.808.159c.01.016 1.126 1.613 3.815 2.682A.578.578 0 0119 9.408zm-14 0a.578.578 0 01-.217-1.117c2.69-1.07 3.805-2.667 3.816-2.682a.587.587 0 01.81-.157.576.576 0 01.16.801c-.052.077-1.302 1.902-4.352 3.114a.596.596 0 01-.217.04z"
      />
    </>
  ))

  renderIcon.set('light', (color: string, _, inverted: boolean) => (
    <>
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1}
        d="M21.712 11.146c0 5.327-4.348 9.645-9.712 9.645s-9.713-4.318-9.713-9.645S6.636 1.5 12 1.5c5.364 0 9.712 4.319 9.712 9.646z"
      />
      <path
        fill="#3291FF"
        fillRule="evenodd"
        d="M17.833 12.072H15.5v7.693a74.483 74.483 0 00-3.5-.08c-1.227 0-2.405.028-3.5.08v-7.693H6.167v7.85c-2.814.252-4.667.682-4.667 1.17C1.5 21.87 6.201 22.5 12 22.5s10.5-.63 10.5-1.408c0-.488-1.853-.918-4.667-1.17v-7.85z"
        clipRule="evenodd"
      />
      <path
        fill={inverted ? '#000000' : color}
        d="M12 16.588c.967 0 1.75-.778 1.75-1.737 0-.958-.783-1.736-1.75-1.736-.966 0-1.75.778-1.75 1.736 0 .96.784 1.737 1.75 1.737z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        d="M11.475 11.667c-2.926-1.452-6.693-.298-6.825-.233h.32m14.38.233c-2.924-1.451-6.825 0-6.825 0"
      />
      <path
        fill={inverted ? '#000000' : color}
        d="M19 9.408a.58.58 0 01-.216-.042c-3.05-1.211-4.3-3.036-4.353-3.113a.576.576 0 01.162-.804.585.585 0 01.808.159c.01.016 1.126 1.613 3.815 2.682A.578.578 0 0119 9.408zm-14 0a.578.578 0 01-.217-1.117c2.69-1.07 3.805-2.667 3.816-2.682a.587.587 0 01.81-.157.576.576 0 01.16.801c-.052.077-1.302 1.902-4.352 3.114a.596.596 0 01-.217.04z"
      />
    </>
  ))

  renderIcon.set('regular', (color: string, _, inverted: boolean) => (
    <>
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        d="M21.712 11.146c0 5.327-4.348 9.645-9.712 9.645s-9.713-4.318-9.713-9.645S6.636 1.5 12 1.5c5.364 0 9.712 4.319 9.712 9.646z"
      />
      <path
        fill="#3291FF"
        fillRule="evenodd"
        d="M17.833 12.072H15.5v7.693a74.483 74.483 0 00-3.5-.08c-1.227 0-2.405.028-3.5.08v-7.693H6.167v7.85c-2.814.252-4.667.682-4.667 1.17C1.5 21.87 6.201 22.5 12 22.5s10.5-.63 10.5-1.408c0-.488-1.853-.918-4.667-1.17v-7.85z"
        clipRule="evenodd"
      />
      <path
        fill={inverted ? '#000000' : color}
        d="M12 16.588c.967 0 1.75-.778 1.75-1.737 0-.958-.783-1.736-1.75-1.736-.966 0-1.75.778-1.75 1.736 0 .96.784 1.737 1.75 1.737z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        d="M11.475 11.667c-2.926-1.452-6.693-.298-6.825-.233h.32m14.38.233c-2.924-1.451-6.825 0-6.825 0"
      />
      <path
        fill={inverted ? '#000000' : color}
        d="M19 9.408a.58.58 0 01-.216-.042c-3.05-1.211-4.3-3.036-4.353-3.113a.576.576 0 01.162-.804.585.585 0 01.808.159c.01.016 1.126 1.613 3.815 2.682A.578.578 0 0119 9.408zm-14 0a.578.578 0 01-.217-1.117c2.69-1.07 3.805-2.667 3.816-2.682a.587.587 0 01.81-.157.576.576 0 01.16.801c-.052.077-1.302 1.902-4.352 3.114a.596.596 0 01-.217.04z"
      />
    </>
  ))

  renderIcon.set('bold', (color: string, _, inverted: boolean) => (
    <>
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={2}
        d="M21.712 11.146c0 5.327-4.348 9.645-9.712 9.645s-9.713-4.318-9.713-9.645S6.636 1.5 12 1.5c5.364 0 9.712 4.319 9.712 9.646z"
      />
      <path
        fill="#3291FF"
        fillRule="evenodd"
        d="M17.833 12.072H15.5v7.693a74.483 74.483 0 00-3.5-.08c-1.227 0-2.405.028-3.5.08v-7.693H6.167v7.85c-2.814.252-4.667.682-4.667 1.17C1.5 21.87 6.201 22.5 12 22.5s10.5-.63 10.5-1.408c0-.488-1.853-.918-4.667-1.17v-7.85z"
        clipRule="evenodd"
      />
      <path
        fill={inverted ? '#000000' : color}
        d="M12 16.588c.967 0 1.75-.778 1.75-1.737 0-.958-.783-1.736-1.75-1.736-.966 0-1.75.778-1.75 1.736 0 .96.784 1.737 1.75 1.737z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        d="M11.475 11.667c-2.926-1.452-6.693-.298-6.825-.233h.32m14.38.233c-2.924-1.451-6.825 0-6.825 0"
      />
      <path
        fill={inverted ? '#000000' : color}
        d="M19 9.408a.58.58 0 01-.216-.042c-3.05-1.211-4.3-3.036-4.353-3.113a.576.576 0 01.162-.804.585.585 0 01.808.159c.01.016 1.126 1.613 3.815 2.682A.578.578 0 0119 9.408zm-14 0a.578.578 0 01-.217-1.117c2.69-1.07 3.805-2.667 3.816-2.682a.587.587 0 01.81-.157.576.576 0 01.16.801c-.052.077-1.302 1.902-4.352 3.114a.596.596 0 01-.217.04z"
      />
    </>
  ))

  renderIcon.set('fill', (color: string, _, inverted: boolean) => (
    <>
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        d="M21.712 11.146c0 5.327-4.348 9.645-9.712 9.645s-9.713-4.318-9.713-9.645S6.636 1.5 12 1.5c5.364 0 9.712 4.319 9.712 9.646z"
      />
      <path
        fill={color ?? '#3291FF'}
        fillRule="evenodd"
        d="M17.833 12.072H15.5v7.693a74.483 74.483 0 00-3.5-.08c-1.227 0-2.405.028-3.5.08v-7.693H6.167v7.85c-2.814.252-4.667.682-4.667 1.17C1.5 21.87 6.201 22.5 12 22.5s10.5-.63 10.5-1.408c0-.488-1.853-.918-4.667-1.17v-7.85z"
        clipRule="evenodd"
      />
      <path
        fill={inverted ? '#000000' : color}
        d="M12 16.588c.967 0 1.75-.778 1.75-1.737 0-.958-.783-1.736-1.75-1.736-.966 0-1.75.778-1.75 1.736 0 .96.784 1.737 1.75 1.737z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        d="M11.475 11.667c-2.926-1.452-6.693-.298-6.825-.233h.32m14.38.233c-2.924-1.451-6.825 0-6.825 0"
      />
      <path
        fill={inverted ? '#000000' : color}
        d="M19 9.408a.58.58 0 01-.216-.042c-3.05-1.211-4.3-3.036-4.353-3.113a.576.576 0 01.162-.804.585.585 0 01.808.159c.01.016 1.126 1.613 3.815 2.682A.578.578 0 0119 9.408zm-14 0a.578.578 0 01-.217-1.117c2.69-1.07 3.805-2.667 3.816-2.682a.587.587 0 01.81-.157.576.576 0 01.16.801c-.052.077-1.302 1.902-4.352 3.114a.596.596 0 01-.217.04z"
      />
    </>
  ))

  renderIcon.set('outline', (color: string, _, inverted: boolean) => (
    <>
      <path
        stroke={inverted ? '#000000' : color}
        strokeWidth={1.5}
        d="M21.712 11.146c0 5.327-4.348 9.645-9.712 9.645s-9.713-4.318-9.713-9.645S6.636 1.5 12 1.5c5.364 0 9.712 4.319 9.712 9.646z"
      />
      <path
        fill="#3291FF"
        fillRule="evenodd"
        d="M17.833 12.072H15.5v7.693a74.483 74.483 0 00-3.5-.08c-1.227 0-2.405.028-3.5.08v-7.693H6.167v7.85c-2.814.252-4.667.682-4.667 1.17C1.5 21.87 6.201 22.5 12 22.5s10.5-.63 10.5-1.408c0-.488-1.853-.918-4.667-1.17v-7.85z"
        clipRule="evenodd"
      />
      <path
        fill={inverted ? '#000000' : color}
        d="M12 16.588c.967 0 1.75-.778 1.75-1.737 0-.958-.783-1.736-1.75-1.736-.966 0-1.75.778-1.75 1.736 0 .96.784 1.737 1.75 1.737z"
      />
      <path
        stroke={inverted ? '#000000' : color}
        d="M11.475 11.667c-2.926-1.452-6.693-.298-6.825-.233h.32m14.38.233c-2.924-1.451-6.825 0-6.825 0"
      />
      <path
        fill={inverted ? '#000000' : color}
        d="M19 9.408a.58.58 0 01-.216-.042c-3.05-1.211-4.3-3.036-4.353-3.113a.576.576 0 01.162-.804.585.585 0 01.808.159c.01.016 1.126 1.613 3.815 2.682A.578.578 0 0119 9.408zm-14 0a.578.578 0 01-.217-1.117c2.69-1.07 3.805-2.667 3.816-2.682a.587.587 0 01.81-.157.576.576 0 01.16.801c-.052.077-1.302 1.902-4.352 3.114a.596.596 0 01-.217.04z"
      />
    </>
  ))

  renderIcon.set('custom', (_, customColors: CustomColors) => (
    <>
      <path
        stroke={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        strokeWidth={1.5}
        d="M21.712 11.146c0 5.327-4.348 9.645-9.712 9.645s-9.713-4.318-9.713-9.645S6.636 1.5 12 1.5c5.364 0 9.712 4.319 9.712 9.646z"
      />
      <path
        fill={customColors?.fill === undefined ? '#3291FF' : customColors?.fill}
        fillRule="evenodd"
        d="M17.833 12.072H15.5v7.693a74.483 74.483 0 00-3.5-.08c-1.227 0-2.405.028-3.5.08v-7.693H6.167v7.85c-2.814.252-4.667.682-4.667 1.17C1.5 21.87 6.201 22.5 12 22.5s10.5-.63 10.5-1.408c0-.488-1.853-.918-4.667-1.17v-7.85z"
        clipRule="evenodd"
      />
      <path
        fill={
          customColors?.outter === undefined ? '#000000' : customColors?.outter
        }
        d="M12 16.588c.967 0 1.75-.778 1.75-1.737 0-.958-.783-1.736-1.75-1.736-.966 0-1.75.778-1.75 1.736 0 .96.784 1.737 1.75 1.737z"
      />
      <path
        stroke={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        d="M11.475 11.667c-2.926-1.452-6.693-.298-6.825-.233h.32m14.38.233c-2.924-1.451-6.825 0-6.825 0"
      />
      <path
        fill={
          customColors?.inner === undefined ? '#000000' : customColors?.inner
        }
        d="M19 9.408a.58.58 0 01-.216-.042c-3.05-1.211-4.3-3.036-4.353-3.113a.576.576 0 01.162-.804.585.585 0 01.808.159c.01.016 1.126 1.613 3.815 2.682A.578.578 0 0119 9.408zm-14 0a.578.578 0 01-.217-1.117c2.69-1.07 3.805-2.667 3.816-2.682a.587.587 0 01.81-.157.576.576 0 01.16.801c-.052.077-1.302 1.902-4.352 3.114a.596.596 0 01-.217.04z"
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

Sad.displayName = 'Sad'
