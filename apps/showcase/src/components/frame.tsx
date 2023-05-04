import { Box, CSS, styled } from '@uvodohq/planum'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useInView } from 'react-intersection-observer'

import ErrorFallback from './error-fallback'
import Logo from './logo'

const Container = styled('div', {
  minWidth: '1200px',
  background: 'white',
})

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: 'sans-serif',
  backgroundColor: '$surface200',
  padding: '0 80px',
  height: 120,
})

interface FrameProps {
  title: string
  css?: CSS
  id?: string
  Page?: React.ComponentType<any>
  children?: React.ReactNode
}

function Frame({ title, Page, children, id = '', css = {} }: FrameProps) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <Box css={{ padding: 50, fontFamily: '$sans' }} id={id} ref={ref}>
      <Container>
        <Header>
          <h1 style={{ fontSize: 32 }}>{title}</h1>
          <div>
            <Logo />
          </div>
        </Header>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Box
            as="main"
            css={{
              pb: 128,
              minHeight: '80vh',
              ...(css as any),
            }}>
            <Suspense fallback={null}>{inView && Page && <Page />}</Suspense>

            {children}
          </Box>
        </ErrorBoundary>
      </Container>
    </Box>
  )
}

export default Frame
