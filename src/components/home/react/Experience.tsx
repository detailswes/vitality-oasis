import Callbtn from "../astro/Callbtn.astro";
import CallBtn from "./Callbtn";

const Experience = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-6">
                Experience Comprehensive Care and Support on Your Recovery Journey
            </h1>
            <p className="text-center text-lg text-gray-500">Medical 24/7</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 border rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="flex-shrink-0">
                            <svg
                                className="w-8 h-8 text-orange-600"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path d="M..."></path>
                            </svg>
                        </div>
                        <h2 className="ml-3 text-xl font-semibold">24/7 Admissions & Medical Support</h2>
                    </div>
                    <p>
                        Our dedicated team is available 24/7 to guide you through the admissions
                        process and provide unwavering medical support throughout your recovery journey.
                    </p>
                </div>

                <div className="p-6 border rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="flex-shrink-0">
                            <svg
                                className="w-8 h-8 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path d="M..."></path>
                            </svg>
                        </div>
                        <h2 className="ml-3 text-xl font-semibold">Confidential & Private Treatment</h2>
                    </div>
                    <p>
                        Your privacy is paramount. We provide discreet, secure, and confidential treatment
                        in a safe and supportive environment where you can focus solely on healing.
                    </p>
                </div>

                <div className="p-6 border rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="flex-shrink-0">
                            <svg
                                className="w-8 h-8 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path d="M..."></path>
                            </svg>
                        </div>
                        <h2 className="ml-3 text-xl font-semibold">Licensed & Accredited Professionals</h2>
                    </div>
                    <p>
                        Receive expert care from our highly trained, licensed, and accredited professionals
                        who are passionate about helping you achieve lasting recovery.
                    </p>
                </div>

                <div className="p-6 border rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="flex-shrink-0">
                            <svg
                                className="w-8 h-8 text-red-600"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path d="M..."></path>
                            </svg>
                        </div>
                        <h2 className="ml-3 text-xl font-semibold">Insurance Accepted</h2>
                    </div>
                    <p>
                        We work with most major insurance providers to make your treatment accessible and
                        stress-free. Contact us to verify your coverage and explore your financial options.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center mt-8">
                <p>Get a Free Confidential Insurance check</p>
                
                <CallBtn />
                
                 
                <p>Confidential |  Free  |  Available 24/7</p>
            </div>
        </div>
    );
};
export default Experience