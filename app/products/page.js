import ProductsSection from './components/ProductsSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';

export default function ProductsPage() {
  // console.log('Page is rendering'); // Check terminal
  
  return (
    <><Header />
      <Logo />
      <FloatingQuoteButton />
    <main>
      <ProductsSection />
    </main>
<Footer />

    </>
  );
}