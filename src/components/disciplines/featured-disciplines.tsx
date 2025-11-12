"use client";
import Link from "next/link";
import Image from "next/image";
import { online_courses_data } from "@/data/course-data";
import shape_underline from "@/assets/img/unlerline/course-2-svg-1.svg";

export default function FeaturedDisciplines() {
  return (
    <section className="tp-featured-disciplines-area grey-bg pt-100 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-8 col-lg-10">
            <div className="tp-section mb-50 text-center">
              <h5 className="tp-section-3-subtitle">Featured Disciplines</h5>
              <h3 className="tp-section-3-title">
                Explore Our{" "}
                <span>
                  Top Disciplines
                  <Image
                    className="tp-underline-shape-6 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="shape-underline"
                  />
                </span>
              </h3>
              <p className="mt-3">
                Each discipline is powered by advanced AI technology, providing personalized 
                learning paths and intelligent tools designed for your success
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {online_courses_data.slice(0, 3).map((discipline, index) => (
            <div
              key={discipline.id}
              className="col-xl-4 col-lg-6 col-md-6 mb-30"
            >
              <div
                className="tp-featured-discipline-item wow fadeInUp"
                data-wow-delay={`.${index + 3}s`}
              >
                <div className="tp-featured-discipline-thumb">
                  <Link href={`/course-details/${discipline.id}`}>
                    <Image
                      src={discipline.thumbnail}
                      alt={discipline.title}
                      width={370}
                      height={280}
                      style={{ width: "100%", height: "280px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="tp-featured-discipline-content">
                  <div className="tp-featured-discipline-tag mb-15">
                    <span className="tag-span">{discipline.category}</span>
                  </div>
                  <h3 className="tp-featured-discipline-title">
                    <Link href={`/course-details/${discipline.id}`}>
                      {discipline.title}
                    </Link>
                  </h3>
                  <p className="mb-20">{discipline.description}</p>

                  {/* AI Features */}
                  {discipline.features && (
                    <div className="tp-featured-discipline-features mb-20">
                      <h5 className="features-title">AI-Powered Tools:</h5>
                      {discipline.features.map((feature, idx) => (
                        <div key={idx} className="feature-item mb-10">
                          <div className="d-flex align-items-start">
                            <span className="feature-icon me-2">
                              <i className="fa-solid fa-robot"></i>
                            </span>
                            <div>
                              <strong>{feature.name}:</strong>
                              <span className="ms-1">{feature.description}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Discipline Info */}
                  <div className="tp-featured-discipline-meta d-flex align-items-center justify-content-between">
                    <div className="tp-featured-discipline-lessons">
                      <span>
                        <i className="fa-light fa-file-lines"></i>
                        {discipline.lessons} Lessons
                      </span>
                    </div>
                    <div className="tp-featured-discipline-students">
                      <span>
                        <i className="fa-light fa-user"></i>
                        {discipline.students} Students
                      </span>
                    </div>
                  </div>

                  <div className="tp-featured-discipline-btn mt-20">
                    <Link
                      href={`/course-details/${discipline.id}`}
                      className="tp-btn-border w-100 text-center"
                    >
                      Explore {discipline.category}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="row">
          <div className="col-12">
            <div className="tp-featured-discipline-all-btn text-center mt-30">
              <Link href="/disciplines" className="tp-btn-inner">
                View All Disciplines
                <span className="ms-2">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
