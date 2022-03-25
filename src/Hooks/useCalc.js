/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React from 'react'

function useCalc () {
  const [sum, setSum] = React.useState('')
  const [entry, setEntry] = React.useState('')
  const [operator, setOperator] = React.useState(null)

  const handleNumber = value => {
    const calcEntryValue = entry + value

    if (calcEntryValue.length < 18) {
      setEntry(calcEntryValue)
    }

    /*
      handleNumber é uma função com um parâmetro chamado value que possui uma const chamada calcEntryValue, que recebe a entrada mais o value (seu parâmetro), depois disso é feito uma verificação se o tamanho do calcEntryValue é menor que 18, caso seja ele pega o setEntry e passa o calcEntryValue
    */
  }

  const handleOperator = value => {
    if (sum === '') {
      setSum(entry)
      setEntry('')
    } else {
      handleSum()
    }

    setOperator(value)

    /*
      handleOperator é uma função com um parâmetro chamado value, essa função faz uma verificação se o sum é === 0 caso seja ela retorna setSum passando entry e setEntry passando nada, caso ao contrario, ela faz handleSum passando nada, depois da verificação ela faz o setOperator passando o value (seu parâmetro)
    */
  }

  const handleSum = () => {
    const result = calculate() + ''

    setSum(result)
    setEntry('')

    /*
      handleSum é uma função sem parâmetro, que possui uma const chamada result que recebe o calcSum mais uma String Vazia, ela também faz um setSum passando result e setEntry passando nada
    */
  }

  const handleDel = () => {
    const newEntry = entry.slice(0, -1)

    setEntry(newEntry)

    /*
      handleDel é uma função sem parâmetro que possui uma const chamada newEntry que recebe o entry com um slice de 0, -1 (Isse slice irá retirar o ultimo valor passado, no caso da calculadora será, ou um número, ou um operador), depois essa função faz o setEntry passando newEntry
    */
  }

  const handleClearEntry = () => {
    setEntry('')
    /*
      handleEntry é uma função sem parâmetro, ela é bem simples, porque ela somente faz o setEntry passando nada, isso irá fazer limpar a entrada
    */
  }

  const handleClear = () => {
    setEntry('')
    setSum('')
    setOperator(null)
    /*
      handleClear é uma função sem parâmetros, ela é bem simples, porque ela somente faz o setEntry passar nada, o setSum passar nada e faz o setOperetor passar null, assim "limpando" todos campos
    */
  }

  const handleInvert = () => {
    if (entry === '' && sum !== '') {
      setSum(invertSignal(sum))
    } else if (entry !== '') {
      setEntry(invertSignal(entry))
    }

    /*
      handleInvert é uma função sem parâmetros que faz uma verificação se o entry é === '' && se sum é !== '' irá fazer o setSum passar invertSignal passando sum, caso ao contrario se entry !== '' irá passar setEntry passar invertSignal passando entry
    */
  }

  const handleSymbol = () => {
    if (entry.indexOf('.') === -1) {
      handleNumber('.')
    }

    /*
    handleSymbol é uma função sem parâmetros que faz uma verificação se o entry.indexOf('.') é === a -1 caso seja passe o handleNumber comp '.' (indexOf compara o el com os el do array usando ===)
    */
  }

  const invertSignal = value => {
    const parseFloatNumber = parseFloat('' + value) * -1

    return '' + parseFloatNumber

    /*
      invertSignal é uma função que tem o parâmetro chamado value, ela possui uma const chamada parseFloatNumber que recebe a função parseFloat passando '' + value (seu parâmetro) vezes -1, depois retorna uma '' mais o parseFloatNumber
    */
  }

  const calculate = () => {
    const parseFloatSum = parseFloat(sum)
    const parseFLoatEntry = parseFloat(entry)

    switch (operator) {
      case '+':
        return parseFloatSum + parseFLoatEntry
      case '-':
        return parseFloatSum - parseFLoatEntry
      case '*':
        return parseFloatSum * parseFLoatEntry
      case '/':
        return parseFloatSum / parseFLoatEntry
      default:
        return parseFloatSum
    }

    /*
      calculate é uma função sem parâmetro que possui duas const, uma que se chama parseFloatSum que recebe parseFloat passando sum, e a outra chamada parseFLoatEntry que recebe parseFloat passando entry, depois possui um switch passando operator como parâmetro (Esse operator é o que foi criado no inicio do arquivo), ele possui 4 case cada um com o simbolo matemático que estará na calculadora, dentro dos respectivos cases terá um retorno passando parseFLoatSum (determinado simbolo) parseFLoatEntry,
      e por final ele possui um default ("valor" padrão) que será usado somente em caso de algum erro
    */
  }

  const actions = {
    number: handleNumber,
    operator: handleOperator,
    sum: handleSum,
    del: handleDel,
    ce: handleClearEntry,
    c: handleClear,
    invert: handleInvert,
    symbol: handleSymbol
  }

  return {
    sum,
    entry,
    actions
  }
}

export default useCalc