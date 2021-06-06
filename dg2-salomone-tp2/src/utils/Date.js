


export function date(){
    const weekdays = [
        "Domingo", 
        "Lunes", 
        "Martes", 
        "Miércoles", 
        "Jueves", 
        "Viernes", 
        "Sábado"
    ]

    const months = [
        "Enero", 
        "Febrero", 
        "Marzo", 
        "Abril", 
        "Mayo", 
        "Junio", 
        "Julio", 
        "Augosto", 
        "Septiembre", 
        "Octubre", 
        "Noviembre", 
        "Diciembre",
    ]

    let today = new Date();

    var textualDay = weekdays[today.getDay()];
    var day = String(today.getDate()).padStart(2,);
    var month = months[today.getMonth()]; 
    var year = today.getFullYear();

    today = textualDay + ', ' + day + " de " + month + " " + year;

    return today;
}