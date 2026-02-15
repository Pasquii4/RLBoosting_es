import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navigation() {
    const location = useLocation();
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Tracker", path: "/tracker" },
        { name: "Community", path: "/community" },
        ...(isAuthenticated ? [{ name: "Profile", path: "/profile" }] : [])
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-rocket-dark/90 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold tracking-tighter font-display italic text-white group">
                    RL<span className="text-rocket-blue group-hover:text-white transition-colors">COACH</span>.
                </Link>

                <div className="flex items-center gap-8">
                    <div className="flex gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 ${isActive(item.path)
                                    ? "text-rocket-blue shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                    : "text-white/60 hover:text-white hover:tracking-[0.15em]"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Auth Buttons */}
                    <div className="pl-6 border-l border-white/10">
                        {isAuthenticated ? (
                            <div className="flex items-center gap-4">
                                <img
                                    src={user?.picture}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full border border-rocket-blue/50"
                                />
                                <button
                                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                    className="text-xs font-bold tracking-widest uppercase text-white/40 hover:text-red-400 transition-colors"
                                >
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => loginWithRedirect()}
                                className="bg-rocket-blue/10 hover:bg-rocket-blue text-rocket-blue hover:text-white border border-rocket-blue/30 px-4 py-2 rounded text-xs font-bold tracking-widest uppercase transition-all duration-300"
                            >
                                Log In
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
