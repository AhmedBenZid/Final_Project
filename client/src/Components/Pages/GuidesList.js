import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getGuidesProfiles } from '../../Redux/Actions/profile'
import GuideCard from '../Profile/GuideCard';
import Spinner from '../Layouts/Spinner'


const GuidesList = () => {
    const [guideFilter, setGuideFilter] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGuidesProfiles())
    }, [])
    const guides = useSelector(state => state.profile.guides)
    console.log(guides)
    return (
        <>
            <div className="hero">
                <div className="intro">
                    <h1 data-aos="fade-up" data-aos-delay="">Travel to the most beautiful places in the world, like <span className="typed-words"></span></h1>
                    <a href="/register" className="btn btn-primary" data-aos="fade-up" data-aos-delay="100">Sing-up</a>
                </div>
                <div className="slides overlay">
                    <img src="img/guides.jpg" className="active" alt="Image" />
                </div>
            </div>
            <input type='text' placeholder='Filter' value={guideFilter} onChange={e => setGuideFilter(e.target.value)} />
            <div>
                <Link to='/'><button className='btn btn-dark'>--Back--</button></Link></div>
            <div>
                {
                    (!guides) ? <Spinner /> :
                        <div>
                            {
                                // guides && guides.filter(
                                // (el) => (
                                //     (el.user.lastName).toUpperCase().includes(guideFilter.toUpperCase().trim())))
                                guides.map((guide, i) => <GuideCard guide={guide} key={i} />)
                            }
                        </div>}

            </div>
        </>
    )
}

export default GuidesList
