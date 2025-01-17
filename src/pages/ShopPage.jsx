import { useState } from 'react';
// Components
import { Header, Footer, Products, Categories } from '@/components';

export const ShopPage = () => {
    const [category, setCategory] = useState('mobile-accessories'); //Default category

    return (
        <>
            <Header />
            <main className="flex flex-col md:flex-row justify-center my-10 gap-5">
                {/* Categories Sidebar */}
                <aside className="md:max-w-80">
                    <Categories onCategorySelect={setCategory} />
                </aside>

                {/* Products Section */}
                <section className="flex-grow">
                    <Products category={category} />
                </section>
            </main>
            <Footer />
        </>
    );
};