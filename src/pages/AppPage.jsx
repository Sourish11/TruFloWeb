import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate, NavLink, Outlet, useLocation } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Button } from "../components/ui/Button";
import OnboardingModal from "../components/ui/OnboardingModal";
import trufloLogo from "../assets/truflo-logo.png";

const sections = [
    { key: "dashboard", label: "Dashboard", icon: "🏠" },
    { key: "tasks", label: "Smart Tasks", icon: "✨" },
    { key: "calendar", label: "Calendar", icon: "📅" },
    { key: "focus", label: "Focus", icon: "🎯" },
    { key: "challenges", label: "Challenges", icon: "🏆" },
    { key: "leaderboard", label: "Leaderboard", icon: "📊" },
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
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);
    const [userStats, setUserStats] = useState({
        xp: 0,
        level: 1
    });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(async (u) => {
            if (u) {
                setUser(u);
                const userDoc = await getDoc(doc(db, "users", u.uid));
                setUsername(userDoc.exists() ? userDoc.data().username || "" : "");
                
                // Load profile picture
                const savedPfp = localStorage.getItem(`profile_picture_${u.uid}`);
                if (savedPfp) {
                    setProfilePicture(savedPfp);
                }
                
                // Check if user needs onboarding
                const hasCompletedOnboarding = localStorage.getItem(`onboarding_${u.uid}`);
                if (!hasCompletedOnboarding) {
                    setShowOnboarding(true);
                }
                
                // Load user stats
                const savedStats = localStorage.getItem(`user_stats_${u.uid}`);
                if (savedStats) {
                    setUserStats(JSON.parse(savedStats));
                }
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

    const handleOnboardingComplete = (data) => {
        // Save onboarding data
        localStorage.setItem(`onboarding_${user.uid}`, JSON.stringify(data));
        localStorage.setItem(`onboarding_completed_${user.uid}`, 'true');
        setShowOnboarding(false);
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="spinner" />
            </div>
        );
    }

    return (
        <div className="flex h-screen relative">
            {/* Background layer - same as main website */}
            <div className="fixed inset-0 z-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: 'url(/wp9019837.webp)',
                        filter: 'brightness(0.25) blur(3px)'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/85" />
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Redesigned Sidebar - Hidden by default, shows on toggle */}
            <div className={`
                fixed inset-y-0 left-0 z-50 w-80 glass-nav transform transition-transform duration-300 ease-in-out border-r border-white/10
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex flex-col h-full">
                    {/* Enhanced Header with Logo */}
                    <div className="flex items-center justify-between p-6 border-b border-white/10">
                        <div className="flex items-center space-x-3">
                            <img
                                src={trufloLogo}
                                alt="TruFlo Logo"
                                className="h-10 w-auto"
                            />
                            <div>
                                <h2 className="text-xl font-bold text-white font-heading">
                                    TruFlo
                                </h2>
                                <p className="text-sm text-white/70 font-body">
                                    {getGreeting()}, {username || user.email?.split('@')[0]}
                                </p>
                            </div>
                        </div>
                        <button
                            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* User Profile Section */}
                    <div className="p-6 border-b border-white/10">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                                {profilePicture ? (
                                    <img
                                        src={profilePicture}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
                                        {(username || user.email)[0].toUpperCase()}
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="text-white font-semibold font-heading">
                                    {username || user.email?.split('@')[0]}
                                </div>
                                <div className="text-white/60 text-sm font-body">
                                    Level {userStats.level} • {userStats.xp} XP
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                                    <div 
                                        className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${(userStats.xp % 100)}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Navigation */}
                    <nav className="flex-1 p-6 space-y-3">
                        <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4 font-ui">
                            Navigation
                        </div>
                        {sections.map((section) => (
                            <NavLink
                                key={section.key}
                                to={`/app/${section.key}`}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 font-ui group ${
                                        isActive 
                                            ? "bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-white font-semibold shadow-lg border border-white/20" 
                                            : "text-white/80 hover:text-white hover:bg-white/10 hover:translate-x-1"
                                    }`
                                }
                                onClick={() => setSidebarOpen(false)}
                            >
                                <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                                    {section.icon}
                                </span>
                                <span className="font-medium">{section.label}</span>
                                {section.key === 'tasks' && (
                                    <span className="ml-auto px-2 py-1 bg-purple-500/30 text-purple-300 text-xs rounded-full">
                                        AI
                                    </span>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Quick Stats */}
                    <div className="p-6 border-t border-white/10">
                        <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4 font-ui">
                            Today's Stats
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-white/5 rounded-lg">
                                <div className="text-lg font-bold text-green-400 font-ui">8</div>
                                <div className="text-xs text-white/70 font-body">Tasks</div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-lg">
                                <div className="text-lg font-bold text-blue-400 font-ui">2.5h</div>
                                <div className="text-xs text-white/70 font-body">Focus</div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Logout Section */}
                    <div className="p-6 border-t border-white/10">
                        <Button
                            variant="glass"
                            onClick={handleLogout}
                            className="w-full justify-center"
                        >
                            <span className="mr-2">🚪</span>
                            Log Out
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden relative z-10">
                {/* Redesigned Top Navigation Bar */}
                <div className="glass-nav border-b border-white/10">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-4">
                            {/* Hamburger Menu Button */}
                            <button
                                className="p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            
                            {/* Breadcrumb */}
                            <div className="flex items-center space-x-2 text-white/80">
                                <span className="text-sm font-medium font-ui">TruFlo</span>
                                <span className="text-white/40">/</span>
                                <span className="text-sm font-medium text-white capitalize font-ui">
                                    {location.pathname.split('/').pop() || 'dashboard'}
                                </span>
                            </div>
                        </div>

                        {/* Right Side - Compact Stats & Profile */}
                        <div className="flex items-center space-x-4">
                            {/* Quick XP Display */}
                            <div className="hidden md:flex items-center space-x-3 px-4 py-2 bg-white/10 rounded-xl border border-white/20">
                                <div className="text-right">
                                    <div className="text-white/80 text-xs font-ui">Level {userStats.level}</div>
                                    <div className="text-white text-sm font-semibold font-ui">{userStats.xp} XP</div>
                                </div>
                                <div className="w-16 bg-white/20 rounded-full h-1.5">
                                    <div 
                                        className="bg-gradient-to-r from-purple-400 to-blue-400 h-1.5 rounded-full transition-all duration-500"
                                        style={{ width: `${(userStats.xp % 100)}%` }}
                                    />
                                </div>
                            </div>
                            
                            {/* Compact User Avatar */}
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 cursor-pointer hover:scale-105 transition-transform duration-200">
                                {profilePicture ? (
                                    <img
                                        src={profilePicture}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                                        {(username || user.email)[0].toUpperCase()}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>

            {/* Onboarding Modal */}
            <OnboardingModal
                isOpen={showOnboarding}
                onClose={() => setShowOnboarding(false)}
                onComplete={handleOnboardingComplete}
            />
        </div>
    );
}