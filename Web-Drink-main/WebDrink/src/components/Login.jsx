import React, { useState } from "react";

const Login = ({isPopupActive}) => {
  const [isActive, setIsActive] = useState(false); 

  return (
    <div className={`min-h-screen flex justify-center items-center fixed right-0 left-0 top-0 ${isPopupActive?`bg-black opacity-70`:``} transition-all ease-in-out duration-700 `} >
      
      <div
        className={` relative w-96 h-[560px] bg-transparent border-2 border-white rounded-2xl backdrop-blur-md shadow-lg flex justify-center items-center overflow-hidden transform transition-all duration-500 ease-in-out ${isPopupActive ? "scale-100" : "scale-0"}`}
      >
        <span
          className="absolute top-0 right-0 w-12 h-12 bg-[#162938] text-2xl text-white flex justify-center items-center rounded-bl-2xl cursor-pointer z-10"
          onClick={() => !isPopupActive}
        >
          ✖
        </span>

        {/* Login Form */}
        <div className={` w-full p-10 ${isActive ? "transform translate-x-[-400px]" : "transform translate-x-0"} transition-all duration-500 ease-in-out`}>
          <h2 className="text-3xl text-center text-white">Đăng nhập</h2>
          <form action="#">
            <div className="relative w-full h-12 border-b-2 border-[#162938] my-8">
              <input
                type="email"
                required
                className="w-full h-full bg-transparent border-none outline-none text-white font-semibold pl-8"
              />
              <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white font-medium transition-all duration-500">Email</label>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xl">
                <ion-icon name="mail"></ion-icon>
              </span>
            </div>
            <div className="relative w-full h-12 border-b-2 border-[#162938] my-8">
              <input
                type="password"
                required
                className="w-full h-full bg-transparent border-none outline-none text-white font-semibold pl-8"
              />
              <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white font-medium transition-all duration-500">Mật khẩu</label>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xl">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
            </div>
            <div className=" text-white flex justify-between mb-4">
              <label>
                <input type="checkbox" className="mr-2 accent-[#162938]" />
                Ghi nhớ tôi
              </label>
              <a href="#" className="hover:underline">Quên Mật khẩu?</a>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-[#162938] rounded-lg text-white font-medium text-lg"
            >
              Đăng nhập
            </button>
            <div className="login-register text-white text-center mt-5">
              <p>
                Bạn chưa có tài khoản?{" "}
                <a href="#" className="text-lg font-semibold hover:underline" onClick={() => setIsActive(true)}>
                  Đăng ký
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div className={`form-box register absolute w-full p-10 ${isActive ? "transform translate-x-0" : "transform translate-x-[400px]"} transition-all duration-500 ease-in-out`}>
          <h2 className="text-3xl text-center text-white">Đăng ký</h2>
          <form action="#">
            <div className="input-box relative w-full h-12 border-b-2 border-[#162938] my-8">
              <input
                type="text"
                required
                className="w-full h-full bg-transparent border-none outline-none text-white font-semibold pl-8"
              />
              <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white font-medium transition-all duration-500">Tên người dùng</label>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xl">
                <ion-icon name="person"></ion-icon>
              </span>
            </div>
            <div className="input-box relative w-full h-12 border-b-2 border-[#162938] my-8">
              <input
                type="email"
                required
                className="w-full h-full bg-transparent border-none outline-none text-white font-semibold pl-8"
              />
              <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white font-medium transition-all duration-500">Email</label>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xl">
                <ion-icon name="mail"></ion-icon>
              </span>
            </div>
            <div className="input-box relative w-full h-12 border-b-2 border-[#162938] my-8">
              <input
                type="password"
                required
                className="w-full h-full bg-transparent border-none outline-none text-white font-semibold pl-8"
              />
              <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white font-medium transition-all duration-500">Mật khẩu</label>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xl">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
            </div>
            <div className="remember-forgot text-white mb-6">
              <label>
                <input type="checkbox" className="mr-2 accent-[#162938]" />
                Tôi đồng ý với các điều khoản & điều kiện
              </label>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-[#162938] rounded-lg text-white font-medium text-lg"
            >
              Đăng ký
            </button>
            <div className="login-register text-white text-center mt-5">
              <p>
                Bạn đã có tài khoản?{" "}
                <a href="#" className="text-lg font-semibold hover:underline" onClick={() => setIsActive(false)}>
                  Đăng nhập
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
