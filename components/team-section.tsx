"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  linkedin?: string
  instagram?: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Team Member 1",
    role: "Co-Founder & CEO",
    image: "/placeholder-user.jpg",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
  },
  {
    id: 2,
    name: "Team Member 2",
    role: "Co-Founder & CTO",
    image: "/placeholder-user.jpg",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
  },
  {
    id: 3,
    name: "Team Member 3",
    role: "Lead AI Engineer",
    image: "/placeholder-user.jpg",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
  },
  {
    id: 4,
    name: "Team Member 4",
    role: "Head of Operations",
    image: "/placeholder-user.jpg",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden px-4 sm:px-6">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, oklch(0.95 0 0) 1px, transparent 1px),
              linear-gradient(to bottom, oklch(0.95 0 0) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium text-white/80">Meet the Team</span>
          </div>

          <h2
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-6",
              geist.className,
            )}
          >
            The Minds Behind Innovation
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Meet the passionate individuals driving LUMI AI forward, building intelligent solutions that transform businesses.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(231,138,83,0.15)]">
                {/* Inner grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, oklch(0.95 0 0) 1px, transparent 1px),
                      linear-gradient(to bottom, oklch(0.95 0 0) 1px, transparent 1px)
                    `,
                    backgroundSize: "30px 30px",
                  }}
                ></div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Social Links - Positioned at bottom of image */}
                  <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary hover:border-primary transition-all duration-200"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </motion.a>
                    )}
                    {member.instagram && (
                      <motion.a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary hover:border-primary transition-all duration-200"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Instagram className="w-5 h-5 text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Member Info */}
                <div className="relative p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-white/60">{member.role}</p>

                  {/* Decorative line */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  ></motion.div>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-4">Want to join our team and shape the future of AI automation?</p>
          <motion.a
            href="/careers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/20 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium">View Open Positions</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
