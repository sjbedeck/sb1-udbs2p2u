import { ChevronUpIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Separator } from '@/components/ui/separator'
import { MotionPreset } from '@/components/ui/motion-preset'
import {
  AnimatedChevronsAccordionContent,
  AnimatedChevronsAccordionItem,
  AnimatedChevronsAccordionRoot,
  AnimatedChevronsAccordionTrigger
} from '@/components/shadcn-studio/blocks/portfolio-17/animated-chevrons-accordion'

const Portfolio = () => {
  return (
    <section>
      <div className='mx-auto flex w-full max-w-6xl flex-col border-x'>
        {/* Header */}
        <div className='space-y-2.5 px-4 py-16 md:px-6 lg:px-8'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='rounded-none px-1.5'>
              Projects
            </Badge>
          </MotionPreset>
          <div className='flex justify-between gap-4 max-md:flex-col'>
            <h2 className='max-w-100 text-2xl font-semibold sm:text-3xl lg:text-4xl'>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                Work that speaks for
              </MotionPreset>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.45}
                transition={{ duration: 0.5 }}
              >
                itself. 🗣️
              </MotionPreset>
            </h2>
            <MotionPreset
              delay={0.3}
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-muted-foreground max-w-150 text-xl'>
                A collection of projects where strategy meets creativity - each crafted to deliver measurable results,
                meaningful experiences, and lasting impact through thoughtful design.
              </p>
            </MotionPreset>
          </div>
        </div>

        {/* Projects */}
        <MotionPreset delay={0.75} fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
          <Collapsible>
            <AnimatedChevronsAccordionRoot
              type='single'
              collapsible
              defaultValue='shadcn-studio'
              className='w-full border-t'
            >
              {/* shadcn/studio */}
              <AnimatedChevronsAccordionItem value='shadcn-studio'>
                <AnimatedChevronsAccordionTrigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:border-b'>
                  <span className='flex items-center'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-10.png'
                      alt='shadcn studio'
                      className='m-8 size-10 dark:invert'
                    />
                    <div className='flex flex-col gap-1.5 border-l px-2.5 py-5 text-xl'>
                      <span className='font-semibold'>shadcn/studio</span>
                      <div className='text-muted-foreground flex items-center gap-3 font-normal'>
                        <span>2 Months</span>
                        <Separator
                          orientation='vertical'
                          className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                        />
                        <span className='max-sm:hidden'>March 2025 - May 2025</span>
                      </div>
                    </div>
                  </span>
                </AnimatedChevronsAccordionTrigger>
                <AnimatedChevronsAccordionContent className='text-muted-foreground space-y-6 px-8 py-5 text-base'>
                  <p>
                    shadcn/studio is an all-in-one design system and toolkit that seamlessly blends design and
                    development. It offers a comprehensive set of customizable UI components, Figma kits, and real-time
                    collaboration tools, making it easier for teams to build scalable and consistent user interfaces.
                    With integration support for popular frameworks like React, Next.js, and Tailwind CSS, shadcn/studio
                    streamlines workflows, enhances productivity, and ensures design consistency from concept to
                    deployment. It&apos;s the perfect solution for creating high-quality, user-centric products with
                    ease and efficiency.
                  </p>

                  <div className='flex flex-col gap-5'>
                    <div>
                      <span className='text-foreground font-medium'>🎨 Design System: </span>
                      <span>
                        A robust set of UI components and design patterns that ensure consistency and scalability across
                        digital products.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>💼 Figma Kit: </span>
                      <span>
                        A robust set of UI components and design patterns that ensure consistency and scalability across
                        digital products.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>👨‍💻 Customizable: </span>
                      <span>
                        Easily adaptable to meet brand-specific needs with support for theming, styling, and component
                        customization.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🤝 Real-Time Collaboration: </span>
                      <span>
                        Enable teams to work together effectively by integrating design and code, ensuring alignment at
                        every stage of the development process.
                      </span>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <Badge variant='outline' asChild>
                      <a href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-13.png'
                          alt='figma'
                          className='h-5'
                        />
                        Figma
                      </a>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <a href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-12.png'
                          alt='framer'
                          className='h-5 dark:invert'
                        />
                        Framer
                      </a>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <a href='#' target='_blank' className='px-3.5 py-2'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-11.png'
                          alt='canva'
                          className='h-5'
                        />
                      </a>
                    </Badge>
                  </div>
                </AnimatedChevronsAccordionContent>
              </AnimatedChevronsAccordionItem>

              {/* Flyonui */}
              <AnimatedChevronsAccordionItem value='flyonui'>
                <AnimatedChevronsAccordionTrigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:border-b'>
                  <span className='flex items-center'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-09.png'
                      alt='flyonui'
                      className='m-8 size-10'
                    />
                    <div className='flex flex-col gap-1.5 border-l px-2.5 py-5 text-xl'>
                      <span className='font-semibold'>FlyonUI</span>
                      <div className='text-muted-foreground flex items-center gap-3 font-normal'>
                        <span>3 Months</span>
                        <Separator
                          orientation='vertical'
                          className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                        />
                        <span className='max-sm:hidden'>Jan 2025 - March 2025</span>
                      </div>
                    </div>
                  </span>
                </AnimatedChevronsAccordionTrigger>
                <AnimatedChevronsAccordionContent className='text-muted-foreground space-y-6 px-8 py-5 text-base'>
                  <p>
                    FlyonUI is a lightweight, performance-focused component library built to accelerate product
                    development without compromising accessibility or design consistency. It delivers modular, themeable
                    primitives, robust TypeScript typings, and seamless Tailwind integration - ideal for rapid
                    prototyping and scaling to production. With an emphasis on small bundle sizes, predictable APIs, and
                    a11y-first components, FlyonUI helps teams ship polished, maintainable interfaces faster.
                  </p>

                  {/* Features */}
                  <div className='flex flex-col gap-5'>
                    <div>
                      <span className='text-foreground font-medium'>⚙️ Micro-Interactions Library: </span>
                      <span>
                        Prebuilt, composable micro-interactions (toasts, hovers, focus states) that unify UX motion.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>📦 Offline-First Components: </span>
                      <span>
                        Resilient UI primitives with built-in caching and graceful degradation for flaky networks.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>📐 Adaptive Layouts: </span>
                      <span>
                        Layout helpers leveraging container queries and responsive utilities for context-aware UIs.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🔬 Visual Regression Hooks: </span>
                      <span>Integrated test hooks and snapshot utilities to simplify visual regression testing.</span>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <Badge variant='outline' asChild>
                      <a href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-13.png'
                          alt='figma'
                          className='h-5'
                        />
                        Figma
                      </a>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <a href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-12.png'
                          alt='framer'
                          className='h-5 dark:invert'
                        />
                        Framer
                      </a>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <a href='#' target='_blank' className='px-3.5 py-2'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-11.png'
                          alt='canva'
                          className='h-5'
                        />
                      </a>
                    </Badge>
                  </div>
                </AnimatedChevronsAccordionContent>
              </AnimatedChevronsAccordionItem>

              {/* Jetship */}
              <AnimatedChevronsAccordionItem value='jetship'>
                <AnimatedChevronsAccordionTrigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:border-b'>
                  <span className='flex items-center'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-08.png'
                      alt='jetship'
                      className='m-8 size-10'
                    />
                    <div className='flex flex-col gap-1.5 border-l px-2.5 py-5 text-xl'>
                      <span className='font-semibold'>Jetship</span>
                      <div className='text-muted-foreground flex items-center gap-3 font-normal'>
                        <span>4 Months</span>
                        <Separator
                          orientation='vertical'
                          className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                        />
                        <span className='max-sm:hidden'>Sep 2024 - Dec 2024</span>
                      </div>
                    </div>
                  </span>
                </AnimatedChevronsAccordionTrigger>

                <AnimatedChevronsAccordionContent className='text-muted-foreground space-y-6 px-8 py-5 text-base'>
                  <p>
                    Jetship is a next-generation logistics orchestration platform that turns complex freight operations
                    into predictable, automated workflows. With real-time route optimization, intelligent load matching,
                    and end-to-end shipment visibility, Jetship reduces transit times and costs while improving carrier
                    and shipper collaboration. Designed for scale with a microservices architecture and robust
                    observability, it empowers logistics teams to automate decisions, surface actionable insights, and
                    deliver faster, greener transportation at enterprise scale.
                  </p>

                  {/* Features */}
                  <div className='flex flex-col gap-5'>
                    <div>
                      <span className='text-foreground font-medium'>🚚 Dynamic Route Optimization: </span>
                      <span>
                        Real-time route planning that minimizes miles, fuel, and delays using live traffic, weather, and
                        load constraints.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🔗 Intelligent Load Matching: </span>
                      <span>AI-driven carrier & load matching to maximize utilization and reduce empty miles.</span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>📍 End-to-End Visibility: </span>
                      <span>
                        Live GPS tracking, geofenced milestones, and collaborative ETA sharing for shippers and
                        carriers.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>⚡ Predictive ETAs & Exceptions: </span>
                      <span>
                        Machine-learned ETA predictions with automated exception detection and remediation suggestions.
                      </span>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <Badge variant='outline' asChild>
                      <a href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-13.png'
                          alt='figma'
                          className='h-5'
                        />
                        Figma
                      </a>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <a href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-12.png'
                          alt='framer'
                          className='h-5 dark:invert'
                        />
                        Framer
                      </a>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <a href='#' target='_blank' className='px-3.5 py-2'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-11.png'
                          alt='canva'
                          className='h-5'
                        />
                      </a>
                    </Badge>
                  </div>
                </AnimatedChevronsAccordionContent>
              </AnimatedChevronsAccordionItem>

              {/* ThemeSelection */}
              <AnimatedChevronsAccordionItem value='themeselection'>
                <AnimatedChevronsAccordionTrigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:border-b'>
                  <span className='flex items-center'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-07.png'
                      alt='themeselection'
                      className='m-8 size-10'
                    />
                    <div className='flex flex-col gap-1.5 border-l px-2.5 py-5 text-xl'>
                      <span className='font-semibold'>Themeselection</span>
                      <div className='text-muted-foreground flex items-center gap-3 font-normal'>
                        <span>10 Months</span>
                        <Separator
                          orientation='vertical'
                          className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                        />
                        <span className='max-sm:hidden'>May 2024 - Dec 2024</span>
                      </div>
                    </div>
                  </span>
                </AnimatedChevronsAccordionTrigger>
                <AnimatedChevronsAccordionContent className='text-muted-foreground space-y-6 px-8 py-5 text-base'>
                  <p>
                    Themeselection is a curated marketplace and toolkit for high-quality UI themes and templates,
                    designed to help teams prototype and ship polished interfaces faster. It combines responsive,
                    accessible themes, ready-to-use code starters, Figma design kits, and robust customization
                    controls-streamlining design-to-code workflows while ensuring performance and consistency across
                    projects.
                  </p>

                  {/* Features */}
                  <div className='flex flex-col gap-5'>
                    <div>
                      <span className='text-foreground font-medium'>🛍️ Curated Theme Marketplace: </span>
                      <span>
                        Handpicked, high-quality themes with reviews, ratings, and curated collections for fast
                        discovery.
                      </span>
                    </div>

                    <div>
                      <span className='text-foreground font-medium'>⚙️ One-Click Installs & Starters: </span>
                      <span>
                        Ready-to-run starters and one-click installs for Next.js, Remix, and plain React projects.
                      </span>
                    </div>

                    <div>
                      <span className='text-foreground font-medium'>🎨 Live Theme Customizer: </span>
                      <span>Visual editor for colors, typography, spacing, and tokens with instant code export.</span>
                    </div>

                    <div>
                      <span className='text-foreground font-medium'>🧩 Component Library & Snippets: </span>
                      <span>Reusable, accessible components and copy-paste snippets for common UI patterns.</span>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <Badge variant='outline' asChild>
                      <a href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-13.png'
                          alt='figma'
                          className='h-5'
                        />
                        Figma
                      </a>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <a href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-12.png'
                          alt='framer'
                          className='h-5 dark:invert'
                        />
                        Framer
                      </a>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <a href='#' target='_blank' className='px-3.5 py-2'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-11.png'
                          alt='canva'
                          className='h-5'
                        />
                      </a>
                    </Badge>
                  </div>
                </AnimatedChevronsAccordionContent>
              </AnimatedChevronsAccordionItem>

              <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
                {/* Google */}
                <AnimatedChevronsAccordionItem value='google'>
                  <AnimatedChevronsAccordionTrigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:border-b'>
                    <span className='flex items-center'>
                      <img
                        src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png'
                        alt='google'
                        className='m-8 size-10'
                      />
                      <div className='flex flex-col gap-1.5 border-l px-2.5 py-5 text-xl'>
                        <span className='font-semibold'>Google</span>
                        <div className='text-muted-foreground flex items-center gap-3 font-normal'>
                          <span>7 Months</span>
                          <Separator
                            orientation='vertical'
                            className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                          />
                          <span className='max-sm:hidden'>Jul 2023 - Jan 2024</span>
                        </div>
                      </div>
                    </span>
                  </AnimatedChevronsAccordionTrigger>
                  <AnimatedChevronsAccordionContent className='text-muted-foreground space-y-6 px-8 py-5 text-base'>
                    <p>
                      Collaborated with Google to design and implement a unified component and theming platform that
                      improves cross-product consistency, accessibility, and developer velocity. Delivered tokenized
                      theming, performant React component libraries, automated visual-regression pipelines, and
                      integration tooling to streamline designer-developer handoffs across web and mobile surfaces.
                    </p>

                    {/* Features */}
                    <div className='flex flex-col gap-5'>
                      <div>
                        <span className='text-foreground font-medium'>🔗 Tokenized Cross-Platform Theming: </span>
                        <span>
                          Central design tokens exported to CSS vars, Android XML, and iOS assets for pixel-consistent
                          themes across web and native apps.
                        </span>
                      </div>
                      <div>
                        <span className='text-foreground font-medium'>🧩 Shared Component Libraries: </span>
                        <span>
                          Platform adapters and idiomatic implementations (React, React Native / mobile) so the same
                          patterns behave consistently across surfaces.
                        </span>
                      </div>
                      <div>
                        <span className='text-foreground font-medium'>♿ Accessibility & Automated Checks: </span>
                        <span>
                          Built-in a11y linting, contrast enforcement, keyboard/voiceover support, and CI gates to
                          prevent regressions.
                        </span>
                      </div>
                      <div>
                        <span className='text-foreground font-medium'>🖼️ Visual Regression & CI Integration: </span>
                        <span>
                          Automated screenshot testing, perceptual diffs, and pipelines that block visual regressions in
                          pull requests.
                        </span>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <Badge variant='outline' asChild>
                        <a href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                          <img
                            src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-13.png'
                            alt='figma'
                            className='h-5'
                          />
                          Figma
                        </a>
                      </Badge>
                      <Badge variant='outline' asChild>
                        <a href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                          <img
                            src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-12.png'
                            alt='framer'
                            className='h-5 dark:invert'
                          />
                          Framer
                        </a>
                      </Badge>
                      <Badge variant='outline' asChild>
                        <a href='#' target='_blank' className='px-3.5 py-2'>
                          <img
                            src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-11.png'
                            alt='canva'
                            className='h-5'
                          />
                        </a>
                      </Badge>
                    </div>
                  </AnimatedChevronsAccordionContent>
                </AnimatedChevronsAccordionItem>

                {/* Windows */}
                <AnimatedChevronsAccordionItem value='microsoft'>
                  <AnimatedChevronsAccordionTrigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 border-b text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50'>
                    <span className='flex items-center'>
                      <img
                        src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-icon.png'
                        alt='microsoft'
                        className='m-8 size-10'
                      />
                      <div className='flex flex-col gap-1.5 border-l px-2.5 py-5 text-xl'>
                        <span className='font-semibold'>Microsoft</span>
                        <div className='text-muted-foreground flex items-center gap-3 font-normal'>
                          <span>9 Months</span>
                          <Separator
                            orientation='vertical'
                            className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                          />
                          <span className='max-sm:hidden'>Feb 2023 - Nov 2023</span>
                        </div>
                      </div>
                    </span>
                  </AnimatedChevronsAccordionTrigger>
                  <AnimatedChevronsAccordionContent className='text-muted-foreground space-y-6 border-b px-8 py-5 text-base'>
                    <p>
                      Microsoft (Windows) - modernized the Windows UI toolkit by delivering a tokenized theming system,
                      adaptive, touch-first components, and performance optimizations that span native and web surfaces.
                      Focused on accessibility, consistency, and developer ergonomics, the work reduced visual
                      regressions, improved rendering performance, and enabled faster feature rollout across desktop
                      experiences.
                    </p>

                    {/* Features */}
                    <div className='flex flex-col gap-5'>
                      <div>
                        <span className='text-foreground font-medium'>🔧 Tokenized Theming & Exports: </span>
                        <span>
                          Central design tokens exported to CSS vars, WinUI resources, and platform assets for
                          pixel-consistent themes.
                        </span>
                      </div>

                      <div>
                        <span className='text-foreground font-medium'>🪟 Native WinUI / Fluent Controls: </span>
                        <span>
                          Adaptive, touch-first components that follow Fluent design patterns and native platform
                          ergonomics.
                        </span>
                      </div>

                      <div>
                        <span className='text-foreground font-medium'>⚡ Rendering & Performance: </span>
                        <span>
                          GPU-accelerated composition paths, reduced paint overhead, and optimized layout to improve
                          responsiveness.
                        </span>
                      </div>

                      <div>
                        <span className='text-foreground font-medium'>♿ Accessibility & Narrator Support: </span>
                        <span>
                          Keyboard navigation, Narrator semantics, high-contrast modes, and automated a11y checks
                          integrated in CI.
                        </span>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <Badge variant='outline' asChild>
                        <a href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                          <img
                            src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-13.png'
                            alt='figma'
                            className='h-5'
                          />
                          Figma
                        </a>
                      </Badge>
                      <Badge variant='outline' asChild>
                        <a href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                          <img
                            src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-12.png'
                            alt='framer'
                            className='h-5 dark:invert'
                          />
                          Framer
                        </a>
                      </Badge>
                      <Badge variant='outline' asChild>
                        <a href='#' target='_blank' className='px-3.5 py-2'>
                          <img
                            src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-11.png'
                            alt='canva'
                            className='h-5'
                          />
                        </a>
                      </Badge>
                    </div>
                  </AnimatedChevronsAccordionContent>
                </AnimatedChevronsAccordionItem>
              </CollapsibleContent>
            </AnimatedChevronsAccordionRoot>

            <div className='flex justify-center border-b py-11'>
              <CollapsibleTrigger asChild>
                <Button variant='outline' className='rounded-full !px-4'>
                  <span className='[[data-state=open]>&]:hidden'>See more</span>
                  <span className='[[data-state=closed]>&]:hidden'>See less</span>
                  <ChevronUpIcon className='[[data-state=closed]>&]:rotate-180' />
                </Button>
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </MotionPreset>
      </div>
    </section>
  )
}

export default Portfolio
