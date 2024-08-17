document.addEventListener("DOMContentLoaded", ()=> {

    const days = [
        {
            name: "Sunday",
            quote: "Time for church"
        },
        {
            name: "Monday",
            quote: "Start of the work week!"
        },
        {
            name: "Tuesday",
            quote: "Keep the momentum going."
        },
        {
            name: "Wednesday",
            quote: "Halfway there!"
        },
        {
            name: "Thursday",
            quote: "Almost the weekend!"
        },
        {
            name: "Friday",
            quote: "Finish strong!"
        },
        {
            name: "Saturday",
            quote: "Time to relax."
        }
    ];

    const today = days[new Date().getDay()];
    document.getElementById("weekday").textContent=today.name;
    document.getElementById("phrase").textContent=today.quote;


});
