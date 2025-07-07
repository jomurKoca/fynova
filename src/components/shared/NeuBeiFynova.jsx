
// import React from 'react'
'use client';
import AngebotsKarusell from '../ui/AngebotsKarusell';

export default function NeuBeiFynova() {
  return (
    <div className="py-10 bg-[#fde9f1] mt-10 mb-20">  
      <h1 className="text-[#002558] font-extrabold text-xl ml-8 "> Neu bei <strong><i>Fynova'</i></strong></h1>
      <div className="group"> 
        <AngebotsKarusell/>
      </div>
    </div>
  )
}
// group-[.group]:bg-white kodunu angebotskarusell bileseni icinde card bilesenine geciriyorum ve burada cagiriyorum. gruop sinifi inanilmaz kullanisli ! 
{/*
Tailwind CSS'deki group sınıfı, ebeveyn (parent) öğeye özel stilleri, içindeki çocuk (child) öğelere uygulamak için kullanılır.
Örneğin:
Group sınıfı, bir div içinde kullanılır. İçindeki öğelere group-[.group]:bg-white gibi sınıflarla şartlı stiller eklenebilir.
Yani, sadece belirli bir ebeveyn (div) içinde bulununca farklı bir stil almasını sağlar.
Bu, bileşenlerin orijinal kodunu değiştirmeden, belirli bir kullanım yerinde özelleştirme yapmayı mümkün kılar. !!!
*/}