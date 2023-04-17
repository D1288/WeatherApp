const findCity = document.querySelector('#search')
const searchBtn = document.querySelector('.searchBtn')
const form = document.querySelector('.searchForm')

async function getWeather(city){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=3f265a7b033e4a58b25232409231504&q=${city}&aqi=no`)
    const data = await response.json()
    const pCity = document.querySelector('.city')
    const pState = document.querySelector('.state')
    const pTemp = document.querySelector('.temp')
    const bodyBackground = document.querySelector('body')
    const weatherImg = document.querySelector('.weatherImg')
    let currentCity = data.location.name
    let currentState = data.location.region
    let currentTemp = data.current.temp_f
    
    pCity.innerText = `${currentCity},`
    pState.innerText = currentState
    pTemp.innerText = `${currentTemp} °F`
    form.reset()
    if(data.current.is_day === 1){
        weatherImg.setAttribute('src', '/img/daytime.jpg')
        bodyBackground.style.backgroundColor = '#f2e8c7'
    } else{
        weatherImg.setAttribute('src', '/img/nighttime.jpg')
        bodyBackground.style.backgroundColor = '#acbdd1'
    }
    
}


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    getWeather(findCity.value)
})
searchBtn.addEventListener('click', () => getWeather(findCity.value))
