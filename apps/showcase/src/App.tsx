import './styles/app.css'
import './styles/reset.css'

import { Flex } from '@uvodohq/planum'

import {
  AlertPage,
  ButtonDarkPage,
  ButtonWhitePage,
  ColorPage,
  EditorPage,
  EffectPage,
  ExtraComponentsPage,
  FormElementsPage,
  HomePage,
  ImagePage,
  InputPage,
  NotificationPage,
  OverlaysPage,
  SelectPage,
  TagsBadgePage,
  TextareaPage,
  TypographyPage,
  IconsPage,
} from './pages'

export default function DemoApp() {
  return (
    <Flex
      css={{
        flexWrap: 'nowrap',
      }}>
      <HomePage />
      <ColorPage />
      <TypographyPage />
      <EffectPage />
      <ButtonDarkPage />
      <ButtonWhitePage />
      <IconsPage />
      <InputPage />
      <TextareaPage />
      <FormElementsPage />
      <SelectPage />
      <OverlaysPage />
      <TagsBadgePage />
      <NotificationPage />
      <AlertPage />
      <EditorPage />
      <ImagePage />
      <ExtraComponentsPage />
    </Flex>
  )
}
