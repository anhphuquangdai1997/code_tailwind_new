import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChuyenTien = () => {
    const [formData, setFormData] = useState({
        soTaiKhoan: '',
        soTien: '',
        noiDung: '',
        nganHang: 'HDBank'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic chuyển tiền ở đây
        console.log('Form data:', formData);
    };

    return (
        <div className="bg-white h-screen">
            <header>
                <div className="bg-red-400 p-4 text-white flex justify-between">
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
                <div className="flex justify-between mb-6">
                    <div className="px-2 py-1 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <div className="flex flex-col items-center">
                            <div className="mb-1">
                                <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-HDBank-Ori.png" alt="HDBank" className="w-8 h-8" />
                            </div>
                            <div className="text-[12px] text-center font-medium text-gray-700">Trong HDBank</div>
                        </div>
                    </div>

                    <div className="px-2 py-1 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <div className="flex flex-col items-center">
                            <div className="mb-1">
                                <img src="https://cdn-icons-png.flaticon.com/512/858/858170.png" alt="Liên ngân hàng" className="w-8 h-8" />
                            </div>
                            <div className="text-[12px] text-center font-medium text-gray-700">Liên Ngân Hàng</div>
                        </div>
                    </div>

                    <div className="px-2 py-1 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <div className="flex flex-col items-center">
                            <div className="mb-1">
                                <img src="https://cdn-icons-png.flaticon.com/512/9885/9885864.png" alt="ATM" className="w-8 h-8" />
                            </div>
                            <div className="text-[12px] text-center font-medium text-gray-700">Qua Thẻ ATM</div>
                        </div>
                    </div>

                    <div className="px-2 py-1 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <div className="flex flex-col items-center">
                            <div className="mb-1">
                                <img src="https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-check-list-icon-simple-style-png-image_1873711.jpg" alt="Danh sách" className="w-8 h-8" />
                            </div>
                            <div className="text-[12px] text-center font-medium text-gray-700">CT Theo Danh Sách</div>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Thông tin chuyển tiền</h2>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Ngân hàng
                            </label>
                            <select
                                name="nganHang"
                                value={formData.nganHang}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                <option value="ACB">ACB</option>
                                <option value="MB Bank">MB Bank</option>
                                <option value="Sacombank">Sacombank</option>
                                <option value="BIDV">BIDV</option>
                                <option value="VPBank">VPBank</option>
                                <option value="TPBank">TPBank</option>
                                <option value="VIB">VIB</option>
                                <option value="SHB">SHB</option>
                                <option value="Eximbank">Eximbank</option>
                                <option value="Agribank">Agribank</option>
                                <option value="SeABank">SeABank</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Số tài khoản
                            </label>
                            <input
                                type="text"
                                name="soTaiKhoan"
                                value={formData.soTaiKhoan}
                                onChange={handleChange}
                                placeholder="Nhập số tài khoản"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Số tiền
                            </label>
                            <input
                                type="number"
                                name="soTien"
                                value={formData.soTien}
                                onChange={handleChange}
                                placeholder="Nhập số tiền"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Nội dung chuyển tiền
                            </label>
                            <textarea
                                name="noiDung"
                                value={formData.noiDung}
                                onChange={handleChange}
                                placeholder="Nhập nội dung chuyển tiền"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                rows="3"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-400 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200"
                        >
                            Chuyển tiền
                        </button>
                    </div>
                </form>

                <h2 className="text-lg font-semibold mb-4 mt-6">XEM DANH SÁCH</h2>

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