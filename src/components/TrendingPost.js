import React from 'react';
import './TrendingPost.scss';

export function TrendingPost(p){

  
  function onImgClick(e){
    e.target.parentNode.parentNode.classList.add('active');
  }

  function onCloseClick(e){
    e.target.parentNode.parentNode.classList.remove('active');
  }

  return (
    <div key={p.id} className="SingleTrending">
      <div className="fixed-img-wrapper">
        <img 
          onClick={onImgClick}
          src={p.images.fixed_height_small.url} 
          alt={p.title} 
        />
      </div>
      {p.user && 
        <div className="user">
          <div className="user-img">
            <img src={p.user.avatar_url} alt={p.title}/>
          </div>
          <p>{p.username}</p>
        </div>
      }
      <div className="origin-img-wrapper" >
        <div className="origin-img-layer" onClick={onCloseClick}>
          <div className="origin-img-content">
            <img 
              src={p.images.original.url}
              alt={p.title}
            />
            <p>{p.title}</p>
          </div>
        </div>
        <button className="origin-img-close-button" onClick={onCloseClick}>
          <div className="Xshape"></div>
        </button>
      </div>
    </div>
  )
}

export default TrendingPost;