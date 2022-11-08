/* eslint-disable import/export */
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, vi } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (ui: React.ReactElement, options = {}) => {
  return {
    user: userEvent.setup(),
    ...render(ui, {
      // wrap provider(s) here if needed

      wrapper: ({ children }) => children,
      ...options,
    }),
  }
}

// see: https://github.com/vitest-dev/vitest/issues/821
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// override render export
export { customRender as render }
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
