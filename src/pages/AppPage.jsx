import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate, NavLink, Outlet, useLocation } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Button } from "../components/ui/Button";

const sections = [
    { key: "home", label: "Home", icon: "🏠" },
    { key: "challenges", label: "Challenges", icon: "🎯" },
    { key: "leaderboard", label: "Leaderboard", icon: "🏆" },
    { key: "profile", label: "Profile", icon: "👤" },
    { key: "settings", label: "Settings", icon: "⚙️" },
];

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
}

export default function AppPage() {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(async (u) => {
            if (u) {
                setUser(u);
                const userDoc = await getDoc(doc(db, "users", u.uid));
                setUsername(userDoc.exists() ? userDoc.data().username || "" : "");
            } else {
                navigate("/login");
            }
        });
        return unsubscribe;
    }, [navigate, location.key]);

    const handleLogout = async () => {
        await signOut(getAuth());
        navigate("/login");
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="spinner" />
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {getGreeting()}
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {username || user.email}
                            </p>
                        </div>
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2">
                        {sections.map((section) => (
                            <NavLink
                                key={section.key}
                                to={`/app/${section.key}`}
                                className={({ isActive }) =>
                                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                                        isActive 
                                            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" 
                                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`
                                }
                                onClick={() => setSidebarOpen(false)}
                            >
                                <span className="text-lg">{section.icon}</span>
                                <span>{section.label}</span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* Logout Button */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <Button
                            variant="outline"
                            onClick={handleLogout}
                            className="w-full"
                        >
                            Log Out
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Mobile Header */}
                <div className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
                    <div className="flex items-center justify-between">
                        <button
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                            TruFlo
                        </h1>
                        <div className="w-10" /> {/* Spacer */}
                    </div>
                </div>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}