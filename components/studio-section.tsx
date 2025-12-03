"use client"

import { motion } from "framer-motion"
import { PhoneCall, Lightbulb, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

interface WorkflowStep {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: "Discovery Call",
    description: "We start with a conversation to understand your challenges, goals, and opportunities for automation.",
    icon: PhoneCall,
  },
  {
    id: 2,
    title: "Strategy & Design",
    description: "Our team crafts a tailored roadmap, mapping out workflows and selecting the right AI tools for your needs.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Build & Deliver",
    description: "We develop, test, and deploy your automation system — delivering working solutions that transform operations.",
    icon: Rocket,
  },
]

export default function StudioSection() {
  return (
    <section id="studio" className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, oklch(0.95 0 0) 1px, transparent 1px),
              linear-gradient(to bottom, oklch(0.95 0 0) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium text-white/80">Studio</span>
          </div>

          <h2
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-6",
              geist.className,
            )}
          >
            About LUMI AI
          </h2>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20 sm:mb-28"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm p-8 sm:p-12 overflow-hidden">
            {/* Inner pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, oklch(0.95 0 0) 1px, transparent 1px),
                  linear-gradient(to bottom, oklch(0.95 0 0) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-6">
                LUMI AI is a creative tech studio blending innovation with intelligence. Founded by{" "}
                <span className="text-primary font-semibold">Maneesh</span> and{" "}
                <span className="text-primary font-semibold">Anjudeep</span>, we're not just developers — we're{" "}
                <span className="text-white font-semibold">AI architects</span> helping businesses, creators, and teams save time, scale faster, and stay ahead of the curve.
              </p>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              />
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-3xl"></div>
          </div>
        </motion.div>

        {/* Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How We Work — From Idea to Automation
          </h3>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A small, focused team that turns conversations into working automation systems.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm p-8 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(231,138,83,0.15)]">
                  {/* Inner pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, oklch(0.95 0 0) 1px, transparent 1px),
                        linear-gradient(to bottom, oklch(0.95 0 0) 1px, transparent 1px)
                      `,
                      backgroundSize: "30px 30px",
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-primary font-bold text-lg">{step.id}</span>
                    </div>

                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center mb-6 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p className="text-white/60 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Bottom decorative line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-500"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                {/* Connection line (except for last item) */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
