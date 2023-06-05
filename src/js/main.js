import '../css/main.css'
import request from './request'
import { createCountries } from './updateUI'
import './filter'
import './mode'
const API = 'https://restcountries.com/v3.1/all'

request(API).then((date) => {
    createCountries(date);
}).catch((err) => {
    alert(err.message);
})