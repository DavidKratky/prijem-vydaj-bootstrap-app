var element = document.getElementById("mojGraf1").getContext('2d');
var colors1 = [
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 0.2)',
];

var colors2 = [
    'rgba(192, 75, 75, 0.2)',
    'rgba(192, 75, 75, 0.2)',
    'rgba(192, 75, 75, 0.2)',
    'rgba(192, 75, 75, 0.2)',
    'rgba(192, 75, 75, 0.2)',
    'rgba(192, 75, 75, 0.2)',
    'rgba(192, 75, 75, 0.2)',
    'rgba(192, 75, 75, 0.2)',
    'rgba(192, 75, 75, 0.2)',
    'rgba(192, 75, 75, 0.2)',
    'rgba(192, 75, 75, 0.2)',
    'rgba(192, 75, 75, 0.2)',
];
var mojGraf1 = new Chart(element, {
    type: 'bar',
    data: {
        labels: ['1.1.2018', '2.1.2018', '3.1.2018', '4.1.2018', '8.1.2018',],
        datasets: [{
            label: ["Príjem"],
            data: [10, 50, 60, 70, 0, 14, 4, 0 ,5],
            backgroundColor: colors1,
            borderColor: colors1,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                tricks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var element = document.getElementById("mojGraf2").getContext('2d');
var mojGraf1 = new Chart(element, {
    type: 'bar',
    data: {
        labels: ['1.1.2018', '2.1.2018', '3.1.2018', '4.1.2018', '8.1.2018',],
        datasets: [{
            label: ["Príjem"],
            data: [10, 50, 60, 70, 0, 14, 4, 0 ,5],
            backgroundColor: colors2,
            borderColor: colors2,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                tricks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


// note to self: train some Ctrl + d
element = document.getElementById("mojGraf2").getContext('2d');
var mojGraf1 = new Chart(element, mojGraf1)
var mojGraf2 = mojGraf1