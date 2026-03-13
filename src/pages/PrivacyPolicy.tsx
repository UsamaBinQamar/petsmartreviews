import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#e8eef5]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-5 md:px-6 flex flex-col items-center">
          <div className="w-full max-w-4xl flex flex-col items-center">
            <div className="w-full bg-[#e6f0fa] rounded-xl py-8 md:py-10 px-6 md:px-8 text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Privacy Policy
              </h1>
            </div>
            <div className="w-full bg-white rounded-xl p-8 md:p-12 shadow-md text-left">
              <div className="space-y-8 text-base md:text-lg leading-relaxed text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                <div>
                  <p className="mb-4">
                    Thank you for choosing to be part of our community at SmartPetReviews LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at <a href="mailto:info@SmartPetReviews.com" className="text-[#316DFF] underline">info@SmartPetReviews.com</a>.
                  </p>
                  <p className="mb-4">
                    This privacy notice describes how we might use your information if you:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Visit our website at SmartPetReviews.com</li>
                    <li>Engage with us in other related ways ― including any sales, marketing, or events</li>
                  </ul>
                  <p className="mb-4">
                    In this privacy notice, if we refer to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>&quot;Website,&quot; we are referring to any website of ours that references or links to this policy</li>
                    <li>&quot;Services,&quot; we are referring to our Website, and other related services, including any sales, marketing, or events</li>
                  </ul>
                  <p className="mb-4">
                    The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
                  </p>
                  <p>
                    Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    WHAT INFORMATION DO WE COLLECT?
                  </h2>

                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3 mt-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Personal information you disclose to us
                  </h3>
                  <p className="mb-3">
                    <strong>In Short:</strong> We collect personal information that you provide to us.
                  </p>
                  <p className="mb-4">
                    We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
                  </p>
                  <p className="mb-4">
                    The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:
                  </p>

                  <h4 className="text-lg md:text-xl font-bold text-black mb-3 mt-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Personal Information Provided by You.
                  </h4>
                  <p className="mb-4">
                    We collect email addresses; names; phone numbers; and other similar information.
                  </p>
                  <p className="mb-4">
                    All personal information that you provide to us must be <strong>true, complete and accurate</strong>, and you must notify us of any changes to such personal information.
                  </p>

                  <h4 className="text-lg md:text-xl font-bold text-black mb-3 mt-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Information automatically collected
                  </h4>
                  <p className="mb-3">
                    <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.
                  </p>
                  <p className="mb-4">
                    We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
                  </p>
                  <p>
                    Like many businesses, we also collect information through cookies and similar technologies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    HOW DO WE USE YOUR INFORMATION?
                  </h2>
                  <p className="mb-3">
                    <strong>In Short:</strong> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
                  </p>
                  <p className="mb-4">
                    We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
                  </p>
                  <p className="mb-4">
                    We use the information we collect or receive:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 mb-4">
                    <li><strong>To facilitate account creation and logon process.</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.</li>
                    <li><strong>To post testimonials.</strong> We post testimonials on our Website that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at <a href="mailto:info@SmartPetReviews.com" className="text-[#316DFF] underline">info@SmartPetReviews.com</a> and be sure to include your name, testimonial location, and contact information.</li>
                    <li><strong>Request feedback.</strong> We may use your information to request feedback and to contact you about your use of our Website.</li>
                    <li><strong>To enable user-to-user communications.</strong> We may use your information in order to enable user-to-user communications with each user&apos;s consent.</li>
                    <li><strong>To manage user accounts.</strong> We may use your information for the purposes of managing our account and keeping it in working order.</li>
                    <li><strong>To send administrative information to you.</strong> We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</li>
                    <li><strong>To protect our Services.</strong> We may use your information as part of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention).</li>
                    <li><strong>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</strong></li>
                    <li><strong>To respond to legal requests and prevent harm.</strong> If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</li>
                    <li><strong>Fulfill and manage your orders.</strong> We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Website.</li>
                    <li><strong>Administer prize draws and competitions.</strong> We may use your information to administer prize draws and competitions when you elect to participate in our competitions.</li>
                    <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may use your information to provide you with the requested service.</li>
                    <li><strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
                    <li><strong>To send you marketing and promotional communications.</strong> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Website, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time. Deliver targeted advertising to you. We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                  </h2>
                  <p className="mb-3">
                    <strong>In Short:</strong> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                  </p>
                  <p className="mb-4">
                    We may process or share your data that we hold based on the following legal basis:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                    <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                    <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                    <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
                    <li><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
                  </ul>
                  <p className="mb-4">
                    More specifically, we may need to process your data or share your personal information in the following situations:
                  </p>
                  <p className="mb-4">
                    <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                  </h2>
                  <p className="mb-3">
                    <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
                  </p>
                  <p>
                    We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                  </h2>
                  <p className="mb-3">
                    <strong>In Short:</strong> We are not responsible for the safety of any information that you share with third-party providers who advertise, but are not affiliated with, our Website.
                  </p>
                  <p>
                    The Website may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services or applications that may be linked to or from the Website. You should review the policies of such third parties and contact them directly to respond to your questions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    HOW LONG DO WE KEEP YOUR INFORMATION?
                  </h2>
                  <p className="mb-3">
                    <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
                  </p>
                  <p className="mb-4">
                    We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.
                  </p>
                  <p>
                    When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    HOW DO WE KEEP YOUR INFORMATION SAFE?
                  </h2>
                  <p className="mb-3">
                    <strong>In Short:</strong> <em>We aim to protect your personal information through a system of organizational and technical security measures.</em>
                  </p>
                  <p>
                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should only access the Website within a secure environment.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    WHAT ARE YOUR PRIVACY RIGHTS?
                  </h2>
                  <p className="mb-3">
                    <strong>In Short:</strong> You may review, change, or terminate your account at any time.
                  </p>
                  <p className="mb-4">
                    If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here:
                  </p>
                  <p className="mb-4">
                    <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer" className="text-[#316DFF] underline">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.
                  </p>
                  <p className="mb-4">
                    If you are a resident in Switzerland, the contact details for the data protection authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" rel="noopener noreferrer" className="text-[#316DFF] underline">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.
                  </p>
                  <p className="mb-4">
                    <strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website. To opt-out of interest-based advertising by advertisers on our Website visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#316DFF] underline">http://www.aboutads.info/choices/</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    CONTROLS FOR DO-NOT-TRACK FEATURES
                  </h2>
                  <p>
                    Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                  </h2>
                  <p className="mb-3">
                    <strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
                  </p>
                  <p className="mb-4">
                    California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                  </p>
                  <p className="mb-4">
                    If you are under 18 years of age, reside in California, and have a registered account with the Website, you have the right to request removal of unwanted data that you publicly post on the Website. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Website, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3 mt-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    CCPA Privacy Notice
                  </h3>
                  <p className="mb-4">
                    The California Code of Regulations defines a &quot;resident&quot; as:
                  </p>
                  <p className="mb-2">(1) every individual who is in the State of California for other than a temporary or transitory purpose and</p>
                  <p className="mb-4">(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</p>
                  <p className="mb-4">
                    All other individuals are defined as &quot;non-residents.&quot;
                  </p>
                  <p className="mb-4">
                    If this definition of &quot;resident&quot; applies to you, we must adhere to certain rights and obligations regarding your personal information.
                  </p>

                  <h4 className="text-lg md:text-xl font-bold text-black mb-3 mt-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    What categories of personal information do we collect?
                  </h4>
                  <p className="mb-4">
                    We have collected the following categories of personal information in the past twelve (12) months:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-2 text-left font-bold">Category</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-bold">Examples</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-bold">Collected</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">A. Identifiers</td>
                          <td className="border border-gray-300 px-4 py-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name</td>
                          <td className="border border-gray-300 px-4 py-2">YES</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">B. Personal information categories listed in the California Customer Records statute</td>
                          <td className="border border-gray-300 px-4 py-2">Name, contact information, education, employment, employment history and financial information</td>
                          <td className="border border-gray-300 px-4 py-2">YES</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">C. Protected classification characteristics under California or federal law</td>
                          <td className="border border-gray-300 px-4 py-2">Gender and date of birth</td>
                          <td className="border border-gray-300 px-4 py-2">NO</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">D. Commercial information</td>
                          <td className="border border-gray-300 px-4 py-2">Transaction information, purchase history, financial details and payment information</td>
                          <td className="border border-gray-300 px-4 py-2">NO</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">E. Biometric information</td>
                          <td className="border border-gray-300 px-4 py-2">Fingerprints and voiceprints</td>
                          <td className="border border-gray-300 px-4 py-2">NO</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">F. Internet or other similar network activity</td>
                          <td className="border border-gray-300 px-4 py-2">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements</td>
                          <td className="border border-gray-300 px-4 py-2">NO</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">G. Geolocation data</td>
                          <td className="border border-gray-300 px-4 py-2">Device location</td>
                          <td className="border border-gray-300 px-4 py-2">NO</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                          <td className="border border-gray-300 px-4 py-2">Images and audio, video or call recordings created in connection with our business activities</td>
                          <td className="border border-gray-300 px-4 py-2">NO</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">I. Professional or employment-related information</td>
                          <td className="border border-gray-300 px-4 py-2">Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us</td>
                          <td className="border border-gray-300 px-4 py-2">NO</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">J. Education Information</td>
                          <td className="border border-gray-300 px-4 py-2">Student records and directory information</td>
                          <td className="border border-gray-300 px-4 py-2">NO</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">K. Inferences drawn from other personal information</td>
                          <td className="border border-gray-300 px-4 py-2">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual&apos;s preferences and characteristics</td>
                          <td className="border border-gray-300 px-4 py-2">NO</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mb-4">
                    We may also collect other personal information outside of these categories instances where you interact with us in-person, online, or by phone or mail in the context of:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Receiving help through our customer support channels;</li>
                    <li>Participation in customer surveys or contests; and</li>
                    <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                  </ul>

                  <h4 className="text-lg md:text-xl font-bold text-black mb-3 mt-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    How do we use and share your personal information?
                  </h4>
                  <p className="mb-4">
                    More information about our data collection and sharing practices can be found in this privacy notice. You may contact us by email at <a href="mailto:info@SmartPetReviews.com" className="text-[#316DFF] underline">info@SmartPetReviews.com</a>, or by referring to the contact details at the bottom of this document.
                  </p>
                  <p className="mb-4">
                    If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
                  </p>

                  <h4 className="text-lg md:text-xl font-bold text-black mb-3 mt-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Will your information be shared with anyone else?
                  </h4>
                  <p className="mb-4">
                    We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for profit entity that processes the information on our behalf.
                  </p>
                  <p className="mb-4">
                    We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be &quot;selling&quot; of your personal data.
                  </p>
                  <p className="mb-4">
                    SmartPetReviews LLC has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding 12 months. SmartPetReviews LLC will not sell personal information in the future belonging to website visitors, users and other consumers.
                  </p>

                  <h4 className="text-lg md:text-xl font-bold text-black mb-3 mt-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Your rights with respect to your personal data
                  </h4>
                  <p className="mb-2"><strong>Right to request deletion of the data – Request to delete</strong></p>
                  <p className="mb-4">
                    You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation or any processing that may be required to protect against illegal activities.
                  </p>
                  <p className="mb-2"><strong>Right to be informed – Request to know</strong></p>
                  <p className="mb-4">
                    Depending on the circumstances, you have a right to know:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>whether we collect and use your personal information;</li>
                    <li>the categories of personal information that we collect;</li>
                    <li>the purposes for which the collected personal information is used;</li>
                    <li>whether we sell your personal information to third parties;</li>
                    <li>the categories of personal information that we sold or disclosed for a business purpose;</li>
                    <li>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li>
                    <li>the business or commercial purpose for collecting or selling personal information.</li>
                  </ul>
                  <p className="mb-4">
                    In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
                  </p>
                  <p className="mb-2"><strong>Right to Non-Discrimination for the Exercise of a Consumer&apos;s Privacy Rights</strong></p>
                  <p className="mb-4">
                    We will not discriminate against you if you exercise your privacy rights.
                  </p>
                  <p className="mb-2"><strong>Verification process</strong></p>
                  <p className="mb-4">
                    Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
                  </p>
                  <p className="mb-4">
                    We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. If, however, we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity, and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
                  </p>
                  <p className="mb-2"><strong>Other privacy rights</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>you may object to the processing of your personal data</li>
                    <li>you may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data</li>
                    <li>you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li>
                    <li>you may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later than 15 days from the date of the request submission.</li>
                  </ul>
                  <p>
                    To exercise these rights, you can contact us by email at <a href="mailto:info@SmartPetReviews.com" className="text-[#316DFF] underline">info@SmartPetReviews.com</a>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    DO WE MAKE UPDATES TO THIS NOTICE?
                  </h2>
                  <p className="mb-3">
                    <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
                  </p>
                  <p>
                    We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                  </h2>
                  <p>
                    If you have questions or comments about this notice, you may email us at <a href="mailto:info@SmartPetReviews.com" className="text-[#316DFF] underline">info@SmartPetReviews.com</a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                  </h2>
                  <p>
                    Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
