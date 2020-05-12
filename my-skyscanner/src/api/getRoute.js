const fetch = require('node-fetch');
const utils = require('../utils/utils');
const resCode = require('../utils/resCode');
const resMessage = require('../utils/resMessage');
const parser = require('../parser/routeParser');


async function getRoute(inputMessage){
  const country = 'KR';//inputMessage.country;
  const currency = 'KRW';//inputMessage.currency;
  const locale = 'ko-KR';//inputMessage.locale;
  const srcPlace = 'ICN-sky';//inputMessage.sra;
  const destPlace = 'HND-sky';//inputMessage.destPlace;
  const outboundDate = '2020-05-20';//inputMessage.outboundDate;
  const inboundDate = '2020-05-30';//inputMessage.inboundDate;

  const URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/${country}/${currency}/${locale}/${srcPlace}/${destPlace}/${outboundDate}/${inboundDate}`;
  if(!inputMessage){
    return utils.fail(resCode.BAD_REQUEST,resMessage.BAD_REQUEST);
  }else{
    const result = await fetch(URL, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "8323f7235amsha4e282c91d24af8p16783bjsne24bc97e4829"
      }
    });
    if(result){
      const jsonResult =await result.json();
      console.log(jsonResult);
    }
  }
}

getRoute('testing');