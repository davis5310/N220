console.log("here");

const Fall = {
  season: "Fall",
  months: [September, October, November],
  drink: favDrink(),
  food: "Pumpkin Pie",
  favSeason: true,
  holidays: ("Labor Day", "Veteran's Day", "Halloween", "Thanksgiving"),
  seasonNum: 3,
};
function favDrink() {
  let drinks = ["Apple Cider", "Pumpkin Spice Drinks", "Hot Chocolate"];
  let todayDrink = drinks[Math.floor(Math.random() * drinks.length)];
 return todayDrink;
}
document.getElementsByTagName("h1").innerText = Fall.season;
document.getElementsByTagName("h2")[0].innerText = Fall.season + " Holidays";
document.getElementsByTagName("h2")[1].innerText = Fall.season + " Favorites";
document.getElementsByTagName("h2")[2].innerText = Fall.season + " Notes";
for (hol in holidays) {
  holItem += "<li>" + hol + "</li>";
}
letholItem = "0"
for(hol in Fall.holidays0{
    holItem+= <li> + hol + </li>
})
document.getElementsByTagName("ul")[0].innerHTML = holItem;
document.getElementByClassName("foodDrink").innerText =
  Fall[drink] + " and " + Fall.food;
  fall.drink + "and" + fall.food
function fallCount(num) {
  if (Fall.months === num) {
    console.log("Fall is " + num / 12 + " of the calendar year.");
  }
}
if (favSeason) {
  document.querySelector("p:not(#food-drink)").innerText =
    "Fall is also my favorite season!";
} else {
  document.querySelectorAll("p:not(#food-drink)").innerText =
    "If Fall isn't your favorite season, which season do you prefer?";
}
