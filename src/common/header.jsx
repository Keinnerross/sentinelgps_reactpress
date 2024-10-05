import Nav from "../layout/nav";
import Logo from "./logo/logo";

const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[80vw] py-[20px]  flex items-center justify-between">
                <Logo />
                <Nav flex={true} />
            </div>
        </div>
    )
}

export default Header;