import Logo from "../assets/EpicGamesLogo.svg";
import { Button } from "@material-tailwind/react";
import { ChevronDown } from "lucide-react"

export default function Navbar() {
    

    return (
        <nav className="bg-[#000000] text-white p-4 flex items-center justify-between fixed top-0 left-0 w-full z-10">
        <div className="flex items-center space-x-6">
            <div className="relative group">
            <div className="flex items-center cursor-pointer">
                <div className="h-8 w-8 bg-gray-700 flex items-center justify-center rounded">
                <img src={Logo}></img>
                </div>
                <ChevronDown className="h-4 w-4 ml-1 text-gray-400 group-hover:text-white transition-colors" />
            </div>
    
            <div className="absolute left-0 mt-2 w-[700px] bg-[#202020] text-white rounded-none shadow-lg grid grid-cols-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <div>
                <div className="p-6 border-b border-[#333333]">
                    <h3 className="text-xl font-bold mb-4">Play</h3>
                    <ul className="space-y-3">
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                        <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <span className="text-lg font-bold">F</span>
                        </div>
                        <span>Fortnite</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                        <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            />
                            <path
                            d="M22 12H20M4 12H2M12 4V2M12 22V20"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            />
                        </svg>
                        </div>
                        <span>Rocket League</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                        <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                            <path
                            d="M8 14C8.5 15.5 10 16.5 12 16.5C14 16.5 15.5 15.5 16 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            />
                            <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                            <circle cx="15" cy="9" r="1.5" fill="currentColor" />
                        </svg>
                        </div>
                        <span>Fall Guys</span>
                    </li>
                    </ul>
                </div>
    
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Discover</h3>
                    <ul className="space-y-3">
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                        <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path
                            d="M8 11V15L12 13L16 11V15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>
                        <span>Epic Games Store</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                        <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7H22M2 12H22M2 17H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        </div>
                        <span>Fab</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                        <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M3 8L12 4L21 8L12 12L3 8Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3 12L12 16L21 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3 16L12 20L21 16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>
                        <span>Sketchfab</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                        <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M2 7H6M18 7H22M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            />
                            <path d="M10 11V16M14 11V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        </div>
                        <span>ArtStation</span>
                    </li>
                    </ul>
                </div>
                </div>
    
                {/* Right column */}
                <div className="p-6 border-l border-[#333333]">
                <h3 className="text-xl font-bold mb-4">Create</h3>
                <ul className="space-y-3">
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path d="M12 2V22" stroke="currentColor" strokeWidth="2" />
                        <path d="M19.0711 4.92893L4.92893 19.0711" stroke="currentColor" strokeWidth="2" />
                        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
                        <path d="M4.92893 4.92893L19.0711 19.0711" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                    <span>Unreal Engine</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <span className="text-lg font-bold">F</span>
                    </div>
                    <span>Create in Fortnite</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2" />
                        <path
                            d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        </svg>
                    </div>
                    <span>MetaHuman</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 22H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path
                            d="M17 7L7 12L17 17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                    </div>
                    <span>Twinmotion</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                        <path
                            d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path d="M2 8H22" stroke="currentColor" strokeWidth="2" />
                        <path d="M2 16H22" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                    <span>RealityScan</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path
                            d="M8.5 12.5L10.5 14.5L15.5 9.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                    </div>
                    <span>RealityCapture</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 10V14C5 15.1046 5.89543 16 7 16H17C18.1046 16 19 15.1046 19 14V10"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path
                            d="M12 4V12M12 12L15 9M12 12L9 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span>Epic Online Services</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path
                            d="M8 11V15L12 13L16 11V15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                    </div>
                    <span>Publish on Epic Games Store</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="9" r="4" stroke="currentColor" strokeWidth="2" />
                        <path
                            d="M10.5 13.5C11.3284 13.5 12 12.8284 12 12C12 11.1716 11.3284 10.5 10.5 10.5"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path
                            d="M2 18C2 15.7909 3.79086 14 6 14H10C12.2091 14 14 15.7909 14 18V20C14 21.1046 13.1046 22 12 22H4C2.89543 22 2 21.1046 2 20V18Z"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path d="M16 11H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M19 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span>Kids Web Services</span>
                    </li>
                    <li className="flex items-center hover:text-gray-300 cursor-pointer">
                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17 7L12 12M12 12L7 17M12 12L7 7M12 12L17 17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                    <span>Developer Community</span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
    
            {/* Main navigation items */}
            <a href="#" className="text-xl font-bold hover:text-gray-400 transition-colors">
            STORE
            </a>
            <a href="#" className="text-lg font-medium hover:text-gray-400 transition-colors">
            News
            </a>
            <a href="#" className="text-lg font-medium hover:text-gray-400 transition-colors">
            FAQ
            </a>
            <a href="#" className="text-lg font-medium hover:text-gray-400 transition-colors">
            Help
            </a>
            <a href="#" className="text-lg font-medium hover:text-gray-400 transition-colors">
            About Us
            </a>
            <div className="relative group">
            <div className="flex items-center cursor-pointer">
                <span className="text-lg font-medium group-hover:text-gray-400 transition-colors">Distribute</span>
                <ChevronDown className="h-4 w-4 ml-1 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            </div>
        </div>
    
        {/* RIGHT - Buttons */}
        <div className="flex space-x-3">
            <button className="px-4 py-2 text-sm border border-gray-600 rounded hover:bg-gray-700 transition-colors">
            Sign In
            </button>
            <button className="px-4 py-2 text-sm bg-blue-500 rounded hover:bg-blue-600 transition-colors">Download</button>
        </div>
        </nav>
    )
}