document.addEventListener('DOMContentLoaded', () => {
    var wrapper_project = document.getElementById("projectWrapper");

    var outerdiv = "text-center shadow m-2 cardColor card-with-video";
    var innerdiv = "card-body";
    var h5 = "card-title text-white";
    var p = "card-text text-white";
    var a = "btn btn-primary";


    fetch('./projects.json')
        .then(response => response.json())
        .then(data => {
            let projects = data.projects;

            for (let i = 0; i < projects.length; i++) {
                var project = document.createElement('div')
                project.classList = outerdiv;

                if (projects[i].video != "") {
                    var vid = document.createElement('video');
                    vid.autoplay = true;
                    vid.loop = true;
                    vid.muted = true;
                    vid.classList.add("background-video");
                    var vidsrc = document.createElement('source');
                    vidsrc.src = projects[i].video
                    vid.appendChild(vidsrc);
                    project.appendChild(vid);
                }

                var projectInner = document.createElement('div')
                projectInner.classList = innerdiv;

                var projecth5 = document.createElement('h5');
                projecth5.classList = h5;
                projecth5.innerHTML = projects[i].title;
                projectInner.appendChild(projecth5);

                var projectp = document.createElement('p');
                projectp.classList = p;
                projectp.innerHTML = projects[i].description;
                projectInner.appendChild(projectp);

                var projecta = document.createElement('a');
                projecta.classList = a;
                projecta.innerHTML = "View";
                projecta.href = projects[i].link;
                projectInner.appendChild(projecta);

                project.appendChild(projectInner);

                wrapper_project.appendChild(project)
            }
        })
        .catch(error => console.error('Error fetching projects:', error));

})