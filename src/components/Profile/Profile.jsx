import React from 'react';
import { Link } from 'react-router-dom';


const Profile = () => {


    return (<>


        {localStorage.length > 0 ? <div className='container my-5 bg-dark text-secondary rounded-5  '>

            <div className="row">


                <div className="col-lg-6 my-4  ">
                    <h2 className='my-5'>First Name : {JSON.parse(localStorage.getItem("user data")).firstName}</h2>

                    <h2> Last Name : {JSON.parse(localStorage.getItem("user data")).lastName}</h2>

                    <h2 className='my-5'> User Name : {JSON.parse(localStorage.getItem("user data")).userName}</h2>

                    <h2>Email : {JSON.parse(localStorage.getItem("user data")).email}</h2>

                </div>

                <div className="col-lg-6 my-4 ">
                    <h2 className='my-5'>Password : {JSON.parse(localStorage.getItem("user data")).password}</h2>

                    <h2> City : {JSON.parse(localStorage.getItem("user data")).city}</h2>

                    <h2 className='my-5'> Phone : {JSON.parse(localStorage.getItem("user data")).phoneNumber}</h2>

                    <h2>Gander : {JSON.parse(localStorage.getItem("user data")).gander}</h2>
                    <div className='my-5'>
                        <Link to={`/editeuser/${JSON.parse(localStorage.getItem("user data")).id}`}> <button className='btn btn-danger '>Edit</button></Link>
                    </div>
                </div>

            </div>

        </div> : "no data"}









    </>);
}

export default Profile