'use client';

import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="py-4 py-md-5 bg-light">
      <div className="container">
        <div className="terms-sheet mx-auto bg-white border rounded-2 p-4 p-md-5">
          {/* 1. Introduction */}
          <h2 className="terms-title">1. Introduction</h2>
          <p className="terms-text mb-4">
            By booking a service with CleanSmart Crew, you agree to the following Terms &amp; Conditions.
            These terms apply to all residential and commercial cleaning services provided by us.
          </p>

          {/* 2. Service Agreement */}
          <h2 className="terms-title">2. Service Agreement</h2>
          <ul className="terms-list mb-4">
            <li>All bookings are subject to availability.</li>
            <li>The scope of work will be based on the service selected at the time of booking.</li>
            <li>Any additional services requested on-site may incur extra charges.</li>
          </ul>

          {/* 3. Pricing & Payments */}
          <h2 className="terms-title">3. Pricing &amp; Payments</h2>
          <ul className="terms-list mb-2">
            <li>All prices are quoted in AUD.</li>
            <li>
              Payments must be made via the approved payment methods before or upon completion of the
              service unless otherwise agreed.
            </li>
            <li>Additional charges may apply for:</li>
          </ul>

          <ul className="terms-sublist mb-4">
            <li>Excessive dirt or staining</li>
            <li>Extra time required</li>
            <li>Add-on services</li>
          </ul>

          {/* 4. Cancellations & Rescheduling */}
          <h2 className="terms-title">4. Cancellations &amp; Rescheduling</h2>
          <ul className="terms-list mb-4">
            <li>24 hours&rsquo; notice is required for cancellations or rescheduling.</li>
            <li>Same-day cancellations may incur a cancellation fee.</li>
          </ul>

          {/* 5. Access to Property */}
          <h2 className="terms-title">5. Access to Property</h2>
          <p className="terms-text mb-2">Clients must ensure:</p>
          <ul className="terms-list mb-4">
            <li>Safe and legal access to the property</li>
            <li>Electricity and running water availability</li>
            <li>Clear access to areas to be cleaned</li>
          </ul>

          {/* 6. Satisfaction Guarantee */}
          <h2 className="terms-title">6. Satisfaction Guarantee</h2>
          <p className="terms-text mb-4">
            If you are not satisfied, contact us within 24 hours, and we will address your concern,
            if needed we will arrange a re-clean of the concerned areas.
          </p>

          {/* 7. Damage & Liability */}
          <h2 className="terms-title">7. Damage &amp; Liability</h2>
          <ul className="terms-list mb-2">
            <li>CleanSmart Crew is fully insured.</li>
            <li>Any damage must be reported within 24 hours of service.</li>
            <li>We are not responsible for:</li>
          </ul>

          <ul className="terms-sublist mb-4">
            <li>Pre-existing damage</li>
            <li>Wear and tear</li>
            <li>Items not secured properly</li>
          </ul>

          {/* 8. Health & Safety */}
          <h2 className="terms-title">8. Health &amp; Safety</h2>
          <p className="terms-text mb-0">
            We reserve the right to refuse service if the environment is unsafe or hazardous.
          </p>
          <h2 className="terms-title">9. Changes to Terms</h2>
          <p className="terms-text mb-0">
          We may update these terms at any time. The latest version will always be available on our website.
          </p>
        </div>
      </div>
    </section>
  );
}