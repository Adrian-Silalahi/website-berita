import React, { useEffect, useState } from "react";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components/atoms";
import "./createBlog.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFormData, setImagePreview, submitCreateBlog, submitUpdateBlog } from "../../config/redux/action";

export default function CreateBlog() {
  let navigate = useNavigate();
  const { form, imagePreview } = useSelector((state) => state.reducerCreateBlog);
  const dispatch = useDispatch();
  const params = useParams();
  const [isUpdate, setIsUpdate] = useState(true);

  const onImageUpload = (e) => {
    const files = e.target.files[0];
    dispatch(setFormData("image", files));
    dispatch(setImagePreview(URL.createObjectURL(files)));
  };
  useEffect(() => {
    if (params.id) {
      setIsUpdate(false);
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(`http://localhost:3000/v1/blog/post/${params.id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          dispatch(setFormData("title", result.title));
          dispatch(setFormData("body", result.body));
          dispatch(setFormData("image", result.image));
          dispatch(setImagePreview(`http://localhost:3000/${result.image}`));
        })
        .catch((error) => console.log("error", error));
    }
    return () => {
      dispatch(setFormData("title", ""));
      dispatch(setFormData("body", ""));
      dispatch(setImagePreview(null));
    };
  }, [params.id, dispatch]);
  return (
    <div className="blog-post">
      <Link title="kembali" onClick={() => navigate("/")} />
      <p className="title">{isUpdate ? "New Blog Post" : "Update Blog Post"}</p>
      <Input label="Post Title" onChange={(e) => dispatch(setFormData("title", e.target.value))} value={form.title} />
      <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} />
      <TextArea onChange={(e) => dispatch(setFormData("body", e.target.value))} value={form.body} />
      <Gap height={10} />
      <div className="button-action">
        <Button
          title={isUpdate ? "Simpan" : "Update"}
          onClick={() => {
            isUpdate ? submitCreateBlog(form, navigate) : submitUpdateBlog(form, params.id, navigate);
          }}
        />
      </div>
      <Gap height={15} />
    </div>
  );
}
