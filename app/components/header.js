import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <div className='bg-gray-900'>
        <div className='container mx-auto'>
          <div className='mb-20'>
            <div className='flex justify-between py-10'>
              <div>
                <h1>
                <Link href="/">Logo</Link>
                </h1>
              </div>
              <div>
                <ul className='flex gap-10'>
                  <li>
                    <Link href="/pages/booking">Booking</Link>
                  </li>
                  <li>
                    <Link href="/pages/products">Online Bestilling</Link>
                  </li>
                  <li>
                    <Link href="/pages/contact">Kontakt</Link>
                  </li>
                  <li>
                    <Link href="/pages/about">Om Os</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
