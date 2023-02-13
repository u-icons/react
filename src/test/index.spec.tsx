import '@testing-library/jest-dom'
import { render, getByTestId } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import * as Icons from '..'
import { IconBase } from '..'

const isIcon = (candidate: any): candidate is typeof IconBase =>
  'displayName' in candidate

describe('all icons exist', () => {
  Object.entries(Icons).forEach(([name, TestIcon]) => {
    if (!isIcon(TestIcon)) return
    it(`${name} is truthy`, () => {
      expect(TestIcon).toBeTruthy()
    })
    it(`${name} is properly named`, () => {
      expect(name).toEqual(TestIcon.displayName)
    })
  })
})

describe('all icons render content', () => {
  const renderizeIcon = vi.fn()

  Object.entries(Icons).forEach(([name, TestIcon]) => {
    if (!isIcon(TestIcon)) return
    it(`${name} renders`, () => {
      const result = render(
        <TestIcon renderizeIcon={renderizeIcon} data-testid="test" />,
      )
      expect(getByTestId(result.container, 'test')).toBeTruthy()
    })
  })
})

describe('all icon weights render correctly', () => {
  const renderizeIcon = vi.fn()

  Object.entries(Icons).forEach(([name, TestIcon]) => {
    if (!isIcon(TestIcon)) return
    it(`${name} [thin] renders`, () => {
      const result = render(
        <TestIcon
          renderizeIcon={renderizeIcon}
          weight="thin"
          data-testid="test"
        />,
      )
      expect(getByTestId(result.container, 'test')).toBeTruthy()
    })
    it(`${name} [light] renders`, () => {
      const result = render(
        <TestIcon
          renderizeIcon={renderizeIcon}
          weight="light"
          data-testid="test"
        />,
      )
      expect(getByTestId(result.container, 'test')).toBeTruthy()
    })
    it(`${name} [regular] renders`, () => {
      const result = render(
        <TestIcon
          renderizeIcon={renderizeIcon}
          weight="regular"
          data-testid="test"
        />,
      )
      expect(getByTestId(result.container, 'test')).toBeTruthy()
    })
    it(`${name} [bold] renders`, () => {
      const result = render(
        <TestIcon
          renderizeIcon={renderizeIcon}
          weight="bold"
          data-testid="test"
        />,
      )
      expect(getByTestId(result.container, 'test')).toBeTruthy()
    })
    it(`${name} [fill] renders`, () => {
      const result = render(
        <TestIcon
          renderizeIcon={renderizeIcon}
          weight="fill"
          data-testid="test"
        />,
      )
      expect(getByTestId(result.container, 'test')).toBeTruthy()
    })
    it(`${name} [outline] renders`, () => {
      const result = render(
        <TestIcon
          renderizeIcon={renderizeIcon}
          weight="outline"
          data-testid="test"
        />,
      )
      expect(getByTestId(result.container, 'test')).toBeTruthy()
    })
    it(`${name} [custom] renders`, () => {
      const result = render(
        <TestIcon
          renderizeIcon={renderizeIcon}
          weight="custom"
          data-testid="test"
        />,
      )
      expect(getByTestId(result.container, 'test')).toBeTruthy()
    })
  })
})
