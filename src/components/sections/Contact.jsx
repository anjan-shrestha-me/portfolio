import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
} from "react-icons/fi";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import SectionHeading from "../ui/SectionHeading";
import {
  PERSONAL_INFO,
  SOCIAL_LINKS,
  EMAILJS_CONFIG,
} from "../../utils/constants";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formData,
        EMAILJS_CONFIG.publicKey
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <SectionHeading
              title="Contact"
              subtitle="Let's build something amazing together."
            />

            <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Whether you have a project, internship opportunity,
              freelance work or simply want to say hello,
              I'd love to hear from you.
            </p>
          </motion.div>

          {/* CENTER */}
          <div className="space-y-6 lg:col-span-4">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-500/15">
                  <FiMail
                    size={24}
                    className="text-violet-600 dark:text-violet-400"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Email
                  </p>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    mt-1
    block
    break-all
    text-base
    font-semibold
    text-slate-900
    transition-colors
    hover:text-violet-600
    dark:text-white
    dark:hover:text-violet-400
  "
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-500/15">
                  <FiMapPin
                    size={24}
                    className="text-violet-600 dark:text-violet-400"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
                Connect with me
              </h3>

              <div className="space-y-4">
                {SOCIAL_LINKS.map((item, index) => {
                  let Icon = FiGithub;

                  if (item.icon === "FaLinkedin") Icon = FiLinkedin;
                  if (item.icon === "FaTwitter") Icon = FiTwitter;

                  return (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-slate-200
                        px-5
                        py-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-violet-500
                        hover:bg-violet-50
                        dark:border-slate-700
                        dark:hover:border-violet-500
                        dark:hover:bg-violet-500/10
                      "
                    >
                      <Icon
                        size={20}
                        className="text-slate-700 dark:text-slate-300"
                      />
                      <span className="font-medium text-slate-900 dark:text-white">
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5"
          >
            <form
              onSubmit={handleSubmit}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                dark:border-slate-800
                dark:bg-slate-900
              "
            >
              <h3 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
                Send me a message
              </h3>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-3
                      text-slate-900
                      outline-none
                      transition-all
                      duration-300
                      focus:border-violet-500
                      focus:ring-4
                      focus:ring-violet-500/10
                      dark:border-slate-700
                      dark:bg-slate-950
                      dark:text-white
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-3
                      text-slate-900
                      outline-none
                      transition-all
                      duration-300
                      focus:border-violet-500
                      focus:ring-4
                      focus:ring-violet-500/10
                      dark:border-slate-700
                      dark:bg-slate-950
                      dark:text-white
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>

                  <textarea
                    rows={7}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-3
                      text-slate-900
                      outline-none
                      transition-all
                      duration-300
                      resize-none
                      focus:border-violet-500
                      focus:ring-4
                      focus:ring-violet-500/10
                      dark:border-slate-700
                      dark:bg-slate-950
                      dark:text-white
                    "
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-violet-600
                    py-4
                    text-lg
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:bg-violet-700
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  {loading ? "Sending..." : "Send Message"}
                  <FiSend size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;