import { Metadata } from "next";
import BannerArea from "@/components/banner/banner-area";

import CategoryArea from "@/components/category/category-area";
import CourseArea from "@/components/course/course-area";

import CtaTwo from "@/components/cta/cta-two";
import FunFactArea from "@/components/fun-fact/fun-fact-area";
import HeroAreaTwo from "@/components/hero-area/hero-area-two";

import TestimonialTwo from "@/components/testimonial/testimonial-two";
import TutoringFeatures from "@/components/feature/tutoring-features";

import TabCoursesList from "@/components/course/tab-courses-list";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import { online_courses_data } from "@/data/course-data";
import MembershipArea from "@/app/(pages)/membership-plans/_components/membership-area";
import ProPlanBanner from "@/components/banner/pro-plan-banner";


export const metadata: Metadata = {
  title: "Online Course - IntelliPath AI",
};

export default function HomePage() {
  return (
  <main>
      {/* hero area start */}
      <HeroAreaTwo />
      {/* hero area end */}

      {/* fun fact area start */}
      <FunFactArea/>
      {/* fun fact area end */}

      {/* course area start */}
      <CourseArea/>
      {/* course area end */}

      {/* tab courses list area start */}
      <CourseFilterProvider initialCourses={online_courses_data}>
        <TabCoursesList className="lightblue-bg" />
      </CourseFilterProvider>
      {/* tab courses list area end */}

    {/* category area */}
      <CategoryArea />
      {/* category area */}
      
      {/* course live area start */}
      {/* <CourseLiveArea/> */}
      {/* course live area end */}

      {/* testimonial area start */}
      <TestimonialTwo/>
      {/* testimonial area end */}
<ProPlanBanner/>
      {/* membership plans start */}
      <MembershipArea/>
      {/* membership plans end */}

      {/* team area start */}
      {/* <TeamArea/> */}
      {/* team area end */}

      {/* brand area start */}
      {/* <BrandArea/> */}
      {/* brand area end */}
      <TutoringFeatures/>
      {/* banner area start */}
      <BannerArea/>
      {/* banner area end */}

      {/* cta area start */}
      <CtaTwo/>
    {/* cta area end */}
    </main>
  );
}
