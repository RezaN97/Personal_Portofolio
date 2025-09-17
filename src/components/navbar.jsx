import React, { useState} from 'react'
const Navbar = () => {
    return (
        <>
        <BgNavbar/>
        </>
    )
}

    export default Navbar


export const BgNavbar = () => {
   const [showModal, setShowModal] = useState(false);
 
    return (
        <>
        {/* mobile */}
        <div className="sm:hidden relative w-full h-auto mx-10">
            <div className=" w-50 h-20 px-2 gap-2 rounded-3xl flex justify-evenly items-center bg-blue-950 text-white"> 
                <nav>
                    <ul className="flex gap-10">
                        <li className="hover:font-bold text-[20px] cursor-pointer">CV</li>
                        <li className="hover:font-bold text-[20px] cursor-pointer">Contact</li>
                    </ul>
                </nav>
            </div>
        </div>

        {/* desktop */}
        <div className="max-sm:hidden relative w-full h-auto">
            <div className="ml-210 w-50 h-20 rounded-3xl flex justify-center items-center bg-red-700 text-white"> 
                <nav>
                    <ul className=" flex gap-10">
                        <li className="hover:font-bold cursor-pointer">CV</li>
                        <li className="hover:font-bold cursor-pointer" onClick={() => setShowModal(true)}>Contact</li>
                    </ul>
         {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-2">Contact Person</h2>
            <p className="mb-4">📞 WhatsApp: +62 </p>
            <p className="mb-4">📧 Email: rezanurit16@gmail.com</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setShowModal(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
                </nav>
            </div>
        </div>

        


        </>
    )
}