const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `;

  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => showMeal(data.meals))
    .catch(err => console.log(err))
}


const showMeal = mealData => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  mealData.forEach(meal => {


    const div = document.createElement("div");

    div.innerHTML = `
        <div class="card px-[24px] lg:card-side bg-base-100 shadow-xl">
        <figure><img src="${meal.strMealThumb}"></figure>
        <div class="card-body">
          <h2 class="card-title">${meal.strMeal}</h2>
          <p>${meal.strInstructions.slice(0, 80)}</p>
          <!-- The button to open modal -->
          <label for="my-modal" onClick="loadDetails('${meal.idMeal}')"  class="text-[18px] text-[#FFC107] font-[600]">View Details</label>
          


         


        
     </div>

        `;


    container.appendChild(div)


  })


}

const searchMeal = () => {
  const inputField = document.getElementById("input-field").value;
  loadMeals(inputField)

}


const loadDetails = id => {


  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data.meals))
    .catch(err => console.log(err))
}

const showDetails = data => {

  data.forEach(details => {
    console.log(details);
    const image = document.getElementById("img");
    image.innerHTML = `
    <img src="${details.strMealThumb}">
    `
    const mealDetails = document.getElementById("mealDetails");
    mealDetails.innerText = details.strInstructions;
  })
}

loadMeals('rice');









