import React from 'react'
import Header from '../../components/shared/Header'
import MobilFooter from '../../components/shared/MobilFooter';
import Footer from '../../components/shared/Footer';
import FooterMitAdresse from '../../components/shared/FooterMitAdresse';
//import FooterMitAdresse from '../components/shared/FooterMitAdresse';


export default function layout ({children}){
  return (
    <div >
      
      <main className="pt-36">{children}</main>
      
      </div>
  );
}