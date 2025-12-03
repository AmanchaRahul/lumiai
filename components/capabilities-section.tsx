"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Mic, Target, FileText, MessageCircle, Workflow, 
  Megaphone, Users, BarChart3, Image, Volume2, 
  ImagePlus, Film, Video, Rocket, UserSquare2 
} from "lucide-react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

interface Capability {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  category: "automation" | "generation" | "intelligence"
}

const capabilities: Capability[] = [
  {
    id: 1,
    title: "Voice AI Agents",
    description: "Intelligent voice systems that handle customer interactions, appointments, and support 24/7 with natural conversations.",
    icon: Mic,
    category: "intelligence",
  },
  {
    id: 2,
    title: "Lead Generation Systems",
    description: "Automated systems that identify, qualify, and engage potential customers at scale without manual intervention.",
    icon: Target,
    category: "automation",
  },
  {
    id: 3,
    title: "Content Automation",
    description: "AI-powered content creation and distribution that maintains quality while scaling your production capacity.",
    icon: FileText,
    category: "generation",
  },
  {
    id: 4,
    title: "Customer Support Bots",
    description: "Intelligent chatbots that resolve customer issues instantly, reducing response time and improving satisfaction.",
    icon: MessageCircle,
    category: "intelligence",
  },
  {
    id: 5,
    title: "Internal Tools & Workflow Automation",
    description: "Streamline your team's operations with custom workflows that eliminate repetitive tasks and boost productivity.",
    icon: Workflow,
    category: "automation",
  },
  {
    id: 6,
    title: "Marketing Campaign Automation",
    description: "End-to-end automation for email, SMS, and social campaigns with personalization at scale.",
    icon: Megaphone,
    category: "automation",
  },
  {
    id: 7,
    title: "HR & Recruitment Automation",
    description: "Automate hiring workflows, candidate screening, and onboarding to accelerate your talent acquisition.",
    icon: Users,
    category: "automation",
  },
  {
    id: 8,
    title: "Reporting & Analytics Automation",
    description: "Real-time dashboards and automated reports that keep your team informed without manual data compilation.",
    icon: BarChart3,
    category: "intelligence",
  },
  {
    id: 9,
    title: "Generate Thumbnail Reaction Poses",
    description: "AI-generated visual assets for content creators to scale production and maintain consistency.",
    icon: Image,
    category: "generation",
  },
  {
    id: 10,
    title: "Clone Your Voice",
    description: "Voice cloning technology for personalized AI interactions, voiceovers, and branded communications.",
    icon: Volume2,
    category: "generation",
  },
  {
    id: 11,
    title: "Enhance Images to High Resolution",
    description: "AI upscaling and enhancement technology that transforms standard images into professional-quality assets.",
    icon: ImagePlus,
    category: "generation",
  },
  {
    id: 12,
    title: "Create AI-Generated Films",
    description: "Generate complete video content with AI including scripts, visuals, voiceovers, and editing.",
    icon: Film,
    category: "generation",
  },
  {
    id: 13,
    title: "Produce Commercial Ads",
    description: "Automated creation of professional advertisements tailored to your brand and target audience.",
    icon: Video,
    category: "generation",
  },
  {
    id: 14,
    title: "Scale Content with AI Automation",
    description: "Multiply your content output across multiple platforms while maintaining brand voice and quality.",
    icon: Rocket,
    category: "automation",
  },
  {
    id: 15,
    title: "Clone Your Video Avatar",
    description: "Create AI-powered video avatars that can present content, deliver messages, and engage audiences.",
    icon: UserSquare2,
    category: "generation",
  },
]

export default function CapabilitiesSection() {
  const [selectedCapability, setSelectedCapability] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(9) // Show 3x3 grid initially

  const visibleCapabilities = capabilities.slice(0, visibleCount)
  const hasMore = visibleCount < capabilities.length

  const handleLoadMore = () => {
    setVisibleCount(capabilities.length)
  }

  return (
    <section
      id="capabilities"
      className="relative w-full py-24 sm:py-32 md:py-40 overflow-hidden"
    >
      {/* Sophisticated Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(231,138,83,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(231,138,83,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold">
              Capabilities
            </span>
          </div>

          <h2
            className={cn(
              "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none",
              geist.className,
            )}
          >
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Applied AI from
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              idea to impact.
            </span>
          </h2>
        </motion.div>

        {/* Capabilities Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          <AnimatePresence>
            {visibleCapabilities.map((capability, index) => {
              const Icon = capability.icon
              const isExpanded = selectedCapability === capability.id
              const isHovered = hoveredId === capability.id

              return (
                <motion.div
                  key={capability.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedCapability(isExpanded ? null : capability.id)}
                  onMouseEnter={() => setHoveredId(capability.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={cn(
                    "relative bg-black p-8 cursor-pointer group transition-all duration-300",
                    isExpanded && "md:col-span-2 lg:row-span-2",
                    isHovered && !isExpanded && "bg-white/[0.02]",
                  )}
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={cn(
                        "inline-flex p-3 rounded-xl border border-white/10 bg-white/5 transition-all duration-300",
                        isHovered && "border-primary/30 bg-primary/10 scale-110",
                      )}>
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={cn(
                      "text-xl font-semibold text-white mb-3 transition-colors duration-300",
                      isHovered && "text-primary",
                    )}>
                      {capability.title}
                    </h3>

                    {/* Description - Always visible */}
                    <p className="text-sm text-white/60 leading-relaxed mb-4">
                      {capability.description}
                    </p>

                    {/* Expand indicator */}
                    <div className="flex items-center gap-2 text-xs text-primary/60 group-hover:text-primary transition-colors">
                      <span className="uppercase tracking-wider font-medium">
                        {isExpanded ? "Collapse" : "Learn more"}
                      </span>
                      <motion.div
                        animate={{ x: isHovered ? 4 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-transparent transition-all duration-500",
                    isHovered ? "w-full" : "w-0",
                  )}></div>

                  {/* Corner accent */}
                  <div className={cn(
                    "absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300",
                    isHovered && "opacity-100",
                  )}></div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <span>View All Capabilities</span>
              <svg
                className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-white/60 mb-6 text-lg">
            Need something custom? We build tailored AI solutions for your unique challenges.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-full hover:bg-white/[0.15] hover:border-primary/50 transition-all duration-300 group"
          >
            <span className="text-white font-semibold">Discuss Your Project</span>
            <svg
              className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
