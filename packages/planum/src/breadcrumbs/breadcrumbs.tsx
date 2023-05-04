import type { AriaBreadcrumbsProps } from '@react-aria/breadcrumbs'
import { useBreadcrumbs } from '@react-aria/breadcrumbs'
import { useDOMRef } from '@react-spectrum/utils'
import type { DOMRef, ItemProps } from '@react-types/shared'
import type { ReactElement } from 'react'
import * as React from 'react'

import { BreadcrumbItem } from './breadcrumb-item'
import { NavList } from './breadcrumbs.styles'

export interface BreadcrumbsProps<T> extends AriaBreadcrumbsProps {
  /** The breadcrumb items. */
  children: ReactElement<ItemProps<T>> | ReactElement<ItemProps<T>>[]
}

function _Breadcrumbs<T>(props: BreadcrumbsProps<T>, forwardRef: DOMRef) {
  const navDomRef = useDOMRef(forwardRef)
  const { navProps } = useBreadcrumbs(props)

  const items: ReactElement[] = []
  React.Children.forEach(props.children, (child) => {
    if (React.isValidElement(child)) {
      items.push(child)
    }
  })

  const lastIndex = items.length - 1

  const breadcrumbItems = items.map((child, index) => {
    const isCurrent = index === lastIndex
    const key = child.key ?? index

    return <BreadcrumbItem {...child.props} key={key} isCurrent={isCurrent} />
  })

  return (
    <nav {...navProps} ref={navDomRef}>
      <NavList>{breadcrumbItems}</NavList>
    </nav>
  )
}

export const Breadcrumbs = React.forwardRef(_Breadcrumbs)

Breadcrumbs.displayName = 'Breadcrumbs'
