function MainPage ({entry}) {
   console.log(entry)

   return (
     <div className="card-container">
      <div className="card-list">
            <img 
                src={entry.img.src}
                alt={entry.img.alt}
            />
            <div> 
               <div className="title-row">
                 <h2 className="title">{entry.title}</h2>
                 <a className="btn" type="button" href={entry.mapLink} target="_blank" rel="noreferrer">View on map</a>
               </div>
               <a  className="google-link" href={entry.googleLink} target="_blank" rel="noreferrer">
                  View on google
               </a>
            <div className="text-container">
              <div className="location-row">
                <p className="location-text">location</p>
                <p className="location-text">Time Visited</p>
              </div>
             <div className="time-of-visitation">
                <span><i class="fa-solid fa-location-pin location"></i>{entry.country}</span>
                <p className="travel-date"> {entry.dates} </p>
             </div>
            </div>
            <p className="about-text">
               {entry.text}
            </p>
         </div>
      </div>
     
     </div>
   )
}
export default MainPage;