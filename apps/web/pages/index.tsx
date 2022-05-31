import * as React from 'react'
import { Button } from "ui"
import {Scene}  from 'three-asset'

export default function Web() {
  return (
    <div>
      <h1>Web application starts here</h1>
      <React.Suspense fallback={<>Loading...</>}>
       <Scene/>
      </React.Suspense>
      <Button />
    </div>
  )
}
