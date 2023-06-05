import {use} from "react";
import * as api from "../../../api";
import HeroDetailSection from "./HeroDetailSection/HeroDetailSection";
import Details from "./Details/Details";

export const getBlogById = async params => {
  try {
    const res = await api.fetchPostById(params.id);
    return res.data;
  } catch (err) {
    console.log("error in fetch blog data by id from blog page", err.message);
  }
};

const BlogPage = ({params}) => {
  const blog = use(getBlogById(params));
  return (
    <div className="flex flex-col sm:px-10 md:px-20 w-full">
      <HeroDetailSection post={blog} />
      <section className="bg-white flex flex-wrap items-center md:items-start md:flex-nowrap  lg:flex-row  justify-center gap-4 p-4 w-full">
        <Details post={blog} />
      </section>
    </div>
  );
};

export default BlogPage;
