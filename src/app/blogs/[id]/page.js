import {use} from "react";
import * as api from "../../../api";
export const getBlogById = async params => {
  try {
    const res = await api.fetchPostById(params.id);
    return res.data;
  } catch (err) {
    console.log("error in fetch blog data by id from blog page", e);
  }
};

const BlogPage = ({params}) => {
  const blog = use(getBlogById);
  return (
    <div>
      <h1>BlogPage</h1>
    </div>
  );
};

export default BlogPage;
