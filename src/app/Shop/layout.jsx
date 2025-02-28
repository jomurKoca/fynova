import React from 'react'
import Header from '../_components/_Shared/Header'
import MobilFooter from '../_components/_Shared/MobilFooter';
import Footer from '../_components/_Shared/Footer';
import FooterMitAdresse from '../_components/_Shared/FooterMitAdresse';
//import FooterMitAdresse from '../_components/_Shared/FooterMitAdresse';


export default function layout ({children}){
  return (
    <div >
      
      <main className="pt-36">{children}</main>
      
      </div>
  );
}