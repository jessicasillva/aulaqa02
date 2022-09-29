const test = require('tape')
const index = require('./index')

test('Teste 1', (t) => {
    t.assert(index.bilheteria(20) === true,
    "Ingresso normal")
    t.end()
    
})

test('Teste 2', (t) => {
    t.assert(index.bilheteria(15) === true,
    "Ingresso de Estudante")
    t.end()
    
})
////////////////////////////////////////////////////////////////////////
test('Teste 3', (t) => {
    t.assert(index.calculohoraextra(30,5) === true,
    "Calculo de extra de mes com 30 dias")
    t.end()
})

test('Teste 4', (t) => {
    t.assert(index.calculohoraextra(20,5) === true,
    "Calculo de extra de mes com menos 30 dias")
    t.end()
})

test('Teste 5', (t) => {
    t.assert(index.calculohoraextra(31,5) === true,
    "Calculo de extra de mes com mais 30 dias")
    t.end()
})
/////////////////////////////////////////////////////////////////////
test('Teste 6', (t) => {
    t.assert(index.encontreogato('cachorro') === true,
    "Cadastro Realizado")
    t.end()
})

test('Teste 7', (t) => {
    t.assert(index.encontreogato('gato') === true,
    "Cadastro Não Realizado")
    t.end()
})