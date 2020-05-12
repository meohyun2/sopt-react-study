const quoteParser = (body) => {
  if(!body.Quotes[0]){
    return null;
  }else{
    const result = {
      Quotes : {
        MinPrice:body.Quotes[0].MinPrice,
        Direct:body.Quotes[0].Direct,
        OutboundLeg:body.Quotes[0].OutboundLeg,
      },
      Places : {
        Src : {
          IataCode:body.Places[0].IataCode,
          Name:body.Places[0].Name,
          CityName:body.Places[0].CityName,
          CountryName:body.Places[0].CountryName
        },
        Dest : {
          IataCode:body.Places[0].IataCode,
          Name:body.Places[0].IataCode,
          CityName:body.Places[0].CityName,
          CountryName:body.Places[0].CountryName
        }
      },
      Carriers:body.Carriers,
    }
    return(result);
  }
};

module.exports = quoteParser;