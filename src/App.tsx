import React, { useState } from 'react';
import { 
  Activity, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  CheckCircle, 
  User, 
  Heart, 
  Users, 
  Shield, 
  Zap, 
  Target, 
  Info,
  Send
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import EmailSetup from './components/EmailSetup';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        to_name: 'Dr. Hariom Nayak',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        message: formData.message,
        to_email: 'physiohariom001@gmail.com'
      };

      await emailjs.send(
  'service_tf1qab8',
  'template_wqn9ahc',
  templateParams,
  'WSO-fbjMNf7Iux-TO'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">PhysioClinic</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <Activity className="w-16 h-16 text-blue-600 mx-auto lg:mx-0 mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert <span className="text-blue-600">Physiotherapy</span> Care
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional rehabilitation and recovery services with Dr. Hariom Nayak - BFOT Certified Physiotherapist specializing in advanced treatment techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </a>
                <a 
                  href="#services" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
                >
                  <Info className="w-5 h-5 mr-2" />
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="flex flex-col space-y-6">
              {/* Dr. Hariom's Photo */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Dr. Hariom Nayak</h3>
                  <p className="text-blue-600 font-semibold">BFOT Certified Physiotherapist</p>
                </div>
                <div className="relative">
                  <img 
                    src="/WhatsApp Image 2025-09-09 at 18.20.08_a51ec31a copy.jpg" 
                    alt="Dr. Hariom Nayak - Professional Physiotherapist" 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* BFOT Certificate */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">BFOT Certification</h3>
                  <p className="text-sm text-gray-600">Blood Flow Occlusion Training</p>
                </div>
                <div className="relative">
                  <img 
                    src="/WhatsApp Image 2025-09-09 at 18.22.55_7ce1f650 copy.jpg" 
                    alt="BFOT Certificate - Dr. Hariom Nayak" 
                    className="w-full h-48 object-contain rounded-lg shadow-md bg-gray-50"
                  />
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white p-1 rounded-full shadow-lg">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-500">
                    Certified by Dr. GD • UEM Jaipur • Feb 27-28, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile & Certificate Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dr. Hariom Nayak - BFOT Certified Physiotherapist</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Photo Section */}
            <div className="text-center lg:text-left">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Profile</h3>
                <div className="relative mb-6">
                  <img 
                    src="/WhatsApp Image 2025-09-09 at 18.20.08_a51ec31a copy.jpg" 
                    alt="Dr. Hariom Nayak - Professional Physiotherapist" 
                    className="w-full max-w-md mx-auto h-96 object-cover rounded-xl shadow-lg border-4 border-blue-100"
                  />
                  <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                    <User className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <h4 className="text-xl font-bold text-gray-900">Dr. Hariom Nayak</h4>
                  <p className="text-blue-600 font-semibold">BFOT Certified Physiotherapist</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Professional physiotherapist specializing in Blood Flow Occlusion Training 
                      and advanced rehabilitation techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Section */}
            <div className="text-center lg:text-left">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">BFOT Certification</h3>
                <div className="relative mb-6">
                  <img 
                    src="/WhatsApp Image 2025-09-09 at 18.22.55_7ce1f650 copy.jpg" 
                    alt="BFOT Certificate - Dr. Hariom Nayak" 
                    className="w-full h-96 object-contain rounded-xl shadow-lg bg-gray-50 border-4 border-green-100"
                  />
                  <div className="absolute -top-3 -right-3 bg-green-600 text-white p-3 rounded-full shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">Blood Flow Occlusion Training</h4>
                  <p className="text-green-600 font-semibold">Level 1 & Level 2 Certified</p>
                  <div className="bg-green-50 p-4 rounded-lg space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">16 Hours Practical Training</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">UEM Jaipur Certified</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">Dated: 27-28 Feb 2025</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">Certified by Dr. GD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Areas of Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Sports Injury Recovery',
                'Blood Flow Restriction Training',
                'Musculoskeletal Rehabilitation',
                'Pain Management',
                'Post-Surgery Recovery',
                'Movement Therapy'
              ].map((spec, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors shadow-sm"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Patients Treated</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive physiotherapy treatments tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Sports Injury Treatment",
                description: "Specialized care for athletes and sports-related injuries with advanced rehabilitation techniques.",
                image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Blood Flow Restriction Training",
                description: "BFOT certified treatment for enhanced muscle strength and recovery with minimal load.",
                image: "https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Musculoskeletal Therapy",
                description: "Comprehensive treatment for muscle, bone, and joint disorders using evidence-based approaches.",
                image: "https://images.pexels.com/photos/7176324/pexels-photo-7176324.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Pain Management",
                description: "Advanced pain relief techniques including manual therapy and therapeutic exercises.",
                image: "https://images.pexels.com/photos/7176323/pexels-photo-7176323.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Post-Surgery Rehabilitation",
                description: "Specialized recovery programs to restore function and mobility after surgical procedures.",
                image: "https://images.pexels.com/photos/7176322/pexels-photo-7176322.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Movement Analysis",
                description: "Detailed assessment and correction of movement patterns to prevent future injuries.",
                image: "https://images.pexels.com/photos/7176321/pexels-photo-7176321.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/7176029/pexels-photo-7176029.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Physiotherapy clinic" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
            <p className="text-xl text-gray-600">
              Take the first step towards better health and recovery
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 820 938 9261</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600 break-words text-sm">physiohariom001@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">Jaipur, Rajasthan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Hours</p>
                      <p className="text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-green-900">Emergency Support</h4>
                    <p className="text-green-700">24/7 emergency consultation available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <EmailSetup />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
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
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="Sports Injury Treatment">Sports Injury Treatment</option>
                      <option value="Blood Flow Restriction Training">Blood Flow Restriction Training</option>
                      <option value="Musculoskeletal Therapy">Musculoskeletal Therapy</option>
                      <option value="Pain Management">Pain Management</option>
                      <option value="Post-Surgery Rehabilitation">Post-Surgery Rehabilitation</option>
                      <option value="Movement Analysis">Movement Analysis</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your condition or any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Book Appointment
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <CheckCircle className="text-green-600 mr-3" size={20} />
                      <div>
                        <p className="text-green-800 font-medium">Appointment Request Sent!</p>
                        <p className="text-green-700 text-sm">Dr. Hariom Nayak will contact you soon to confirm your appointment.</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="text-red-600 mr-3">⚠️</div>
                      <div>
                        <p className="text-red-800 font-medium">Failed to Send Request</p>
                        <p className="text-red-700 text-sm">Please try again or call us directly at +91 820 938 9261</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">PhysioClinic</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional physiotherapy services with Dr. Hariom Nayak. Specialized in BFOT and advanced rehabilitation techniques.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="text-gray-400 hover:text-white transition-colors block">About</a>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors block">Services</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors block">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>+91 820 938 9261</p>
                <p>physiohariom001@gmail.com</p>
                <p>Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PhysioClinic. All rights reserved. | Dr. Hariom Nayak - BFOT Certified Physiotherapist</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;