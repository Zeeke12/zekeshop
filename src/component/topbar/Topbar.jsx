import React, { useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../db/ProductContext';
import { useNavigate } from 'react-router-dom'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
 

const Topbar = () => {
  const { filterBySearch, cart, setSearchInput, searchInput } = useContext(ProductContext)
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const searchAndNavigate = () => {
    setSearchInput('')
    filterBySearch();
    navigate('/result');
  }


  return (
    <header className="bg-red-200 sticky-top">
      <nav className="bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-700 mx-0 flex items-center justify-between p-6 lg:px-8 " aria-label="Global">
        <div className="bg-transparent flex lg:flex flex-between">
          <a href="/" className="bg-transparent -m-1.5 p-1.5 text-3xl">
            Zeke
          </a>
        </div>
        <div className="flex lg:hidden bg-transparent">
          <button
            type="button"
            className="bg-transparent -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 bg-transparent" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 bg-transparent">
          
          <a href="/" className="bg-transparent text-sm  leading-6 text-gray-900">
            Home
          </a>
          <a href="/about" className="bg-transparent text-sm  leading-6 text-gray-900">
            About
          </a>
          <a href="/products" className="bg-transparent text-sm  leading-6 text-gray-900">
            Products
          </a>
          <a href="/cart" className="bg-transparent text-sm  leading-6 text-gray-900">
            Cart{cart.length === 0 ? <span> </span> : <span className='animate-bounce px-1 absolute inline-flex  opacity-75 bg-transparent'>{cart.length}</span>}
          </a>
          
        </Popover.Group>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <div className='flex flex-row gap-1'>
        <input className=' border-1 border-[blue-400] px-2' type='text' value={searchInput}   placeholder='Search...' onChange={(e) => setSearchInput(e.target.value)} />
                <button className='bg-green-800 text-white px-2 py-1' onClick={searchAndNavigate}>Search</button>
              </div>
        </Popover.Group>
        
        
      </nav>
      <Dialog as="div" className="lg:hidden w-screen" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 z-10 bg-red-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between w-5 bg-green-700">
          <a href="/" className="text-lg">
            Zeke
          </a>
          
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 flex flex-col py-6">
                
              <a href="/" className="bg-transparent text-sm  leading-6 text-gray-900">
            Home
          </a>
          <a href="/about" className="bg-transparent text-sm  leading-6 text-gray-900">
            About
          </a>
          <a href="/products" className="bg-transparent text-sm  leading-6 text-gray-900">
            Products
          </a>
          <a href="/cart" className="bg-transparent text-sm  leading-6 text-gray-900">
            Cart{cart.length === 0 ? <span> </span> : <span className='animate-bounce px-1 absolute inline-flex  opacity-75'>{cart.length}</span>}
          </a>
          
              </div>
              <div className='flex flex-col gap-2'>
              <input className=' border-1 border-[blue-400] px-2' type='text' value={searchInput}   placeholder='Search...' onChange={(e) => setSearchInput(e.target.value)} />
                <button className='bg-green-800 w-screen text-white border-2 border-white px-2 py-1' onClick={searchAndNavigate}>Search</button>
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Topbar