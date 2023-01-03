import type { Editor } from '@tiptap/react'
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
  VisuallyHidden,
} from '@uvodohq/planum'
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
        <Tooltip>
          <TooltipTrigger>
            <ToggleButton
              isDisabled={isDisabled}
              isSelected={isBold}
              onChange={() => focusEditor().toggleBold().run()}
              aria-label="Bold">
              <TextBolderIcon />
            </ToggleButton>
          </TooltipTrigger>
          <TooltipPopup>Bold</TooltipPopup>
        </Tooltip>

        {/* Italic */}
        <Tooltip>
          <TooltipTrigger>
            <ToggleButton
              isDisabled={isDisabled}
              isSelected={isItalic}
              onChange={() => focusEditor().toggleItalic().run()}
              aria-label="Italic">
              <TextItalicIcon />
            </ToggleButton>
          </TooltipTrigger>
          <TooltipPopup>Italic</TooltipPopup>
        </Tooltip>

        {/* Strike */}
        <Tooltip>
          <TooltipTrigger>
            <ToggleButton
              isDisabled={isDisabled}
              isSelected={isStrike}
              onChange={() => focusEditor().toggleStrike().run()}
              aria-label="Strike">
              <TextStrikethroughIcon />
            </ToggleButton>
          </TooltipTrigger>
          <TooltipPopup>Strike</TooltipPopup>
        </Tooltip>

        {/* Color Picker - // TODO: fix focus css */}
        <Tooltip>
          <TooltipTrigger>
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
          </TooltipTrigger>
          <TooltipPopup>Color picker</TooltipPopup>
        </Tooltip>
      </ButtonsGroup>

      <ButtonsGroup>
        {/* Text Left */}
        <Tooltip>
          <TooltipTrigger>
            <ToggleButton
              isDisabled={isDisabled}
              onChange={() => focusEditor().setTextAlign('left').run()}
              isSelected={isTextLeft}
              aria-label="Align left">
              <TextAlignLeftIcon />
            </ToggleButton>
          </TooltipTrigger>
          <TooltipPopup>Align left</TooltipPopup>
        </Tooltip>

        {/* Text Center */}
        <Tooltip>
          <TooltipTrigger>
            <ToggleButton
              isDisabled={isDisabled}
              onChange={() => focusEditor().setTextAlign('center').run()}
              isSelected={isTextCenter}
              aria-label="Center">
              <TextAlignCenterIcon />
            </ToggleButton>
          </TooltipTrigger>
          <TooltipPopup>Center</TooltipPopup>
        </Tooltip>

        {/* Text Right */}
        <Tooltip>
          <TooltipTrigger>
            <ToggleButton
              isDisabled={isDisabled}
              onChange={() => focusEditor().setTextAlign('right').run()}
              isSelected={isTextRight}
              aria-label="Align right">
              <TextAlignRightIcon />
            </ToggleButton>
          </TooltipTrigger>
          <TooltipPopup>Align right</TooltipPopup>
        </Tooltip>
      </ButtonsGroup>

      <ButtonsGroup>
        {/* H1 */}
        <Tooltip>
          <TooltipTrigger>
            <ToggleButton
              isDisabled={isDisabled}
              onChange={() => focusEditor().toggleHeading({ level: 1 }).run()}
              isSelected={isH1}
              aria-label="Heading 1">
              <TextHOneIcon />
            </ToggleButton>
          </TooltipTrigger>
          <TooltipPopup>Heading 1</TooltipPopup>
        </Tooltip>

        {/* H2 */}
        <Tooltip>
          <TooltipTrigger>
            <ToggleButton
              isDisabled={isDisabled}
              onChange={() => focusEditor().toggleHeading({ level: 2 }).run()}
              isSelected={isH2}
              aria-label="Heading 2">
              <TextHTwoIcon />
            </ToggleButton>
          </TooltipTrigger>
          <TooltipPopup>Heading 2</TooltipPopup>
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
        <Tooltip>
          <TooltipTrigger>
            <ToggleButton
              isDisabled={isDisabled}
              onChange={() => focusEditor().toggleBulletList().run()}
              isSelected={isBulletList}
              aria-label="Unordered list">
              <ListBulletsIcon />
            </ToggleButton>
          </TooltipTrigger>
          <TooltipPopup>Unordered list</TooltipPopup>
        </Tooltip>
      </ButtonsGroup>

      <ButtonsGroup>
        {/* Clear styles */}
        <Tooltip>
          <TooltipTrigger>
            <ToggleButton
              isDisabled={isDisabled}
              onChange={() => focusEditor().unsetAllMarks().run()}
              isSelected={false}
              aria-label="Clear format">
              <TextTIcon />
            </ToggleButton>
          </TooltipTrigger>
          <TooltipPopup>Clear format</TooltipPopup>
        </Tooltip>
      </ButtonsGroup>
    </MenuBarContainer>
  )
})

MenuBar.displayName = 'Editor.MenuBar'
