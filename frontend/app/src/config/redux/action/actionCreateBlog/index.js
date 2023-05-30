import Swal from "sweetalert2";

export const setFormData = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImagePreview = (payload) => {
  return { type: "SET_IMG_PREVIEW", payload };
};

export const submitCreateBlog = (form, navigate) => {
  const { title, body, image } = form;
  const formdata = new FormData();
  formdata.append("title", title);
  formdata.append("body", body);
  formdata.append("image", image);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch("http://localhost:3000/v1/blog/post", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));
      Swal.fire("Sucess", "Berhasil membuat berita!", "success");
      navigate("/");
    })
    .catch((error) => console.log("error", error));
};

export const submitUpdateBlog = (form, id, navigate) => {
  const { title, body, image } = form;
  var formdata = new FormData();
  formdata.append("title", title);
  formdata.append("body", body);
  formdata.append("image", image);

  const requestOptions = {
    method: "PUT",
    body: formdata,
    redirect: "follow",
  };
  console.log("id", typeof id, id);

  fetch(`http://localhost:3000/v1/blog/post/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      Swal.fire("Sucess", "Berhasil update data!", "success");
      navigate("/");
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const deleteBlog = (id) => {
  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  fetch(`http://localhost:3000/v1/blog/post/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => window.location.reload())
    .catch((error) => console.log("error", error));
};
