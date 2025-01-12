import Dock from "../components/ui/Dock";
import AuthHOC from "../hooks/AuthHOC";

function Layout({children}: {children: React.ReactNode}) {
    return(
        <AuthHOC>
            <div className="absolute top-4 left-0 right-0">
                <Dock/>
            </div>
            {children}
        </AuthHOC>
    )
}

export default Layout;