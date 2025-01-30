import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-3 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"50px" , textDecoration:"none"}}>Learn more</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} style={{textDecoration:"none"}}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}  style={{marginLeft:"50px" , textDecoration:"none"}}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
