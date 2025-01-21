import propTypes from 'prop-types';

function UserGreeting(props){
    return(props.isLoggedIn) ? <h2 className="welcome-message"> Welcome to {props.username}</h2>
                              : <h2 className="login-prompt">Please log in</h2>;
     
}

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting