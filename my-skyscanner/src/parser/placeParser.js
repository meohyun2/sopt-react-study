const placeParser = (body) => {
  if(body){
    let result =[];
    if(body.Places){
      body.Places.forEach(element=>{
        let tempData = {
          PlaceID : element.PlaceId,
          PlaceName : element.PlaceName,
          CountryID : element.CountryId,
          CountryName : element.CountryName
        }
        result.push(tempData);
        console.log(result);
      });
      return result;
    }else{
      return null;
    }
  }else{
    return null;
  }
}

module.exports = placeParser;