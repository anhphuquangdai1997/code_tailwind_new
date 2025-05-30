import React from 'react'
import { Link } from 'react-router-dom'

const Giaodich = () => {
    return (
        <div>
            <header className='fixed top-0 left-0 right-0 z-50'>
                <div className=" bg-red-400 p-4  text-white flex justify-between">
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

            <div className='p-3 mt-[60px] bg-gray-50 h-screen overflow-y-auto'>
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
                    <h3 className="text-lg font-bold">27/05/2025 - Thứ Ba</h3>
                    <h3 className="text-md">Tới: QUANG DAI PHU</h3>
                    <p className="text-red-600">- 12,000,000 VND</p>
                    <p>tpb transfer</p>
                    <p className="text-gray-500">SD: 100,320,210 VND</p>
                    <button className="text-blue-600 underline">Gần đây</button>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-bold">26/05/2025 - Thứ hai</h3>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-green-600">+ 27,800,000 VND</p>
                            <p>TT LUONG THUONG QUANG DAI PHU</p>
                            <p className="text-gray-500">SD: 112,320,210 VND</p>
                            <button className="text-blue-600 underline">Nhận tiền đến</button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-bold">24/05/2025 - Thứ Bảy</h3>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-green-600">+ 9,000,000 VND</p>
                            <p>Nguyen Phuong Nhan tra tien muon hom thu Bay </p>
                            <p className="text-gray-500">SD: 89,320,210 VND</p>
                            <button className="text-blue-600 underline">Nhận tiền đến</button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-bold">01/05/2025 - Thứ Năm</h3>
                    <h3 className="text-md">Tới: QUANG DAI PHU</h3>
                    <p className="text-red-600">- 8,000,000 VND</p>
                    <p>tpb transfer</p>
                    <p className="text-gray-500">SD: 76,320,210 VND</p>
                    <button className="text-blue-600 underline">Gần đây</button>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-bold">26/04/2025 - Thứ Bảy</h3>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-green-600">+ 27,800,000 VND</p>
                            <p>TT LUONG THUONG QUANG DAI PHU</p>
                            <p className="text-gray-500">SD: 84,320,210 VND</p>
                            <button className="text-blue-600 underline">Nhận tiền đến</button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-bold">13/04/2025 - Thứ Năm</h3>
                    <h3 className="text-md">Tới: QUANG DAI PHU</h3>
                    <p className="text-red-600">- 7,000,000 VND</p>
                    <p>tpb transfer</p>
                    <p className="text-gray-500">SD: 46,320,210 VND</p>
                    <button className="text-blue-600 underline">Gần đây</button>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-bold">26/03/2025 - Thứ Tư</h3>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-green-600">+ 27,800,000 VND</p>
                            <p>TT LUONG THUONG QUANG DAI PHU</p>
                            <p className="text-gray-500">SD: 52,320,210 VND</p>
                            <button className="text-blue-600 underline">Nhận tiền đến</button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-bold">6/03/2025 - Thứ Tư</h3>
                    <h3 className="text-md">Tới: QUANG DAI PHU</h3>
                    <p className="text-red-600">- 15,000,000 VND</p>
                    <p>tpb transfer</p>
                    <p className="text-gray-500">SD: 37,320,210 VND</p>
                    <button className="text-blue-600 underline">Gần đây</button>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-bold">26/02/2025 - Thứ Hai</h3>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-green-600">+ 27,800,000 VND</p>
                            <p>TT LUONG THUONG QUANG DAI PHU</p>
                            <p className="text-gray-500">SD: 36,320,210 VND</p>
                            <button className="text-blue-600 underline">Nhận tiền đến</button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-bold">25/01/2025 - Thứ Bảy</h3>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-green-600">+ 50,000,000 VND</p>
                            <p>TT LUONG THUONG QUANG DAI PHU</p>
                            <p className="text-gray-500">SD: 96,320,210 VND</p>
                            <button className="text-blue-600 underline">Nhận tiền đến</button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold">Tới: QUANG DAI PHU</h3>
                    <p className="text-red-600">- 12,000,000 VND</p>
                    <p>tpb transfer</p>
                    <p className="text-gray-500">SD: 46,320,210 VND</p>
                    <button className="text-blue-600 underline">Gần đây</button>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <h3 className="text-lg font-bold">26/11/2024 - Thứ Sáu</h3>
                    <p className="text-green-600">+ 21,500,001 VND</p>
                    <p>THANH TOAN LUONG THANG 11 QUANG DAI PHU</p>
                    <p className="text-gray-500">SD: 21,900,001 VND</p>
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
                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <h3 className="text-lg font-bold">26/10/2024 - Thứ Năm</h3>
                    <p className="text-green-600">+ 21,500,001 VND</p>
                    <p>THANH TOAN LUONG THANG 10 QUANG DAI PHU</p>
                    <p className="text-gray-500">SD: 23,900,001 VND</p>
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
                    <h3 className="text-lg font-bold">12/12/2024 - Thứ Ba</h3>
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
                    <h3 className="text-lg font-bold">03/12/2024 - Thứ Năm</h3>
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
                    <h3 className="text-lg font-bold">25/09/2024 - Thứ Ba</h3>
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
                    <h3 className="text-lg font-bold">12/07/2024 - Thứ Năm</h3>
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
