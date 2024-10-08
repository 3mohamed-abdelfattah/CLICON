import React from 'react';
import { DownloadIcon, LogoFooter } from '@/utils/icons.util';

export const Footer = () => {
  return (
    <footer className="relative flex flex-col justify-center items-center bg-secondaryBackground text-gray-400 w-full py-10 md:py-0 md:h-[472px]">
      <div className="container px-5 grid xs:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center pb-3 lg:pb-0">

        {/* Logo and Contact */}
        <div className='mb-10 xs:mb-0 max-w-[248px]'>
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
        <div className='hidden xs:block max-w-[200px] '>
          <h3 className="text-white text-base font-medium mb-4 uppercase">Top Category</h3>
          <ul className="space-y-1">
            <li><a href="#" className={styles.aTagStyle}>Computer & Laptop</a></li>
            <li><a href="#" className={styles.aTagStyle}>Smartphone</a></li>
            <li><a href="#" className={styles.aTagStyle}>Headphone</a></li>
            <li><a href="#" className={styles.aTagStyle}>Accessories</a></li>
            <li><a href="#" className={styles.aTagStyle}>Camera & Photo</a></li>
            <li><a href="#" className={styles.aTagStyle}>TV & Homes</a></li>
            <li><a href="#" className="text-sm leading-5 text-yellow-400">Browse All Product →</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className='hidden md:block max-w-[200px]'>
          <h3 className="text-white text-base font-medium mb-4 uppercase">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className={styles.aTagStyle}>Shop Product</a></li>
            <li><a href="#" className={styles.aTagStyle}>Shopping Cart</a></li>
            <li><a href="#" className={styles.aTagStyle}>Wishlist</a></li>
            <li><a href="#" className={styles.aTagStyle}>Compare</a></li>
            <li><a href="#" className={styles.aTagStyle}>Track Order</a></li>
            <li><a href="#" className={styles.aTagStyle}>Customer Help</a></li>
            <li><a href="#" className={styles.aTagStyle}>About Us</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div className='hidden xl:block max-w-[200px]'>
          <h3 className="text-white text-base font-medium mb-4 uppercase">Download App</h3>
          <DownloadIcon />
        </div>

        {/* Tags */}
        <div className='hidden md:block max-w-fill'>
          <h3 className="text-white text-base font-medium mb-4 uppercase">Popular Tag</h3>
          <div className="flex flex-wrap gap-2">
            <span className={styles.tagsStyle}>Game</span>
            <span className={styles.tagsStyle}>iPhone</span>
            <span className={styles.tagsStyle}>TV</span>
            <span className={styles.tagsStyle}>Asus Laptops</span>
            <span className={styles.tagsStyle}>Macbook</span>
            <span className={styles.tagsStyle}>SSD</span>
            <span className="bg-[#303639] text-sm border border-[#FFFFFF] leading-5 text-white px-3 py-[6px] rounded-sm">Graphics Card</span>
            <span className={styles.tagsStyle}>Power Bank</span>
            <span className={styles.tagsStyle}>Smart TV</span>
            <span className={`hidden lg:block ${styles.tagsStyle}`}>Speaker</span>
            <span className={`hidden lg:block ${styles.tagsStyle}`}>Tablet</span>
            <span className={`hidden lg:block ${styles.tagsStyle}`}>Microwave</span>
            <span className={`hidden lg:block ${styles.tagsStyle}`}>Samsung</span>
          </div>
        </div>
      </div>

      <span className='hidden sm:block absolute bottom-0 text-[#ADB7BC] text-sm w-full text-center p-3'>
        <hr className='border-gray-800' />
        <p className='text-s'>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
      </span>
    </footer>
  )
}

const styles = {
  aTagStyle: `text-sm leading-5 hover:text-yellow-400`,
  tagsStyle: `bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm`
}