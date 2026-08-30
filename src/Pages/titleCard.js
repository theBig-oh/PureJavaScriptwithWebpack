import MakeElement from '../Tools/MakeElement.js';

const makeEle = new MakeElement;


export default function TitleCard(data) {
	console.log('this is the title card');

	let info = data ? data : null;

	let titleCard = makeEle.createEle('div','TitleCard',[12,12,12,12],['bodyContainerItem','titleCardContainer']);
	let titleCardBG = makeEle.createEle('div','titleCardBG',[12,12,12,12],['titleCardBG','titleCardContainerContent']);
	let titleCardContent = makeEle.createEle('div','titleCardContent',[12,12,12,12],['titleCardContent','titleCardContainerContent']);
	let titleCardName = makeEle.createEle('div','titleCardName',[12,12,6,6],['titleCardName','titleCardInnerContent']);
	let titleCardLogo = makeEle.createEle('h1','titleCardLogo',[12,12,6,6],['titleCardLogo','titleCardInnerContent']);
	

	titleCardName.innerHTML = `<div> Oscar Medrano </div>`;

	titleCardContent.append(titleCardName);	

	titleCard.append(titleCardContent);

	return titleCard;

}