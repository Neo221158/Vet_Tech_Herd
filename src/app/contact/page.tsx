import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - The Vet Tech Herd',
  description: 'Get in touch with The Vet Tech Herd team. We\'re here to help with questions about membership, partnerships, events, and career opportunities.',
};

export default function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our community, membership, or opportunities? 
            We'd love to hear from you and help in any way we can.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    For general inquiries and support
                  </p>
                  <a 
                    href="mailto:hello@vettechherd.com" 
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    hello@vettechherd.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Connect with our community
                  </p>
                  <a 
                    href="https://linkedin.com/company/vet-tech-herd" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    @vet-tech-herd
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Join our community chat
                  </p>
                  <a 
                    href="https://chat.whatsapp.com/vettechherd" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Community Group
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">
                Response Times
              </h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• General inquiries: 24-48 hours</li>
                <li>• Partnership requests: 3-5 business days</li>
                <li>• Technical support: Same day</li>
                <li>• Urgent matters: Within 24 hours</li>
              </ul>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Community Hours
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                While our community operates globally, our team is most active during:
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li><strong>Monday - Friday:</strong> 9 AM - 5 PM PST</li>
                <li><strong>Saturday:</strong> Limited availability</li>
                <li><strong>Sunday:</strong> Community events only</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do I become a member?
              </h3>
              <p className="text-gray-600 text-sm">
                Membership is free! Simply fill out our signup form on the Join Us page. 
                We welcome all veterinarians and veterinary students interested in technology.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can non-veterinarians join?
              </h3>
              <p className="text-gray-600 text-sm">
                While our primary focus is on veterinarians, we welcome related professionals 
                such as veterinary technicians, researchers, and those working in animal health technology.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How can my company partner with you?
              </h3>
              <p className="text-gray-600 text-sm">
                We offer various partnership opportunities including event sponsorships, 
                job postings, and collaboration projects. Contact us to discuss how we can work together.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer career counseling?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! We provide career support including resume reviews, mentorship matching, 
                and guidance on transitioning from clinical practice to technology roles.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are events only virtual?
              </h3>
              <p className="text-gray-600 text-sm">
                We host both virtual and in-person events. Virtual events allow global participation, 
                while local meetups provide face-to-face networking opportunities.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do I suggest new resources?
              </h3>
              <p className="text-gray-600 text-sm">
                We love community contributions! Use our Collaboration page to suggest new courses, 
                tools, or resources that would benefit our members.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our newsletter to receive updates on community news, upcoming events, 
              job opportunities, and valuable resources for veterinarians in technology.
            </p>
            <a
              href="/join"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Subscribe Now
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}