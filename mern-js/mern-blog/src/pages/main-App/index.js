import React from 'react'
import Home from '../home'
import { Routes, Route } from "react-router-dom"
import DetailBlog from '../detailBlog'
import CreateBlog from '../createBlog'
import { Footer, Header } from '../../components'
import "./main-App.scss"


export default function MainApp() {
    return (
        <div className='main-app-wrapper'>
            <div className='header-wrapper'>
                <Header />
            </div>
            <div className='content-wrapper'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="createblog" element={<CreateBlog />} />
                    <Route path="createblog/:id" element={<CreateBlog />} />
                    <Route path="detailblog/:id" element={<DetailBlog />} />
                </Routes>
            </div>
            <div className='footer-wrapper'>
                <Footer />
            </div>
        </div>
    )
}
