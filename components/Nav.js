'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import LogoSvg from './LogoSvg';


export default function Nav() {
  const navRef = useRef(null);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [billOpen, setBillOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (navRef.current) navRef.current.classList.toggle('s', window.scrollY > 60);
    };
    if (pathname !== '/') navRef.current?.classList.add('s');
    else navRef.current?.classList.toggle('s', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
    setSvcOpen(false);
    setBillOpen(false);
  }, [pathname]);

  // Body scroll lock when drawer open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close drawer on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setSvcOpen(false);
    setBillOpen(false);
  };

  return (
    <>
      <nav id="nav" ref={navRef}>
        <Link href="/" className="nlogo">
          <div className="nlm"><LogoSvg idSuffix="nav" /></div>
          <div className="nltxt">
            <span className="nlt">QUAD Healthcare</span>
            <span className="nls">Solutions</span>
          </div>
        </Link>
        <div className="nlinks">
          <Link href="/">Home</Link>
          <div className="ndrop">
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Services <span style={{ fontSize: 10 }}>▼</span>
            </Link>
            <div className="ndrop-menu">
              <Link href="/services/provider-enrollment">Provider Enrollment</Link>
              <Link href="/services/caqh-management">CAQH Setup &amp; Maintenance</Link>
              <Link href="/services/re-credentialing">Re-Credentialing</Link>
              <Link href="/services/contract-negotiation">Contract Negotiation</Link>
              <Link href="/services/npi-registration">NPI Registration &amp; PECOS</Link>
              <Link href="/billing">Medical Billing</Link>
            </div>
          </div>
          <Link href="/process">Process</Link>
          <Link href="/payer-network">Payers</Link>
          <Link href="/billing">Billing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="ncta">Free Consultation</Link>
        </div>

        <button
          type="button"
          className={`nham ${open ? 'open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`mnav-overlay ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile drawer */}
      <aside id="mobile-drawer" className={`mnav ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mnav-head">
          <Link href="/" className="nlogo" onClick={closeAll}>
            <div className="nlm"><LogoSvg idSuffix="mob" /></div>
            <div className="nltxt">
              <span className="nlt">QUAD Healthcare</span>
              <span className="nls">Solutions</span>
            </div>
          </Link>
          <button
            type="button"
            className="mnav-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="mnav-body">
          <Link href="/" className="mnav-link">Home</Link>

          <button
            type="button"
            className={`mnav-section ${svcOpen ? 'open' : ''}`}
            onClick={() => setSvcOpen((v) => !v)}
            aria-expanded={svcOpen}
          >
            <span>Credentialing Services</span>
            <span className="arrow">▼</span>
          </button>
          <div className={`mnav-sub ${svcOpen ? 'open' : ''}`}>
            <Link href="/services">All Services</Link>
            <Link href="/services/provider-enrollment">Provider Enrollment</Link>
            <Link href="/services/caqh-management">CAQH Setup &amp; Maintenance</Link>
            <Link href="/services/re-credentialing">Re-Credentialing</Link>
            <Link href="/services/contract-negotiation">Contract Negotiation</Link>
            <Link href="/services/npi-registration">NPI Registration &amp; PECOS</Link>
          </div>

          <button
            type="button"
            className={`mnav-section ${billOpen ? 'open' : ''}`}
            onClick={() => setBillOpen((v) => !v)}
            aria-expanded={billOpen}
          >
            <span>Medical Billing</span>
            <span className="arrow">▼</span>
          </button>
          <div className={`mnav-sub ${billOpen ? 'open' : ''}`}>
            <Link href="/billing">All Billing Services</Link>
            <Link href="/billing/claim-submission">Claim Submission</Link>
            <Link href="/billing/denial-management">Denial Management</Link>
            <Link href="/billing/ar-follow-up">A/R Follow-Up</Link>
            <Link href="/billing/payment-posting">Payment Posting</Link>
            <Link href="/billing/patient-invoicing">Patient Invoicing</Link>
          </div>

          <Link href="/process" className="mnav-link">Our Process</Link>
          <Link href="/payer-network" className="mnav-link">Payer Network</Link>
          <Link href="/about" className="mnav-link">About Us</Link>
          <Link href="/blog" className="mnav-link">Blog</Link>
          <Link href="/faq" className="mnav-link">FAQ</Link>
          <Link href="/hipaa-compliance" className="mnav-link">HIPAA Compliance</Link>

          <Link href="/contact" className="mnav-cta">
            Free Consultation →
          </Link>
        </div>

        <div className="mnav-foot">
          <span className="mnav-foot-label">Get in Touch</span>
          <a href="mailto:info@quadhealthcaresolutions.com">info@quadhealthcaresolutions.com</a>
          <br />
          <a href="tel:+13074272883">+1 (307) 427-2883</a>
        </div>
      </aside>
    </>
  );
}
