"use client";
import TextAnimation from "@/components/elements/TextAnimation";
import React, { type FormEvent } from "react";
import toast from "react-hot-toast";
// Define interface
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormField {
  name: keyof ContactFormData;
  type: "text" | "email" | "tel" | "textarea";
  label: string;
  placeholder: string;
  required: boolean;
  colClass: string;
}

const ContactForm: React.FC = () => {
  // Form fields configuration
  const formFields: FormField[] = [
    {
      name: "name",
      type: "text",
      label: "Full Name *",
      placeholder: "Jordan Walk",
      required: true,
      colClass: "col-xl-6 col-lg-6",
    },
    {
      name: "email",
      type: "email",
      label: "Your Email *",
      placeholder: "jordan@domain.com",
      required: true,
      colClass: "col-xl-6 col-lg-6",
    },
    {
      name: "phone",
      type: "text",
      label: "Phone *",
      placeholder: "Write your Phone",
      required: true,
      colClass: "col-xl-6 col-lg-6",
    },
    {
      name: "subject",
      type: "text",
      label: "Subjects *",
      placeholder: "Write your subject",
      required: true,
      colClass: "col-xl-6 col-lg-6",
    },
  ];
  const handleContactInfo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      EmailTo: "cleansmartcrew@gmail.com",
      EmailSubject: String(formData.get("subject") || ""),
      EmailText: `Name: ${String(formData.get("name") || "")}
Email: ${String(formData.get("email") || "")}
Phone: ${String(formData.get("phone") || "")}
Subject: ${String(formData.get("subject") || "")}

Message:
${String(formData.get("message") || "")}`,
    };

    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("http://localhost:5000/api/ContactUs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || data.message || "Failed to send");
      }

      toast.success("Message sent successfully ✅", { id: toastId });
      form.reset();
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong ❌", { id: toastId });
    }
  };

  return (
    <div className="contact-four__right">
      <div className="section-title text-left sec-title-animation animation-style2">
        <div className="section-title__tagline-box">
          <div className="section-title__tagline-shape-box">
            <div className="section-title__tagline-shape"></div>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <span className="section-title__tagline" style={{ color: "#ec5800" }}>
            Contact US
          </span>
        </div>
        <h2
          className="section-title__title title-animation"
          style={{ paddingTop: "1rem" }}
        >
          <TextAnimation text="Send Message" textColor="black" />{" "}
        </h2>
      </div>
      <form
        className="contact-form-validated contact-four__form"
        onSubmit={handleContactInfo}
      >
        <div className="row">
          {formFields.map((field, index) => (
            <div key={index} className={field.colClass}>
              <h4 className="contact-four__input-title">{field.label}</h4>
              <div className="contact-four__input-box">
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              </div>
            </div>
          ))}
          <div className="col-xl-12">
            <h4 className="contact-four__input-title">Write message *</h4>
            <div className="contact-four__input-box text-message-box">
              <textarea
                name="message"
                placeholder="Write a Message to Inquire"
                required
              />
            </div>
            <div className="contact-four__btn-box">
              <button type="submit" className="thm-btn">
                Send Message
                <span>
                  <i className="icon-diagonal-arrow"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="result"></div>
    </div>
  );
};

export default ContactForm;
