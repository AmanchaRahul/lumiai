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
    name: "Maneesh Sharma",
    role: "Co-Founder & AI Architect",
    story: "Former tech lead at scale-ups, now building automation systems that actually ship. Obsessed with turning complex workflows into elegant code.",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 2,
    name: "Anjudeep Singh",
    role: "Co-Founder & Strategy Lead",
    story: "Product strategist who translates business problems into automation roadmaps. Spent 5 years optimizing SaaS operations before co-founding LUMI AI.",
    instagram: "https://instagram.com/username",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 3,
    name: "Priya Desai",
    role: "Senior Integration Engineer",
    story: "API whisperer. Connects disparate systems and makes them talk. Previously built integrations for fintech and healthcare platforms.",
    linkedin: "https://linkedin.com/in/username",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#e78a53]"></div>
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
              Team
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-50 mb-6">
            Who We Are
          </h2>

          <p className="text-lg text-zinc-400 leading-relaxed">
            A small team solving real automation problems for businesses that need results, not buzzwords.
          </p>
        </motion.div>

        {/* Team Grid - Equal height cards */}
        <div className="grid md:grid-cols-3 gap-8">
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
              <div className="relative h-full border border-zinc-800 bg-zinc-950 p-8 transition-colors hover:border-zinc-700">
                {/* Geometric placeholder (when no image) */}
                {!member.image && (
                  <div className="relative aspect-[3/4] bg-zinc-900 border border-zinc-800/50 mb-6 overflow-hidden flex items-center justify-center">
                    {/* Abstract geometric pattern - minimal */}
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 border-2 border-[#e78a53]/20 rotate-45"></div>
                      <div className="absolute inset-4 border-2 border-zinc-700 rotate-45"></div>
                      <div className="absolute inset-8 border-2 border-[#e78a53]/10 rotate-45"></div>
                    </div>
                  </div>
                )}

                {/* If image exists */}
                {member.image && (
                  <div className="relative aspect-[3/4] bg-zinc-900 border border-zinc-800 mb-6 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}

                {/* Member Info - Left-aligned */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-50 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#e78a53]">{member.role}</p>
                  </div>

                  {/* Story text - real context, not generic */}
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {member.story}
                  </p>

                  {/* Social Links - Minimal */}
                  {(member.linkedin || member.instagram) && (
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/50">
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
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-zinc-50 transition-colors"
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
