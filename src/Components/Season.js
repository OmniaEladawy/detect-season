import './season.css';

const summerConfig = {
  summer:{
    text: "Let's hit the beach!" ,
    icon: <i className="sun icon orange massive"></i>
  },
  winter:{
    text: "Burr , .. it is chilly" ,
    icon: <i className="snowflake icon blue massive"></i>
  }
}

const determinSeason = (lat,month) => {
      if((month >= 3 && month <= 8)){
        if(lat>0){
          return "summer"
        }else{
          return "winter"
        }
    }else{
      return lat > 0 ? 'winter' : 'summer'
    }
}


function Season(props) {
  const month = new Date().getMonth();
  const season = determinSeason(props.lat,month);
  const {text,icon} = summerConfig[season];
  return (
    <div className={`Season ${season}`}>
      <span className='icon-left'>{icon}</span>
      <h1 className='text-center'>{text} </h1>
      <span className='icon-right'>{icon}</span>
    </div>
  );
}

export default Season;