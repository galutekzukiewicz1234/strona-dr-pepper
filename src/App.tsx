/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProductShowcase } from "./components/ProductShowcase";
import { BrandStory } from "./components/BrandStory";
import { Quiz } from "./components/Quiz";
import { SocialProof } from "./components/SocialProof";
import { StoreLocator } from "./components/StoreLocator";
import { Shop } from "./components/Shop";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-drp-black min-h-screen text-drp-cream font-sans antialiased selection:bg-drp-red selection:text-drp-cream">
      <Navigation />
      <main>
        <Hero />
        <ProductShowcase />
        <BrandStory />
        <Quiz />
        <SocialProof />
        <StoreLocator />
        <Shop />
      </main>
      <Footer />
    </div>
  );
}

