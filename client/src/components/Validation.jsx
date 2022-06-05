export function Validation(input){
    let errors ={};

    //INPUT NAME

    if(!input.name) errors.name ="Name is required";

    if(input.name.search(/^[a-zA-Z\s]*$/) )errors.name ="No numbers or symbols are allowed in the name "

    //INPUT MIN HEIGHT
    
    if(input.heightMin.search(/^[0-9]{1,5}$/) )errors.heightMin = "Write up to 5 characters that must be numeric"

    if(!input.heightMin) errors.heightMin = "Minimum height is required"

    if(parseInt(input.heightMin) > parseInt(input.heightMax))errors.heightMin = "The minimum height cannot be greater than the maximum height";
    
    if(input.heightMin < 0) errors.heightMin = "Negative numbers are not allowed"


    //INPUT MAX HEIGHT

    if(input.heightMax.search(/^[0-9]{1,5}$/) )errors.heightMax = "Write up to 5 characters that must be numeric"

    if(!input.heightMax) errors.heightMax = "Minimum height is required"

    if(parseInt(input.heightMax) < parseInt(input.heightMin))errors.heightMax = "The minimum height cannot be greater than the maximum height";
    
    if(input.heightMax < 0) errors.heightMax = "Negative numbers are not allowed"

    //INPUT MIN WEIGHT

    if(input.weightMin.search(/^[0-9]{1,5}$/) )errors.weightMin = "Write up to 5 characters that must be numeric"

    if(!input.weightMin) errors.weightMin = "Minimum height is required"

    if(parseInt(input.weightMin) > parseInt(input.weightMax))errors.weightMin = "The minimum height cannot be greater than the maximum height";
    
    if(input.weightMin < 0) errors.weightMin = "Negative numbers are not allowed" 


    //INPUT MAX wEIGHT

    if(input.weightMax.search(/^[0-9]{1,5}$/) )errors.weightMax = "Write up to 5 characters that must be numeric"

    if(!input.weightMax) errors.weightMax = "Minimum height is required"

    if(parseInt(input.weightMax) < parseInt(input.weightMin))errors.weightMax = "The minimum height cannot be greater than the maximum height";
    
    if(input.weightMax < 0) errors.weightMax = "Negative numbers are not allowed"

    //INPUT MIN LIFE SPAN

    if(input.life_span_min.search(/^[0-9]{1,5}$/) )errors.life_span_min = "Write up to 5 characters that must be numeric"

    if(!input.life_span_min) errors.life_span_min = "Minimum height is required"

    if(parseInt(input.life_span_min) > parseInt(input.life_span_max))errors.life_span_min = "The minimum height cannot be greater than the maximum height";
    
    if(input.life_span_min < 0) errors.life_span_min = "Negative numbers are not allowed" 

    //INPUT MAX LIFE SPAN

    if(input.life_span_max.search(/^[0-9]{1,5}$/) )errors.life_span_max = "Write up to 5 characters that must be numeric"

    if(!input.life_span_max) errors.life_span_max = "Minimum height is required"

    if(parseInt(input.life_span_max) < parseInt(input.life_span_min))errors.life_span_max = "The minimum height cannot be greater than the maximum height";
    
    if(input.life_span_max < 0) errors.life_span_max = "Negative numbers are not allowed"

    //INPUT IMAGE URL

    if(input.image.search(/(https?:\/\/.*\.(?:png|jpg))/i)) errors.image = 'Write a valid URL'

    return errors;

 
}