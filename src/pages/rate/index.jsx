import React from "react";
import "./rate.scss";
import StarRating from "../../components/star-rating";
const Data = [
    {
        name: "naveen",
        rating: 3,
        text: "Dai super da.. epudi da ipudi lam panna mudiyuthu ungalala. neega vera leval da unmaila super da"
    },
    {
        name: "vatti da",
        rating: 4,
        text: "vadaa",
    },
    {
        name: "hari",
        rating: 2,
        text: "enamoo poo",
    },
    {
        name: "comali",
        rating: 5,
        text: "nee yaru da comali",
    },
    {
        name: "ironman",
        rating: 1,
        text: "nandha da ironman"
    }
]


const Rate = () => {
    return (
        <>
            {Data.map(
                (item) => (
                    <div>
                        <h4>{item.name}</h4>
                        <StarRating value={item.rating} />
                        <p>{item.text}</p>
                    </div>
                )
            )}
        </> 

    )
}
export default Rate;