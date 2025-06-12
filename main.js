const labelInputField=document.querySelector('#labelValue')
const form=document.querySelector('#form')
const inputType= document.querySelector('#inputType')
labelInputField.addEventListener('keyup',(event)=>{
    const keyPressed= event.key
    if(keyPressed === "Enter") {

   const label=labelInputField.value
   const type = inputType.value
   
   const labelInput=document.createElement("label")
   const div= document.createElement("div")
   let input =null;
   if(type==='textarea'){
    input=document.createElement('textarea')
   }
   else{

   input = document.createElement("input")
   }
   
   labelInput.innerHTML=label
   input.classList.add('form-control')
   labelInput.classList.add('form-label')
   div.classList.add('mb-3')

   if(type !='submit'){
    
   div.appendChild(labelInput)
    }
    else{
     input.classList.add("btn")
     input.classList.add("btn-success")
     input.value=label
    }
   div.appendChild(input)
   form.appendChild(div)
   input.type=type

}
})