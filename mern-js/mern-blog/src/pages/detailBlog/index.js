import React, { useEffect, useState } from 'react'
import { Gap, Link } from '../../components/atoms'
import "./detailBlog.scss"
import { useNavigate, useParams } from 'react-router-dom'

export default function DetailBlog(props) {
  let navigate = useNavigate()
  const params = useParams()
  const [data,setData] = useState("")

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://localhost:3000/v1/blog/post/${params.id}`, requestOptions)
      .then(response => response.text())
      .then(result => setData(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }, [props, params])

  if(data.author){
    return (
      <div className='detail-blog-wrapper'>
        <div className='img-wrapper'>
          <img className='img-cover' src={`http://localhost:3000/${data.image}`} alt="img-cover" />
        </div>
        <p className='blog-title'>{data.title}</p>
        <p className='blog-author'>{data.author.name} - {data.cratedAt}</p>
        <p className='blog-body'>{data.body}</p>
        <Gap height={15} />
        <Link title="Kembali ke Home" onClick={() => navigate("/")} />
        <Gap height={55} />
      </div>
    )
  }
  return(
    <p>Loading...</p>
  )
}
