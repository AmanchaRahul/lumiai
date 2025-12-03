"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

interface Work {
  id: number
  title: string
  client: string
  clientType: string
  tools: string[]
  description: string
  image: string
  isVideo: boolean
}

const worksData: Work[] = [
  {
    id: 1,
    title: "Reddit Comment Generator & Analyzer",
    client: "Surya (Creator & Research Enthusiast)",
    clientType: "Client",
    tools: ["Python", "N8n", "Reddit API"],
    description:
      "Automated 80% of manual research workflow and increased Reddit engagement by ~45%. Comments are context-aware, natural, and insightful.",
    image: "/works/reddit-project.svg",
    isVideo: false,
  },
  {
    id: 2,
    title: "Voice AI Calling Agent for ISMA Clinic (Dubai)",
    client: "ISMA Clinic • Healthcare",
    clientType: "Client",
    tools: ["Voiceflow", "Twilio", "Make"],
    description:
      "60% reduction in missed appointment calls; 24/7 patient support with multilingual automated handling.",
    image: "/works/voice-ai-project.svg",
    isVideo: false,
  },
  {
    id: 3,
    title: "Personal Reminder & Task AI for Abdul (Dubai)",
    client: "Abdul (Private Client - Dubai)",
    clientType: "Client",
    tools: ["N8n", "Google Calendar API", "Twilio SMS"],
    description:
      "Nearly 0% missed appointments and fully automated daily scheduling including prayer times.",
    image: "/works/reminder-ai-project.svg",
    isVideo: false,
  },
  {
    id: 4,
    title: "Lead Generation System for Shivam Computers (Tally MSPs)",
    client: "Shivam Computers - Accounting Software MSP",
    clientType: "Client",
    tools: ["Scrapy", "Make", "Google Sheets"],
    description:
      "Automatically generates 300+ verified leads weekly and eliminates manual data entry.",
    image: "/works/lead-generation-project.svg",
    isVideo: false,
  },
  {
    id: 5,
    title: "WhatsApp & Email Campaign Automation for VybeSchool",
    client: "VybeSchool - EdTech Startup",
    clientType: "Client",
    tools: ["WhatsApp Cloud API", "Gmail API", "Make"],
    description:
      "3x increase in open rates and 80% reduction in manual campaign setup time with personalized flows.",
    image: "/works/whatsapp-email-campaign.svg",
    isVideo: false,
  },
  {
    id: 6,
    title: "Customized AI Automation & Agents",
    client: "Custom AI Solutions",
    clientType: "Service",
    tools: ["Smart Chat", "Voice Agents", "Workflow Automation"],
    description:
      "AI systems built around your business from smart chat and voice agents to complete workflow automations that save time and scale impact.",
    image: "/works/custom-ai-automation.svg",
    isVideo: false,
  },
]

export default function WorksSection() {
  const [visibleCount, setVisibleCount] = useState(2)
  const [expandedWork, setExpandedWork] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const visibleWorks = worksData.slice(0, visibleCount)
  const hasMore = visibleCount < worksData.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, worksData.length))
    // Scroll to bottom of container
    setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
      }
    }, 100)
  }

  return (
    <section id="work" className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden px-4 sm:px-6">
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
        <div className="absolute top-20 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl"></div>
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
            <span className="text-sm font-medium text-white/80">Our Work</span>
          </div>

          <h2
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-6",
              geist.className,
            )}
          >
            Projects That Made Impact
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Explore the transformative AI automation solutions we've built for diverse clients across industries.
          </p>
        </motion.div>

        {/* Works Grid */}
        <div ref={scrollContainerRef} className="space-y-8 sm:space-y-12">
          <AnimatePresence>
            {visibleWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center",
                  index % 2 === 1 && "md:grid-flow-dense",
                )}
              >
                {/* Media Section - Left on even, right on odd */}
                <motion.div
                  className={cn(
                    "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 aspect-video",
                    index % 2 === 1 && "md:order-2",
                  )}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
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
                  
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-colors"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Image */}
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Video play button */}
                  {work.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/40 hover:scale-110 transition-all duration-300 cursor-pointer border border-white/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          className="w-8 h-8 text-white fill-white translate-x-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </motion.div>

                {/* Description Section - Right on even, left on odd */}
                <motion.div
                  className={cn("flex flex-col justify-center space-y-6", index % 2 === 1 && "md:order-1")}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                      {work.title}
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        {work.client}
                      </p>
                      <p className="text-sm text-white/50 uppercase tracking-wide font-medium">{work.clientType}</p>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                    {work.description}
                  </p>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-3 font-semibold">
                      Tools & Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {work.tools.map((tool, toolIndex) => (
                        <motion.span
                          key={tool}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: toolIndex * 0.05 }}
                          className="group/tag relative px-4 py-2 rounded-full text-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white/90 hover:border-primary/50 hover:bg-white/15 transition-all duration-300 cursor-default overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/tag:opacity-100 transition-opacity"></div>
                          <span className="relative">{tool}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary font-semibold hover:border-primary/40 hover:bg-primary/20 transition-all duration-300 group w-fit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Case Study</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 sm:mt-16 flex justify-center"
          >
            <motion.button
              onClick={handleLoadMore}
              className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-primary via-primary to-primary/90 text-white font-semibold text-sm sm:text-base overflow-hidden shadow-2xl hover:shadow-primary/25 transition-all duration-300 border border-primary/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative flex items-center justify-center gap-3">
                <span className="tracking-wide">View More Projects</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
