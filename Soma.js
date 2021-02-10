function somar(){
    var tn1=document.getElementById("n1")
    var tn2=document.getElementById("n2")
    var n1=Number.parseInt(tn1.value)
    var n2=Number.parseInt(tn2.value)

    var res=n1+n2
    resultado.innerHTML=`A soma entre ${n1} e ${n2} é ${res}`

    
}