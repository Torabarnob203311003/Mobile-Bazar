 const loadPhone = async (searchText,isShowall) => {

 const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
 const data = await res.json();
  const phones = data.data;
  diplayPhones(phones,isShowall)
  phones = '';
  

 }
  const diplayPhones  = (phones,isShowall) => {

    // step 1 : get element by id
     const phoneContainer= document.getElementById('phone-container')
     //clear container using ''
     phoneContainer.textContent ='';

      // if phones are  less then 12 show all button show and much will hide 
       const showAllButton =  document.getElementById ('showallbutton')
       console.log('is show all', isShowall)
       if(phones.length > 12&& !isShowall){
          showAllButton.classList.remove('hidden')

       }
       else{

                  showAllButton.classList.add('hidden')
       }

     //display first 10 phones  IS not show all
 if (!isShowall){
       phones=phones.slice(0,12);

 }

//  console.log(phones)
 phones.forEach( phone =>{

 console.log(phones)
//   step 2 : create a div 
  const phoneCard = document.createElement('div')
//   step 3. set the class 
  phoneCard.classList =(`card  bg-base-100 shadow-xl`)
   phoneCard.innerHTML = ` <figure><img src="${phone.image}" alt="Shoes" /></figure>
<div class="card-body">
    <h2 class="card-title"> ${phone.phone_name} </h2>
    <p>${phone.slug}</p>
    <div class="card-actions justify-center">
        <button onclick="handelshowdetails('${phone.slug}')" class="btn btn-warning font-extrabold mt-5">Show Details</button>
    </div>

   `;
    phoneContainer.appendChild(phoneCard);
    

 })

     // hide loading spinner
     toggleLoadingSpiner(false); // calling here the spiner function
  }
  //handel search button

 const handelSearch = (isShowall) =>{
    toggleLoadingSpiner(true); // calling here the spiner function

  const searchFeild = document.getElementById('search-feild')
  const searchText = searchFeild.value
    console.log(searchText)
    loadPhone(searchText,isShowall)
 }
 
 // addiong toogle spiner
  const toggleLoadingSpiner = (isLoading ) =>
{
   const loadingSpiner = document.getElementById('loading-spinner')   
  //  loadingSpiner.classList.remove('hidden') ;
  //  console.log(loadingSpiner) // remove it first
 if   (isLoading){
    loadingSpiner.classList.remove('hidden') ;

 }
 else{
    loadingSpiner.classList.add('hidden') ;

 }
}
    //   loadPhone()

     const handelClickShowall=()=>{
      handelSearch(true);


     }

     const handelshowdetails=async (id)=>{

      const res= await fetch(` https://openapi.programming-hero.com/api/phone/${id}`)
      const data = await res.json();
      console.log(data)

     }