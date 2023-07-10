import React from "react";
// import {LoginBg} from "../../../assets"
import "./blogItem.scss";
import { Gap } from "../../atoms";
import { useNavigate } from "react-router-dom";
import { deleteBlog } from "../../../config/redux/action";
import { CgDetailsLess } from "react-icons/cg";
import Swal from "sweetalert2";

export default function BlogItem(props) {
  let navigate = useNavigate();
  const { image, title, name, date, body, id } = props;
  return (
    <div className="blog-item">
      {/* Content detail */}
      <div className="content p-0">
        {/* Image */}
        <img className="image-thumb rounded mx-auto d-block" src={`http://localhost:3000/${image}`} alt="post" />

        <div className="contentDetail p-3">
          <div className="title-wrapper mt-3">
            {/* Title */}
            <p className="title">{title}</p>
            {/* Edit & Delete Button */}
            <div className="edit-wrapper">
              <p className="edit" onClick={() => navigate(`./createBlog/${id}`)}>
                Edit
              </p>{" "}
              |{" "}
              <p
                className="delete"
                onClick={() =>
                  Swal.fire({
                    title: "Kamu ingin menghapus berita ini?",
                    showDenyButton: false,
                    showCancelButton: true,
                    confirmButtonText: "Hapus",
                    denyButtonText: `Jangan Hapus`,
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Berhasil Hapus Berita",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      deleteBlog(id);
                    }
                  })
                }
              >
                Delete
              </p>
            </div>
          </div>

          {/* Author */}
          <p className="author">
            {name} - {date.slice(0, 10)}
          </p>

          {/* Description */}
          <p className="body">{body.slice(0, 150)}...</p>
        </div>
        <Gap height={10} />
      </div>

      {/* View detail button */}
      <div className="d-grid mb-2">
        <button type="button" className="btn btn-primary active btn-lg fw-bold" onClick={() => navigate(`./detailBlog/${id}`)}>
          <span className="me-4">
            <CgDetailsLess />
          </span>
          View Detail
        </button>
      </div>
    </div>
  );
}
