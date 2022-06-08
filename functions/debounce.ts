// anti-rebond

// lancement de l'action dans un certain temps

// UC : Attendez un certain temps (disons 200 millisecondes) et si à ce moment-là il y a une autre frappe, annulez le décompte de temps précédent et recommencez à attendre.

import debounce from 'lodash/debounce'
import axios from 'axios'

// This is a real dogs' API, by the way!
const fetchDogBreeds = () =>
  axios
    .get('https://dog.ceo/api/breeds/list/all')
    .then((res) => console.log(res.data))

const debouncedFetchDogBreeds = debounce(fetchDogBreeds, 1000) // after one second
debouncedFetchDogBreeds() // shows data after some time
