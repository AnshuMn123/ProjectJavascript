let day = 'Monday'

switch(day){
    case 'Monday' :
        console.log('7am');
        break;

    case 'Tuesday' :
        console.log('4am');
        break;

    case 'Wednesday' :
        console.log('4am');
        break;

    case 'Thursday' :
        console.log('4am');
        break;

    case 'Friday' :
        console.log('9am');
        break;

    case 'Saterday' :
        console.log('8am');
        break;
    default :
        console.log("no days");

}

day = 'Tuesday'

switch(day){
    case 'Monday' :
        console.log('7am');
        break;
        
    case 'Tuesday' :
    case 'Wednesday' :
    case 'Thursday' :
        console.log('4am');
        break;

    case 'Friday' :
        console.log('9am');
        break;

    case 'Saterday' :
        console.log('8am');
        break;
    default :
        console.log("no days");

}