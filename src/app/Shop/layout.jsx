import React from 'react'
import Header from '../_components/_Shared/Header'
import MobilFooter from '../_components/_Shared/MobilFooter';


export default function layout ({children}){
  return (
    <div>
      <Header />
      <main>{children}</main>
      <MobilFooter />
      </div>
  );
}
