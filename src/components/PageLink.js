import React from 'react'

const PageLink = ({href, className,text}) => {
  return (
    <li>
        <a href={href} className={className} > {text} </a>
    </li>
  )
}

export default PageLink