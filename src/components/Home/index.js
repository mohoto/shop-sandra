import React from 'react'
import Sidebar from './Sidebar'
import Gallery from './Gallery'

function Home() {

  const array =["Mark", "Lea", "Justine"];
  const [userOne, ...rest] = array;
  console.log("rest", rest);
  const members = {
    userOneBis: "Mark",
    userTwoBis: "Lea",
    userThreeBis: "Justine"
  }
  const name = {
    userOneBis: "Paul",
    userTwoBis: "Pierre",
  }

  const loisirs = {
    loisirOne: "Petanque",
    loisirTwoBis: "bateau",
    loisirThreeBis: "Sport"
  }

  const user = {...members, userOneBis: "Paul"};
  console.log('user:', user)
  const {userOneBis: hulk, userTwoBis, userThreeBis} = members;
  console.log(hulk, userTwoBis, userThreeBis);


    return (
    <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <Sidebar />
            <Gallery />
         </div>
        </div>
      </section>
    );
  }
  export default Home
