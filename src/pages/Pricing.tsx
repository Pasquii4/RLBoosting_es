import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Packages } from '../components/home/Packages';

export default function Pricing() {
    return (
        <div className="min-h-screen bg-rocket-dark text-white selection:bg-rocket-cyan/30">
            <Navbar />
            <main className="pt-20">
                <Packages />
            </main>
            <Footer />
        </div>
    );
}
