import React from "react";
import { Star } from "react-feather";

const StarRating=(props)=>{
    const getColor= (count)=>{

  if(props.value == 5){
      return"lightgreen"
  }else if (props.value == 4 && count <=4 ){
         return"yellow"  
  }else if (props.value == 3 && count <=3){
      return"yellow"
  }else if (props.value == 2 && count <=2){
      return"red"
  }else if (props.value == 1 && count<=1){
      return"red"
  }

       return "black"

    }


    return(<div>

<Star stroke={getColor(1)}  fill={getColor(1)} size={16} />
<Star stroke={getColor(2)}  fill={getColor(2)} size={16} />
<Star stroke={getColor(3)}  fill={getColor(3)} size={16} />
<Star stroke={getColor(4)}  fill={getColor(4)} size={16} />
<Star stroke={getColor(5)}  fill={getColor(5)} size={16} />
({props.value})


    </div>
    )
}
export default StarRating;