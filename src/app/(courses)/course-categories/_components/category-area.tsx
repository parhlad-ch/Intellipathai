import { CategoryTwoSvg } from "@/components/svg";
import Link from "next/link";
import { courseCategories } from "@/lib/get-course-fields";

const colorClasses = ["", "color-1", "color-2", "color-3", "color-4", "color-5", "color-6", "color-7", "color-8", "color-9", "color-10", "color-11"];
const delays = [".3s", ".5s", ".7s", ".9s"];

export default function CategoryArea() {
   return (
      <section className="tp-course-categories-area pt-100 pb-75">
         <div className="container">
            <div className="row">
               {courseCategories.map((item, index) => (
                  <div key={index} className="col-lg-3 col-sm-6">
                     <Link
                        href="/course-with-filter"
                        className="tp-course-categories-item p-relative mb-25 wow fadeInUp"
                        data-wow-delay={delays[index % delays.length]}
                     >
                        <div className="tp-course-categories-icon">
                           <span className={colorClasses[index % colorClasses.length]}>
                              <CategoryTwoSvg />
                           </span>
                        </div>
                        <h3 className="tp-course-categories-title">{item.category}</h3>
                        <p>{item.courseCount} {item.courseCount === 1 ? 'Course' : 'Courses'}</p>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
