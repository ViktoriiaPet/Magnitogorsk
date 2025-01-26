const header = document.createElement("header");
document.body.append(header);
header.classList.add('header-block')

const LaborPhotoBlock = document.createElement("div");
header.append(LaborPhotoBlock);
LaborPhotoBlock.classList.add('labor-photo-sizing')

const SimbolsMagnotogorsk = document.createElement("div");
header.append(SimbolsMagnotogorsk);
SimbolsMagnotogorsk.classList.add('simbols-magnotogorsk')

const main = document.createElement("main");
document.body.append(main);

const menuGeneral = document.createElement("div");
menuGeneral.classList.add('high-menu-general')
main.append(menuGeneral);

const aboutCity = document.createElement("div");
aboutCity.classList.add('block-high-menu')
menuGeneral.append(aboutCity);

const aboutCityText = document.createElement("p");
aboutCityText.classList.add('block-high-menu-text')
aboutCityText.textContent = 'О ГОРОДЕ'
aboutCity.append(aboutCityText);

const plus = document.createElement("div");
plus.classList.add('plus')
aboutCity.append(plus);

const plusOne = document.createElement("div");
plusOne.classList.add('plusOne')
plus.append(plusOne);

const plusTwo = document.createElement("div");
plusTwo.classList.add('plusTwo')
plus.append(plusTwo);
