// Functions for the project counter
function increaseProjectCounter() {
  var projectCounterElement = document.getElementById('project-counter-value');
  var completedProjectsElement = document.getElementById('completed-projects');
  var counterWidgetElement = document.getElementById('project-counter-widget');

  var projectCounter = parseInt(projectCounterElement.innerHTML);
  projectCounterElement.innerHTML = projectCounter + 1;

  // Update "Projects Completed" count
  var completedProjects = parseInt(completedProjectsElement.innerHTML);
  completedProjectsElement.innerHTML = completedProjects + 1;

  // Apply wiggle animation
  counterWidgetElement.style.animation = 'wiggle 0.5s ease-in-out';
  setTimeout(function() {
    counterWidgetElement.style.animation = 'none';
  }, 500);
}

function decreaseProjectCounter() {
  var projectCounterElement = document.getElementById('project-counter-value');
  var projectCounter = parseInt(projectCounterElement.innerHTML);
  projectCounterElement.innerHTML = Math.max(projectCounter - 1, 0);
}

function resetProjectCounter() {
  var projectCounterElement = document.getElementById('project-counter-value');
  projectCounterElement.innerHTML = '0';
  // You can add any additional reset logic here if needed
}
