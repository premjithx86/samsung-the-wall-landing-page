import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import existing contact assets
import emailIcon from '../assets/contact/email.png';
import phoneIcon from '../assets/contact/phone.png';
import locationIcon from '../assets/contact/location.png';

export default function ContactSection() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = React.useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = React.useState({ name: false, email: false, message: false });
  const [status, setStatus] = React.useState('default'); // 'default', 'loading', 'success'
  const [successMessage, setSuccessMessage] = React.useState('');

  const fadeUp = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.12
      }
    },
    viewport: { once: true }
  };

  const staggerItem = {
    initial: { opacity: 0, x: -20 },
    whileInView: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  // Field validator logic
  const validateField = (field, value) => {
    let error = '';
    if (field === 'name') {
      if (!value.trim()) error = 'Name is required';
    } else if (field === 'email') {
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Please enter a valid email address';
      }
    } else if (field === 'message') {
      if (!value.trim()) {
        error = 'Message is required';
      } else if (value.trim().length < 10) {
        error = 'Message must be at least 10 characters';
      }
    }
    return error;
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Touch all fields to trigger validation
    const newTouched = { name: true, email: true, message: true };
    setTouched(newTouched);
    
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);
    
    setErrors({ name: nameError, email: emailError, message: messageError });
    
    if (nameError || emailError || messageError) {
      return;
    }
    
    setStatus('loading');
    
    // Simulate server side request
    setTimeout(() => {
      setStatus('success');
      setSuccessMessage('Message sent successfully.');
      setFormData({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
      
      // Return back to default submit button after 3 seconds
      setTimeout(() => {
        setStatus('default');
        setSuccessMessage('');
      }, 3500);
    }, 2000);
  };

  return (
    <section 
      id="contact" 
      className="bg-black py-24 px-6 md:px-12 text-white select-none border-t border-gray-950 overflow-visible"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Information Block */}
        <div className="flex flex-col space-y-8 text-left">
          
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeUp.viewport}
            transition={fadeUp.transition}
            className="space-y-4"
          >
            <h2 
              className="heading-primary text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none"
            >
              Get In Touch
            </h2>
            <p 
              className="body-text text-xs sm:text-sm text-gray-400 font-light max-w-md leading-relaxed"
            >
              Get In Touch With Our Sales Team To Discuss Tailored Solutions For Your Business. You Can Call <span className="text-white font-medium">(866) 726-4249</span> To Talk To An Expert Now, Or Use The Form Below To Submit Your Requests.
            </p>
          </motion.div>

          {/* Staggered Contact Information Rows */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={staggerContainer.viewport}
            className="space-y-6 pt-2"
          >
            {/* Email Icon Row */}
            <motion.div variants={staggerItem} className="flex items-center gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-full p-2.5">
                <img src={emailIcon} alt="Email" className="w-full h-full object-contain block opacity-90" />
              </div>
              <span 
                className="body-text text-xs sm:text-sm text-gray-300 font-light hover:text-white transition-colors duration-300"
              >
                lorem ipsum @ gmail.com
              </span>
            </motion.div>

            {/* Phone Icon Row */}
            <motion.div variants={staggerItem} className="flex items-center gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-full p-2.5">
                <img src={phoneIcon} alt="Phone" className="w-full h-full object-contain block opacity-90" />
              </div>
              <span 
                className="body-text text-xs sm:text-sm text-gray-300 font-light hover:text-white transition-colors duration-300"
              >
                888 55 6 11 23
              </span>
            </motion.div>

            {/* Location Icon Row */}
            <motion.div variants={staggerItem} className="flex items-center gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-full p-2.5">
                <img src={locationIcon} alt="Location" className="w-full h-full object-contain block opacity-90" />
              </div>
              <span 
                className="body-text text-xs sm:text-sm text-gray-300 font-light hover:text-white transition-colors duration-300"
              >
                Lorem Ipsum
              </span>
            </motion.div>
          </motion.div>

        </div>

        {/* Right Column: Premium Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[500px] lg:justify-self-end rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-visible"
        >
          <h3 
            className="heading-primary text-3xl sm:text-4xl font-bold tracking-tight text-white mb-8 text-left leading-none"
          >
            Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            
            {/* Name Input */}
            <div className="space-y-1.5 text-left">
              <motion.input
                whileFocus={{ borderColor: "rgba(255, 255, 255, 0.4)" }}
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                disabled={status === 'loading'}
                className={`body-text w-full px-4 py-3 rounded-md bg-white/[0.03] border text-sm text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                  touched.name && errors.name 
                    ? 'border-red-500/80 focus:border-red-500 bg-red-500/[0.01]' 
                    : 'border-white/[0.08] focus:border-white/30'
                }`}
              />
              <AnimatePresence>
                {touched.name && errors.name && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, y: -5 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="body-text text-[11px] text-red-400 font-medium pl-1 overflow-hidden"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5 text-left">
              <motion.input
                whileFocus={{ borderColor: "rgba(255, 255, 255, 0.4)" }}
                type="email"
                placeholder="Your Mail"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                disabled={status === 'loading'}
                className={`body-text w-full px-4 py-3 rounded-md bg-white/[0.03] border text-sm text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                  touched.email && errors.email 
                    ? 'border-red-500/80 focus:border-red-500 bg-red-500/[0.01]' 
                    : 'border-white/[0.08] focus:border-white/30'
                }`}
              />
              <AnimatePresence>
                {touched.email && errors.email && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, y: -5 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="body-text text-[11px] text-red-400 font-medium pl-1 overflow-hidden"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Message Textarea */}
            <div className="space-y-1.5 text-left">
              <motion.textarea
                whileFocus={{ borderColor: "rgba(255, 255, 255, 0.4)" }}
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                disabled={status === 'loading'}
                className={`body-text w-full px-4 py-3 rounded-md bg-white/[0.03] border text-sm text-white placeholder-gray-500 focus:outline-none resize-none transition-all duration-300 ${
                  touched.message && errors.message 
                    ? 'border-red-500/80 focus:border-red-500 bg-red-500/[0.01]' 
                    : 'border-white/[0.08] focus:border-white/30'
                }`}
              />
              <AnimatePresence>
                {touched.message && errors.message && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, y: -5 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="body-text text-[11px] text-red-400 font-medium pl-1 overflow-hidden"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className={`body-text w-full py-3 text-sm font-bold tracking-wide uppercase transition-all duration-300 rounded-md select-none outline-none border ${
                status === 'loading'
                  ? 'bg-white/10 text-white/50 border-white/5 cursor-not-allowed'
                  : status === 'success'
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-white text-black border-white hover:bg-transparent hover:text-white'
              }`}
              whileHover={status === 'default' ? { scale: 1.02 } : {}}
              whileTap={status === 'default' ? { scale: 0.98 } : {}}
            >
              {status === 'default' && 'Submit'}
              {status === 'loading' && 'Sending...'}
              {status === 'success' && 'Message Sent ✓'}
            </motion.button>

            {/* Success Message Banner */}
            <AnimatePresence>
              {status === 'success' && successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="body-text p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-md text-emerald-400 text-xs text-center font-medium"
                >
                  {successMessage}
                </motion.div>
              )}
            </AnimatePresence>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
