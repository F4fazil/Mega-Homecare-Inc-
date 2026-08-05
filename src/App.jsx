import { motion } from "framer-motion";
import {
  Download,
  Smartphone,
  Apple,
  CalendarCheck,
  MapPinCheck,
  ClipboardList,
  FileText,
  Users,
  Heart,
} from "lucide-react";
import { config } from "./config";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const features = [
  {
    icon: CalendarCheck,
    title: "Smart Scheduling",
    description:
      "Admins create and manage caregiver schedules, generate PDF reports, and send them directly to clients.",
  },
  {
    icon: MapPinCheck,
    title: "Geo-Fenced Clock-In",
    description:
      "Caregivers can only clock in within 100 meters of the client's address for verified, on-site attendance.",
  },
  {
    icon: ClipboardList,
    title: "Shift Reports",
    description:
      "Caregivers submit detailed shift reports after every visit, keeping families and admins fully informed.",
  },
  {
    icon: Users,
    title: "Family Access",
    description:
      "Add up to 3 family members per client so loved ones can stay updated on care and scheduling.",
  },
  {
    icon: FileText,
    title: "Client & Caregiver Accounts",
    description:
      "Admins easily create and manage accounts for both clients and caregivers from one dashboard.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue/5 via-white to-brand-green/5 px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue">
            <Heart className="h-4 w-4" />
            Trusted Healthcare Partner
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            {config.appName}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-brand-blue font-semibold sm:text-xl"
          >
            Trusted Home Healthcare Services by {config.companyName}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-gray-600 sm:text-lg mx-auto lg:mx-0"
          >
            Access professional home healthcare services anytime, anywhere.
            Download the Android app today and experience reliable care at your
            fingertips.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href={config.apkUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:bg-brand-blue-dark hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="h-5 w-5" />
              Download APK
            </a>
          </motion.div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-6 rounded-full bg-brand-blue/10 blur-3xl" />

            {/* Phone frame */}
            <div className="relative w-64 rounded-[2.5rem] border-[8px] border-gray-800 bg-gray-800 p-1 shadow-2xl sm:w-72">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-gray-800" />

              {/* Screen */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[9/19.5]">
                <img
                  src="/app-screenshot.png"
                  alt={`${config.appName} app screenshot`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Download {config.appName}
          </h2>
          <p className="mt-3 text-gray-600 sm:text-lg">
            Choose your platform to get started
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Android Card */}
          <motion.div
            className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-lg shadow-gray-100/50 transition-shadow duration-300 hover:shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-green/10">
              <Smartphone className="h-7 w-7 text-brand-green" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Android</h3>
            <p className="mt-2 text-gray-600">
              Download the latest {config.appName} APK.
            </p>
            <a
              href={config.apkUrl}
              download
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-brand-blue/20 transition-all duration-300 hover:bg-brand-blue-dark hover:shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="h-5 w-5" />
              Download APK
            </a>
          </motion.div>

          {/* iPhone Card */}
          <motion.div
            className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-lg shadow-gray-100/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={1}
          >
            <span className="absolute top-4 right-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              Coming Soon
            </span>
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
              <Apple className="h-7 w-7 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">iPhone</h3>
            <p className="mt-2 text-gray-600">
              iOS version is currently under review.
            </p>
            {config.iosEnabled ? (
              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-brand-blue-dark hover:-translate-y-0.5"
              >
                <Apple className="h-5 w-5" />
                Download on App Store
              </a>
            ) : (
              <button
                disabled
                className="mt-6 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-gray-100 px-6 py-3.5 text-base font-semibold text-gray-400"
              >
                <Apple className="h-5 w-5" />
                Coming Soon
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose {config.appName}?
          </h2>
          <p className="mt-3 text-gray-600 sm:text-lg">
            Everything you need for quality home healthcare
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 transition-colors duration-300 group-hover:bg-brand-blue">
                <feature.icon className="h-6 w-6 text-brand-blue transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-semibold text-gray-900">
          {config.companyName} &copy; {new Date().getFullYear()}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Android APK available now. The iOS version will be available soon on
          the App Store.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a
            href="https://f4fazil.github.io/Mega-HomeCare-Privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-brand-blue"
          >
            Privacy Policy
          </a>
          <a
            href="mailto:barakatyemmie@gmail.com"
            className="text-gray-500 transition-colors duration-300 hover:text-brand-blue"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Hero />
      <DownloadSection />
      <Features />
      <Footer />
    </div>
  );
}
