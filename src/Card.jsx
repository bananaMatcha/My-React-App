import profilePic from './assets/girl.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src ={profilePic} alt='profile picture'></img>
            <h2>Han Nguyen</h2>
            <p> I make website from coding</p>
        </div>
    )
}
export default Card