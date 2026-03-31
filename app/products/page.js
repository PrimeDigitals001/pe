import ProductsSection from './components/ProductsSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';

// ─────────────────────────────────────────────────────────────
// CHEMICALS DISPLAY — TWO OPTIONS, ONE ACTIVE AT A TIME
//
// OPTION A (default): Chemicals grid inline on this page.
//   → ChemicalsSection renders all chemical cards directly below
//     the brand partners grid. Great for one-stop discovery.
//
// OPTION B: A single category banner card linking to /products/chemicals.
//   → Cleaner /products page — chemicals have their own dedicated page.
//   → Uncomment ChemicalsCategoryCard and comment out ChemicalsSection.
//
// To switch: comment one import + usage, uncomment the other.
// ─────────────────────────────────────────────────────────────

// ── OPTION A — Full grid inline (currently ACTIVE) ──
import ChemicalsSection from './components/ChemicalsSection';

// ── OPTION B — Single banner card (currently COMMENTED) ──
// import ChemicalsCategoryCard from '@/components/ChemicalsCategoryCard';

export default function ProductsPage() {
  return (
    <>
      <Header />
      <Logo />
      <FloatingQuoteButton />

      <main>
        {/* Brand partners — always first, full priority */}
        <ProductsSection />

        {/* ── OPTION A: Chemicals grid inline ── */}
        <ChemicalsSection />

        {/* ── OPTION B: Single category card link ── */}
        {/* <ChemicalsCategoryCard /> */}
      </main>

      <Footer />
    </>
  );
}