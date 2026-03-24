import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'ConnectFlow | Create, Connect, Share Your Story',
  description: 'One app for short videos, realtime messaging, and your social network. Edit, discover trending content, and stay connected with people who matter.',
  keywords: ["social network, short video, messaging, content creation, community, video sharing, social app, Gen Z, millennials"],
  openGraph: {
    "title": "ConnectFlow | Create, Connect, Share Your Story",
    "description": "One app for short videos, realtime messaging, and your social network. Edit, discover trending content, and stay connected with people who matter.",
    "url": "https://www.connectflow.com",
    "siteName": "ConnectFlow",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/a-high-resolution-still-image-from-a-dyn-1774379257577-b159199f.png",
        "alt": "ConnectFlow app interface"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "ConnectFlow | Create, Connect, Share Your Story",
    "description": "One app for short videos, realtime messaging, and your social network. Edit, discover trending content, and stay connected with people who matter.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BOowpucOShdQVFv00zIo9jhAzK/a-high-resolution-still-image-from-a-dyn-1774379257577-b159199f.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
