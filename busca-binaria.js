lista = [
    ["Camera", 22],
    ["Teto", 12],
    ["Computador", 34],
    ["Celular", 65],
    ["Mesa", 16],
    ["Cadeira", 92]
]

lista.sort((a,b) => {
    if (a[0] > b[0])
        return 1
    if (a[0] < b[0])
        return -1
    return 0
})

pesquisa = "Mesa"
contador = 0

function verificar(lista) {

    console.log(lista)
    contador += 1
    console.log('Contador', contador)

    size = lista.length

    if(size == 1) {
        if(lista[0] == pesquisa) {
            console.log('Achou!!!')
            console.log('Numero: ', lista[0][1])
        } else
            console.log('Não localizado!')
        return;
    }
    
    parOuImpar = size % 2 == 0 ? "par" : "impar"
    numeroMeio = parOuImpar == "par" ? Math.round(size / 2) : Math.round(size / 2) -1
    palavraMeio = lista[numeroMeio][0]

    if(palavraMeio == pesquisa) {
        console.log('Achou!!!')
        console.log('Numero: ', lista[numeroMeio][1])
        return;
    }

    if(palavraMeio[0] > pesquisa[0])
        verificar(lista.slice(0, numeroMeio))
    else
        verificar(lista.slice(numeroMeio, lista.length))
}

verificar(lista)
