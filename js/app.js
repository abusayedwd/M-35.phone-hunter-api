// console.log('its waking')
 const loadPhones = async(searchField) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`   
    const res = await fetch(url);
    const data =await res.json() ;
    displayPhones(data.data)
 }

const displayPhones = phones => {
        // console.log(phones)
        const divContainer = document.getElementById('phone-container');
        divContainer.innerText = '';
         phones = phones.slice(0, 6)
        //  not show display 
        notFound = document.getElementById('not-found');
        if(phones.length === 0){
                notFound.classList.remove('hidden')

        }else{
                notFound.classList.add('hidden')
        }
        phones.forEach(phone => {
                console.log(phone)
        const createDiv =  document.createElement('div');
        createDiv.classList.add('card');
        createDiv.innerHTML = `
        
        <div class="card w-full  h-84 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img class = "w-4/5" h-4/6 src="${phone.image}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
 
        
        `;
                divContainer.appendChild(createDiv)
        })
        // stop spinner 
        toggleSpinner(false);
}
document.getElementById('search-btn').addEventListener('click', function(){
        toggleSpinner(true);
        const searchField = document.getElementById('search-field').value ;
        // console.log(searchField)
        loadPhones(searchField);
})

const toggleSpinner = isLodding => {
        const spinner = document.getElementById('loder')
        if(isLodding){
            spinner.classList.remove('hidden')    
        }else{
                spinner.classList.add('hidden');
        }
}


//  loadPhones()
 