//function Declaration

function ask(question, yes, no){
    if(confirm(question)) yes()
 else no();
}

function shwoYes(){
    alert("ok");
}

function shwoNo(){
    alert ("no");
}

ask(".......", shwoYes, shwoNo);

-----------------------------------------------------------

//function Expression

function ask(question, yes, no){
    if(confirm(question)) yes()
    else no()
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);