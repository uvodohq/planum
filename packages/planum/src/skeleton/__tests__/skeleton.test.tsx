import { vi } from 'vitest'

import { render, screen } from '~/test'

import { Skeleton } from '..'

describe('<Skeleton />', async () => {
  const originalRandom = Math.random

  beforeEach(() => {
    const mocked = vi.fn(() => 0.3)
    Math.random = mocked
  })

  afterEach(() => {
    Math.random = originalRandom
  })

  it('should render default skeleton as 2 line texts', () => {
    render(<Skeleton />)

    expect(screen.getByRole('progressbar')).toMatchSnapshot()
  })

  it('should render default skeleton as item card with image', () => {
    render(<Skeleton image />)

    screen.getByTestId('skeleton-img')

    expect(screen.getByRole('progressbar')).toMatchSnapshot()
  })

  it('should render default skeleton as Single image', () => {
    render(<Skeleton showText={false} image />)

    expect(screen.getByRole('progressbar')).toMatchSnapshot()
  })

  it('should render default skeleton as 1 line paragraph', () => {
    render(<Skeleton oneTextLine />)

    expect(screen.getByRole('progressbar')).toMatchSnapshot()
  })
})
