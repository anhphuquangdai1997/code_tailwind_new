import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router-dom';

const MyQR = () => {
    // In a real application, this would come from your user's account data
    const accountInfo = {
        accountNumber: '7470 1011 998',
        accountName: 'QUANG DAI PHU',
        bankName: 'HDBank'
    };

    // Create a string that combines all account information
    const qrValue = JSON.stringify(accountInfo);

    return (
        <div className="flex items-center justify-center bg-gradient-to-r px-2 py-4 bg_hd min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                <h2 className="text-xl font-bold text-[#2A1F47] mb-4">My QR Code</h2>

                <div className="flex justify-center mb-4">
                    <QRCodeSVG
                        value={qrValue}
                        size={200}
                        level="H"
                        includeMargin={true}
                    />
                </div>

                <div className="text-left mb-4">
                    <p className="text-[#2A1F47]"><span className="font-semibold">Account Number:</span> {accountInfo.accountNumber}</p>
                    <p className="text-[#2A1F47]"><span className="font-semibold">Account Name:</span> {accountInfo.accountName}</p>
                    <p className="text-[#2A1F47]"><span className="font-semibold">Bank:</span> {accountInfo.bankName}</p>
                </div>

                <Link
                    to="/"
                    className="inline-block bg-[#2A1F47] text-white px-4 py-2 rounded-lg hover:bg-[#3a2f57] transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default MyQR; 
