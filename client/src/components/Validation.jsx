export function Validation(input){
    let errors ={};

    //INPUT NAME

    if(!input.name) errors.name ="Name is required";

    if(input.name.search(/^[a-zA-Z\s]*$/) )errors.name ="Invalid format"

    //INPUT MIN HEIGHT
    
    if(input.heightMin.search(/^[0-9]{1,5}$/) )errors.heightMin = "Invalid format"

    if(!input.heightMin) errors.heightMin = "Minimum height is required"

    if(parseInt(input.heightMin) > parseInt(input.heightMax))errors.heightMin = "Invalid format";
    
    if(input.heightMin < 0) errors.heightMin = "Invalid format"


    //INPUT MAX HEIGHT

    if(input.heightMax.search(/^[0-9]{1,5}$/) )errors.heightMax = "WInvalid format"

    if(!input.heightMax) errors.heightMax = "Maximun height is required"

    if(parseInt(input.heightMax) < parseInt(input.heightMin))errors.heightMax = "Invalid format";
    
    if(input.heightMax < 0) errors.heightMax = "Invalid format"

    //INPUT MIN WEIGHT

    if(input.weightMin.search(/^[0-9]{1,5}$/) )errors.weightMin = "Invalid format"

    if(!input.weightMin) errors.weightMin = "Minimum weight is required"

    if(parseInt(input.weightMin) > parseInt(input.weightMax))errors.weightMin = "Invalid format";
    
    if(input.weightMin < 0) errors.weightMin = "Invalid format" 


    //INPUT MAX wEIGHT

    if(input.weightMax.search(/^[0-9]{1,5}$/) )errors.weightMax = "Invalid format"

    if(!input.weightMax) errors.weightMax = "Maximun weight is required"

    if(parseInt(input.weightMax) < parseInt(input.weightMin))errors.weightMax = "Invalid format";
    
    if(input.weightMax < 0) errors.weightMax = "Invalid format"

    //INPUT MIN LIFE SPAN

    if(input.life_span_min.search(/^[0-9]{1,5}$/) )errors.life_span_min = "Invalid format"

    if(!input.life_span_min) errors.life_span_min = "This field is required"

    if(parseInt(input.life_span_min) > parseInt(input.life_span_max))errors.life_span_min = "Invalid format";
    
    if(input.life_span_min < 0) errors.life_span_min = "Invalid format" 

    //INPUT MAX LIFE SPAN

    if(input.life_span_max.search(/^[0-9]{1,5}$/) )errors.life_span_max = "Invalid format"

    if(!input.life_span_max) errors.life_span_max = "This field is required"

    if(parseInt(input.life_span_max) < parseInt(input.life_span_min))errors.life_span_max = "Invalid format";
    
    if(input.life_span_max < 0) errors.life_span_max = "Invalid format"

    //INPUT IMAGE URL

    if(input.image.search(/(https?:\/\/.*\.(?:png|jpg))/i)) errors.image = 'Write a valid URL'

    return errors;

 
}