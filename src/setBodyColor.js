//Function created that takes an object as a parameter with a name of color 
// the color of the parameter 
// the function sets the document element to a specific color here we set it to the ariable we created in out css

export default function setBodyColor({color}){
   document.documentElement.style.setProperty('--bodyColor', color)


   
}