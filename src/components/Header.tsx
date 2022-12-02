import { useState } from 'react'

const Header = ({ children }: { children: any }) => {
  const [video] = useState({
    video: '/assets/videos/header.mp4',
    poster: '/assets/images/screen.png',
    logo: '/assets/images/logo.png',
  })
  return (
    <header className="header">
      <div className="container pr">
        <div className="header__logo">
          <img src={video.logo} alt="logo" />
        </div>
      </div>
      <div className="header__video">
        <video
          src={video.video}
          autoPlay
          muted
          loop
          poster={video.poster}
          className="header__video--media"
        ></video>
      </div>
      <div className="header__contents">
        <div className="container">
          <div className="header__contents__text">
            <div className="header__contents__text__child">
              <h1 className="header__contents__text__child__h1">
                We <span style={{ color: '#A4BE7B' }}> love </span> riding bikes
              </h1>
              <p className="header__contents__text__child__p">
                Come and join us to see best routes to ride your bicycle in the
                world !
              </p>
              <div className="header__contents__text__child__link">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
