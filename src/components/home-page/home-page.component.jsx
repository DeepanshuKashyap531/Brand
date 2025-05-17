import './home-page.styles.scss';

const HomePage = () => {
    return (
        <div id="home" className='main'>
            <div className='main-container'>
                <div className='main-left'>
                    <h1><span className='first'>W</span>e build bold, modern digital experiences that help brands grow.</h1>
                    <p> we’re a creative team of designers, developers,
                         and strategists dedicated to crafting clean, 
                         high-performing websites and apps. From branding 
                         to full-stack development, we help businesses turn ideas
                          into digital success.
                          </p>
                    <button>Wanna Know More</button>
                </div>
                <div className='main-right'>
                    <div className='rightImg1'></div>
                    <div className='rightImg2'></div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;