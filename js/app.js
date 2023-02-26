// console.log('its waking')
 const loadPhones = async(searchField,dataLImit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`   
    const res = await fetch(url);
    const data =await res.json() ;
    displayPhones(data.data, dataLImit)
 }

const displayPhones = (phones,dataLImit) => {
        console.log(phones )
        const divContainer = document.getElementById('phone-container');
        divContainer.innerText = '';
        //  show button is getar then phones
        const showButton = document.getElementById('show-btn');
        if( dataLImit && phones.length > 10){
                phones = phones.slice(0, 6)
                showButton.classList.remove('hidden');
        }else{
                showButton.classList.add('hidden')
        }
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
      <button onclick ="showPhoneDetails('${phone.slug}')" class="btn btn-primary">Phone Details</button>
      <a href="#my-modal-2" class="btn">open modal</a>
       
    </div>
  </div>
</div>
 
        
        `;
                divContainer.appendChild(createDiv)
        })
        // stop spinner 
        toggleSpinner(false);
}

const prosessSearch = (dataLImit) => {
        toggleSpinner(true);
        const searchField = document.getElementById('search-field').value ;
        // console.log(searchField)
        loadPhones(searchField, dataLImit);
}

document.getElementById('search-btn').addEventListener('click', function(){
         prosessSearch(10);
})

document.getElementById('show-btn').addEventListener('click', function(){
        prosessSearch()
})

document.getElementById('search-field').addEventListener('keypress', function(e){
        // console.log(e.key)
        if(e.key == 'Enter'){
         prosessSearch(10);      
        }
})


const toggleSpinner = isLodding => {
        const spinner = document.getElementById('loder')
        if(isLodding){
            spinner.classList.remove('hidden')    
        }else{
                spinner.classList.add('hidden');
        }
}
const showPhoneDetails = async(id) => {

        const Url = ` https://openapi.programming-hero.com/api/phone/${id}`;
        const res = await fetch(Url)
        const data = await res.json()
        console.log(data.data)
}
    


//  loadPhones()
 