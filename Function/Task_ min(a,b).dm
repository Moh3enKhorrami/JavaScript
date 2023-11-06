beispiel:
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1




function checkMin(a,b){
    let a = prompt ('schreiben Sie erste nummer','');
    let b = prompt ('schreiben Sie zweite nummer','');

    if (a<b){
        return a;
    } else{
        return b;
    }
}



mit ?

function checkMin(a,b){
    let a = prompt ('schreiben Sie erste nummer','');
    let b = prompt ('schreiben Sie zweite nummer','');

    return (a < b) ? a : b;
    
    
}