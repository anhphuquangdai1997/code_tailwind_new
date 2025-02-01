import React from 'react';
import { Link } from 'react-router-dom';

const ChuyenTien = () => {
    return (
        <div className="bg-white h-screen ">
            <header>
                <div className=" bg-red-400 p-4 text-white flex justify-between">
                    <div className="flex items-center">
                        <Link to='/' className="mr-2 text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 8.25 3 12m0 0 3.75 3.75M3 12h18" />
                            </svg>
                        </Link>
                       
                    </div>
                    

                </div>
            </header>
            <div className='p-4'>
                <div className="flex justify-around mb-6">
                    <div className="px-1">
                        <div className="text-purple-500"><img src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-HDBank-Ori.png" alt="" width={35} /></div>
                        <div>Trong HDBank</div>
                    </div>
                    <div className="px-1">
                        <div className="text-purple-500"><img src="https://cdn-icons-png.flaticon.com/512/858/858170.png" alt="" width={35} /></div>
                        <div>Liên Ngân Hàng</div>
                    </div>
                    <div className="px-1">
                        <div className="text-purple-500"><img src="https://cdn-icons-png.flaticon.com/512/9885/9885864.png" alt="" width={35} /></div>
                        <div>Qua Thẻ ATM</div>
                    </div>
                    <div className="px-1">
                        <div className="text-purple-500"><img src="https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-check-list-icon-simple-style-png-image_1873711.jpg" alt="" width={35} /></div>
                        <div>CT Theo Danh Sách</div>
                    </div>
                </div>

                <h2 className="text-lg font-semibold mb-4">XEM DANH SÁCH</h2>

                <div className="space-y-4">
                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                        <span>Mẫu chuyển tiền đã lưu</span>
                        <span>➤</span>
                    </div>

                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                        <span>Lệnh chuyển tiền theo lịch</span>
                        <span>➤</span>
                    </div>

                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                        <span>Danh Bạ Chuyển Tiền</span>
                        <span>➤</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChuyenTien;