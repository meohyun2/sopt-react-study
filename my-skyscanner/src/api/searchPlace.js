const fetch = require('node-fetch');
const utils = require('../utils/utils');
const resCode = require('../utils/resCode');
const resMessage = require('../utils/resMessage');
const placeParser = require('../parser/placeParser');

async function searchPlace (query) {
	const currency = "KRW";
	const locale = "ko-KR";
	const country = "KR";
  const result = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/${country}/${currency}/${locale}/?query=${encodeURI(query)}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
			"x-rapidapi-key": "8323f7235amsha4e282c91d24af8p16783bjsne24bc97e4829"
		}
	});
	if(result){
		const resJson = await result.json();
		console.log(resJson)
		const parsedJson = await placeParser(resJson);
		if(parsedJson){
			console.log(parsedJson[0]);
			return utils.success(resCode.SUCCESS,resMessage.SUCCESS,parsedJson[0]);
		}else{
			console.log('error)bad request');
			return utils.fail(resCode.BAD_REQUEST,resMessage.BAD_REQUEST);
		}
	}else{
		return utils.fail(resCode.NOT_FOUND,resMessage.NOT_FOUND);
	}
}

module.exports = searchPlace;