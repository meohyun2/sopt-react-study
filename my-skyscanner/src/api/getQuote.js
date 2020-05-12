const fetch = require('node-fetch');
const utils = require('../utils/utils');
const resCode = require('../utils/resCode');
const resMessage = require('../utils/resMessage');
const parser = require('../parser/quoteParser');
const searchPlace = require('./searchPlace');

async function getQuote(inputMessage){
  const country = 'KR';
  const currency = 'KRW';
  const locale = 'ko-KR';
  const srcPlace = encodeURI(inputMessage.src);
  const destPlace = encodeURI(inputMessage.dest);
  const outboundDate = inputMessage.outboundDate;
  const inboundDate = inputMessage.inboundDate;

  const URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${country}/${currency}/${locale}/${srcPlace}/${destPlace}/${outboundDate}/${inboundDate}`;
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