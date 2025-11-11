import Link from "next/link";
import Image from "next/image";
import { HomeSvg } from "@/components/svg";
import { ICourseDT } from "@/types/course-d-t";
import { removeTagInText } from "@/utils";
import author_img from "@/assets/img/course/course-5-teacher-1.png";

type IProps = {
   course: ICourseDT
}
export default function CourseDetailsBreadcrumb({ course }: IProps) {
   return (
      <section className="tp-breadcrumb__area pt-25 pb-55 p-relative z-index-1 fix">
         <div className="tp-breadcrumb__bg" style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-bg-2.jpg)" }}></div>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-sm-12">
                  <div className="tp-breadcrumb__content">
                     <div className="tp-breadcrumb__list course-details mb-70">
                        <span><Link href="/"><HomeSvg/></Link></span>
                        <span>Courses  /  Design  /  {removeTagInText(course.title)}</span>
                     </div>

                     <div className="tp-course-details-2-header w-50 ">
                        <span className="tp-course-details-2-category">{course.category}</span>
                        <h3 className="tp-course-details-2-title">{course.title}</h3>
                        <p>{course.description }</p>
                        <div className="tp-course-details-2-meta-wrapper d-flex align-items-center flex-wrap">
                           <div className="tp-course-details-2-meta ">
                              <div className="tp-course-details-2-author d-flex align-items-center">
                               
                                 <div className="tp-course-details-2-author-content">
                                    <span className="tp-course-details-2-author-designation">Review</span>
                                    <h3 className="tp-course-details-2-meta-title">  <div className="tp-course-details-2-meta-rating-wrapper">
                                 <div className="tp-course-rating-icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                 </div>
                               
                              </div></h3>
                                 </div>
                              </div>
                           </div>
                           <div className="tp-course-details-2-meta">
                              <span className="tp-course-details-2-meta-subtitle">Students</span>
                              <h3 className="tp-course-details-2-meta-title">{course.students.toLocaleString()}+ </h3>
                           </div>
                           <div className="tp-course-details-2-meta">
                              <span className="tp-course-details-2-meta-subtitle">Duration</span>
                              <h3 className="tp-course-details-2-meta-title">{course.duration || "6-12 months"} </h3>
                           </div>
                          
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
