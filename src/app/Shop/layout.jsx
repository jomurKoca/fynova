import React from 'react'
import Header from '../_components/_Shared/Header'


export default function layout ({children}){
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
