import React from 'react'
import SearchBar from '../Layouts/SearchBar'
import ImageScroller from '../Layouts/ImageScroller';
import CircuitList from '../Layouts/CircuitList'
import NavBar from '../Layouts/NavBar';



function Home() {

    return (
        <>    <NavBar />
            <div className="hero">
                <div className="intro">
                    <h1 data-aos="fade-up" data-aos-delay="">Travel to the most beautiful places in the world, like <span className="typed-words"></span></h1>
                    <a href="/register" className="btn btn-primary" data-aos="fade-up" data-aos-delay="100">Sing-up</a>
                </div>
                <div className="slides overlay">
                    <img src="img/home.jpg" className="active" alt="Image" />
                </div>
            </div>
            <SearchBar />
            <ImageScroller />
            <CircuitList />
        </>
    )
}

export default Home
