import { data } from 'autoprefixer'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Giaodich = () => {
    const [selectedTransaction, setSelectedTransaction] = useState(null)

    const transactions = [
        {
            id: 1,
            date: "30/12/2025 - Thứ Ba",
            code: "GD123456789",
            to: "QUANG DAI PHU",
            amount: "- 12,000,000 VND",
            type: "out",
            content: "tpb transfer",
            balance: "19,320,210 VND",
            tag: "Gần đây",
        },
        {
            id: 2,
            date: "29/12/2025 - Thứ hai",
            code: "GD987654321",
            amount: "+ 16,100,000 VND",
            type: "in",
            content: "NGAN HANG BANGKOK DAI CHUNG TNHH CHI Sinenery Ninh Thuan...",
            balance: "11,320,210 VND",
            tag: "Nhận tiền đến",
        },
        {
            id: 3,
            date: "24/12/2025 - Thứ Bảy",
            code: "GD456789123",
            amount: "+ 9,000,000 VND",
            type: "in",
            content: "Nguyen Phuong Nhan tra tien muon hom thu Bay",
            balance: "9,320,210 VND",
            tag: "Nhận tiền đến",
        },
        {
            id: 4,
            date: "01/12/2025 - Thứ Năm",
            code: "GD321654987",
            to: "QUANG DAI PHU",
            amount: "- 8,000,000 VND",
            type: "out",
            content: "tpb transfer",
            balance: "76,320,210 VND",
            tag: "Gần đây",
        },
        {
            id: 5,
            date: "28/11/2025 - Thứ Sáu",
            code: "GD159753486",
            amount: "+ 16,100,000 VND",
            type: "in",
            content: "NGAN HANG BANGKOK DAI CHUNG TNHH CHI Sinenery Ninh Thuan...",
            balance: "24,320,210 VND",
            tag: "Nhận tiền đến",
        },
        {
            id: 6,
            date: "13/11/2025 - Thứ Năm",
            code: "GD852456123",
            to: "QUANG DAI PHU",
            amount: "- 7,000,000 VND",
            type: "out",
            content: "tpb transfer",
            balance: "46,320,210 VND",
            tag: "Gần đây",
        },
        {
            id: 7,
            date: "30/10/2025 - Thứ Năm",
            code: "GD753159456",
            amount: "+ 16,100,000 VND",
            type: "in",
            content: "NGAN HANG BANGKOK DAI CHUNG TNHH CHI Sinenery Ninh Thuan...",
            balance: "12,320,210 VND",
            tag: "Nhận tiền đến",
        },
        {
            id: 8,
            date: "8/10/2025 - Thứ Tư",
            code: "GD456123789",
            to: "QUANG DAI PHU",
            amount: "- 15,000,000 VND",
            type: "out",
            content: "tpb transfer",
            balance: "26,320,210 VND",
            tag: "Gần đây",
        },
        {
            id: 9,
            date: "6/10/2025 - Thứ Hai",
            code: "GD789456123",
            to: "QUANG DAI PHU",
            amount: "- 1,000,000 VND",
            type: "out",
            content: "tpb transfer",
            balance: "27,320,210 VND",
            tag: "Gần đây",
        },
        {
            id: 10,
            date: "30/09/2025 - Thứ Ba",
            code: "GD321789654",
            amount: "+ 16,100,000 VND",
            type: "in",
            content: "NGAN HANG BANGKOK DAI CHUNG TNHH CHI Sinenery Ninh Thuan",
            balance: "16,320,210 VND",
            tag: "Nhận tiền đến",
        },
        {
            id: 11,
            to: "QUANG HUU HIEN",
            date: "28/09/2025 - Thứ Chủ Nhật",
            code: "GD654321987",
            amount: "- 12,000,000 VND",
            type: "out",
            content: "tpb transfer",
            balance: "46,320,210 VND",
            tag: "Gần đây",
        },
        {
            id: 12,
            date: "26/08/2025 - Thứ Năm",
            code: "GD987123654",
            amount: "+ 16,100,000 VND",
            type: "in",
            content: "NGAN HANG BANGKOK DAI CHUNG TNHH CHI Sinenery Ninh Thuan",
            balance: "36,320,210 VND",
            tag: "Nhận tiền đến",
        },
        {
            id: 13,
            date: "25/08/2025 - Thứ Bảy",
            code: "GD123789456",
            amount: "+ 15,000,000 VND",
            type: "in",
            content: "TT LUONG THUONG QUANG DAI PHU",
            balance: "12,320,210 VND",
            tag: "Nhận tiền đến",
        },
        {
            id: 14,
            date: "25/08/2025 - Thứ Ba",
            code: "GD456987123",
            amount: "+ 200,000 VND",
            type: "in",
            content: "NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN",
            balance: "200,001 VND",
        },
        {
            id: 15,
            amount: "+ 300,000 VND",
            date: "15/07/2025 - Thứ Tư",
            type: "in",
            content: "NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN",
            balance: "600,001 VND",
        },
        {
            id: 16,
            date: "12/07/2025 - Thứ Năm",
            amount: "+ 1,500,000 VND",
            type: "in",
            content: "NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN",
            balance: "400,001 VND",
        },
        {
            id: 17,
            amount: "+ 800,000 VND",
            date: "28/06/2025 - Thứ Bảy",
            type: "in",
            content: "NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN",
            balance: "50,001 VND",
        },
        {
            id: 18,
            date: "12/06/2025 - Thứ Ba",
            amount: "+ 600,000 VND",
            type: "in",
            content: "NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN",
            balance: "200,001 VND",
        },
        {
            id: 19,
            amount: "+ 700,000 VND",
            date: "05/06/2025 - Thứ Năm",
            type: "in",
            content: "NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN",
            balance: "600,001 VND",
        },
        {
            id: 20,
            to: "QUANG HUU HIEN",
            amount: "- 1,000,000 VND",
            type: "out",
            content: "tpb transfer",
            balance: "20,210 VND",
            tag: "Gần đây",
        },
        {
            id: 21,
            date: "03/05/2025 - Thứ Năm",
            amount: "+ 1,500,000 VND",
            type: "in",
            content: "NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN",
            balance: "400,001 VND",
        },
        {
            id: 22,
            amount: "+ 500,000 VND",
            type: "in",
            content: "NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN",
            balance: "50,001 VND",
        },
        {
            id: 23,
            date: "25/05/2025 - Thứ Ba",
            amount: "+ 900,000 VND",
            type: "in",
            content: "NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN",
            balance: "200,001 VND",
        },
        {
            id: 24,
            amount: "+ 800,000 VND",
            type: "in",
            content: "NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN",
            balance: "600,001 VND",
        },
        {
            id: 25,
            to: "QUANG HUU HIEN",
            amount: "- 1,000,000 VND",
            type: "out",
            content: "tpb transfer",
            balance: "20,210 VND",
            tag: "Gần đây",
        },
        {
            id: 26,
            date: "12/07/2025 - Thứ Năm",
            amount: "+ 1,500,000 VND",
            type: "in",
            content: "NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN",
            balance: "400,001 VND",
        },
        {
            id: 27,
            amount: "+ 200,000 VND",
            type: "in",
            content: "NOP TIEN BANG THE NOP TIEN TAI LIVEBANK DE CHUYEN KHOAN",
            balance: "50,001 VND",
        },
    ]


    const handleOpenModal = (transaction) => {
        setSelectedTransaction(transaction)
    }

    const handleCloseModal = () => {
        setSelectedTransaction(null)
    }

    return (
        <div>
            {/* HEADER */}
            <header className="fixed top-0 left-0 right-0 z-50">
                <div className="bg-red-400 p-4 text-white flex justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="mr-2 text-xl">
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

            {/* CONTENT */}
            <div className="p-3 mt-[60px] bg-gray-50 h-screen overflow-y-auto">
                <div className="flex items-center mb-4">
                    <input type="text" placeholder="Tìm kiếm" className="border p-2 rounded w-full" />
                </div>

                <h2 className="text-gray-600 mb-2">{transactions.length} giao dịch</h2>

                {/* LIST TRANSACTIONS */}
                {transactions.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-100 p-4 rounded-lg mb-4 cursor-pointer hover:bg-gray-200 transition"
                        onClick={() => handleOpenModal(item)}
                    >
                        <h3 className="text-lg font-bold">{item.date}</h3>

                        {item.to && <h3 className="text-md">Tới: {item.to}</h3>}

                        <p className={item.type === 'in' ? 'text-green-600' : 'text-red-600'}>
                            {item.amount}
                        </p>

                        <p>{item.content}</p>
                        <p className="text-gray-500">SD: {item.balance}</p>
                        <button className="text-blue-600 underline">Xem chi tiết</button>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {selectedTransaction && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-end justify-center z-50">
                    <div className="bg-white rounded-lg w-[98%] max-w-md p-5 relative">

                        <div className='py-4'>
                            {/* Nút đóng dạng dấu X */}
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-3 px-2 py-1 rounded-full bg-gray-200 border-none right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
                            >
                                ✕
                            </button>

                            <h2 className="text-[20px] py-4 text-gray-800 font-bold mb-4">Chi Tiết Giao Dịch</h2>
                        </div>

                        <div className="space-y-8 text-md">
                            <div className="flex items-center">
                                <strong className="w-[40%]">Ngày giao dịch:</strong>
                                <span className="w-[55%] text-right">{selectedTransaction.date}</span>
                            </div>

                            <div className="flex items-center">
                                <strong className="w-[40%]">Mã giao dịch:</strong>
                                <span className="w-[55%] text-right">{selectedTransaction.code}</span>
                            </div>

                            {selectedTransaction.to && (
                                <div className="flex items-center">
                                    <strong className="w-[40%]">Người nhận:</strong>
                                    <span className="w-[55%] text-right">{selectedTransaction.to}</span>
                                </div>
                            )}

                            <div className="flex items-center">
                                <strong className="w-[40%]">Số tiền:</strong>
                                <span
                                    className={`w-[55%] text-right font-semibold ${selectedTransaction.amount?.toString().includes('+')
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                        }`}
                                >
                                    {selectedTransaction.amount}
                                </span>
                            </div>

                            <div className="flex items-center">
                                <strong className="w-[40%]">Nội dung giao dịch:</strong>
                                <span className="w-[55%] text-right break-words">
                                    {selectedTransaction.content}
                                </span>
                            </div>

                            <div className="flex items-center">
                                <strong className="w-[40%]">Số dư:</strong>
                                <span className="w-[55%] font-bold text-right">
                                    {selectedTransaction.balance}
                                </span>
                            </div>
                        </div>



                    </div>
                </div>
            )}

        </div>
    )
}

export default Giaodich
