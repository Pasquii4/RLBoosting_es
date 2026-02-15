import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loading } from './components/common/Loading';
import Auth0ProviderWithHistory from './auth/AuthProvider';

const Home = lazy(() => import('./pages/Home'));
const Tracker = lazy(() => import('./pages/Tracker'));
const Community = lazy(() => import('./pages/Community'));
const Pricing = lazy(() => import('./pages/Pricing'));
const UserProfile = lazy(() => import('./components/UserProfile'));

function App() {
    return (
        <Router>
            <Auth0ProviderWithHistory>
                <div className="font-sans antialiased bg-rocket-dark text-white min-h-screen selection:bg-rocket-cyan/30 selection:text-white">
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/tracker" element={<Tracker />} />
                            <Route path="/community" element={<Community />} />
                            <Route path="/pricing" element={<Pricing />} />
                            <Route path="/profile" element={<UserProfile />} />
                        </Routes>
                    </Suspense>
                </div>
            </Auth0ProviderWithHistory>
        </Router>
    );
}

export default App;
