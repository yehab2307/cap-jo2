document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get values from form
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m

    // Calculate BMI
    const bmi = calculateBMI(weight, height);

    // Display BMI
    displayBMI(bmi);
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function displayBMI(bmi) {
    const bmiResultElement = document.getElementById('bmiResult');
    bmiResultElement.textContent = ': bmi ال لجسمك هو ' + bmi.toFixed(2);

    if (bmi > 30) {
        bmiResultElement.textContent += '  انت تملك   دهون صغيره جدا ';
        bmiResultElement.textContent += ' احنا هنساعدك انك تخسر الدهون دي كمان ومش هتحس بحاجه' ;
        bmiResultElement.textContent += ' هنعمل رجيم  صغنن جدا هساعدما سكوم جسمنا حلو ';
    }
}

function goToHomePage(){
    window.location.href = "الرئيسيه.html";
}
