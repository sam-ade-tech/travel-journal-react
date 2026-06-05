const Contact = ({img,name,phone,email }) => {
    return ( 
    <article className="article-container">
        <div>
              <img src={img} 
              alt="" />
              <h3>{name}</h3>
              <div className="personal-info">
                  <i className="fa-solid fa-phone"></i>
                  <p>{phone}</p>
              </div>
              <div className="personal-info">
                  <i className="fa-regular fa-envelope"></i>
                  <p>{email}</p>
              </div>
        </div>
         
    </article>
    );
}
 
export default Contact;