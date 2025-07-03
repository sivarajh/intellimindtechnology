import { Code, Smartphone, Globe, Shield, Database, Zap, Users, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and technologies.',
      features: [
        'React, Vue.js, Angular Development',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Content Management Systems',
        'API Development & Integration',
        'Performance Optimization'
      ],
      price: 'From $5,000'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS & Android Native Apps',
        'React Native Development',
        'Flutter Applications',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      price: 'From $8,000'
    },
    {
      icon: <Globe size={24} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: [
        'AWS, Azure, Google Cloud',
        'Serverless Architecture',
        'Container Orchestration',
        'CI/CD Pipeline Setup',
        'Monitoring & Logging',
        'Cost Optimization'
      ],
      price: 'From $3,000'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Design',
      description: 'Robust database architecture and optimization services.',
      features: [
        'Database Design & Modeling',
        'Performance Optimization',
        'Data Migration',
        'Backup & Recovery',
        'Security Implementation',
        'Scalability Planning'
      ],
      price: 'From $2,500'
    },
    {
      icon: <Shield size={24} />,
      title: 'Security Services',
      description: 'Comprehensive security solutions for your applications.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'SSL/TLS Implementation',
        'Authentication Systems',
        'Data Encryption',
        'Compliance (GDPR, HIPAA)'
      ],
      price: 'From $4,000'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Analytics & BI',
      description: 'Data analytics and business intelligence solutions.',
      features: [
        'Data Visualization',
        'Custom Dashboards',
        'Real-time Analytics',
        'Predictive Analytics',
        'Report Automation',
        'KPI Tracking'
      ],
      price: 'From $3,500'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business needs, goals, and requirements to create a comprehensive project plan.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our design team creates wireframes and prototypes to visualize the user experience and interface design.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our development team builds your solution using best practices and modern technologies.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'We thoroughly test your application to ensure it meets quality standards and performs flawlessly.'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'We deploy your application to production and ensure everything is running smoothly.'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'We provide ongoing support, maintenance, and updates to keep your application running optimally.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive software development services tailored to meet your business needs 
              and drive digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From web development to cloud solutions, we provide end-to-end services 
              to help your business succeed in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-primary-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-primary-600 mb-4">
                  {service.price}
                </div>
                <Link to="/contact" className="btn-primary w-full text-center">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution that fits your business needs.
          </p>
          <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
            Schedule a Consultation
            <Zap size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services 