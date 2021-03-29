
import React from "react";

import "./feed.scss"

const Feed = () => {

    return (
        <>
            <div className="main-container">


                <div className="card">
                    <div className="profile">

                        <img src="https://randomuser.me/api/portraits/women/38.jpg" alt="women" />
                    </div>
                    <div className="divied">
                    <div className="my">
                        Tweets
                        <p><strong>1,614</strong></p>
                    </div>
                    <div className="my">
                        follower
                        <p><strong>600</strong></p>
                    </div>
                    <div className="my">
                        followings
                        <p><strong>20K</strong></p>
                    </div>




                    </div>



                    <div className="info">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dicta, labore magnam laboriosam, deleniti numquam accusamus, facere voluptatem nostrum aliquid distinctio. Nisi ducimus maiores enim blanditiis, quas tenetur! Beatae, sunt.</p>

            
            <strong>Hariharan</strong>
                    </div>


                </div>

            </div>



        </>

    )
}
export default Feed;