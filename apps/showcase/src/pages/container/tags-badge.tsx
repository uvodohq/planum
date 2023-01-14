import { Badge, Box, Flag, Flex, H1, styled, Tag } from '@uvodohq/planum'

import {
  TagSelectCountryExample,
  TagSelectExample,
} from '../../components/tag/tag-select-examples'

import {
  TagGroupCustomRender,
  TagGroupExample,
} from '../../components/tag/tags-demos'

import { UserIcon } from '@uvodohq/planum-icons'

const StyledH1 = styled(H1, {
  m: 0,
  mb: 66,
  fw: 700,
})

export default function TagsBadgeContainer() {
  return (
    <>
      {/* Tags */}
      <StyledH1 id="tags">Tags</StyledH1>

      <Box css={{ mb: 128 }}>
        <Box css={{ display: 'flex', gap: 32, mb: 28 }}>
          <Tag onRemove={alert}>Regular</Tag>
          <Tag>Hover</Tag>
          <Tag>Active</Tag>
        </Box>

        <Box css={{ display: 'flex', gap: 32, mb: 28 }}>
          <Tag removeButtonAlign="left">Regular</Tag>
          <Tag removeButtonAlign="left" rightIcon={<UserIcon size={16} />}>
            Hover
          </Tag>
          <Tag leftIcon={<UserIcon size={16} />}>Active</Tag>
        </Box>

        <Box css={{ display: 'flex', gap: 32, mb: 28 }}>
          <Tag leftIcon={<UserIcon size={16} />}>Regular</Tag>
          <Tag leftIcon={<UserIcon size={16} />}> Hover</Tag>
          <Tag leftIcon={<UserIcon size={16} />}>Active</Tag>
        </Box>

        <Box css={{ display: 'flex', gap: 32, mb: 28 }}>
          <Tag rightIcon={<UserIcon size={16} />} removable={false}>
            Right Icon unremovable
          </Tag>
          <Tag removable={false}>no icon</Tag>
        </Box>

        <Box css={{ display: 'flex', gap: 32, mb: 28 }}>
          <Tag leftIcon={<UserIcon size={16} />} removeButtonAlign="left">
            With Right icon
          </Tag>

          <Tag rightIcon={<UserIcon size={16} />} removeButtonAlign="right">
            With Right Icon
          </Tag>
        </Box>

        <Box css={{ display: 'flex', gap: 32, mb: 28 }}>
          <Tag leftIcon={<Flag country="us" />}>United States</Tag>
          <Tag leftIcon={<Flag country="az" />}>Azerbaijan</Tag>
          <Tag leftIcon={<Flag country="dk" />}>Denmark</Tag>
        </Box>

        <Box css={{ display: 'flex', gap: 32, mb: 28 }}>
          <Tag rightIcon={<Flag country="us" />} removeButtonAlign="left">
            United States
          </Tag>
          <Tag rightIcon={<Flag country="az" />}>Azerbaijan</Tag>
          <Tag rightIcon={<Flag country="dk" />} removable={false}>
            Denmark
          </Tag>
        </Box>
      </Box>

      <StyledH1>Tag Group - add/delete</StyledH1>

      <Box css={{ mb: 128 }}>
        <TagGroupExample />
      </Box>

      <StyledH1>Custom Tag render</StyledH1>
      <Box css={{ mb: 128 }}>
        <TagGroupCustomRender />
      </Box>

      <StyledH1>Tag Select</StyledH1>

      <Flex
        css={{
          gap: 32,
          mt: 40,
          mb: 32,
          flexWrap: 'wrap',
          '&>*': {
            overflow: 'hidden',
            p: 8,
            flex: 1,
          },
        }}>
        <TagSelectExample
          placeholder="tshirts, black, red"
          label="sfsdf ff"
          aria-label="label"
        />
        <TagSelectExample
          placeholder="tshirts, black, red"
          label="Label"
          aria-label="label"
          leftIcon={<UserIcon size={16} />}
          isDisabled
        />
        <TagSelectExample
          placeholder="tshirts, black, red"
          label="Label"
          aria-label="label"
          leftIcon={<UserIcon size={16} />}
          description="This is a textarea real example"
          successMessage="Success message, You did it!"
          errorMessage="You can select max 3 tags"
          status="error"
        />
      </Flex>

      <Flex
        css={{
          gap: 32,
          mt: 40,
          mb: 128,
          flexWrap: 'wrap',
          '&>*': {
            overflow: 'hidden',
            p: 8,
            flex: 1,
          },
        }}>
        <TagSelectCountryExample />
        <Box />
      </Flex>

      <Box css={{ mb: 128 }} id="badge">
        <StyledH1 id="badge">Badge</StyledH1>

        {/* default */}
        <Flex css={{ gap: 32 }}>
          <Badge variant={'warning'}>Warning</Badge>
          <Badge variant={'neutral'}>Neutral</Badge>
          <Badge variant={'success'}>Success</Badge>
          <Badge variant={'danger'}>Danger</Badge>
          <Badge variant={'secondary'}>32</Badge>
          <Badge variant={'primary'}>32</Badge>
        </Flex>

        {/* round */}
        <Flex css={{ gap: 32, mt: 40 }}>
          <Badge variant={'warning'} roundness="sm" bordered>
            Warning
          </Badge>
          <Badge variant={'neutral'} roundness="sm" bordered>
            Neutral
          </Badge>
          <Badge variant={'success'} roundness="sm" bordered>
            Success
          </Badge>
          <Badge variant={'danger'} roundness="sm" bordered>
            Danger
          </Badge>
          <Badge variant={'secondary'} roundness="sm" bordered>
            32
          </Badge>
          <Badge variant={'primary'} roundness="sm" bordered>
            32
          </Badge>
        </Flex>

        {/* uppercase */}
        <Flex css={{ gap: 32, mt: 40 }}>
          <Badge variant={'warning'} roundness="sm" bordered uppercase>
            Warning
          </Badge>
          <Badge variant={'neutral'} roundness="sm" bordered uppercase>
            Neutral
          </Badge>
          <Badge variant={'success'} roundness="sm" bordered uppercase>
            Success
          </Badge>
          <Badge variant={'danger'} roundness="sm" bordered uppercase>
            Danger
          </Badge>
          <Badge variant={'secondary'} roundness="sm" bordered uppercase>
            32
          </Badge>
          <Badge variant={'primary'} roundness="sm" bordered uppercase>
            32
          </Badge>
        </Flex>

        <Flex css={{ gap: 32, mt: 40 }}>
          <Badge variant={'outlineWarning'}>Warning</Badge>
          <Badge variant={'outlineNeutral'}>Neutral</Badge>
          <Badge variant={'outlineSuccess'}>Success</Badge>
          <Badge variant={'outlineDanger'}>Danger</Badge>
          <Badge variant={'outlineSecondary'}>32</Badge>
          <Badge variant={'outlinePrimary'}>32</Badge>
        </Flex>

        <Flex css={{ gap: 32, mt: 40 }}>
          <Badge variant={'outlineWarning'} roundness="sm" bordered>
            Warning
          </Badge>
          <Badge variant={'outlineNeutral'} roundness="sm" bordered>
            Neutral
          </Badge>
          <Badge variant={'outlineSuccess'} roundness="sm" bordered>
            Success
          </Badge>
          <Badge variant={'outlineDanger'} roundness="sm" bordered>
            Danger
          </Badge>
          <Badge variant={'outlineSecondary'} roundness="sm" bordered>
            32
          </Badge>
          <Badge variant={'outlinePrimary'} roundness="sm" bordered>
            32
          </Badge>
        </Flex>

        <Flex css={{ gap: 32, mt: 40 }}>
          <Badge variant={'outlineWarning'} roundness="sm" bordered uppercase>
            Warning
          </Badge>
          <Badge variant={'outlineNeutral'} roundness="sm" bordered uppercase>
            Neutral
          </Badge>
          <Badge variant={'outlineSuccess'} roundness="sm" bordered uppercase>
            Success
          </Badge>
          <Badge variant={'outlineDanger'} roundness="sm" bordered uppercase>
            Danger
          </Badge>
          <Badge variant={'outlineSecondary'} roundness="sm" bordered uppercase>
            32
          </Badge>
          <Badge variant={'outlinePrimary'} roundness="sm" bordered uppercase>
            32
          </Badge>
        </Flex>
      </Box>

      <Box>
        <StyledH1 id="flag">Flag</StyledH1>

        <Box css={{ display: 'flex', gap: 32, mb: 128 }}>
          <Flag country="us" />
          <Flag country="az" />
          <Flag country="dk" />
        </Box>
      </Box>
    </>
  )
}
