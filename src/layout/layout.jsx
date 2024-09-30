import Header from "../common/header"
import Footer from "./footer"
import { Fragment } from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    )
}

export default Layout;