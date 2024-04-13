const formulario = document.getElementById("formulario")
const imputs = document.querySelectorAll(".requerido")
const spans = document.querySelectorAll(".mensagem-erro")

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    validar(0)
    validar(1)
    validar(2)
    validar(3)
})

function validar(indice) {
    const imputSelecionado = imputs[indice]
    const spanQueVaiAparecer = spans[indice]

    if(imputSelecionado.value.trim().length <= 3) {
        imputSelecionado.classList.add("campo-com-erro")
        spanQueVaiAparecer.classList.add("aparecer")
    } else {
        imputSelecionado.classList.remove("campo-com-erro")
        spanQueVaiAparecer.classList.remove("aparecer")
    }
}



// function validarNome() {
//     const primeiroImput = imputs[0]
//     const primeiroSpan = spans[0]
//     if(primeiroImput.value.length <= 3) {
//         primeiroImput.classList.add("campo-com-erro")
//         primeiroSpan.classList.add("aparecer")
//     }else {
//         primeiroImput.classList.remove("campo-com-erro")
//         primeiroSpan.classList.remove("aparecer")
//     }
// }

// function validarEmail() {
//     const segundoImput = imputs[1]
//     const segundoSpan = spans[1]
//     if(segundoImput.value.length === 0) {
//         segundoImput.classList.add("campo-com-erro")
//         segundoSpan.classList.add("aparecer")
//     }else {
//         segundoImput.classList.remove("campo-com-erro")
//         segundoSpan.classList.remove("aparecer")
//     }
// }

// function validarNumero() {
//     const terceiroImput = imputs[2]
//     const terceiroSpan = spans[2]
//     if(terceiroImput.value.length === 0) {
//         terceiroImput.classList.add("campo-com-erro")
//         terceiroSpan.classList.add("aparecer")
//     }else {
//         terceiroImput.classList.remove("campo-com-erro")
//         terceiroSpan.classList.remove("aparecer")
//     }
// }

// function validarMensagem() {
//     const quartoImput = imputs[3]
//     const quartoSpan = spans[3]
//     if(quartoImput.value.length === 0) {
//         quartoImput.classList.add("campo-com-erro")
//         quartoSpan.classList.add("aparecer")
//     }else {
//         quartoImput.classList.remove("campo-com-erro")
//         quartoSpan.classList.remove("aparecer")
//     }
// }