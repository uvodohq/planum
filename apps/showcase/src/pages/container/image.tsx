import { Avatar, Box, Flex, H1, Img, Loader, Subheader } from '@uvodohq/planum'

const image =
  'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'

const lowImage =
  'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=10'

const transparentImage = 'https://www.pngmart.com/files/7/Socks-PNG-File.png'

export default function ExtraContainer() {
  return (
    <>
      <Box css={{ py: 60 }} id="avatar">
        <H1 css={{ m: 0, fw: '$bold' }} id="avatar">
          Avatar
        </H1>

        <Flex css={{ gap: 32, pt: 32 }}>
          <Avatar src={image} alt="Colm Tuite" initials="CT" />
          <Avatar
            src={'https://picsum.photos/3000'}
            alt="big image"
            initials="JD"
          />
          <Avatar
            src={'https://picsum.photos/5000'}
            alt="should be error"
            initials="JD"
          />
          <Avatar src={'image'} alt="Pedro Duarte" initials="PD" />
        </Flex>
      </Box>

      <Box css={{ py: 60 }} id="image">
        <H1 css={{ m: 0, fw: '$bold', mb: 32 }} id="image">
          Image
        </H1>

        <Flex css={{ justifyContent: 'stretch', mb: 64, gap: 64 }}>
          <Box>
            <Subheader css={{ fw: '$regular' }}>
              Normal (cover jpg/png transparent)
            </Subheader>
            <Flex css={{ gap: 32, pt: 12 }}>
              <Img src={image} alt="Colm Tuite" size={56} />
              <Img src={image} alt="Colm Tuite" size={80} />
              <Img src={transparentImage} alt="Colm Tuite" size={104} />
              <Img src={transparentImage} alt="Colm Tuite" size={120} />
            </Flex>
          </Box>

          <Box>
            <Subheader css={{ fw: '$regular' }}>
              While image loading shows skeleton
            </Subheader>
            <Flex css={{ gap: 32, pt: 12 }}>
              <Img
                src={``}
                alt="Colm Tuite"
                size={56}
                // @ts-expect-error override status change fn
                onLoadingStatusChange={() => {}}
                defaultStatus={'loading'}
              />
              <Img
                src={``}
                alt="Colm Tuite"
                size={72}
                // @ts-expect-error override status change fn
                onLoadingStatusChange={() => {}}
                defaultStatus={'loading'}
              />
              <Img
                src={``}
                alt="Colm Tuite"
                size={80}
                // @ts-expect-error override status change fn
                onLoadingStatusChange={() => {}}
                defaultStatus={'loading'}
              />
              <Img
                src={``}
                alt="Colm Tuite"
                size={120}
                // @ts-expect-error override status change fn
                onLoadingStatusChange={() => {}}
                defaultStatus={'loading'}
              />
            </Flex>
          </Box>
        </Flex>

        <Flex css={{ justifyContent: 'stretch', mb: 64, gap: 64 }}>
          <Box>
            <Subheader css={{ fw: '$regular' }}>
              Default responsive icon fallback placeholder
            </Subheader>
            <Flex css={{ gap: 32, pt: 12 }}>
              <Img src={``} alt="Colm Tuite" size={56} />
              <Img src={``} alt="Colm Tuite" size={80} />
              <Img src={'https://fake.com'} alt="Colm Tuite" size={104} />
              <Img src={'https://fake.com'} alt="Colm Tuite" size={120} />
            </Flex>
          </Box>

          <Box>
            <Subheader css={{ fw: '$regular' }}>
              Show fallback small size img while big one is loading, or show
              custom Loader
            </Subheader>
            <Flex css={{ gap: 32, pt: 12 }}>
              <Img
                src={'https://picsum.photos/3000'}
                alt="Colm Tuite"
                size={214}
                renderFallback={() => <Img src={lowImage} alt="Colm Tuite" />}
              />
              <Img
                src={'https://picsum.photos/5000'}
                alt="Colm Tuite"
                size={214}
                renderFallback={(status) => status === 'loading' && <Loader />}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
