import { Link } from "react-router-dom";
import { House, Search, Store, TvMinimalPlay, Users, Gamepad, Grid, Grip, Bell, UserRound } from "lucide-react";




const Navbar = () => {


  return (
    <header
      className="border-y border-gray-700 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80"
    >
      <div className="container  mx-auto h-[56px]">
        <div className="flex items-center  justify-between h-full">
          <div className="flex items-center box-border p-4 w-[360px] gap-3">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <svg viewBox="0 0 36 36" width="40" height="40">
                <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z" fill="blue"></path>
                <path d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z" fill="white"></path>
              </svg>
            </Link>
            <label className="input bg-base-100 rounded-3xl w-[240px] border-none  ">
              <Search className=" size-5" />
              <input type="search" className=" font-[Segoe UI Historic] text-[15px] "  required placeholder="Tìm kiếm trên FaceBook"/>
            </label>
          </div>


          <div className="flex items-center gap-[8px]">
            <div className=" box-border p-1 w-[111px] h-[56px] rounded-xl">
                <div className="flex justify-center items-center w-full h-full rounded-lg hover:bg-gray-600">
                    <Link to="/">
                      <House size={25} />
                    </Link>
                </div>
            </div>
            <div className=" box-border p-1 w-[111px] h-[56px] rounded-xl">
                <div className="flex justify-center items-center w-full h-full rounded-lg hover:bg-gray-600">
                    <Link to="/">
                      <TvMinimalPlay size={25} />
                    </Link>
                </div>
            </div>
            <div className=" box-border p-1 w-[111px] h-[56px] rounded-xl">
                <div className="flex justify-center items-center w-full h-full rounded-lg hover:bg-gray-600">
                    <Link to="/">
                      <Store size={25} />
                    </Link>
                </div>
            </div>
            <div className=" box-border p-1 w-[111px] h-[56px] rounded-xl">
                <div className="flex justify-center items-center w-full h-full rounded-lg hover:bg-gray-600">
                    <Link to="/">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" >
                      <path d="M12 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                      <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5zM2.5 12c0-.682.072-1.348.209-1.99a2 2 0 0 1 0 3.98A9.539 9.539 0 0 1 2.5 12zm4 0a4.001 4.001 0 0 0-3.16-3.912A9.502 9.502 0 0 1 12 2.5a9.502 9.502 0 0 1 8.66 5.588 4.001 4.001 0 0 0 0 7.824 9.514 9.514 0 0 1-1.755 2.613A5.002 5.002 0 0 0 14 14.5h-4a5.002 5.002 0 0 0-4.905 4.025 9.515 9.515 0 0 1-1.755-2.613A4.001 4.001 0 0 0 6.5 12zm13 0a2 2 0 0 1 1.791-1.99 9.538 9.538 0 0 1 0 3.98A2 2 0 0 1 19.5 12zm-2.51 8.086A9.455 9.455 0 0 1 12 21.5c-1.83 0-3.54-.517-4.99-1.414a1.004 1.004 0 0 1-.01-.148V19.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v.438a1 1 0 0 1-.01.148z"></path>
                    </svg>
                    </Link>
                </div>
            </div>
            <div className=" box-border p-1 w-[111px] h-[56px] rounded-xl">
                <div className="flex justify-center items-center w-full h-full rounded-lg hover:bg-gray-600">
                    <Link to="/">
                      <Gamepad size={25} />
                    </Link>
                </div>
            </div>
          </div>
          <div className="flex justify-end items-center  box-border p-4 w-[360px] gap-[8px]">
              <div className="flex items-center justify-center  bg-gray-700 hover:bg-gray-600 size-[40px] rounded-full">
                  <Grip strokeWidth={4} />
              </div>
              <div className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 size-[40px] rounded-full">
                  <Bell strokeWidth={3} />
              </div>
              <div className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 size-[40px] rounded-full">
                  <UserRound strokeWidth={3} />
              </div>
          </div>

        </div>
      </div>
    </header>
  );
};
export default Navbar;
