import {sendGetRequest} from './RequestHandler'


export function searchPeople (name, pwd, callBack) {

    let searchPath = 'https://swapi.co/api/people/?search='
    let sParameter = encodeURIComponent(name.trim())
    searchPath = searchPath + sParameter
    console.log(searchPath)



    sendGetRequest(searchPath, function (error, response) {
        if(!error) {
            let results = response.results
            for(let res of results) {
                if(res.name === name && pwd === res.birth_year) {
                    //Perform login
                    setUserLoggedIn(res.name)
                    return callBack(null,res)
                }
            }

            return callBack("No user/password match found", null)
        }
    })
}

export function searchPlanet(planet, callBack, page=1) {
    let searchPath = 'https://swapi.co/api/planets/?search='
    let sParameter = encodeURIComponent(planet.trim())
    searchPath = searchPath + sParameter
    searchPath = searchPath+'&page='+page

    sendGetRequest(searchPath, function (error, response) {
        if(!error) {

            return callBack(null, response)
        }
    })
}


export function searchOtherPlanets(url, callBack) {
    sendGetRequest(url, function (error, response) {
        if(!error) {
            return callBack(null, response)
        }
    })
}


export function getUserLoggedIn() {
    localStorage.getItem("user");
}

export function setUserLoggedIn(name) {
    localStorage.setItem("user", name)
}

export function removeUserLoggedIn() {
    localStorage.removeItem("user")
}

