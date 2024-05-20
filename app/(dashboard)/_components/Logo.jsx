import { Atomic_Age } from 'next/font/google';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import logo from "../../../public/logo.png";

const AtomicAge = Atomic_Age({weight: "400", style:"normal", subsets:["latin"]})


const Logo = () => {
  return (
    <Link href="/" className='text-center grid justify-center'>
        <Image
        className='max-w-full h-[100px] object-cover'
        height={100}
        width={100}
        alt='logo'
        src={logo}
        />
        <p className='font-bold text-xl md:text-2xl text-orange-600' style={AtomicAge.style}>K-nest</p>
    </Link>
  )
}

export default Logo