import React from 'react'
import { Link } from 'react-router-dom'

const Giaodich = () => {
    return (
        <div>
            <header>
                <div className=" bg-red-400 p-4 text-white flex justify-between">
                    <div className="flex items-center">
                        <Link to='/' className="mr-2 text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 8.25 3 12m0 0 3.75 3.75M3 12h18" />
                            </svg>
                        </Link>
                        <span className="text-xl font-bold">7470 1011 998</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>

                </div>
            </header>

            <div className='p-2'>
                <div className="flex items-center mb-4">
                    <input type="text" placeholder="Tìm kiếm" className="border p-2 rounded w-full" />
                </div>

                <div className="flex mb-4">
                    <span className="p-2 rounded-lg px-2 mr-2 border border-red-500 bg-white text-red-500 flex items-center">
                        <i className="fas fa-calendar-alt mr-1"></i>
                        3 Tháng Gần Nhất
                    </span>
                    <span className="p-2 rounded-lg px-2 border border-gray-300 bg-white text-gray-700 flex items-center">
                        <i className="fas fa-tag mr-1"></i>
                        Danh Mục
                    </span>
                </div>

                <h2 className="text-gray-600 mb-2">99 giao dịch</h2>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-bold">25/01/2025 - Thứ Bảy</h3>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-green-600">+ 50,000,000 VND</p>
                            <p>TT LUONG THUONG QUANG DAI PHU</p>
                            <p className="text-gray-500">SD: 53,320,210 VND</p>
                            <button className="text-blue-600 underline">Nhận tiền đến</button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold">Tới: QUANG DAI PHU</h3>
                    <p className="text-red-600">- 12,000,000 VND</p>
                    <p>tpb transfer</p>
                    <p className="text-gray-500">SD: 320,210 VND</p>
                    <button className="text-blue-600 underline">Gần đây</button>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <h3 className="text-lg font-bold">25/12/2024 - Thứ Ba</h3>
                    <p className="text-green-600">+ 200,000 VND</p>
                    <p>NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN</p>
                    <p className="text-gray-500">SD: 200,001 VND</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <p className="text-green-600">+ 300,000 VND</p>
                    <p>NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN</p>
                    <p className="text-gray-500">SD: 600,001 VND</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold">Tới: QUANG DAI PHU</h3>
                    <p className="text-red-600">- 1,000,000 VND</p>
                    <p>tpb transfer</p>
                    <p className="text-gray-500">SD: 20,210 VND</p>
                    <button className="text-blue-600 underline">Gần đây</button>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <h3 className="text-lg font-bold">12/12/2024 - Thứ Năm</h3>
                    <p className="text-green-600">+ 1,500,000 VND</p>
                    <p>NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN</p>
                    <p className="text-gray-500">SD: 400,001 VND</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <p className="text-green-600">+ 800,000 VND</p>
                    <p>NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN</p>
                    <p className="text-gray-500">SD: 50,001 VND</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <h3 className="text-lg font-bold">25/12/2024 - Thứ Ba</h3>
                    <p className="text-green-600">+ 600,000 VND</p>
                    <p>NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN</p>
                    <p className="text-gray-500">SD: 200,001 VND</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <p className="text-green-600">+ 700,000 VND</p>
                    <p>NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN</p>
                    <p className="text-gray-500">SD: 600,001 VND</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold">Tới: QUANG DAI PHU</h3>
                    <p className="text-red-600">- 1,000,000 VND</p>
                    <p>tpb transfer</p>
                    <p className="text-gray-500">SD: 20,210 VND</p>
                    <button className="text-blue-600 underline">Gần đây</button>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <h3 className="text-lg font-bold">12/12/2024 - Thứ Năm</h3>
                    <p className="text-green-600">+ 1,500,000 VND</p>
                    <p>NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN</p>
                    <p className="text-gray-500">SD: 400,001 VND</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <p className="text-green-600">+ 500,000 VND</p>
                    <p>NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN</p>
                    <p className="text-gray-500">SD: 50,001 VND</p>
                </div>


                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <h3 className="text-lg font-bold">25/12/2024 - Thứ Ba</h3>
                    <p className="text-green-600">+ 900,000 VND</p>
                    <p>NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN</p>
                    <p className="text-gray-500">SD: 200,001 VND</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <p className="text-green-600">+ 800,000 VND</p>
                    <p>NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN</p>
                    <p className="text-gray-500">SD: 600,001 VND</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold">Tới: QUANG DAI PHU</h3>
                    <p className="text-red-600">- 1,000,000 VND</p>
                    <p>tpb transfer</p>
                    <p className="text-gray-500">SD: 20,210 VND</p>
                    <button className="text-blue-600 underline">Gần đây</button>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <h3 className="text-lg font-bold">12/12/2024 - Thứ Năm</h3>
                    <p className="text-green-600">+ 1,500,000 VND</p>
                    <p>NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN</p>
                    <p className="text-gray-500">SD: 400,001 VND</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <p className="text-green-600">+ 200,000 VND</p>
                    <p>NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN</p>
                    <p className="text-gray-500">SD: 50,001 VND</p>
                </div>



            </div>
        </div>
    )
}

export default Giaodich
