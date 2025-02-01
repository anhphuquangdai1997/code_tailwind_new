import React from 'react';
import { Link } from 'react-router-dom';

const ChuyenTien = () => {
    return (
        <div className="bg-white h-screen p-4">  
      <header className="flex justify-around mb-6">  
        <div className="">  
          <div className="text-purple-500"><img src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-HDBank-Ori.png" alt="" width={35}/></div>  
          <div>Trong HDBank</div>  
        </div>  
        <div className="">  
          <div className="text-purple-500"><img src="https://cdn-icons-png.flaticon.com/512/858/858170.png" alt="" width={35}/></div>  
          <div>Liên Ngân Hàng</div>  
        </div>  
        <div className="">  
          <div className="text-purple-500"><img src="https://cdn-icons-png.flaticon.com/512/9885/9885864.png" alt="" width={35}/></div>  
          <div>Qua Thẻ ATM</div>  
        </div>  
        <div className="text-center">  
          <div className="text-purple-500"><img src="https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-check-list-icon-simple-style-png-image_1873711.jpg" alt="" width={35}/></div>  
          <div>CT Theo Danh Sách</div>  
        </div>  
      </header>  

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
    );
};

export default ChuyenTien;