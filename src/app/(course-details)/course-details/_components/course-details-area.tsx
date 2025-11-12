"use client";
import { useState } from "react";
import { ICourseDT } from "@/types/course-d-t";
import CourseDetailsRightSide from "../_components/course-details-right-side";
import ModuleItem from "@/components/course/module-item";
import { getCurriculumByCourseId } from "@/data/course-curriculum-data";

type IProps = {
   course: ICourseDT;
};

export default function CourseDetailsArea({ course }: IProps) {
   const [activeTab, setActiveTab] = useState<'curriculum' | 'ai-tools' | 'learning-outcomes'>('ai-tools');
   
   // Get curriculum data for this course
   const curriculumData = getCurriculumByCourseId(course.id);

   return (
      <section className="tp-course-details-2-area pt-50 pb-80">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="tp-course-details-2-main-inner pr-70">
                     {/* Tabs Navigation */}
                     <div className="tp-course-details-2-nav d-flex align-items-center">
                      <nav>
                        <ul id="course_details2_nav" role="tablist">
                           <li className="nav-item" role="presentation">
                              <button
                                 className={`nav-link ${activeTab === 'curriculum' ? 'active' : ''}`}
                                 onClick={() => setActiveTab('curriculum')}
                                 type="button"
                                 role="tab"
                              >
                                 Curriculum
                              </button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button
                                 className={`nav-link ${activeTab === 'ai-tools' ? 'active' : ''}`}
                                 onClick={() => setActiveTab('ai-tools')}
                                 type="button"
                                 role="tab"
                              >
                                 AI Tools
                              </button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button
                                 className={`nav-link ${activeTab === 'learning-outcomes' ? 'active' : ''}`}
                                 onClick={() => setActiveTab('learning-outcomes')}
                                 type="button"
                                 role="tab"
                              >
                                 Learning Outcomes
                              </button>
                           </li>
                        </ul>
                        </nav>
                     </div>

                     {/* Tab Content */}
                     <div className="tp-course-details-2-content">
                        {/* Curriculum Tab */}
                        {activeTab === 'curriculum' && (
                           <div className="curriculum-content">
                              {/* Module Structure */}
                              <div className="curriculum-modules">
                                 {curriculumData?.modules.map((module, index) => {
                                    // Different progress for each module
                                    const progressValues = [85, 60, 40, 20, 0, 95, 70, 45, 30, 10];
                                    const progress = progressValues[index % progressValues.length];
                                    
                                    return (
                                       <ModuleItem
                                          key={index}
                                          title={module.title}
                                          duration={module.duration}
                                          difficulty={module.difficulty}
                                          topics={module.topics}
                                          progress={progress}
                                       />
                                    );
                                 })}
                              </div>
                           </div>
                        )}

                        {/* AI Tools Tab */}
                        {activeTab === 'ai-tools' && (
                           <div className="ai-tools-content">
                              {/* AI Tools Grid */}
                              <div className="row">
                                 {[
                                    ...(course.features || []),
                                    {
                                       name: "Code Review Assistant",
                                       description: "Get instant feedback on your code quality"
                                    },
                                    {
                                       name: "Practice Problems",
                                       description: "Access 1000+ coding challenges tailored to your level"
                                    }
                                 ].map((feature, index) => (
                                    <div key={index} className="col-md-6 mb-30">
                                       <div className="ai-tool-card p-3">
                                          <div className="ai-tool-icon mb-20">
                                             <i className="fa-solid fa-robot"></i>
                                          </div>
                                          <h5 className="ai-tool-title mb-15">{feature.name}</h5>
                                          <p className="ai-tool-description mb-20">{feature.description}</p>
                                          <button className="tp-btn-sm">Try It Now</button>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        )}

                        {/* Learning Outcomes Tab */}
                        {activeTab === 'learning-outcomes' && (
                           <div className="learning-outcomes-content">
                              <h4 className="tp-course-details-2-main-title mb-30">What You&apos;ll Achieve</h4>
                              <p className="mb-40">
                                 By completing this learning path, you&apos;ll gain the skills and knowledge to excel in {course.category}.
                              </p>

                              {/* Outcomes List */}
                              <div className="outcomes-list">
                                 {curriculumData?.learningOutcomes.map((outcome, index) => (
                                    <div key={index} className={`outcome-item d-flex align-items-start ${index < curriculumData.learningOutcomes.length - 1 ? 'mb-25' : ''}`}>
                                       <div className="outcome-icon me-3">
                                          <i className="fa-solid fa-circle-check"></i>
                                       </div>
                                       <div>
                                          <h6 className="outcome-title mb-10">{outcome.title}</h6>
                                          <p className="outcome-description text-muted">{outcome.description}</p>
                                       </div>
                                    </div>
                                 ))}
                              </div>

                              {/* CTA Section */}
                              <div className="learning-outcomes-cta mt-50 p-4 text-center">
                                 <h5 className="cta-title mb-15">Ready to Get Started?</h5>
                                 <p className="cta-description mb-30">
                                    Join thousands of students already learning with IntelliPath AI.
                                 </p>
                                 <button className="tp-btn-inner">Enroll Now</button>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  {/* right sidebar box */}
                  <CourseDetailsRightSide course={course} />
                  {/* right sidebar box */}
               </div>
            </div>
         </div>
      </section>
   );
}
