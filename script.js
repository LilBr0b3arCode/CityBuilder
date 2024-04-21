// City object constructor
function City(name, population, food, wood, stone, gold) {
    this.name = name;
    this.population = population;
    this.food = food;
    this.wood = wood;
    this.stone = stone;
    this.gold = gold;
  }
  
  // Array to hold all cities
  let cities = [];
  
  // Initialize the first city
  let startingCity = new City("MyCity", 100, 100, 50, 30, 20);
  cities.push(startingCity);
  
  // Display city info
  function displayCityInfo() {
    // For simplicity, let's display info for the first city in the array
    let currentCity = cities[0];
    document.getElementById("population").innerText = currentCity.population;
    document.getElementById("food").innerText = currentCity.food;
    document.getElementById("wood").innerText = currentCity.wood;
    document.getElementById("stone").innerText = currentCity.stone;
    document.getElementById("gold").innerText = currentCity.gold;
  }
  
  // Function to toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  // Event listener for the dark mode button
  document.getElementById("dark-mode-btn").addEventListener("click", function() {
    toggleDarkMode();
  });
  
  // Function to check if population or any resource is negative and reset the city if needed
  function checkLimits() {
    let currentCity = cities[0];
    if (currentCity.food < 0 || currentCity.wood < 0 || currentCity.stone < 0 || currentCity.gold < 0 || currentCity.population < 0) {
      // Reset the city to default state
      currentCity = new City("MyCity", 100, 100, 50, 30, 20);
      cities[0] = currentCity;
      // Update displayed city info
      displayCityInfo();
      // Alert the player about the reset (you can customize this message)
      alert("Resources or population went into negatives! City reset to default.");
    }
  }
  
  // Function to gather resources
  function gatherResources() {
    let currentCity = cities[0];
    currentCity.population--; // Population decreases by 1 when gathering resources
    currentCity.food += 10; // Example: Gather 10 units of food
    currentCity.wood += 5; // Example: Gather 5 units of wood
    currentCity.stone += 3; // Example: Gather 3 units of stone
    currentCity.gold += 2; // Example: Gather 2 units of gold
    // Check if any resource or population is negative and reset the city if needed
    checkLimits();
    // Update displayed city info
    displayCityInfo();
  }
  
  // Function to use resources
  function useResources() {
    let currentCity = cities[0];
    currentCity.population += 10; // Example: Increase population by 10
    currentCity.food -= 20; // Example: Use 20 units of food
    currentCity.wood -= 10; // Example: Use 10 units of wood
    currentCity.stone -= 5; // Example: Use 5 units of stone
    currentCity.gold -= 3; // Example: Use 3 units of gold
    // Check if any resource or population is negative and reset the city if needed
    checkLimits();
    // Update displayed city info
    displayCityInfo();
  }
  
  // Event listener for the gather resources button
  document.getElementById("gather-btn").addEventListener("click", function() {
    gatherResources();
  });
  
  // Event listener for the use resources button
  document.getElementById("use-btn").addEventListener("click", function() {
    useResources();
  });
  