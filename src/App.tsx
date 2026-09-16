import Footer from './components/Footer';
import Hero from './components/Hero';
import Wordmark from './components/Wordmark';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-carbon">
      <header className="mx-auto w-full max-w-2xl px-6 pt-10 sm:pt-12">
        <Wordmark className="h-8 text-carbon sm:h-10" />
      </header>
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
