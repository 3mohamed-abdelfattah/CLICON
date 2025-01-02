// Icons
import * as Icons from "@/utils/icons.util";

// Reusable Styles
const styles = {
  aTagStyle: `text-sm leading-5 hover:text-yellow-400 cursor-pointer transition-all`,
  tagsStyle: `bg-transparent text-sm border border-[#303639] leading-5 text-white px-3 py-[6px] rounded-sm hover:bg-yellow-400 hover:text-black cursor-pointer transition-all`,
};

export const Footer = () => {
  return (
    <footer className="relative flex flex-col justify-center items-center bg-secondaryBackground text-gray-400 w-full pt-10 md:pt-0">
      <div className="lg:container px-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-8 content-between justify-items-stretch md:pt-20">

        {/* Logo and Contact Section */}
        <div className="mb-10 xs:mb-0 min-w-[177px] xs:max-w-[248px] col-span-2 xs:col-span-1">
          <div className="mb-6">
            <Icons.LogoFooter />
          </div>
          <ul className="space-y-2">
            <li className="text-sm">Customer Support:</li>
            <li className="text-white font-medium text-lg">(629) 555-0129</li>
            <li className="text-[#ADB7BC] leading-6 text-base">4571 Washington Ave, Manchester, Kentucky 39495</li>
            <li><a href="mailto:info@kicno.com" className="font-medium text-white">info@kicno.com</a></li>
          </ul>
        </div>

        {/* Top Categories Section */}
        <aside className="max-w-[200px] w-fit">
          <h3 className="text-white text-base font-medium mb-4 uppercase">Top Category</h3>
          <ul className="space-y-1">
            {["Computer & Laptop", "Smartphone", "Headphone", "Accessories", "Camera & Photo", "TV & Homes"].map((product, index) => (
              <li key={index} className={styles.aTagStyle}>{product}</li>
            ))}
            <li><a href="#" className="text-sm leading-5 text-yellow-400">Browse All Product →</a></li>
          </ul>
        </aside>

        {/* Quick Links Section */}
        <aside className="max-w-[200px]">
          <h3 className="text-white text-base font-medium mb-4 uppercase">Quick Links</h3>
          <ul className="space-y-2">
            {["Shop Product", "Shopping Cart", "Wishlist", "Compare", "Track Order", "Customer Help", "About Us"].map((product, index) => (
              <li key={index} className={styles.aTagStyle}>{product}</li>
            ))}
          </ul>
        </aside>

        {/* Download App Section */}
        <aside className="xs:max-w-[200px] col-span-2 xs:col-span-1">
          <h3 className="text-white text-base font-medium mb-4 uppercase">Download App</h3>
          <div className="flex justify-between items-center flex-wrap gap-3 cursor-pointer">
            <Icons.DownloadAndroidIcon />
            <Icons.DownloadIOSIcon />
          </div>
        </aside>

        {/* Popular Tags Section */}
        <aside className="max-w-fill col-span-2 xl:col-span-1">
          <h3 className="text-white text-base font-medium mb-4 uppercase">Popular Tag</h3>
          <div className="flex flex-wrap gap-2">
            {["Game", "iPhone", "TV", "Asus Laptops", "Macbook", "SSD", "Graphics Card", "Power Bank", "Smart TV", "Speaker", "Tablet", "Microwave", "Samsung"].map((tag, index) => (
              <span className={styles.tagsStyle} key={index}>{tag}</span>
            ))}
          </div>
        </aside>
      </div>

      {/* Footer Bottom Line */}
      <div className="flex justify-center items-center text-[#ADB7BC] text-sm w-full text-center p-3 py-5 border-t-2 border-gray-800 mt-10">
        <p className="text-s">Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
      </div>
    </footer>
  );
};