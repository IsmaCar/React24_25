import React from 'react'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
    <div>RootLayout</div>
    <Outlet/>
    </>
  )
}

export default RootLayout