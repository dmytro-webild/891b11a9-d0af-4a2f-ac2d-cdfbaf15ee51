"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Camera, Facebook, Film, Globe, Heart, Instagram, MessageCircle, Twitter, Users, Video } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="noise"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Features",
          id: "features",
          href: "#features",
        },
        {
          name: "Metrics",
          id: "metrics",
          href: "#metrics",
        },
        {
          name: "Testimonials",
          id: "testimonials",
          href: "#testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
          href: "#faq",
        },
      ]}
      button={{
        text: "Get Started Free",
        href: "#",
      }}
      brandName="ConnectFlow"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "cell-wave",
      }}
      title="Create, Connect, and Share Your Story"
      description="One app for short videos, realtime messaging, and your social network. Edit, discover trending content, and stay connected with people who matter."
      buttons={[
        {
          text: "Get Started Free",
          href: "#",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/a-high-resolution-still-image-from-a-dyn-1774379257577-b159199f.png"
      videoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/a-dynamic-short-form-video-showcasing-di-1774379257599-37c17894.png"
      imageAlt="ConnectFlow social media app in action with video editing and messaging features"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Camera,
          title: "Short-Form Video Creation",
          description: "Create stunning short videos with intuitive editing tools, effects, and music.",
        },
        {
          icon: MessageCircle,
          title: "Realtime Messaging",
          description: "Stay connected with friends through instant, secure private and group chats.",
        },
        {
          icon: Users,
          title: "Smart Contact Management",
          description: "Effortlessly organize your social circle and discover new connections.",
        },
        {
          icon: Globe,
          title: "Vibrant Community Features",
          description: "Explore trending content, join groups, and engage with like-minded creators.",
        },
      ]}
      title="Unlock Your Creative Potential"
      description="Our platform provides powerful tools for video creation, seamless sharing, and engaging communication."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "users",
          icon: Users,
          title: "Active Creators",
          value: "10M+",
        },
        {
          id: "videos",
          icon: Video,
          title: "Videos Shared Daily",
          value: "500K+",
        },
        {
          id: "engagement",
          icon: Heart,
          title: "Engagement Rate",
          value: "95%",
        },
      ]}
      title="Join Our Growing Community"
      description="See how ConnectFlow is empowering creators and fostering connections worldwide."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "Content Creator",
          company: "ViralVids",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/professional-headshot-of-a-diverse-young-1774379256281-5ca1275a.png",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "Social Enthusiast",
          company: "ConnectDaily",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/professional-headshot-of-a-diverse-young-1774379256872-9a83c67c.png",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "Community Builder",
          company: "GroupGroove",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/professional-headshot-of-a-diverse-young-1774379256552-027f29b7.png",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Developer",
          company: "CodeFlow",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/professional-headshot-of-a-diverse-young-1774379257882-1aba7bf8.png",
        },
        {
          id: "5",
          name: "Olivia White",
          role: "Student",
          company: "UniVibe",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/professional-headshot-of-a-diverse-young-1774379256252-9b1c3dd8.png",
        },
        {
          id: "6",
          name: "James Brown",
          role: "Freelancer",
          company: "CreativeHub",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/professional-headshot-of-a-diverse-young-1774379257539-62a2cec5.png",
        },
      ]}
      kpiItems={[
        {
          id: "kpi-1",
          value: "100M+",
          label: "Messages Sent Daily",
        },
        {
          id: "kpi-2",
          value: "1M+",
          label: "New Connections Weekly",
        },
        {
          id: "kpi-3",
          value: "90%",
          label: "Content Discovery",
        },
      ]}
      title="What Our Community Says"
      description="Hear from content creators and users who love connecting and sharing on ConnectFlow."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      logos={[
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/a-sleek-modern-tech-brand-logo-with-abst-1774379256077-13ad72b3.png",
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/a-professional-minimalist-logo-for-a-mob-1774379257022-b8e47d5d.png",
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/a-contemporary-logo-for-a-social-media-o-1774379256017-92df1ffa.png",
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/an-innovative-and-bold-logo-for-a-conten-1774379257560-b63a5b30.png",
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/a-clean-corporate-logo-for-a-backend-or--1774379256183-34889a1a.png",
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/a-vibrant-and-playful-logo-for-a-youth-f-1774379256008-1d54576a.png",
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/a-futuristic-and-sleek-logo-for-an-ai-po-1774379257158-270137ba.png",
      ]}
      title="Trusted by Leading Creators & Communities"
      description="Our platform is building partnerships to enhance your social experience and reach."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How do I create a short video?",
          content: "Simply tap the '+' button in the app, record or upload your footage, then use our intuitive editor to add music, effects, and text before sharing.",
        },
        {
          id: "2",
          title: "Is my data secure on ConnectFlow?",
          content: "Yes, we prioritize your privacy and data security. All communications and personal information are protected with end-to-end encryption and robust security protocols.",
        },
        {
          id: "3",
          title: "Can I import contacts from my phone?",
          content: "Absolutely! ConnectFlow allows you to easily sync your phone contacts to find friends already on the platform or invite new ones.",
        },
        {
          id: "4",
          title: "What are the community guidelines?",
          content: "We foster a positive and respectful environment. Our detailed community guidelines prohibit hate speech, harassment, and inappropriate content. You can find the full guidelines in the app's settings.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about ConnectFlow's features, privacy, and community guidelines."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="ConnectFlow"
      copyrightText="© 2024 ConnectFlow. All rights reserved."
      socialLinks={[
        {
          icon: Twitter,
          href: "https://twitter.com/connectflow",
          ariaLabel: "Twitter",
        },
        {
          icon: Instagram,
          href: "https://instagram.com/connectflow",
          ariaLabel: "Instagram",
        },
        {
          icon: Film,
          href: "https://youtube.com/connectflow",
          ariaLabel: "YouTube",
        },
        {
          icon: Facebook,
          href: "https://facebook.com/connectflow",
          ariaLabel: "Facebook",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
