import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import CourseProvider from "@/components/provider/course-provider";
import CourseItems from "@/components/course/course-items";
import BannerArea from "@/components/banner/banner-area";

export const metadata: Metadata = {
  title: "All Disciplines - IntelliPath AI",
  description: "Explore all available disciplines and courses powered by AI technology",
};

export default function DisciplinesPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbOne
        title="All Disciplines"
        subtitle="Explore Our Comprehensive Learning Paths"
      />
      {/* breadcrumb area end */}

      {/* disciplines area start */}
      <CourseProvider>
        <section className="course-area pt-100 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-section mb-50 text-center">
                  <h5 className="tp-section-3-subtitle">Our Disciplines</h5>
                  <h3 className="tp-section-3-title">
                    Master Any Field with AI-Powered Learning
                  </h3>
                  <p className="mt-3">
                    From Computer Science to Medical Studies, each discipline features 
                    intelligent tools and adaptive learning paths tailored to your goals
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <CourseItems />
            </div>
          </div>
        </section>
      </CourseProvider>
      {/* disciplines area end */}

      {/* banner area start */}
      <BannerArea />
      {/* banner area end */}
    </main>
  );
}
