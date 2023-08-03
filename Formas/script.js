function piramide() {
    let BasePiramide = Number(prompt("Qual o valor do lado da base da pirâmide ?"))
    let AlturaPiramide = Number(prompt("Qual a altura dessa pirâmide ?"))
    let VolumePiramide = (BasePiramide*BasePiramide)*AlturaPiramide

    alert (`O valor do volume do retângulo é de ${VolumePiramide} M³`)
}

function cubo(){
    let LadoCubo = Number(prompt("Qual é o valor do lado desse cubo?"))
    let VolumeCubo = (LadoCubo*LadoCubo)*LadoCubo

    alert ('O volume do cubo é de ${VolumeCubo} M³')
    
}
function cilindro(){
    let DiametroCilindro = Number(prompt("Qual o valor do diâmetro dessa forma?"))
    let AlturaCilindro = Number(prompt("Qual a altura do cilindro?"))
    let VolumeCilindro ((DiametroCilindro/2)*3,14)*AlturaCilindro

    alert ('o volume do cilindro é de ')
}