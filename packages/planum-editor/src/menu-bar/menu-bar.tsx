import type { Editor } from '@tiptap/react'
import { Tooltip, VisuallyHidden } from '@uvodohq/planum'
import * as React from 'react'

import {
  ListBulletsIcon,
  PaletteIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextBolderIcon,
  TextHOneIcon,
  TextHTwoIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
  TextTIcon,
} from '../icons'
import { ToggleButton } from '../toggle-button'
import LinkButtonWithModal from './link-button-with-modal'
import { ButtonsGroup, MenuBarContainer } from './menu-bar.styles'

export interface MenuBarProps {
  editor: Editor
  isDisabled?: boolean
  isBold: boolean
  isItalic: boolean
  isStrike: boolean
  isTextLeft: boolean
  isTextCenter: boolean
  isTextRight: boolean
  isH1: boolean
  isH2: boolean
  isBulletList: boolean
  isLink: boolean
}

// TODO: add tooltips for buttons

// Don't rerender on editor content change when typing
export const MenuBar = React.memo((props: MenuBarProps) => {
  const {
    editor,
    isDisabled,
    isBold,
    isStrike,
    isItalic,
    isTextLeft,
    isTextCenter,
    isTextRight,
    isH1,
    isH2,
    isBulletList,
    isLink,
  } = props

  function focusEditor() {
    if (isDisabled) {
      return editor.chain()
    }

    return editor.chain().focus()
  }

  return (
    <MenuBarContainer>
      <ButtonsGroup>
        {/* Bold  */}
        <Tooltip label="Bold" placement="top">
          <ToggleButton
            isDisabled={isDisabled}
            isSelected={isBold}
            onChange={() => focusEditor().toggleBold().run()}
            aria-label="Bold">
            <TextBolderIcon />
          </ToggleButton>
        </Tooltip>

        {/* Italic */}
        <Tooltip label="Italic" placement="top">
          <ToggleButton
            isDisabled={isDisabled}
            isSelected={isItalic}
            onChange={() => focusEditor().toggleItalic().run()}
            aria-label="Italic">
            <TextItalicIcon />
          </ToggleButton>
        </Tooltip>

        {/* Strike */}
        <Tooltip label="Strike" placement="top">
          <ToggleButton
            isDisabled={isDisabled}
            isSelected={isStrike}
            onChange={() => focusEditor().toggleStrike().run()}
            aria-label="Strike">
            <TextStrikethroughIcon />
          </ToggleButton>
        </Tooltip>

        {/* Color Picker - // TODO: fix focus css */}
        <Tooltip label="Color picker" placement="top">
          <ToggleButton
            as="label"
            aria-label="Color picker"
            isDisabled={isDisabled}>
            <VisuallyHidden>
              <input
                type="color"
                onChange={(event) =>
                  focusEditor().setColor(event.target?.value).run()
                }
                value={editor.getAttributes('textStyle').color || '#060606'}
              />
            </VisuallyHidden>
            <PaletteIcon />
          </ToggleButton>
        </Tooltip>
      </ButtonsGroup>

      <ButtonsGroup>
        {/* Text Left */}
        <Tooltip label="Align left" placement="top">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().setTextAlign('left').run()}
            isSelected={isTextLeft}
            aria-label="Align left">
            <TextAlignLeftIcon />
          </ToggleButton>
        </Tooltip>

        {/* Text Center */}
        <Tooltip label="Center" placement="top">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().setTextAlign('center').run()}
            isSelected={isTextCenter}
            aria-label="Center">
            <TextAlignCenterIcon />
          </ToggleButton>
        </Tooltip>

        {/* Text Right */}
        <Tooltip label="Align right" placement="top">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().setTextAlign('right').run()}
            isSelected={isTextRight}
            aria-label="Align right">
            <TextAlignRightIcon />
          </ToggleButton>
        </Tooltip>
      </ButtonsGroup>

      <ButtonsGroup>
        {/* H1 */}
        <Tooltip label="Heading 1" placement="top">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().toggleHeading({ level: 1 }).run()}
            isSelected={isH1}
            aria-label="Heading 1">
            <TextHOneIcon />
          </ToggleButton>
        </Tooltip>

        {/* H2 */}
        <Tooltip label="Heading 2" placement="top">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().toggleHeading({ level: 2 }).run()}
            isSelected={isH2}
            aria-label="Heading 2">
            <TextHTwoIcon />
          </ToggleButton>
        </Tooltip>
      </ButtonsGroup>

      <ButtonsGroup>
        {/* Link */}

        <LinkButtonWithModal
          editor={editor}
          isSelected={isLink}
          isDisabled={isDisabled}
        />
      </ButtonsGroup>

      <ButtonsGroup>
        {/* Unodered List */}
        <Tooltip label="Unordered list" placement="top">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().toggleBulletList().run()}
            isSelected={isBulletList}
            aria-label="Unordered list">
            <ListBulletsIcon />
          </ToggleButton>
        </Tooltip>
      </ButtonsGroup>

      <ButtonsGroup>
        {/* Clear styles */}
        <Tooltip label="Clear format" placement="top">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().unsetAllMarks().run()}
            isSelected={false}
            aria-label="Clear format">
            <TextTIcon />
          </ToggleButton>
        </Tooltip>
      </ButtonsGroup>
    </MenuBarContainer>
  )
})

MenuBar.displayName = 'Editor.MenuBar'
