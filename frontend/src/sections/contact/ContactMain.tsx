import React from 'react';
import ContactUs from './ContactUs';
 

const ContactMain: React.FC = () => {
    return (
        <>
            <ContactUs />
            <section className="google-map-one">
                <div className="container">
                    <iframe
                         src="https://www.google.com/maps?q=Melbourne+VIC+Australia&output=embed"
                        className="google-map__one"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location"
                    />
                </div>
            </section>
        </>
    );
};

export default ContactMain;