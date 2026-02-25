'use client';

import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="py-4 py-md-5 bg-light">
      <div className="container">
        <div className="terms-sheet mx-auto bg-white border rounded-2 p-4 p-md-5">
          {/* 1. Information We Collect */}
          <h2 className="terms-title">1. Information We Collect</h2>
          <p className="terms-text mb-2">We may collect:</p>
          <ul className="terms-list mb-4"  >
            <li>Name</li>
            <li>Contact details</li>
            <li>Address</li>
            <li>Service details</li>
            <li>Payment information</li>
          </ul>

          {/* 2. How We Use Your Information */}
          <h2 className="terms-title">2. How We Use Your Information</h2>
          <p className="terms-text mb-2">Your information is used to:</p>
          <ul className="terms-list mb-4">
            <li>Provide cleaning services</li>
            <li>Manage bookings</li>
            <li>Process payments</li>
            <li>Send service updates</li>
            <li>Improve customer experience</li>
          </ul>

          {/* 3. Data Protection */}
          <h2 className="terms-title">3. Data Protection</h2>
          <p className="terms-text mb-4">
            We take reasonable steps to protect your personal information from misuse, loss,
            or unauthorized access.
          </p>

          {/* 4. Sharing of Information */}
          <h2 className="terms-title">4. Sharing of Information</h2>
          <p className="terms-text mb-2">
            We do not sell or rent your personal information.
            <br />
            We only share data with:
          </p>
          <ul className="terms-sublist mb-4">
            <li>Payment processors</li>
            <li>Service staff for booking purposes</li>
            <li>Legal authorities if required by law</li>
          </ul>

          {/* 5. Marketing Communication */}
          <h2 className="terms-title">5. Marketing Communication</h2>
          <p className="terms-text mb-4">
            You will only receive promotional content if you opt in. You can unsubscribe at any time.
          </p>

          {/* 6. Access & Correction */}
          <h2 className="terms-title">6. Access &amp; Correction</h2>
          <p className="terms-text mb-4">
            You may request access to or correction of your personal data by contacting us.
          </p>

          {/* 7. Cookies & Website Data */}
          <h2 className="terms-title">7. Cookies &amp; Website Data</h2>
          <p className="terms-text mb-4">
            Our website may use cookies to improve user experience and analyze traffic.
          </p>

          {/* 8. Contact Us */}
          <h2 className="terms-title">8. Contact Us</h2>
          <p className="terms-text mb-2">For privacy-related queries:</p>

          <div className="d-flex flex-column gap-2 mt-2">
            <div className="d-flex align-items-center gap-2 terms-contact">
              <span className="terms-dot terms-dot-email" aria-hidden="true" />
              <a className="terms-link" href="mailto:cleansmartcrew@gmail.com">
                cleansmartcrew@gmail.com
              </a>
            </div>

            <div className="d-flex align-items-center gap-2 terms-contact">
              <span className="terms-dot terms-dot-location" aria-hidden="true" />
              <span className="terms-text mb-0">Melbourne, VIC, Australia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}