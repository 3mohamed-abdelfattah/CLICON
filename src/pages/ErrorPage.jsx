import { Link } from "react-router-dom";
// Components
import { Header, Footer } from "@/components";
// Icons
import * as Icons from "@/utils/icons.util";
// Images
import ErrorLogo from "@/assets/images/error.png";

export const ErrorPage = () => {
    return (
        <>
            {/* Header component */}
            <Header />
            <main className="flex flex-col justify-center items-center gap-5 mb-16">
                {/* Error image */}
                <img className="max-w-[500px]" src={ErrorLogo} alt="Error" />
                {/* Error message */}
                <h1 className="font-semibold text-4xl text-center leading-[44px]">404, Page not found</h1>
                <p className="max-w-[536px] text-[#475156] text-center leading-6">
                    Something went wrong. It looks like the page you requested could not be found. The link might be broken or the page is being updated.
                </p>
                {/* Navigation links */}
                <div className="flex gap-4">
                    <Link to="/home" className="hover:shadow hover:scale-105 transition-all" aria-label="Go Back">
                        <Icons.GoBack />
                    </Link>
                    <Link to="/home" className="hover:shadow hover:scale-105 transition-all" aria-label="Go Home">
                        <Icons.GoHome />
                    </Link>
                </div>
            </main>
            {/* Footer component */}
            <Footer />
        </>
    );
};