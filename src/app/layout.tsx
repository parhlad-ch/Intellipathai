import type { Metadata } from "next";
import "./globals.scss";
import {Outfit,Jost,Crimson_Pro} from 'next/font/google';
import HeaderTwo from "@/components/header/header-two";
import BackToTop from "@/components/back-to-top";
import MainProvider from "@/components/provider/main-provider";
import FooterTwo from "@/components/footer/footer-two";


const outfit_bold = Outfit({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-body'
});
const outfit_heading = Outfit({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-heading'
});
const outfit_p = Outfit({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-p'
});
const jost_primary = Jost({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-primary'
});
const crismon_secondary = Crimson_Pro({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-secondary'
});


export const metadata: Metadata = {
  title: "IntelliPath AI - University & Online Course Platform",
  description: "IntelliPath AI – platform is perfect for a variety of educational needs, including e-Learning, Course Schools, Online Schools, Kindergartens, Classic LMS setups, University Status pages, Instructor Portfolios, Language Academies, Gym Coaching, Online Courses, Single Courses, marketplaces, University Classics, Elegant Homepages, Technology-focused Homepages, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit_bold.variable} ${outfit_heading.variable} ${outfit_p.variable} ${jost_primary.variable} ${crismon_secondary.variable}`}>
        <MainProvider>
          {/* header area start */}
          <HeaderTwo />
          {/* header area end */}

          {/* main content */}
          {children}
          {/* main content */}

          {/* footer area start */}
          <FooterTwo />
          {/* footer area end */}
          
          {/* back to top */}
          <BackToTop />
        </MainProvider>
      </body>
    </html>
  );
}
