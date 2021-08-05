import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <main>
        <section className="absolute w-full h-full">
          <div className="absolute top-0 w-full h-full bg-gray-900" style={{ backgroundImage: "url(" + require("./../../images/logo.png").default + ")", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}>
          </div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Selamat Datang!
                      </h6>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Login Akun</small>
                    </div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                          Username
                        </label>
                        <input type="username" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Username" style={{ transition: "all .15s ease" }}/>
                      </div>

                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                          Password
                        </label>
                        <input type="password" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Password" style={{ transition: "all .15s ease" }}/>
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5" style={{ transition: "all .15s ease" }}/>
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Ingat saya
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <Link to="/Home" className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="button" style={{ transition: "all .15s ease" }}>
                          Login
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6">
                  <div className="w-1/2">
                    <Link to="/Home" onClick={e => e.preventDefault()} className="text-gray-300">
                      <small>Lupa Password?</small>
                    </Link>
                  </div>
                  <div className="w-1/2 text-right">
                    <Link to="/Home" onClick={e => e.preventDefault()} className="text-gray-300">
                      <small>Buat Akun Baru!</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}