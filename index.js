let employee={
    names: "Shazzy",
    streetAddress: "11Broadway"
}
function updatedEmployeeWithKeyAndValue(employee,key,value){
    let updatedemployee={...employee}
    updatedemployee[key]=value
    return updatedemployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    let anotheremployee={...employee}
    delete anotheremployee[key]
    return anotheremployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee;
}


