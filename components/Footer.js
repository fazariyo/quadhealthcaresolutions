'use client';

import Link from 'next/link';
import LogoSvg from './LogoSvg';


export default function Footer() {
  return (
    <footer>
      <div className="foot-in">
        <div className="foot-top">
          <div>
            <Link href="/" className="nlogo" style={{ textDecoration: 'none' }}>
              <div className="nlm"><LogoSvg idSuffix="foot" /></div>
              <div className="nltxt">
                <span className="nlt">QUAD Healthcare</span>
                <span className="nls">Solutions</span>
              </div>
            </Link>
            <p className="foot-desc">
              Specialized medical credentialing and provider enrollment for healthcare practices across the United States.
            </p>
          </div>
          <div className="fcol">
            <h5>Credentialing</h5>
            <Link href="/services/provider-enrollment">Provider Enrollment</Link>
            <Link href="/services/caqh-management">CAQH Management</Link>
            <Link href="/services/re-credentialing">Re-Credentialing</Link>
            <Link href="/services/contract-negotiation">Contract Negotiation</Link>
            <Link href="/services/npi-registration">NPI Registration</Link>
          </div>
          <div className="fcol">
            <h5>Medical Billing</h5>
            <Link href="/billing/claim-submission">Claim Submission</Link>
            <Link href="/billing/denial-management">Denial Management</Link>
            <Link href="/billing/ar-follow-up">A/R Follow-up</Link>
            <Link href="/billing/payment-posting">Payment Posting</Link>
            <Link href="/billing/patient-invoicing">Patient Invoicing</Link>
          </div>
          <div className="fcol">
            <h5>Company</h5>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ&apos;s</Link>
            <Link href="/hipaa-compliance">HIPAA Compliance</Link>
            <Link href="/process">Our Process</Link>
            <Link href="/payer-network">Payer Network</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="foot-bot">
          <div className="foot-copy">© 2025 QUAD HEALTHCARE SOLUTIONS LLC. All rights reserved.</div>
          <div className="foot-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
