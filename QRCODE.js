let qrtext=document.querySelector(".header .input");

let select=document.querySelector("#sizes");

let qrcontainer=document.querySelector(".qrcontainer");

let generate =document.querySelector(".GENERATE");
let download=document.querySelector(".DOWNLOAD");

let img =document.querySelector(".img");




QRCODESIZE();
 function QRCODESIZE(){

  for( let size in generatorsize){
   console.log(size);
   let newoption=document.createElement("option");
   newoption.innerText=generatorsize[size];
   newoption.value=size;
   select.append(newoption);
   
}
  }
 select.addEventListener("change",(evt)=>{
      let resultsize=selectsize(evt.target);
     
      qrexcuter(resultsize);
 });
  function selectsize(element){
  let sival=element.value;
  
  return sival;

}

function qrexcuter(s){ 
generate.addEventListener("click",(evt)=>{
evt.preventDefault();
 img.style.display="block";
 let api=`https://api.qrserver.com/v1/create-qr-code/?size=${s}x${s}&data=${qrtext.value}`;
 img.src=`${api}`;
 setTimeout(()=>{
 img.style.display="none";
 },10000);
});
 }

 download.addEventListener("click",()=>{
     if(img!=null){
      let QRimg=img.getAttribute("src");
      download.setAttribute("href",QRimg);
     }
     else{
      download.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
     }
 });

 



 















