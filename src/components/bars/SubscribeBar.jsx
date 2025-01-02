// ICons
import * as Icons from "@/utils/icons.util";

export const SubscribeBar = () => {
    return (
        <section className="flex flex-col justify-center items-center h-auto pt-5 sm:h-[452px] bg-primaryBackground px-2">
            {/* Title */}
            <h2 className="font-semibold text-white text-2xl sm:text-3xl leading-10 text-center">
                Subscribe to our newsletter
            </h2>

            {/* Description */}
            <p className="max-w-[536px] text-center text-white/60 text-xs xs:text-sm sm:text-base leading-6 p-3">
                Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
            </p>

            {/* Subscription Input */}
            <div className="flex w-full max-w-[536px] bg-white pl-5 sm:px-5 sm:py-[12px] rounded-sm gap-2 shadow-xl my-4 xs:my-8">
                <input
                    type="email"
                    placeholder="Email address"
                    className="text-sm font-normal leading-5 text-secondaryBackground w-full outline-none"
                />
                <button className="cursor-pointer" aria-label="Subscribe">
                    <Icons.SubscribeButtonIcon />
                </button>
            </div>

            {/* Company Logo */}
            <div className="hidden sm:block">
                <Icons.CompanyLogo />
            </div>
        </section>
    );
};