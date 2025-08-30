import ssApp1 from '../img/ss-app1.png'
import ssApp2 from '../img/ss-app2.png'
const Body = () => {
    return (
        <>
        <div className="w-full h-auto relative font-sans flex flex-col">
           <div className="">
            
             <HeaderText/>
            
            </div>
            <div className=" mt-50 border-t-2 borderbt-white">
            <Portofolio/>
            </div>
        </div>
        </>
    )
}

    export default Body


export const HeaderText = () => {
    return (
        <>
        {/* mobile */}
            <div className="sm:block md:hidden w-110 mt-10 h-60 font-medium text-10 ">
                <h1 className="text-[14px] text-left ml-3">Hi, I'am Reza</h1>
                <p className="ml-4 text-[13px] text-justify">I'm Reza, a fullstack developer who builds web
                     applications from user interface design to backend logic.
                      With experience in Express.js, MySQL, and React,
                     I focus on creating scalable and secure solutions.</p>
            </div>
        {/* desktop */}
            <div  className=" sm:hidden md:block flex justify-center w-full h-80 mt-10 font-medium text-10 ">
                <h1 >Hi, I'am Reza</h1>
                <p className="ml-4 text-left">I'm Reza, a fullstack developer who builds web
                     applications from user interface design to backend logic.
                      With experience in Express.js, MySQL, and React,
                     I focus on creating scalable and secure solutions.</p>
            </div>

        </>
    )
}


export const Portofolio = () => {
    return (
        <>
        
        <div className=" right-10 mt-10">
            <h1 className="text-center font-semibold">Portofolio</h1>
                {/* CONTENT */}
                <div className="w-full h-auto ">
                    {/* content 1 */}
                    <div className="flex justify-center mt-2 mb-15 w-full">
                        {/* picture */}
                        <div className="bg-orange-500 p-10 w-[40vw] h-[40vh] flex justify-center items-center">
                            <img className='w-60 pb-9' src={ssApp1} alt="App TodoList" />
                        
                        </div>
                        {/* text and logo */}
                        <div className="bg-orange-400 text-left w-[80vw] h-[40vh]">
                                <p className='p-5 font-semibold'>This app todo list with feature: <br />
                                    1.Display your personal information like username and jabatan/ jobdesk <br />
                                    2. Display realtime timezone at right side <br />
                                    3. Set your task inside it, and you can set that priority of your task off course
                                </p>
                        {/* button */}
                        <button className='ml-20 bg-orange-600 w-20 h-10 rounded'><a className='text-white' href="https://github.com/RezaN97/Simple-TodoListAPP">Github</a></button>
                        </div>
                    </div>
                    {/* content 2 */}
                        <div className=" flex justify-center mt-4 w-full h-auto">
                            {/* picture */}
                            <div className="bg-gray-800 p-1 w-[42vw] h-[58vh] flex justify-center items-center">
                                <img className='w-auto h-60  ' src={ssApp2} alt="App TodoList" />
                            
                            </div>
                            {/* text and logo */}
                            <div className=" bg-gray-700 text-left w-[80vw] h-[58vh]">
                                    <p className='pl-5 font-semibold'>
                                    🎬 Welcome to Chill Movie
                                    Your personal gateway to the world of entertainment—where movies meet simplicity and control.
                                    <br />
                                    1 Login System
                                    Secure access with personalized login. Whether you're a casual viewer or an admin, your experience starts with a smooth sign-in.
                                    <br />
                                    2. Daftar Film
                                    Explore a curated list of films from all genres. From timeless classics to trending blockbusters—everything is just a click away.

                                    <br />
                                    3. Series Film
                                    Binge-worthy series at your fingertips. Track episodes, discover new shows, and never miss a cliffhanger again.

                                    <br />
                                    4. Film Saya
                                    Your personal watchlist. Save favorites, track what you've watched, and build your own movie universe.

                                    <br />
                                    5. Admin Panel
                                    Manage content, users, and updates with ease. The admin dashboard gives full control over the platform’s backend—perfect for scaling and customization.
                                    </p>
                            {/* button */}
                            <div className="flex mt-3">
                                <button className='ml-10 bg-red-600 w-20 h-10 rounded'><a className='font-bold' href="https://github.com/RezaN97/Chill-Movie/tree/study">Github</a></button>
                                <button className='ml-10 bg-red-600 w-20 h-10 rounded'><a className='font-bold' href="https://chill-movie-six.vercel.app/">Visit</a></button>

                            </div>
                        </div>
                    </div>
              </div>


        </div>
        


        
        </>
    )
}