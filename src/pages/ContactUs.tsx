import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs.send('service_b2wioia', 'template_12q8tyb', formData, 'OqaRipoN0l_Es6G8R')
      .then((response) => {
        console.log('Success:', response);
        setSending(false);
        setSent(true);
        setFormData({ email: '', subject: '', message: '' }); // Clear form after submission
      })
      .catch((error) => {
        console.error('Error:', error);
        setSending(false);
        setError('Failed to send message. Please try again.');
      });
  };

  return (
    <section className="bg-gray-100">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">
          Have questions about joining the Google Developer Club at La Trobe, our ongoing projects, or anything else? Reach out to us and we'll be happy to assist!
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="23456789@students.latrobe.edu.au"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send message'}
          </button>
          {sent && <p className="text-green-500">Message sent successfully!</p>}
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
