
import { Hero } from '../components/home/Hero';
import { Coaches } from '../components/home/Coaches';
import { Process } from '../components/home/Process';
import { Benefits } from '../components/home/Benefits';
import { Packages } from '../components/home/Packages';
import { FAQ } from '../components/home/FAQ';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-rocket-dark text-white selection:bg-rocket-cyan/30">
            <Navbar />
            <main>
                <Hero />
                <Coaches />
                <Process />
                <Benefits />
                <Packages />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
