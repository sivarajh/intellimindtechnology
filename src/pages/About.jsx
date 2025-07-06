import { Users, Target, Award, Heart } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target size={24} />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.'
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and close collaboration with our clients to achieve the best results.'
    },
    {
      icon: <Award size={24} />,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and innovative approaches to problem-solving.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Integrity',
      description: 'We maintain the highest standards of integrity, transparency, and ethical business practices.'
    }
  ]

  const team = [
    {
      name: 'Mouleeswaran Swaminathan',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">Intellimind</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are a passionate team of developers, designers, and innovators 
              dedicated to creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2025, Intellimind began with a simple mission: to help businesses 
                leverage technology to achieve their goals. What started as a small team of 
                passionate developers has grown into a full-service software development company.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we work with clients ranging from startups to mid cap companies, 
                delivering innovative solutions that drive real business value. Our commitment 
                to quality, innovation, and client success remains at the core of everything we do.
              </p>
              <p className="text-lg text-gray-600">
                We believe that great software is built through collaboration, creativity, 
                and a deep understanding of our clients' needs. Every project is an opportunity 
                to push boundaries and create something extraordinary.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">1+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the way we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented team brings together diverse expertise and a shared passion for creating exceptional software.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default About 