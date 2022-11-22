import { useBreadcrumbItem } from '@react-aria/breadcrumbs'
import type { BreadcrumbItemProps as ItemAriaProps } from '@react-types/breadcrumbs'
import * as React from 'react'

import { ArrowContainer, ItemText, ListItem } from './breadcrumbs.styles'
import { CaretRightIcon } from '@uvodohq/planum-icons'

export interface BreadcrumbItemProps<C extends React.ElementType>
  extends ItemAriaProps {
  as?: C
}

export const BreadcrumbItem = <C extends React.ElementType>(
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
