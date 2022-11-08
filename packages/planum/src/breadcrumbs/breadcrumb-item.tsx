import { useBreadcrumbItem } from '@react-aria/breadcrumbs'
import type { BreadcrumbItemProps as AriaProps } from '@react-types/breadcrumbs'
import * as React from 'react'

import { ArrowContainer, ItemText, ListItem } from './breadcrumbs.styles'
import { CaretRightIcon } from './caret-right-icon'

export interface BreadcrumbItemProps<C extends React.ElementType>
  extends AriaProps {
  as?: C
}

const BreadcrumbItem = <C extends React.ElementType>(
  props: BreadcrumbItemProps<C> & React.ComponentPropsWithoutRef<C>,
) => {
  const ref = React.useRef<any>()
  const { itemProps } = useBreadcrumbItem(props, ref)

  return (
    <ListItem>
      <ItemText {...props} {...itemProps} ref={ref}>
        {props.children}
      </ItemText>

      {!props.isCurrent && (
        <ArrowContainer>
          <CaretRightIcon focusable={false} aria-hidden="true" />
        </ArrowContainer>
      )}
    </ListItem>
  )
}

export default BreadcrumbItem
