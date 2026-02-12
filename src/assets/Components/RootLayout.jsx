
import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function RootLayout() {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    },[pathname])

    return (
        <>
        <Navbar />
        <Outlet /> {/*indica i il resto della pagina che viene caricata*/}
        </>
    )
}
export default RootLayout