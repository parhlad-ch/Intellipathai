import { IMenu, IMenuDT2 } from "@/types/menu-d-t";

const menu_data:IMenu[] = [
    {
        id:1,
        title:'Home',
        link:'#',
     },
	 {
		id:2,
		title:'Academics',
		link:'#',
		sm_mega_menus:[
			{ id: 1, title: "Overview", link: "/university-admission-overview" },
			{ id: 2, title: "Undergraduate", link: "/university-program" },
			{ id: 3, title: "Graduate Program", link: "/university-program" },
			{ id: 4, title: "Schools", link: "/university-program" },
			{ id: 5, title: "Online Education", link: "/course-with-filter" },
			{ id: 6, title: "Off-campus learning", link: "/course-with-filter" },
			{ id: 7, title: "Faculty", link: "/university-leadership" },
		]
	 },
	 {
		id:3,
		title:'Admissions',
		link:'#',
		dropdown_menus:[
			{id:1,title:"Overview", link: "/university-admission-overview" },
			{id:2,title:"How to Apply", link: "/university-apply" },
			{id:3,title:"Tuition & Fees", link: "/university-tuition-fees" },
			{id:4,title:"Financial Aid", link: "/university-financial" },
			{id:5,title:"Dates & Deadlines", link: "/university-deadlines" },
			{id:6,title:"Schedule a Tour", link: "/university-schedule" },
		]
	 },
	 {
		id:4,
		title:'About Us',
		link:'/about',
	 },
	 {
		id:5,
		title:'Blog',
		link:'/blog-stories',
	 }
];

export default menu_data;


// menu data 2
export const menu_data_2:IMenuDT2[] = [
	{
        id:1,
        title:'Home',
        link:'#',
    },
	{
		id:2,
		title:'About Us',
		link:'/about',
	},
	{
		id:3,
		title:'Courses',
		link:'/course-categories',
	},
	{
		id:4,
		title:'Dashboard',
		link:'#',
		dashboard_dropdown:[
			{
				id: 1,
				title:"Instructor Dashboard",
				link:'#',
				dropdown_menus:[
					{ id: 1, title: "Dashboard", link: "/dashboard/instructor-dashboard" },
					{ id: 2, title: "Profile", link: "/dashboard/instructor-profile" },
					{ id: 3, title: "Enrolled Courses", link: "/dashboard/instructor-enroll-course" },
					{ id: 4, title: "Wishlist", link: "/dashboard/instructor-wishlist" },
					{ id: 5, title: "Reviews", link: "/dashboard/instructor-reviews" },
					{ id: 6, title: "My Quiz Attempts", link: "/dashboard/instructor-quiz-attempts" },
					{ id: 7, title: "Order History", link: "/dashboard/instructor-order" },
					{ id: 8, title: "My Course", link: "/dashboard/instructor-my-course" },
					{ id: 9, title: "Announcements", link: "/dashboard/instructor-announcements" },
					{ id: 10, title: "Quiz Attempts", link: "/dashboard/instructor-quiz" },
					{ id: 11, title: "Assignments", link: "/dashboard/instructor-assignment" },
					{ id: 12, title: "Settings", link: "/dashboard/instructor-setting-profile" },
				]
			},
			{
				id: 2,
				title:"Student Dashboard",
				link:'#',
				dropdown_menus:[
					{ id: 1, title: "Dashboard", link: "/dashboard/student-dashboard" },
					{ id: 2, title: "Profile", link: "/dashboard/student-profile" },
					{ id: 3, title: "Enrolled Courses", link: "/dashboard/student-enroll-course" },
					{ id: 4, title: "Wishlist", link: "/dashboard/student-wishlist" },
					{ id: 5, title: "Reviews", link: "/dashboard/student-reviews" },
					{ id: 6, title: "My Quiz Attempts", link: "/dashboard/student-my-quiz" },
					{ id: 7, title: "Settings", link: "/dashboard/student-setting-profile" },
				]
			}
		]
	},
	{
		id:5,
		title:'Pricing',
		link:'/membership-plans',
	 },
	 {
		id:6,
		title:'Blog',
		link:'/blog-stories',
	 },
	 {
		id:7,
		title:'Contact Us',
		link:'/contact',
	 },
]