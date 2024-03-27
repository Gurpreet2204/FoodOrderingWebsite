export const Header = () => {
    return (
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto items-center justify-content-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <img src={"/"} alt="logo" />
                </div>
                <div className="nav-menu-wrapper">
                    <div>Home</div>
                    <div>About</div>
                </div>

                <div className="flex items-center justify-center space-x-4">

                    <div>cart</div>
                    <div>Log in</div>
                    <div>Sign up</div>
                </div>
            </div>
        </nav>
    )

}