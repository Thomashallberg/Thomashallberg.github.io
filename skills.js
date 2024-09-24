document.addEventListener('DOMContentLoaded', () => {
    var class_for_pill = "badge rounded-pill bg-dark mb-3 tags";
    var wrapper_pills = document.getElementById("pillWrapper");
    fetch('./skills.json')
        .then(response => response.json())
        .then(data => {
            let skills = data.skills;

            for (let i = 0; i < skills.length; i++) {
                var pill = document.createElement('span');
                pill.className = class_for_pill;
                pill.innerHTML = `${skills[i]}`;
                wrapper_pills.appendChild(pill);
            }
        })
        .catch(error => console.error('Error fetching skills:', error));
});