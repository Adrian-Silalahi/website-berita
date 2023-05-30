export const setDataBlog = (page) => (dispatch) => {
  fetch(`http://localhost:3000/v1/blog/posts?page=${page}&perPage=2`)
    .then((response) => response.json())
    .then((data) => {
      const responseApi = data.data
      const currentPage = data.current_page
      const totalData = Math.ceil(data.total_data / 2)
      dispatch({ type: "UPDATE_DATA_BLOG", payload: responseApi })
      dispatch({ type: "UPDATE_PAGE", payload: {currentPage,totalData} })
    });
}

// export const setDataBlog = (payload) => {
//   return { type: "UPDATE_DATA_BLOGS", payload }
// }