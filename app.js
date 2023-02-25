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
    console.log(mealData);
    container.innerHTML = "";
    mealData.forEach(meal => {
        console.log(meal);
        const div = document.createElement("div");
        
        div.innerHTML = `
        <div class="card px-[24px] lg:card-side bg-base-100 shadow-xl">
        <figure><img src="${meal.strMealThumb}"></figure>
        <div class="card-body">
          <h2 class="card-title">${meal.strMeal}</h2>
          <p>${meal.strInstructions.slice(0,80)}</p>
          <!-- The button to open modal -->
          <label for="my-modal" class="text-[18px] text-[#FFC107] font-[600]">View Details</label>
          

<!-- Put this part before </body> tag -->
          
<input type="checkbox" id="my-modal" class="modal-toggle" />

<div class="modal">
  <div class="modal-box">
  <figure><img src="${meal.strMealThumb}"></figure>
 
    <p class="py-4">${meal.strInstructions}</p>
    <div class="modal-action">
      <label for="my-modal" class="btn border-none bg-[red]">Close</label>
    </div>
  </div>
</div>

</div>
          
          

       
       
        `;


        container.appendChild(div)
        
    })

   
}

const searchMeal = () => {
    const inputField = document.getElementById("input-field").value;
    loadMeals(inputField)

}


loadMeals('rice');




// <!-- Put this part before </body> tag -->
          
//           <input type="checkbox" id="my-modal" class="modal-toggle" />
          
//           <div class="modal">
//             <div class="modal-box">
//             <figure><img src="${meal.strMealThumb}"></figure>
           
//               <p class="py-4">${meal.strInstructions}</p>
//               <div class="modal-action">
//                 <label for="my-modal" class="btn border-none bg-[red]">Close</label>
//               </div>
//             </div>
//           </div>
         
//         </div>