"use client";
import { useState } from "react";
import { ICourseDT } from "@/types/course-d-t";
import CourseDetailsRightSide from "../_components/course-details-right-side";

type IProps = {
   course: ICourseDT;
};

export default function CourseDetailsArea({ course }: IProps) {
   const [activeTab, setActiveTab] = useState<'curriculum' | 'ai-tools' | 'learning-outcomes'>('ai-tools');

   return (
      <section className="tp-course-details-2-area pt-50 pb-80">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="tp-course-details-2-main-inner pr-70">
                     {/* Tabs Navigation */}
                     <div className="tp-course-details-tabs mb-40">
                        <nav>
                           <div className="nav nav-tabs" role="tablist">
                              <button
                                 className={`nav-link ${activeTab === 'curriculum' ? 'active' : ''}`}
                                 onClick={() => setActiveTab('curriculum')}
                                 type="button"
                              >
                                 Curriculum
                              </button>
                              <button
                                 className={`nav-link ${activeTab === 'ai-tools' ? 'active' : ''}`}
                                 onClick={() => setActiveTab('ai-tools')}
                                 type="button"
                              >
                                 AI Tools
                              </button>
                              <button
                                 className={`nav-link ${activeTab === 'learning-outcomes' ? 'active' : ''}`}
                                 onClick={() => setActiveTab('learning-outcomes')}
                                 type="button"
                              >
                                 Learning Outcomes
                              </button>
                           </div>
                        </nav>
                     </div>

                     {/* Tab Content */}
                     <div className="tp-course-details-2-content">
                        {/* Curriculum Tab */}
                        {activeTab === 'curriculum' && (
                           <div className="curriculum-content">
                              <h4 className="tp-course-details-2-main-title mb-30">Course Curriculum</h4>
                              <p className="mb-30">
                                 This comprehensive curriculum is designed to take you from fundamentals to advanced concepts in {course.category}.
                              </p>
                              
                              {/* Module Structure */}
                              <div className="curriculum-modules">
                                 {/* Module 1 */}
                                 <div className="module-item mb-30">
                                    <div className="module-header d-flex align-items-center justify-content-between p-20 mb-15">
                                       <div className="d-flex align-items-center">
                                          <span className="module-icon me-3">
                                             <i className="fa-solid fa-book"></i>
                                          </span>
                                          <div>
                                             <h5 className="module-title mb-0">Foundations of {course.category}</h5>
                                             <span className="module-duration text-muted">Duration: 4 weeks</span>
                                          </div>
                                       </div>
                                       <span className="badge bg-success">Beginner</span>
                                    </div>
                                    <div className="module-topics ps-4">
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Variables & Data Types</span>
                                       </div>
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Control Flow</span>
                                       </div>
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Functions</span>
                                       </div>
                                    </div>
                                 </div>

                                 {/* Module 2 */}
                                 <div className="module-item mb-30">
                                    <div className="module-header d-flex align-items-center justify-content-between p-20 mb-15">
                                       <div className="d-flex align-items-center">
                                          <span className="module-icon me-3">
                                             <i className="fa-solid fa-book"></i>
                                          </span>
                                          <div>
                                             <h5 className="module-title mb-0">Data Structures & Algorithms</h5>
                                             <span className="module-duration text-muted">Duration: 4 weeks</span>
                                          </div>
                                       </div>
                                       <span className="badge bg-warning">Intermediate</span>
                                    </div>
                                    <div className="module-topics ps-4">
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Arrays & Linked Lists</span>
                                       </div>
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Sorting & Searching</span>
                                       </div>
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Trees & Graphs</span>
                                       </div>
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Dynamic Programming</span>
                                       </div>
                                    </div>
                                 </div>

                                 {/* Module 3 */}
                                 <div className="module-item mb-30">
                                    <div className="module-header d-flex align-items-center justify-content-between p-20 mb-15">
                                       <div className="d-flex align-items-center">
                                          <span className="module-icon me-3">
                                             <i className="fa-solid fa-book"></i>
                                          </span>
                                          <div>
                                             <h5 className="module-title mb-0">AI Code Debugger Training</h5>
                                             <span className="module-duration text-muted">Duration: 3 weeks</span>
                                          </div>
                                       </div>
                                       <span className="badge bg-warning">Intermediate</span>
                                    </div>
                                    <div className="module-topics ps-4">
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Reading Error Messages</span>
                                       </div>
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Performance Optimization</span>
                                       </div>
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Debugging Techniques</span>
                                       </div>
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Best Practices</span>
                                       </div>
                                    </div>
                                 </div>

                                 {/* Module 4 */}
                                 <div className="module-item">
                                    <div className="module-header d-flex align-items-center justify-content-between p-20 mb-15">
                                       <div className="d-flex align-items-center">
                                          <span className="module-icon me-3">
                                             <i className="fa-solid fa-book"></i>
                                          </span>
                                          <div>
                                             <h5 className="module-title mb-0">Advanced Topics</h5>
                                             <span className="module-duration text-muted">Duration: 4 weeks</span>
                                          </div>
                                       </div>
                                       <span className="badge bg-danger">Advanced</span>
                                    </div>
                                    <div className="module-topics ps-4">
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Design Patterns</span>
                                       </div>
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Database Management</span>
                                       </div>
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>System Design</span>
                                       </div>
                                       <div className="topic-item d-flex align-items-center mb-15">
                                          <i className="fa-regular fa-circle-check me-2 text-success"></i>
                                          <span>Web Development</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )}

                        {/* AI Tools Tab */}
                        {activeTab === 'ai-tools' && (
                           <div className="ai-tools-content">
                              <h4 className="tp-course-details-2-main-title mb-30">AI-Powered Learning Tools</h4>
                              <p className="mb-40">
                                 Access cutting-edge AI tools designed specifically for {course.category} to enhance your learning experience.
                              </p>

                              {/* AI Tools Grid */}
                              <div className="row">
                                 {course.features?.map((feature, index) => (
                                    <div key={index} className="col-md-6 mb-30">
                                       <div className="ai-tool-card p-30">
                                          <div className="ai-tool-icon mb-20">
                                             <i className="fa-solid fa-robot"></i>
                                          </div>
                                          <h5 className="ai-tool-title mb-15">{feature.name}</h5>
                                          <p className="ai-tool-description mb-20">{feature.description}</p>
                                          <button className="tp-btn-sm">Try It Now</button>
                                       </div>
                                    </div>
                                 ))}

                                 {/* Additional Tools */}
                                 <div className="col-md-6 mb-30">
                                    <div className="ai-tool-card p-30">
                                       <div className="ai-tool-icon mb-20">
                                          <i className="fa-solid fa-robot"></i>
                                       </div>
                                       <h5 className="ai-tool-title mb-15">Code Review Assistant</h5>
                                       <p className="ai-tool-description mb-20">Get instant feedback on your code quality</p>
                                       <button className="tp-btn-sm">Try It Now</button>
                                    </div>
                                 </div>

                                 <div className="col-md-6 mb-30">
                                    <div className="ai-tool-card p-30">
                                       <div className="ai-tool-icon mb-20">
                                          <i className="fa-solid fa-robot"></i>
                                       </div>
                                       <h5 className="ai-tool-title mb-15">Practice Problems</h5>
                                       <p className="ai-tool-description mb-20">Access 1000+ coding challenges tailored to your level</p>
                                       <button className="tp-btn-sm">Try It Now</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )}

                        {/* Learning Outcomes Tab */}
                        {activeTab === 'learning-outcomes' && (
                           <div className="learning-outcomes-content">
                              <h4 className="tp-course-details-2-main-title mb-30">What You'll Achieve</h4>
                              <p className="mb-40">
                                 By completing this learning path, you'll gain the skills and knowledge to excel in {course.category}.
                              </p>

                              {/* Outcomes List */}
                              <div className="outcomes-list">
                                 <div className="outcome-item d-flex align-items-start mb-25">
                                    <div className="outcome-icon me-3">
                                       <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div>
                                       <h6 className="outcome-title mb-10">Build full-stack web applications from scratch</h6>
                                       <p className="outcome-description text-muted">Create complete applications using modern frameworks and best practices</p>
                                    </div>
                                 </div>

                                 <div className="outcome-item d-flex align-items-start mb-25">
                                    <div className="outcome-icon me-3">
                                       <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div>
                                       <h6 className="outcome-title mb-10">Solve complex algorithmic problems efficiently</h6>
                                       <p className="outcome-description text-muted">Master problem-solving techniques used in technical interviews</p>
                                    </div>
                                 </div>

                                 <div className="outcome-item d-flex align-items-start mb-25">
                                    <div className="outcome-icon me-3">
                                       <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div>
                                       <h6 className="outcome-title mb-10">Debug and optimize code like a professional</h6>
                                       <p className="outcome-description text-muted">Learn advanced debugging techniques and performance optimization</p>
                                    </div>
                                 </div>

                                 <div className="outcome-item d-flex align-items-start mb-25">
                                    <div className="outcome-icon me-3">
                                       <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div>
                                       <h6 className="outcome-title mb-10">Prepare for technical interviews at top companies</h6>
                                       <p className="outcome-description text-muted">Practice with real interview questions and get AI-powered feedback</p>
                                    </div>
                                 </div>

                                 <div className="outcome-item d-flex align-items-start">
                                    <div className="outcome-icon me-3">
                                       <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div>
                                       <h6 className="outcome-title mb-10">Master modern development frameworks and tools</h6>
                                       <p className="outcome-description text-muted">Gain hands-on experience with industry-standard technologies</p>
                                    </div>
                                 </div>
                              </div>

                              {/* CTA Section */}
                              <div className="learning-outcomes-cta mt-50 p-40 text-center">
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
