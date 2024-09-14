import React from 'react';
import { DownloadIcon, LogoFooter } from '@/utils/icons.util';

export const Footer = () => {
  return (
    <footer className="relative flex flex-col justify-center items-center bg-secondaryBackground text-gray-400 w-full h-[472px]">
      <div className="container px-28 grid grid-cols-1 md:grid-cols-5 ">
        {/* Logo and Contact */}
        <div className='max-w-[248px]'>
          <div className='mb-6'>
            <LogoFooter />
          </div>
          <ul className="space-y-2">
            <li className='text-sm'>Customer Support:</li>
            <li className="text-white font-medium text-lg">(629) 555-0129</li>
            <li className='text-[#ADB7BC] leading-6 text-base'>4571 Washington Ave, Manchester, Kentucky 39495</li>
            <li><a href="mailto:info@kicno.com" className="font-medium text-white">info@kicno.com</a></li>
          </ul>
        </div>

        {/* Top Categories */}
        <div className='max-w-[200px]'>
          <h3 className="text-white text-base font-medium mb-4 uppercase">Top Category</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">Computer & Laptop</a></li>
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">Smartphone</a></li>
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">Headphone</a></li>
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">Accessories</a></li>
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">Camera & Photo</a></li>
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">TV & Homes</a></li>
            <li><a href="#" className="text-sm leading-5 text-yellow-400">Browse All Product →</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className='max-w-[200px]'>
          <h3 className="text-white text-base font-medium mb-4 uppercase">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">Shop Product</a></li>
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">Shopping Cart</a></li>
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">Wishlist</a></li>
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">Compare</a></li>
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">Track Order</a></li>
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">Customer Help</a></li>
            <li><a href="#" className="text-sm leading-5 hover:text-yellow-400">About Us</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div className='max-w-[200px]'>
          <h3 className="text-white text-base font-medium mb-4 uppercase">Download App</h3>
          <DownloadIcon />
        </div>

        {/* Tags */}
        <div className='max-w-[312px]'>
          <h3 className="text-white text-base font-medium mb-4 uppercase">Popular Tag</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm">Game</span>
            <span className="bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm">iPhone</span>
            <span className="bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm">TV</span>
            <span className="bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm">Asus Laptops</span>
            <span className="bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm">Macbook</span>
            <span className="bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm">SSD</span>
            <span className="bg-[#303639] text-sm border border-[#FFFFFF] leading-5 text-white px-3 py-[6px] rounded-sm">Graphics Card</span>
            <span className="bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm">Power Bank</span>
            <span className="bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm">Smart TV</span>
            <span className="bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm">Speaker</span>
            <span className="bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm">Tablet</span>
            <span className="bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm">Microwave</span>
            <span className="bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm">Samsung</span>
          </div>
        </div>
      </div>

      <span className='absolute bottom-0 text-[#ADB7BC] text-sm w-full text-center'>
        <hr className='border-gray-800' />
        <p className='my-5'>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
      </span>
    </footer>
  );
};