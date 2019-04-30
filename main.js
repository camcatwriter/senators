import { senators } from './senators.js'
// import { respresentatives } from './representatives.js'

//filter examples
const maleSenators = representatives.filter((senator) => {
    return senator.gender === 'M'
})

console.log (maleSenators);

const femaleSenators = representatives.filter((senator) => {
    return senator.gender === 'F'
})

console.log (femaleSenators);

//map examples

const simpleReps = respresentatives.map(rep => {
    return {
        name: '${rep.first_name} ${rep.last_name}',
        party: rep.party
    }
})

const republicans = simpleReps.filter(rep => rep.party === "R")
const democrats = simpleReps.filter(rep => rep.party === "D")

console.log(republicans, democrats)

console.log(simpleReps)

//reduce examples

const testArray = [5,10,15,20,25,30,35,40]
const testReduce = testArray.reduce((acc,num) => {
    return acc + num
}, 0)

const missedVotes = senators.reduce((acc, senator) => {
    return acc + senator.missed_votes
}, 0)

const totalVotes = senators.reduce((acc, senator) => {
    return acc + senator.total_votes
}, 0)

console.log('Out of ${totalVotes} total votes in the senate, ${missedVotes} were missed')

//display logged information
console.log(testReduce, missedVotes, total_votes)

const senWithPics = senators.map(senator => {
    senator.imgURL = 'https://www.congress.gov/img/member/${senator.id.toLowerCase()}.jpg'
    return senator
})

//display pictures
let pictureDiv = document.querySelector('.container')

senWithPics.forEach(senator => {
    let senatorPic = document.createElement('img')
    let senatorFig = document.createElement('figure')
    let senatorCap = document.createElement('figcaption')
    senatorCap.textContent = `${senator.first_name} ${senator.last_name}`
    senatorPic.src = senator.imgURL
    senatorFig.appendChild(senatorPic)
    senatorFig.appendChild(senatorCap)
    pictureDiv.appendChild(senatorFig)
})