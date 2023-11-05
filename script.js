
 // JavaScript functions for the calculator
 let displayValue = '0';
 let degreeMode = true; // true for degree, false for radian
 let binaryMode = false; // false for decimal, true for binary
 let matrixInputOpen = false;
 let matrixA = [];
 let matrixB = [];
 let matrixResult = [];

 function appendToDisplay(value) {
     if (matrixInputOpen) {
         if (value === 'Matrix A') {
             displayMatrixInput('A');
         } else if (value === 'Matrix B') {
             displayMatrixInput('B');
         } else if (value === 'Add Matrices') {
             calculateMatrixAddition();
         } else if (value === 'Subtract Matrices') {
             calculateMatrixSubtraction();
         } else if (value === 'Matrix Result') {
             displayMatrixResult();
         }
     } else {
         if (displayValue === '0' && value !== '+' && value !== '-' && value !== '*' && value !== '/') {
             displayValue = value;
         } else {
             displayValue += value;
         }
         document.getElementById('display').value = displayValue;
     }
 }

 function clearDisplay() {
     displayValue = '0';
     document.getElementById('display').value = displayValue;
 }

 function calculateResult() {
     if (matrixInputOpen) {
         // Handle matrix operations
         if (displayValue === 'Matrix A') {
             displayMatrixInput('A');
         } else if (displayValue === 'Matrix B') {
             displayMatrixInput('B');
         } else if (displayValue === 'Add Matrices') {
             calculateMatrixAddition();
         } else if (displayValue === 'Subtract Matrices') {
             calculateMatrixSubtraction();
         } else if (displayValue === 'Matrix Result') {
             displayMatrixResult();
         }
     } else {
         try {
             if (binaryMode) {
                 // Convert binary to decimal for calculation
                 displayValue = parseInt(displayValue, 2);
             }
             displayValue = eval(displayValue).toString();
             if (binaryMode) {
                 // Convert the result to binary if in binary mode
                 displayValue = (+displayValue).toString(2);
             }
             document.getElementById('display').value = displayValue;
         } catch (error) {
             displayValue = 'Error';
             document.getElementById('display').value = displayValue;
         }
     }
 }

 function toggleDegreeRadian() {
     degreeMode = !degreeMode;
 }

 function toggleNumeralSystem() {
     binaryMode = !binaryMode;
 }

 function openMatrixInput() {
     matrixInputOpen = true;
     displayValue = 'Matrix A';
     document.getElementById('display').value = displayValue;
 }

 function displayMatrixInput(matrixName) {
     // Code to input matrix values goes here
     // You can prompt the user to enter the matrix values in a dialog or form
 }

 function calculateMatrixAddition() {
     // Code to perform matrix addition goes here
 }

 function calculateMatrixSubtraction() {
     // Code to perform matrix subtraction goes here
 }

 function displayMatrixResult() {
     // Code to display the matrix result goes here
 }
function updateTheme(theme) {
     if (theme === 'dark') {
         document.documentElement.classList.add('dark-theme');
         document.documentElement.classList.remove('custom-theme');
     } else if (theme === 'custom') {
         document.documentElement.classList.add('custom-theme');
         document.documentElement.classList.remove('dark-theme');
     } else {
         document.documentElement.classList.remove('dark-theme', 'custom-theme');
     }
 }

 // Event listener for theme selection
 document.getElementById('themeSelect').addEventListener('change', function () {
     const selectedTheme = this.value;
     updateTheme(selectedTheme);
 });

 // Initialize the theme based on user preference or default to Light
 const savedTheme = localStorage.getItem('calculator-theme');
 if (savedTheme) {
     document.getElementById('themeSelect').value = savedTheme;
     updateTheme(savedTheme);
 } else {
     updateTheme('light');
 }
