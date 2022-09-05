import profile from '../assets/profile.jpg'
function Bio(){
    return(
        <section>
          <img src={profile} alt="profile of me"/>
          <br/>
          <h2>Upendra Karri</h2>
          <br/>
          <h4>Software Developer 😎</h4>
        </section>
        
    )
}

export default Bio;