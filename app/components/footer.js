import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      <div className='bg-gray-900'>
        <div className='container mx-auto'>
          <div className='mt-20'>
            <div className='flex justify-between py-10'>
              <div>
                <h2 className='text-4xl font-extrabold mb-6'>Genveje</h2>
                <ul className='grid gap-4'>
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
    </footer>
  )
}
