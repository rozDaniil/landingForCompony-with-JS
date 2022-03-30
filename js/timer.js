const dataDeadlineDay = document.querySelector('[data-deadlineDay]')
const dataDeadlineMonth = document.querySelector('[data-deadlineMonth]')
const timerDay = document.querySelector('#days')
const timerHours = document.querySelector('#hours')
const timerMinutes = document.querySelector('#minutes')
const timerSeconds = document.querySelector('#seconds')

updateTime(dataDeadlineMonth, dataDeadlineDay)
setInterval(() => {
    updateTime(dataDeadlineMonth, dataDeadlineDay)
}, 1000);

function updateTime(month, day) {
    const currentDate = new Date()
    const targetDate = new Date(currentDate.getFullYear(), getMonthNumber(month.innerText), Number(day.innerText))
    const diff = targetDate - currentDate

    const days = parseInt(diff / (1000 * 60 * 60 * 24))
    const hours = parseInt((diff / (1000 * 60 * 60 * 24) - days) * 24)
    const minutes = parseInt((((diff / (1000 * 60 * 60 * 24) - days) * 24) - hours) * 60)
    const seconds = parseInt((((((diff / (1000 * 60 * 60 * 24) - days) * 24) - hours) * 60) - minutes) * 60)


    timerDay.innerHTML = days
    timerHours.innerHTML = hours
    timerMinutes.innerHTML = addZero(minutes)
    timerSeconds.innerHTML = addZero(seconds)
}

function getMonthNumber(month) {
    const monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря', ]
    return monthArr.indexOf(month)
}

function addZero(num) {
    if (num < 10) {
        return '0' + num
    } else {
        return num
    }
}