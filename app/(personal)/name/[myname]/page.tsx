import React from 'react'

export default function myName({ params }: {params:{myname: string}}) {
  return <div>The name from url is {params.myname}</div>
}
