const homeTab = document.getElementById('home-tab');
const bbaTab = document.getElementById('bba-tab');
const jobsTab = document.getElementById('jobs-tab');
const careTab = document.getElementById('care-tab');
const homePage = document.getElementById('home-page');
const bbaPage = document.getElementById('bba-page');
const jobsPage = document.getElementById('jobs-page'); // Assuming you have an element with ID 'jobs-page'
const carePage = document.getElementById('care-page'); // Assuming you have an element with ID 'care-page'

// Function to hide all pages
function hideAllPages() {
  homePage.classList.remove('active');
  bbaPage.classList.remove('active');
  // Add similar lines for jobsPage and carePage (if they exist)
  if (jobsPage) jobsPage.classList.remove('active');
  if (carePage) carePage.classList.remove('active');
}

// Function to show a specific page
function showPage(pageId) {
  hideAllPages();
  document.getElementById(pageId).classList.add('active');
}

// Event listener for Home tab click
homeTab.addEventListener('click', () => {
  showPage('home-page');
});

// Event listener for BBA-DU tab click
bbaTab.addEventListener('click', () => {
  showPage('bba-page');
});

// Event listeners for Jobs and Mahtab's Care tabs (if they exist)
if (jobsTab) {
  jobsTab.addEventListener('click', () => {
    showPage('jobs-page');
  });
}

if (careTab) {
  careTab.addEventListener('click', () => {
    showPage('care-page');
  });
}