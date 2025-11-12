'use client';
import { useState } from "react";
import { courseCategories } from "@/lib/get-course-fields";
import useCourseFilter from "@/hooks/use-course-filter";
import usePagination from "@/hooks/use-pagination";
import ResetFilter from "@/components/course/filter/reset-filter";
import Pagination from "@/components/ui/pagination";
import CourseListItemTwo from "@/components/course/single/course-list-item-2";
import { FilterActionTypes } from "@/types/course-filter-type";

type IProps = {
   className?: string;
}

export default function TabCoursesList({ className }: IProps) {
   const [activeTab, setActiveTab] = useState('All Courses');
   const { state, dispatch } = useCourseFilter();
   const { currentItems, handlePageClick, pageCount } = usePagination(state.filteredCourses, 6);
   
   function handleCategory(category: string) {
      setActiveTab(category);
      dispatch({ type: FilterActionTypes.SET_CATEGORY, payload: category })
   }

   return (
      <section className={`tp-course-tab-area pt-120 pb-100 ${className || ''}`}>
         {state.filteredCourses.length > 0 ? (
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="tp-section-wrapper text-center mb-50">
                        <h2 className="tp-section-title">Explore Courses by Discipline</h2>
                        <p>From traditional streams to professional courses, explore all government college offerings with AI-powered preparation and guidance</p>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-lg-12">
                     <div className="tp-course-grid-box tp-tab mb-50">
                        <ul className="nav nav-tabs justify-content-center flex-wrap">
                           <li className="nav-item mb-4" role="presentation">
                              <button 
                                 onClick={() => handleCategory('All Courses')} 
                                 className={`nav-link ${activeTab === 'All Courses' ? 'active' : ''}`}
                              >
                                 All Courses
                              </button>
                           </li>
                           {courseCategories.map((cate, i) => (
                              <li key={i} className="nav-item" role="presentation">
                                 <button 
                                    onClick={() => handleCategory(cate.category)} 
                                    className={`nav-link ${activeTab === cate.category ? 'active' : ''}`}
                                 >
                                    {cate.category}
                                 </button>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-lg-12">
                     <div className="tab-content">
                        {currentItems.map((course) => (
                           <CourseListItemTwo key={course.id} course={course} />
                        ))}
                     </div>
                  </div>
               </div>

               {pageCount > 1 && (
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="tp-event-inner-pagination">
                           <div className="tp-dashboard-pagination pt-20">
                              <div className="tp-pagination">
                                 <Pagination handlePageClick={handlePageClick} pageCount={pageCount} isCenter={true} />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         ) : <ResetFilter />}
      </section>
   )
}
