import React, { useEffect, useState } from "react";
import { Gap } from "../../components/atoms";
import BlogItem from "../../components/molecules/blogItem/Index";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";
// import { judeBellingham, LoginBg } from "../../assets";
import { BsArrowRightShort } from "react-icons/bs";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector((state) => state.reducerHome);
  const dispatch = useDispatch();

  const dataBlogs = dataBlog;

  let navigate = useNavigate();
  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [dispatch, counter]);

  const previeous = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const next = () => {
    if (counter !== page.totalData) {
      setCounter(counter + 1);
    }
  };
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-primary rounded-pill px-3 border-white shadow-sm" onClick={() => navigate("/createBlog")}>
            create news <BsArrowRightShort />
          </button>
        </div>
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlogs.map((blog) => {
          return <BlogItem key={blog._id} title={blog.title} name={blog.author.name} body={blog.body} image={blog.image} date={blog.createdAt} id={blog._id} />;
        })}
      </div>
      <Gap height={100} />
      <div className="pagination">
        <div className="d-grid gap-2 col-4 mx-auto">
          <button type="button" className="btn btn-outline-dark border-white shadow-sm" onClick={previeous}>
            Previous
          </button>
        </div>
        <Gap width={20} />
        <p className="text-page text-primary ">
          {page.currentPage} / {page.totalData}
        </p>
        <Gap width={20} />
        <div className="d-grid gap-2 col-4 mx-auto">
          <button type="button" className="btn btn-outline-dark border-white shadow-sm" onClick={next}>
            Next
          </button>
        </div>
      </div>
      <Gap height={50} />
    </div>
  );
};

export default Home;
