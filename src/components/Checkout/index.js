import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {selectAuth, updateProfile} from '../../redux/reducers/authSlice'
import {Link} from 'react-router-dom'

const styles =  {
  valid : {
    display: 'none'
  }, 
  errors: {
    color: 'crimson',
    display: 'block'
  } 
}
function Checkout() {

  const dispatch = useDispatch();
  const {user} = useSelector(selectAuth);

  const dataProfile = {
    givenName: user.givenName,
    familyName: user.familyName,
    email: user.email
  }

  const [values, setValues] = useState(dataProfile ? dataProfile : null);
  const {givenName, familyName, email} = values;
  
  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value});
    console.log('values:', values)
  };
  const submitProfile = e => {
    e.preventDefault();
    dispatch(updateProfile({...user, ...values}));
    console.log({...user, ...values})
  }

  return (
    <section className="pt-5 pb-5">
        <div className="container">
          <div className="py-5 text-center row justify-content-center">
            <div className="col-md-10">
              <h2>Details du client</h2>
            </div>
          </div>
          <div className="row justify-content-center rounded shadow pt-5 pb-5 bg-white ">
          
            <div className="col-md-8 ">
              <form className="needs-validation" onSubmit={submitProfile}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">Prenom</label>
                    <input 
                      className="form-control"
                      type="text" 
                      name="givenName"
                      value={givenName} 
                      id="firstName" 
                      placeholder={user?.givenName}
                      onChange={handleChange} 
                      />
                    <div style={styles.valid}>
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label for="lastName">Nom</label>
                    <input 
                      className="form-control"
                      type="text" 
                      name="familyName"
                      value={familyName}  
                      id="lastName"  
                      placeholder={user?.familyName} 
                      required=""
                      onChange={handleChange}
                      />
                    <div style={styles.valid}>
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label for="email">Email <span className="text-muted">(Optional)</span></label>
                  <input 
                    className="form-control"
                    type="email" 
                    name="email" 
                    value={email}  
                    id="email" 
                    placeholder={user?.email}
                    onChange={handleChange}  
                    />
                  <div style={styles.valid}>
                    Please enter a valid email address for order updates
                  </div>
                </div>
               
                <button className="btn btn-outline-info mb-4" type="submit">
                    Mettre à jour 
                </button>
                <button className="btn btn-primary btn-lg btn-block" type="submit">
                    <Link to="/payment">Procéder au paiement</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
export default Checkout;
