// @ts-nocheck
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { tw } from 'twind';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import ProductSection from '@/components/product-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import FAQ from '@/components/faq';
import Wave from 'react-wavify';
import Globe from '../components/globe/globe';
import Navigation from '@/components/navigation';

export default function Terms() {
  return (
    <div className={tw(`bg-dark-mode h-fit`)}>
      <Navigation />
      <div className={tw(`font-montserrat text-white px-64 pb-20`)}>
        <h1 className={tw(`font-bold text-3xl text-center p-20`)}>Website Terms and Conditions of Use</h1>

        <h2 className={tw(`font-bold text-xl`)}>1. Terms</h2>

        <p className={tw(`text-lg pb-5`)}>
          By accessing this Website, accessible from www.openq.dev, you are agreeing to be bound by these Website Terms
          and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If
          you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in
          this Website are protected by copyright and trade mark law.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>2. Use License</h2>

        <p className={tw(`text-lg pb-5`)}>
          Permission is granted to temporarily download one copy of the materials on OpenQ's Website for personal,
          non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
          this license you may not:
        </p>

        <ul className={tw(`list-disc pl-5 pb-5`)}>
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose or for any public display;</li>
          <li>attempt to reverse engineer any software contained on OpenQ's Website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <p className={tw(`text-lg pb-5`)}>
          This will let OpenQ to terminate upon violations of any of these restrictions. Upon termination, your viewing
          right will also be terminated and you should destroy any downloaded materials in your possession whether it is
          printed or electronic format. These Terms of Service has been created with the help of the{' '}
          <a href="https://www.termsofservicegenerator.net">Terms Of Service Generator</a>.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>3. Disclaimer</h2>

        <p className={tw(`text-lg pb-5`)}>
          All the materials on OpenQ’s Website are provided "as is". OpenQ makes no warranties, may it be expressed or
          implied, therefore negates all other warranties. Furthermore, OpenQ does not make any representations
          concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to
          such materials or any sites linked to this Website.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>4. Limitations</h2>

        <p className={tw(`text-lg pb-5`)}>
          OpenQ or its suppliers will not be hold accountable for any damages that will arise with the use or inability
          to use the materials on OpenQ’s Website, even if OpenQ or an authorize representative of this Website has been
          notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations
          on implied warranties or limitations of liability for incidental damages, these limitations may not apply to
          you.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>5. Revisions and Errata</h2>

        <p className={tw(`text-lg pb-5`)}>
          The materials appearing on OpenQ’s Website may include technical, typographical, or photographic errors. OpenQ
          will not promise that any of the materials in this Website are accurate, complete, or current. OpenQ may
          change the materials contained on its Website at any time without notice. OpenQ does not make any commitment
          to update the materials.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>6. Links</h2>

        <p className={tw(`text-lg pb-5`)}>
          OpenQ has not reviewed all of the sites linked to its Website and is not responsible for the contents of any
          such linked site. The presence of any link does not imply endorsement by OpenQ of the site. The use of any
          linked website is at the user’s own risk.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>7. Site Terms of Use Modifications</h2>

        <p className={tw(`text-lg pb-5`)}>
          OpenQ may revise these Terms of Use for its Website at any time without prior notice. By using this Website,
          you are agreeing to be bound by the current version of these Terms and Conditions of Use.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>8. Your Privacy</h2>

        <p className={tw(`text-lg pb-5`)}>Please read our Privacy Policy.</p>

        <h2 className={tw(`font-bold text-xl`)}>9. Governing Law</h2>

        <p className={tw(`text-lg pb-5`)}>
          Any claim related to OpenQ's Website shall be governed by the laws of de without regards to its conflict of
          law provisions.
        </p>
      </div>
      <Footer />
    </div>
  );
}
