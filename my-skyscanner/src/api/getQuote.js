const fetch = require('node-fetch');
const utils = require('../utils/utils');
const resCode = require('../utils/resCode');
const resMessage = require('../utils/resMessage');
const parser = require('../parser/quoteParser');

async function getQuote(inputMessage){
  const country = 'KR';//inputMessage.country;
  const currency = 'KRW';//inputMessage.currency;
  const locale = 'ko-KR';//inputMessage.locale;
  const srcPlace = 'ICN-sky';//inputMessage.sra;
  const destPlace = 'JKF-sky';//inputMessage.destPlace;
  const outboundDate = '2020-05-20';//inputMessage.outboundDate;
  const inboundDate = '2020-05-30';//inputMessage.inboundDate;

  const URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${country}/${currency}/${locale}/${srcPlace}/${destPlace}/${outboundDate}?inboundpartialdate=${inboundDate}`;
  if(!inputMessage){
    return utils.fail(resCode.BAD_REQUEST,resMessage.BAD_REQUEST);
  }else{
    const result = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/KR/KRW/ko-KR/ICN-sky/JFK-sky/2020-05-20?inboundpartialdate=2020-05-30", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "8323f7235amsha4e282c91d24af8p16783bjsne24bc97e4829"
      }
    });
    if(result){
      const jsonResult =await result.json();
      const parsedJson = parser(jsonResult);
      if(parsedJson){
        return utils.success(resCode.SUCCESS,resMessage.SUCCESS,parsedJson);
      }else{
        return utils.fail(resCode.BAD_REQUEST,resMessage.BAD_REQUEST)
      }
    }else{
      return utils.fail(resCode.NOT_FOUND,resMessage.NO);
    }
  }
}

module.exports = getQuote;