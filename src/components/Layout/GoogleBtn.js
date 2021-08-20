import React from 'react'
import {GoogleLogout} from 'react-google-login';
import {useDispatch} from 'react-redux';
import {logOut} from '../../redux/reducers/authSlice'
import {useSelector} from 'react-redux'
import {selectAuth} from '../../redux/reducers/authSlice'


const styles = {
    img: {
      borderRadius: "50%",
      width: "32px",
      height: "32px",
      border: "2px solid #bdc3c7",
    },
    dropdown: {
      background: "transparent",
      borderColor: "transparent",
    },
  };

export default function GoogleBtn() {

    const dispatch = useDispatch();
    const {user} = useSelector(selectAuth);

    const handleLogoutSuccess = response => {
        console.log(response);
        dispatch(logOut());
    };
    const handleLogoutFailure = response => {
        console.log(response);
    };

    return (
        <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                width="32"
                height="32"
                src={user?.imageUrl}
                style={styles.img}
                alt="profile"
              />
            </button>
            <ul
              style={styles.dropdown}
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <GoogleLogout
                  clientId="99282516978-8tekktfacq2fq41v6kqrtcbfu3bck8dh.apps.googleusercontent.com"
                  buttonText="Deconnexion"
                  onLogoutSuccess={handleLogoutSuccess}
                  onFailure={handleLogoutFailure}
                /> 
              </li>
            </ul>
          </div>
    )
}
