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
    <section id="work" className="relative w-full py-20 sm:py-24 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-12 flex w-full flex-col items-center justify-center text-center">
          <h2
            className={cn(
              "bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-5xl",
            )}
          >
            Projects That Made Impact
          </h2>
          <p className="mt-2 max-w-2xl text-xs sm:text-sm text-zinc-400">
            Real automation solutions delivering measurable results for businesses worldwide.
          </p>
        </div>

        {/* Works Grid */}
        <div ref={scrollContainerRef} className="space-y-12">
          <AnimatePresence>
            {visibleWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-zinc-800 rounded-lg bg-zinc-950 p-6 md:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Image Section */}
                  <div className="relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 aspect-video">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-zinc-50">
                      {work.title}
                    </h3>
                    
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-[#e78a53]">
                        {work.client}
                      </p>
                      <p className="text-xs text-zinc-500 uppercase tracking-wide">{work.clientType}</p>
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {work.description}
                    </p>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-600 mb-2">
                        Tools
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {work.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 rounded-full text-xs bg-zinc-900 border border-zinc-800 text-zinc-400"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
            className="mt-12 flex justify-center"
          >
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-zinc-50 transition-colors"
            >
              <span>View More Projects</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
