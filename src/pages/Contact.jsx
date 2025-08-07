import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'intellimindtechnology@gmail.com',
      link: 'mailto:intellimindtechnology@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      value: '+1 (312) 273-7214',
      link: 'tel:+13122737214'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Address',
      value: '168 Hana Rd, Edison, NJ 08817',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock size={20} />,
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
      link: null
    }
  ]

  const services = [
    'Web Development',
    'Mobile Development',
    'Cloud Solutions',
    'Database Design',
    'Security Services',
    'Analytics & BI',
    'Other'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-primary-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can help bring 
              your vision to life with our professional development services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-2" />
                  <span className="text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your project, requirements, timeline, and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary inline-flex items-center"
                >
                  Send Message
                  <Send size={20} className="ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-primary-600">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Location */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visit Our Office
                </h3>
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                       <iframe
              title="Intellimind Technology Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6064.821964075541!2d-74.41103642409928!3d40.532508448584785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c7fc2c825cd7%3A0x677904b2cf378019!2s168%20Hana%20Rd%2C%20Edison%2C%20NJ%2008817!5e0!3m2!1sen!2sus!4v1749615887469!5m2!1sen!2sus"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> 
                    </div>
                  </div>
                  {/* <p className="text-gray-600">
                    Located in the heart of Edison Township, 
                    our office is easily accessible and provides a great 
                    environment for collaboration and innovation.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is your typical project timeline?
              </h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity and scope. Simple websites can take 2-4 weeks, 
                while complex applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you provide ongoing support?
              </h3>
              <p className="text-gray-600">
                Yes, we offer various support and maintenance packages to ensure your application 
                continues to run smoothly and stays up-to-date with the latest technologies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What technologies do you use?
              </h3>
              <p className="text-gray-600">
                We use modern, industry-standard technologies including React, Vue.js, Node.js, 
                Python, AWS, and more. We choose the best technology stack for each project's specific needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do you handle project communication?
              </h3>
              <p className="text-gray-600">
                We maintain regular communication through scheduled meetings, progress reports, 
                and project management tools. You'll always know the status of your project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 