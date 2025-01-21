"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function PrivacyPolicy() {

  const content1 = "We collect a variety of information to provide better services and enhance your experience. This includes personal information such as your name, email address, phone number, and any other data you provide during account registration or interaction with our services. Additionally, we may gather non-personal data, such as device information, browser type, and usage patterns, to help us understand how our services are used. In some cases, we may collect sensitive information with your explicit consent, such as payment details for purchases or health-related data for specific applications. We ensure that this data is handled securely and used only for the purposes specified at the time of collection. Finally, information collected from third-party integrations, such as social media or payment platforms, may also be stored with your permission. This helps us streamline processes and personalize your experience based on your preferences and activity.";
  const content2 = "Your information is used primarily to provide, maintain, and improve our services. For example, we use your personal details to process transactions, respond to inquiries, and deliver tailored recommendations. By analyzing usage data, we can enhance our platform's functionality and develop new features that meet user needs. Additionally, your information allows us to communicate with you effectively, whether through updates, promotional offers, or support notifications. These communications aim to keep you informed while providing opportunities to engage with our services more meaningfully. We also use aggregated and anonymized data for research, statistical analysis, and business planning. These insights help us identify trends, measure performance, and make informed decisions that benefit our users..";
  const content3 = "Safeguarding your information is one of our top priorities. We implement robust security measures, including encryption, firewalls, and access controls, to protect your data from unauthorized access, alteration, or disclosure. Regular audits and updates to our security infrastructure ensure we stay ahead of emerging threats. We also employ strict internal policies to limit data access to authorized personnel only. Staff members undergo regular training on data protection best practices to maintain compliance with relevant laws and standards. Additionally, third-party service providers we work with must adhere to stringent security requirements. In the rare event of a data breach, we have a comprehensive response plan in place. This includes promptly notifying affected individuals, investigating the cause, and taking corrective actions to prevent future incidents.";
  const content4 = "You have the right to access, update, or delete your personal information at any time. We provide tools within your account settings to manage your data easily. If you need further assistance, our support team is available to help with specific requests. Moreover, you can withdraw your consent for data processing or opt out of certain types of data collection, such as targeted advertising. We strive to make these options clear and accessible, ensuring that you have full control over your privacy preferences. If you believe your data has been handled improperly, you have the right to file a complaint with the relevant data protection authorities. Transparency and accountability are central to our approach, and we are committed to resolving any concerns promptly.";
  const content5 = "We periodically update our privacy policy to reflect changes in our practices, technology, or legal requirements. Any modifications will be communicated to you through email or prominent notices on our platform. These updates aim to enhance clarity and ensure that you remain informed about how your data is used and protected. We encourage you to review the policy regularly to stay updated on your rights and our responsibilities. If you continue using our services after policy changes take effect, it indicates your acceptance of the revised terms. However, if you have any questions or concerns about these updates, our support team is here to assist.";

  return (
    <section
      id="privacy"
      className="relative bg-gradient-to-r from-black to-green-900 text-white min-h-screen">
      
      <div className="py-4 bg-black">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white text-center">
          Privacy Policy
        </h2>
      </div>

      <div className="px-6 py-8">
        <div className="max-w-full mx-auto text-lg sm:text-lg">
          <p className="italic text-lg text-gray-300 text-justify ml-4">Effective January 7, 2025</p>
          <p className="text-justify text-gray-300 mb-4 ml-4">Privacy Policy has been updated.</p>

          <Accordion variant="shadow">
            <AccordionItem key="1" aria-label="Accordion 1" title={<span className="font-normal text-3xl">Information We Collect</span>}>
              <div className="text-justify text-gray-300">{content1}</div>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title={<span className="font-normal text-3xl">How We Use Your Information</span>}>
              <div className="text-justify text-gray-300">{content2}</div>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title={<span className="font-normal text-3xl">Data Protection</span>}>
              <div className="text-justify text-gray-300">{content3}</div>
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title={<span className="font-normal text-3xl">Your Rights</span>}>
              <div className="text-justify text-gray-300">{content4}</div>
            </AccordionItem>
            <AccordionItem key="5" aria-label="Accordion 5" title={<span className="font-normal text-3xl">Changes to This Policy</span>}>
              <div className="text-justify text-gray-300">{content5}</div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
