import HeroSection from "./HeroSection/HeroSection.jsx";
import WhyUS from "./WhyUS/WhyUS";
import Courses from "./CoursesSection/Courses.jsx";
import Fees from "./Fees/Fees";
import Testimonials from "./Testimonials/Testimonials";
import BlogsSection from "./BlogsSction/BlogsSction";
import CustomizedAccordions from "./FAQ/FAQ";
import ContactPage from "./Contact/Contact";
import * as api from "../api/index.js";
import {use} from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


// export const getServerSideProps = async () => {
//   try {
//     const res = await api.fetchCourses();
//     console.log(res.data);
//     console.log("res");
//     return {
//       props: {courses: res.data},
//     };
//   } catch (error) {
//     console.log(
//       "erro in fetch courses from Course Component, error message=>",
//       e
//     );
//   }
// };

export const getCourses = async () => {
  try {
    const res = await api.fetchCourses();
    return res.data;
  } catch (error) {
    console.log(
      "erro in fetch courses from Course Component, error message=>",
      error.message
    );
  }
};
export const getBlogs = async () => {
  try {
    const res = await api.fetchPosts();
    return res.data;
  } catch (error) {
    console.log(
      "erro in fetch courses from Course Component, error message=>",
      error.message
    );
  }
};
export const getTestimoials = async () => {
  try {
    const res = await api.getTestimoials();
    return res.data;
  } catch (error) {
    console.log(
      "erro in fetch courses from Course Component, error message=>",
      error.message
    );
  }
};

const Home = () => {
  const courses = use(getCourses());
  const blogs = use(getBlogs());
  const testimoials = use(getTestimoials());
  return (
    <div className="flex flex-col items-center w-full relative min-h-screen">
      <HeroSection />
      <WhyUS />
      <Courses courses={courses} />
      <BlogsSection blogs={blogs} />
      <Fees />
      <Testimonials testimoials={testimoials} />
      <ContactPage />
      <CustomizedAccordions />
      <ToastContainer />
    </div>
  );
};

export default Home;
