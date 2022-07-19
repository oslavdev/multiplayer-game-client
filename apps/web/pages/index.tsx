import * as React from 'react'
import {Scene}  from 'three-asset'

export default function Web() {
  return (
    <div>
      <h1>Testing application</h1>
      <React.Suspense fallback={<>Loading...</>}>
         <Scene/>
      </React.Suspense>
    </div>
  )
}
