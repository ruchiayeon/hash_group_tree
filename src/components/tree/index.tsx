import React, { ReactElement, useState } from 'react'


export default function Tree(props:{children?:JSX.Element}): JSX.Element {
  const {children} = props

  const [structMap, setStructMap] = useState(new Map())
  const [treeItemMap, setTreeItemMap] = useState(new Map())

  return (
    <div>{children}</div>
  )
}

