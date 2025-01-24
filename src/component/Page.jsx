import React from 'react';
import '../component/css.css'

const Page = () => {
    return (
        <div className="flex items-center justify-center bg-gradient-to-r px-2 py-4 bg_hd">
            <div className="bg-white rounded-lg shadow-lg px-2 py-3 w-80 text-center">
                <div className="text-md font-semibold text-[#2A1F47]">7470 1011 998</div>
                <div className="text-xl font-bold text-[#2A1F47] mt-1">34,320,210 VND</div>
                <div className="flex justify-around mt-2">
                    <button className="flex flex-col items-center text-[#2A1F47]">
                        <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                        </span>
                        <span className="text-sm">Chuyển tiền</span>
                    </button>
                    <button className="flex flex-col items-center text-[#2A1F47]">
                        <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </span>
                        <span className="text-sm">Tra cứu GD</span>
                    </button>
                    <button className="flex flex-col items-center text-[#2A1F47]">
                        <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                        </svg>
                        </span>
                        <span className="text-sm">My QR</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page