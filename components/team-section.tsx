"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

interface TeamMember {
  id: number
  name: string
  role: string
  story: string
  image?: string
  linkedin?: string
  instagram?: string
  rowSpan?: number
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "VEERLA ANJUDEEP",
    role: "AI Engineer",
    story: "4+ years of experience in building AI chatbots, voice agents, and websites. AI Superstack Mentor.",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 2,
    name: "BOMMAKANTI MANEESH",
    role: "AI Engineer",
    story: "AI Creator, No-code/Low-code Developer, R&D AI Specialist, and AI Superstack Mentor.",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
  },
  {
    id: 3,
    name: "VIKAS CHARY ALWALA",
    role: "Gen AI Specialist",
    story: "Experienced technology professional with expertise in software development and innovation",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 4,
    name: "UDAY",
    role: "Senior Software Engineer / AI Engineer",
    story: "11+ years of experience in AI, cloud, and enterprise systems. Expert in AI agents, LLMOps, multimodal applications, and GPU-optimized AI workflows.",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 5,
    name: "Coming Soon",
    role: "Team Member",
    story: "Join our team and help us build the future of AI automation.",
    linkedin: "",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-12 flex w-full flex-col items-center justify-center text-center">
          <h2
            className={cn(
              "bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-5xl",
            )}
          >
            Who We Are
          </h2>
          <p className="mt-2 max-w-2xl text-xs sm:text-sm text-zinc-400">
            A small team solving real automation problems for businesses that need results.
          </p>
        </div>

        {/* Team Grid - Responsive layout with reduced image height */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Container - Clean borders, no glows */}
              <div className="relative h-full border border-zinc-800 rounded-lg bg-zinc-950 p-6 transition-colors hover:border-zinc-700 flex flex-col">
                {/* Geometric placeholder (when no image) - Reduced height */}
                {!member.image && (
                  <div className="relative aspect-[4/3] bg-zinc-900 border border-zinc-800/50 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    {/* Abstract geometric pattern - minimal */}
                    <div className="relative w-24 h-24">
                      <div className="absolute inset-0 border-2 border-[#e78a53]/20 rotate-45"></div>
                      <div className="absolute inset-4 border-2 border-zinc-700 rotate-45"></div>
                      <div className="absolute inset-8 border-2 border-[#e78a53]/10 rotate-45"></div>
                    </div>
                  </div>
                )}

                {/* If image exists - Reduced height */}
                {member.image && (
                  <div className="relative aspect-[4/3] bg-zinc-900 border border-zinc-800 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}

                {/* Member Info - Left-aligned with more space */}
                <div className="space-y-3 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-50 mb-1 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#e78a53] leading-tight">{member.role}</p>
                  </div>

                  {/* Story text - More space for descriptions */}
                  <p className="text-sm text-zinc-400 leading-relaxed flex-1">
                    {member.story}
                  </p>

                  {/* Social Links - Minimal */}
                  {(member.linkedin || member.instagram) && (
                    <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/50">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-500 hover:text-zinc-300 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-500 hover:text-zinc-300 transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram className="w-4 h-4" strokeWidth={1.5} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA - Cleaner, more professional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-16 border-t border-zinc-800/50"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-zinc-50 mb-4">
              Building something meaningful?
            </h3>
            <p className="text-zinc-400 mb-8">
              We're always looking for talented engineers, designers, and strategists who want to solve real automation challenges.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-zinc-50 transition-colors"
            >
              <span className="font-medium">View Open Roles</span>
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
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
