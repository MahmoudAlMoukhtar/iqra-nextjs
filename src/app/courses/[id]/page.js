"use client";
import React, {use, useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";
import * as api from "../../../api/index";
import Contact from "./Contact/Contact";
import CourseSection from "./CourseSection";
import ContactButtons from "@/app/Contact/ContactButtons";
import TestimonialForm from "./TestimonialForm";
import CourseTitle from "./CourseTitle";
import "react-toastify/dist/ReactToastify.css";

export const getCourseById = async params => {
  try {
    const res = await api.fetchCourseById(params.id);
    return res.data;
  } catch (error) {
    console.log(
      "erro in fetch courseById from Course Component, error message=>",
      error.message
    );
  }
};

const DetailCourse = ({setContactModalShow, params}) => {
  //const [t, i18n] = useTranslation();
  const lng = "en";
  const course = use(getCourseById(params));
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userIqraa")));
  }, []);

  return (
    <div className="flex justify-between flex-col md:flex-row gap-4 w-full  lg:px-20 py-4 sm:py-10">
      <div className="flex flex-col  items-start gap-10  text-black w-full rounded ">
        {course.sections.map((c, i) => (
          <div className="flex flex-col items-center gap-10 w-full" key={c._id}>
            {i === 0 && (
              <div
                className={
                  lng === "en"
                    ? "flex flex-col sm:flex-row sm:justify-between items-center gap-2 w-full px-2 md:px-4"
                    : "flex flex-col sm:flex-row-reverse sm:justify-between items-center gap-2 w-full px-2 md:px-4"
                }
              >
                <CourseTitle
                  lng={lng}
                  title={course.title}
                  titleAr={course.titleAr}
                />
                <ContactButtons
                  lng={lng}
                  setContactModalShow={setContactModalShow}
                />
              </div>
            )}
            <CourseSection c={c} lng={lng} />
          </div>
        ))}
        <TestimonialForm lng={lng} user={user} />
      </div>
      <Contact lng={lng} />
      <ToastContainer theme="dark" />
    </div>
  );
};
export default DetailCourse;
