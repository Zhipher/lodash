// 
// Étant donné une fonction, get(url, data, successCallback) , créez une fonction qui effectuera le get, mais utilisera toujours une URL donnée 'baseUrl' et des données spécifiées 'someData'.
// 

import get from 'lodash/get'
import { adults, IAdult } from './persons'

const data = adults

const success = () => {
    return true
}

const perform = (baseUrl: string, someData: Array<IAdult>) => {
    const res = get(someData, baseUrl, true)
    return res
}


const res = perform('mon-url', adults)

console.log(res)