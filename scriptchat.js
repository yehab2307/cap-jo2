function submitSelection() {
  const selectedType = document.querySelector('input[name="diabetesType"]:checked');

  if (selectedType) {
    alert(`You have selected: ${selectedType.value}`);
    switch (selectedType.value) {
      case 'type1':
        window.location.href = 'type1.html';
        break;
      case 'type2':
        window.location.href = 'type2.html';
        break;
      case 'prediabetes':
        window.location.href = 'prediabetes.html';
        break;
      case 'gestational':
        window.location.href = 'gestational.html';
        break;
    }
  } else {
    alert("Please select a diabetes type before submitting.");
  }
}


function generateRandomMealType1() {
  // Get the age from the input field
  const ageInput = document.getElementById("ageInput");
  const age = parseInt(ageInput.value);

  // Meal options based on age
  let breakfastOptions, lunchOptions, dinnerOptions, snakbreakfast, snaklunsh;

  if (age <= 20) {
    // Options for children
    breakfastOptions = ["Vegetable Omelette.", "Overnight Oats.", "Whole Grain Toast with Peanut Butter.", "Whole Grain Pancakes.", "Smoothie Bowl.", "Cottage Cheese ParfaitCottage Cheese Parfait.", "Almond Butter and Banana Toast.", "Chia Seed Breakfast Pudding.", "Peanut Butter Banana Smoothie.", "Cherry Almond Overnight Oats.", "Spinach and Feta Omelette.", "Blueberry and Almond Butter Pancakes.", "Veggie and Cheese Breakfast Burrito.", "Cottage Cheese and Pineapple Bowl.", "Sweet Potato and Turkey Sausage Hash.", "Almond Flour Banana Muffins.", "Apple Cinnamon Quinoa Bowl.", "Egg and Vegetable Scramble."];
    lunchOptions = ["Grilled Chicken Salad.", "Quinoa and Chickpea Bow.", "Quinoa Salad with Chicken.", "Sweet Potato and Black Bean Bowl.", "Mediterranean Chickpea Salad.", "Turkey and Vegetable Wrap.", "Cauliflower Rice Stir-Fry.", "Caprese Salad with Grilled Chicken.", "Black Bean and Vegetable Quesadilla.", "Grilled Vegetable and Chickpea Salad.", "Turkey and Avocado Wrap.", "Mediterranean Quinoa Salad.", "Zucchini Noodles with Pesto and Cherry Tomatoes.", "Salmon and Avocado Nori Wraps.", "Eggplant and Tomato Stuffed Peppers.", "Shrimp and Avocado Salad.", "Egg Salad Lettuce Wraps.", "Turkey and Avocado Wrap."];
    dinnerOptions = ["Baked Salmon with Vegetables.", "Stir-Fried Tofu with Brown Rice.", "Vegetarian Stir-Fry.", "Salmon with Lemon Dill Sauce.", "Turkey and Vegetable Skewers.", "Baked Chicken with Roasted Brussels Sprouts.", "Vegetarian Lentil Curry.", "Teriyaki Salmon with Quinoa.", "Mushroom and Spinach Stuffed Chicken Breast.", "Stir-Fried Tofu with Broccoli and Brown Rice.", "Cajun Chicken with Cauliflower Rice.", "Egg Fried Quinoa.", "Cauliflower Mash with Grilled Turkey Burger.", "Baked Cod with Lemon and Herbs.", "Spaghetti Squash with Tomato Sauce.", "Zucchini Noodles with Pesto and Cherry Tomatoes.", "Salmon and Quinoa Bowl.", "Grilled Shrimp and Quinoa."];
    snakbreakfast = [" Greek Yogurt with Berries.", "Apple Slices with Almond Butter.", "Cherry Tomatoes.", "Cucumber and Cream Cheese Bites.", "Trail Mix with Nuts and Seeds.", "Avocado and Tomato Salsa with Whole Grain Crackers.", "Hard-Boiled Eggs with Paprika."];
    snaklunsh = ["Baked Parmesan Zucchini Fries.", "Walnut and Berry Yogurt Parfait.", "Greek Yogurt with Almond Slices.", "Baked Kale Chips.", "Rice Cake with Avocado.", "Mixed Nuts.", "Vegetable Sticks with Hummus."];
  } else {
    // Options for adults
    breakfastOptions = ["1/2 cup of whole-grain cereal with skim milk.,Sliced fruit like apple or strawberries,1/4 cup of chopped almonds.", "Oatmeal made with water or skim milk, topped with sliced berries.,Scrambled eggs or an omelette with vegetables (bell peppers, spinach).,Whole-grain toast with a thin spread of peanut butter."];
    lunchOptions = ["Grilled chicken breast with a light sauce.,Half a cup of brown rice.,Steamed mixed vegetables.,Whole-grain bread.", "Turkey or chicken sandwich on whole-grain bread with lettuce and tomato.,Carrot and cucumber sticks with hummus.,Low-fat milk or water."];
    dinnerOptions = ["Grilled fish with lemon juice and herbs.,Mashed potatoes without butter.,Green salad with a light dressing.", "Baked salmon or grilled tofu.,Quinoa or brown rice.,Steamed broccoli and cauliflower.,A small apple or pear for dessert."];
    snakbreakfast = ["Greek yogurt with granola and berries.,Handful of almonds.,Whole-grain rice cakes with peanut butter.", "Cottage cheese with sliced peaches.,Vegetable smoothie with protein powder.,Cherry tomatoes with mozzarella cheese."];
    snaklunsh = ["Mixed fruit bowl.,Hummus with whole-grain pita bread.,Dark chocolate with nuts.", "Avocado toast with cherry tomatoes.,Low-fat yogurt with a drizzle of honey.,Edamame beans with sea salt."];
  }

  // Randomly select a meal from each category
  const randomBreakfast = breakfastOptions[Math.floor(Math.random() * breakfastOptions.length)];
  const randomLunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)];
  const randomDinner = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
  const randomSnakbreakfast = snakbreakfast[Math.floor(Math.random() * snakbreakfast.length)];
  const randomsnaklunsh = snaklunsh[Math.floor(Math.random() * snaklunsh.length)];

  // Display the randomly generated meal
  const mealOutput = document.getElementById("mealOutput");
  mealOutput.innerHTML = `
        <p>Breakfast: ${randomBreakfast}</p>
        <p>Snack 1: ${randomSnakbreakfast}</p>
        <p>Lunch: ${randomLunch}</p>
        <p>Snack 2: ${randomsnaklunsh}</p>
        <p>Dinner: ${randomDinner}</p>
    `;
}


const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const userMessage = userInput.value.toLowerCase();
  const response = getResponse(userMessage);
  displayMessage(userMessage, 'user');
  displayMessage(response, 'bot');
}

function getResponse(message) {
  /* const words = message.split(' '); */
  const word = message;
  let responses = [];
  const keywords = ['depressed', 'sad', 'ill', 'cannot do it', 'i am off', 'i am out ', 'stop it'];
  const diabetesWords = ['deabitec', 'patient', 'newst patient', 'deabitec', 'high blood sugar', 'insulin resistance'];
  const hungerWords = ['hungry', 'food', 'still hungry', 'want more', 'extra please', 'more', 'more please', 'extra'];
  const happyWords = ['happy', 'very happy', 'feel good', 'smile', 'proud', 'so proud', 'pretty', 'cute', 'gorgeous', 'awesome', 'fantastic', 'beautiful', 'beauty', 'nice', 'perfect']
  const badWords = ['hate', 'fuck', 'augly', 'bad', 'not good ', ' dont love ', 'not nice '];
  const arabiCWords = ['محبط', 'زعلان', 'تعبان ', 'لا استطيع فعلها ', 'جايب اخري من الدنيا ', 'اريج ان استتسلم ', 'غبي', "حزين", "مدايق"];
  const diabetesArabicWords = ['جديد', 'جديد في السكر', 'مريض جديد ', 'حديث المرض', 'سكري ', 'مريض سكر', 'مقاومه انسولين', "التعليمات "];
  const hungerArabicWords = ['جعان', 'جوعان', 'اكل', 'مازلت جعان', 'اريد المزيد', 'العديد', 'اكثر', ' لسه جعان', 'اشعر بالجوع'];
  const happyArabicWords = ['سعيد', ' مبسوط', 'اشعر بالراحه ', 'مبتسم ', 'فخور', 'فخور جدا ', 'جميل', 'عسل', 'شيء جميل من الحياه', 'عظيم', 'رائع', 'الحيه جميله ', 'نجحت', 'ناجح', 'مثالي', "مثاليه"]
  const badArabicWords = ['اكره', 'تبا ', 'قبيح', 'سيء', 'ليس جميل ', 'مش بحبك', 'مش كويس', "حمار", "امك", "ابوك", "زباله"];
  const foodData = {
    "apple": { "carbohydrates": 25, "calories": 95 },
    "banana": { "carbohydrates": 27, "calories": 105 },
    "orange": { "carbohydrates": 18, "calories": 62 },
    "strawberry": { "carbohydrates": 11, "calories": 56 },
    "watermelon": { "carbohydrates": 11, "calories": 46 },
    "carrot": { "carbohydrates": 12, "calories": 52 },
    "broccoli": { "carbohydrates": 6, "calories": 30 },
    "spinach": { "carbohydrates": 1, "calories": 7 },
    "tomato": { "carbohydrates": 5, "calories": 22 },
    "potato": { "carbohydrates": 37, "calories": 163 },
    "corn": { "carbohydrates": 28, "calories": 154 },
    "pizza": { "carbohydrates": 30, "calories": 285 },
    "burger": { "carbohydrates": 10, "calories": 290 },
    "spaghetti": { "carbohydrates": 43, "calories": 221 },
    "rice": { "carbohydrates": 45, "calories": 216 },
    "mashedPotatoes": { "carbohydrates": 30, "calories": 230 },
    "grilledChicken": { "carbohydrates": 0, "calories": 165 },
    "salmon": { "carbohydrates": 0, "calories": 175 },
    "egg": { "carbohydrates": 1, "calories": 70 },
    "yogurt": { "carbohydrates": 12, "calories": 149 },
    "appleWithPeanutButter": { "carbohydrates": 28, "calories": 230 },
  };
  
    var regexp = new RegExp(word, "gi");    
    if (keywords.filter(element => element.match(regexp)).length) {
      /* keywords.filter(element => element.match(regexp)) */
      console.log(keywords.filter(element => element.match(regexp)))
      responses.push(getRandomMotivation());
      console.log("hi")
    } else if (hungerWords.filter(element => element.match(regexp)).length) {
      /* console.log(hungerWords.filter(element => element.match(regexp)).length+"2") */
      responses.push("Okay, you can take this as a plus: " + generateRandomMeals());
    } else if (happyWords.filter(element => element.match(regexp)).length) {
      responses.push(generateRandmHappyword());
    } else if (badWords.filter(element => element.match(regexp)).length) {
      responses.push(generateRandmBadword());
    } else if (diabetesWords.filter(element => element.match(regexp)).length) {
      responses.push(`Instructions for diabetics:
      Monitor your blood sugar levels regularly.
      Follow a healthy and balanced diet.
      Exercise regularly.
      Take your prescribed medications as directed.
      Avoid smoking and excessive alcohol consumption.
      See your doctor regularly for checkups and to discuss your treatment plan.
      Avoid eating grapes and mangoes.
      If you feel headache, very thirsty, or have a rapid heartbeat, check your blood sugar immediately.`);
    } else if (arabiCWords.filter(element => element.match(regexp)).length) {
      responses.push('لماذا تشعر بذلك يا صديقي: ' + ردود_عشوائيه());
    } else if (hungerArabicWords.filter(element => element.match(regexp)).length) {
      responses.push("تقدر تأكل ذلك أيضا: " + generateRandomMeals());
    } else if (happyArabicWords.filter(element => element.match(regexp)).length) {
      responses.push(عبارات_سعيده_عشوائيه());
    } else if (badArabicWords.filter(element => element.match(regexp)).length) {
      responses.push(عبارات_سيئه_عشوائيه());
    } else if (diabetesArabicWords.filter(element => element.match(regexp)).length) {
      responses.push(`تعليمات لمرضى السكري:

      راقب مستويات السكر في الدم بانتظام.
      اتبع نظام غذائي صحي ومتوازن.
      مارس الرياضة بانتظام.
      تناول الأدوية الموصوفة لك حسب التوجيهات.
      تجنب التدخين واستهلاك الكحول بشكل مفرط.
      قم بزيارة الطبيب بانتظام لإجراء الفحوصات ومناقشة خطة علاجك.
      تجنب تناول العنب والمانجو.
      إذا شعرت بصداع أو جفاف شديد في الفم أو ارتفاع في دقات القلب، فاعمل على فحص نسبة السكر في الدم على الفور.`);
    } else if (message.includes('carbohydrates') || message.includes('calories')||message.includes('carb')) {
      const words = message.split(' ');
      const food = words.find(word => Object.keys(foodData).includes(word));
      console.log(food);
      if (food) {
        const nutritionInfo = foodData[food];
        if (message.includes("carb")||message.includes('carbohydrates')) {
          responses.push(`The ${food} contains ${nutritionInfo.carbohydrates}g of carbohydrates.`);
        } else if (message.includes("calor")) {
          responses.push(`The ${food} contains ${nutritionInfo.calories} calories.`);
        } else {
          responses.push(`The ${food} contains ${nutritionInfo.carbohydrates}g of carbohydrates and ${nutritionInfo.calories} calories.`);
        }
      } else {
        responses.push(getRandomMotivation());
      }
    }

  return responses.length > 0 ? responses.join(' ') : getRandomMotivation();
}

function Instructions(){`Instructions for diabetics:
  * Monitor your blood sugar levels regularly.
  * Follow a healthy and balanced diet.
  * Exercise regularly.
  * Take your prescribed medications as directed.
  * Avoid smoking and excessive alcohol consumption.
  * See your doctor regularly for checkups and to discuss your treatment plan.
  * Avoid eating grapes and mangoes.
  * If you feel headache, very thirsty, or have a rapid heartbeat, check your blood sugar immediately.`

}
function InstructionsAR(){`تعليمات لمرضى السكري:

راقب مستويات السكر في الدم بانتظام.
اتبع نظام غذائي صحي ومتوازن.
مارس الرياضة بانتظام.
تناول الأدوية الموصوفة لك حسب التوجيهات.
تجنب التدخين واستهلاك الكحول بشكل مفرط.
قم بزيارة الطبيب بانتظام لإجراء الفحوصات ومناقشة خطة علاجك.
تجنب تناول العنب والمانجو.
إذا شعرت بصداع أو جفاف شديد في الفم أو ارتفاع في دقات القلب، فاعمل على فحص نسبة السكر في الدم على الفور.

`}
function getRandomMotivation() {
  const motivations = [
    'You are stronger than you think.',
    'Believe in yourself. You can do it!',
    'No worries, everything will be ok. Every day is a new beginning.',
    'You have the power to change your story.',
    'every loss is a new begining ',
    'we were not born surrender to life ',
    'lets satrt oven like we never failed'
  ];
  return motivations[Math.floor(Math.random() * motivations.length)];
}
function ردود_عشوئيه() {
  const ردود = [
    'انت اقوي من ما انت تتخيله.',
    'ثق بنفسك لانك تستطيع فعلها ',
    'لا تقلق كل شيء سيكون تمام',
    'انت تملك القوه لتغير قصتك',
    'كل خساره هي بدايا جديده',
    'لم نخلق لنستسلم للحياه',
    'ابدا من جديد وكأنك لم تفشل قد'
  ];
  return ردود[Math.floor(Math.random() * ردود.length)];
}

function displayMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender);
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  userInput.value = '';
}

function generateRandomMeals() {
  const Meals = [
    'Coconut Flour Chocolate Chip Cookies.',
    'Dark Chocolate-Covered Strawberries.',
    'Berries with Whipped Coconut Cream.',
    'Cinnamon Baked Pears.',
    'Berry Chia Seed Pudding.',
    'Berry Sorbe.',
    'Pumpkin Chia Seed Pudding.',
    'Chia Seed and Berry Parfait.',
    'Sugar-Free Jello with Whipped Cream.',
    'Baked Apple with Cinnamon.',
    'Sugar-Free Jello with Fruit.',
    'Dark Chocolate Covered Almonds.',
    'Avocado Chocolate Mousse.',
    'Baked Peaches with Cinnamon.',
    'Apple and Walnut Salad.',
    'Berries with Whipped Coconut Cream.',
    'Dark Chocolate-Covered Strawberries.',
    'Baked Pears with Cinnamon.',
    'Sugar-Free Jello with Whipped Cream.',
    'Baked Apple with Cinnamon.',
    'Berries with Whipped Cream.',
    'Dark Chocolate and Almonds.',
    'Baked Apple with Cinnamon.',
    'Sugar-Free Popsicles.',
    'Berries with Greek Yogurt.',
    'Dark Chocolate-Covered Nuts.',
    'Baked Apple with Cinnamon.',
    'Chia Seed Pudding with Berries.',
    'Yogurt Parfait with Nuts and Seeds.',
    'Almond Flour Blueberry Muffins.',
    'Sugar-Free Jello with Whipped Cream.',
    'Baked Cinnamon Apples.',
    'Chia Seed Parfait.',
    'Nut Butter and Banana Sandwich.',
    'Frozen Yogurt Bites.',
    'Homemade Trail Mix.',
    'Cottage Cheese with Fresh Fruit.',
    'Baked Pears with Cinnamon and Walnuts.',
    'Avocado Chocolate Mousse.'
  ];
  return Meals[Math.floor(Math.random() * Meals.length)];
}
function generateRandmHappyword() {
  const happy = [
    'sould you change every thing in your lif as thise day',
    'you can change every thing in your life posstive as this day ',
    'your success is a great achievement '
  ];
  return happy[Math.floor(Math.random() * happy.length)];
}
function عبارات_سعيده_عشوئيه() {
  const سعيد = [
    'عليك ان تغير حياتك باكملها مثل اليوم لتعيش سعيد',
    'انت تستطيع ان تجعل  خياتك اجابيه عن طريق تذكر هذا اليوم  وحعل ايامك كلها مثب هذا اليوم  ',
    'نجاحك هو اكبر انجاز في حياتك '
  ];
  return سعيد[Math.floor(Math.random() * سعيد.length)];
}
function generateRandmBadword() {
  const bad = [
    'why do you thinking about that ',
    'every thing will be path ',
    'life is a project ofresistance '
  ];
  return bad[Math.floor(Math.random() * bad.length)];
}
function عبارات_سيئه_عشوئيه() {
  const سيء = [
    'لماذا تفكر في ذلك ',
    'كل شيء بمرور الوقت سيمضي ',
    'الحياه مشروع مقاومه وانت تستطيع  '
  ];
  return سيء[Math.floor(Math.random() * سيء.length)];
}
// Type 2 Meals
function generateRandomMealType2() {
  // Get the age from the input field
  const ageInput = document.getElementById("ageInput");
  const age = parseInt(ageInput.value);

  // Meal options based on age
  let breakfastOptions, lunchOptions, dinnerOptions, snakbreakfast, snaklunsh;

  if (age <= 20) {
    // Options for children
    lunchOptions = ["Grilled Chicken Salad.", "Quinoa and Black Bean Bowl.", "Salmon with Roasted Vegetables.", "Turkey and Veggie Wrap.", "Quinoa Salad with Chickpeas.", "Grilled Vegetable and Chicken Skewers.", "Mediterranean Chickpea Salad.", "Shrimp and Avocado Lettuce Wraps.", "Vegetable and Lentil Soup.", "Turkey and Avocado Wrap.", "Quinoa and Black Bean Bowl.", "Grilled Portobello Mushrooms"];
    breakfastOptions = ["Chia Seed Pudding.", "Sweet Potato Hash with Poached Eggs.", "Mango and Spinach Smoothie.", "Peanut Butter Banana Toast.", "Greek Yogurt Parfait.", "Egg and Vegetable Breakfast Burrito.", "Almond Flour Pancakes.", "Whole Grain Pancakes with Berries.", "Yogurt Parfait.", "Cottage Cheese Pancakes.", "Egg and Veggie Scramble.", "Peanut Butter Banana Roll-Ups.", "Greek Yogurt Smoothie.", "Oatmeal with Nut Butter and Fruit.", "Whole Grain Toast with Avocado.", "Cheese and Veggie Quesadilla.", "Baked Apple with Cinnamon.", "Homemade Trail Mix."];
    dinnerOptions = ["Stir-Fried Tofu and Vegetables.", "Baked Cod with Lemon and Herbs.", "Eggplant and Chickpea Curry .", "Spaghetti Squash with Tomato Sauce.", "Beef and Vegetable Stir-Fry.", "Stuffed Bell Peppers with Turkey.", "Baked Chicken with Brussels Sprouts.", "Cauliflower Rice Stir-Fry.", "Salmon with Dill Sauce.", "Turkey Meatballs with Zucchini Noodles.", "Stir-Fried Tofu with Broccol.", "Baked Cod with Lemon and Herbs."];
    snakbreakfast = ["Raw Vegetables with Hummus.", "Almonds and Cheese.", "Berries and Cottage Cheese.", "Yogurt with Almond Butter.", "Hard-Boiled Eggs.", "Vegetable and Hummus Plate.", "Air-Popped Popcorn.", "Cherry Tomatoes with Mozzarella.", "Cucumber and Cream Cheese Bites."];
    snaklunsh = ["Chia Seed Pudding with Berries.", "Edamame Beans.", "Cottage Cheese with Pineapple.", "Vegetable and Hummus Plate.", "Apple and Walnut Salad."];
  } else {
    // Options for adults
    breakfastOptions = ["Vegetable Omelette.", "Greek Yogurt Parfait.", "Whole Grain Oatmeal.", "Cottage Cheese and Fruit Bowl.", "Whole Grain Breakfast Burrito.", "Chia Seed Pudding with Almond Butter.", "Smoked Salmon and Cream Cheese on Whole Grain Bagel.", "Spinach and Feta Breakfast Wrap.", "Quinoa Breakfast Bowl.", "Low-Carb Vegetable Frittata.", "Peanut Butter Banana Smoothie.", "Tomato and Avocado Toast.", "Turkey and Veggie Breakfast Skillet.", "Mushroom and Spinach Oat Bran Porridge.", "Whole Grain Pancakes with Berries.", "Egg and Vegetable Breakfast Burrito.", "Salmon and Avocado Breakfast Toast.", "Vegetarian Breakfast Burrito Bowl.", "Pumpkin Spice Overnight Oats.", "Turkey and Vegetable Omelette.", "Cauliflower Hash Browns with Poached Eggs.", "Yogurt and Berry Parfait.", "Sautéed Spinach and Mushroom Scramble.", "Cherry Almond Chia Seed Pudding.", "Egg and Veggie Breakfast Wrap.", "Tomato Basil Cottage Cheese Bowl."];
    lunchOptions = ["Grilled Chicken Salad.", "Quinoa and Vegetable Bowl", "Salmon with Lemon Dill Sauce.", "Mediterranean Chickpea Salad.", "Turkey and Avocado Wrap.", "Cauliflower Rice Stir-Fry.", "Caprese Salad with Grilled Chicken.", "Vegetarian Lentil Curry.", "Zucchini Noodles with Pesto and Cherry Tomatoes.", "Baked Cod with Lemon and Herbs.", "Teriyaki Salmon with Quinoa.", "Mushroom and Spinach Stuffed Chicken Breast.", "Stir-Fried Tofu with Broccoli and Brown Rice.", "Cajun Chicken with Cauliflower Rice.", "Egg Fried Quinoa.", "Cauliflower Mash with Grilled Turkey Burger.", "Baked Cod with Tomato Salsa.", "Spaghetti Squash with Tomato Sauce.", "Zucchini Noodles with Shrimp.", "Grilled Shrimp and Quinoa Salad"];
    dinnerOptions = ["Grilled Chicken Breast with Roasted Vegetables.", "Stir-Fried Tofu with Brown Rice.", "Vegetarian Lentil Soup", "Salmon and Quinoa Bowl.", "Mushroom and Spinach Quiche with Salad.", "Cauliflower Rice with Grilled Turkey Burger.", "Baked Cod with Lemon and Herbs.", "Mediterranean Grilled Chicken Salad.", "Cauliflower Crust Pizza with Veggie Toppings.", "Shrimp and Broccoli Stir-Fry.", "Quinoa-Stuffed Bell Peppers.", "Lemon Herb Baked Chicken Thighs.", "Cajun Shrimp and Vegetable Skewers.", "Spaghetti Squash with Turkey Bolognese.", "Vegetarian Chickpea Curry.", "Turkey and Vegetable Lettuce Wraps.", "Baked Salmon with Dill Sauce."];
    snakbreakfast = ["Greek Yogurt with Almonds and Berries.", "Celery Sticks with Cream Cheese and Smoked Salmon.", "Hard-Boiled Eggs with Hummus.", "Cucumber Slices with Tzatziki.", "Cheese and Cherry Tomatoes.", "Avocado with Sea Salt.", "Homemade Trail Mix.", "Cottage Cheese with Pineapple.", "Roasted Chickpeas.", "Apple Slices with Almond Butter.", "String Cheese and Grapes.", "Edamame Pods."];
    snaklunsh = ["Carrot Sticks with Hummus.", "Chia Seed Pudding with Berries.", "Yogurt Parfait with Granola.", "Almond Butter and Banana Slices.", "Sliced Bell Peppers with Guacamole.", "Roasted Almonds with Cinnamon.", "Tomato Basil Bruschetta.", "Pistachios in the Shell.", "Dill Pickle Spears with Cream Cheese.", "Berries and Cottage Cheese.", "Homemade Salsa with Jicama Sticks", "Walnut and Berry Yogurt Parfait.", "Cherry Almond Energy Bites.", "Smoked Salmon Cucumber Bites.", "Green Tea with Nuts."];
  }

  // Randomly select a meal from each category
  const randomBreakfast = breakfastOptions[Math.floor(Math.random() * breakfastOptions.length)];
  const randomLunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)];
  const randomDinner = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
  const randomSnakbreakfast = snakbreakfast[Math.floor(Math.random() * snakbreakfast.length)];
  const randomsnaklunsh = snaklunsh[Math.floor(Math.random() * snaklunsh.length)];

  // Display the randomly generated meal
  const mealOutput = document.getElementById("mealOutput");
  mealOutput.innerHTML = `
      <p>Breakfast: ${randomBreakfast}</p>
      <p>Snack 1: ${randomSnakbreakfast}</p>
      <p>Lunch: ${randomLunch}</p>
      <p>Snack 2: ${randomsnaklunsh}</p>
      <p>Dinner: ${randomDinner}</p>
  `;
}

function generateRandomMealprediabetes() {
  // Get the age from the input field
  const ageInput = document.getElementById("ageInput");
  const age = parseInt(ageInput.value);

  // Meal options based on age
  let breakfastOptions, lunchOptions, dinnerOptions, snakbreakfast, snaklunsh;

  if (age <= 20) {
    // Options for children
    breakfastOptions = ["Greek Yogurt Parfait.", "Vegetable Omelette.", "Oatmeal Bowl.", "Smoothie Bowl.", "Whole-Grain Pancakes.", "Egg and Veggie Muffins.", "Vegetable Omelette.", "Overnight Oats.", "Whole Grain Toast with Peanut Butter.", "Smoothie Bowl.", "Cottage Cheese Parfait.", "Almond Butter and Banana Toast.", "Chia Seed Breakfast Pudding.", "Peanut Butter Banana Smoothie.", "Cherry Almond Overnight Oats.", "Egg and Vegetable Scramble.", "Blueberry and Almond Butter Pancakes.", "Veggie and Cheese Breakfast Burrito.", "Cottage Cheese and Pineapple Bowl.", "Sweet Potato and Turkey Sausage Hash.", "Almond Flour Banana Muffins."];
    lunchOptions = ["Grilled Chicken Salad.", "Quinoa and Chickpea Bowl.", "Turkey and Vegetable Wrap.", "Sweet Potato and Black Bean Bowl.", "Mediterranean Chickpea Salad.", "Cauliflower Rice Stir-Fry.", "Caprese Salad with Grilled Chicken.", "Black Bean and Vegetable Quesadill.", "Grilled Vegetable and Chickpea Salad.", "Turkey and Avocado Wrap.", "Mediterranean Quinoa Salad.", "Zucchini Noodles with Pesto and Cherry Tomatoes.", "Salmon and Avocado Nori Wraps.", "Eggplant and Tomato Stuffed Peppers.", "Shrimp and Avocado Salad.Veggie and Cheese Quesadilla.", "Blueberry and Almond Butter Pancakes"];
    dinnerOptions = ["Vegetable and Chickpea Curry.", "Grilled Chicken with Quinoa and Roasted Vegetables.", "Cauliflower Rice Bowl with Shrimp.", "Spaghetti Squash with Tomato Sauce.", "Baked Cod with Lemon and Herbs.", "Cauliflower Mash with Grilled Turkey Burger.", "Egg Fried Quinoa.", "Cajun Chicken with Cauliflower Rice.", "Stir-Fried Tofu with Broccoli and Brown Rice.", "Teriyaki Salmon with Quinoa.", "Mushroom and Spinach Stuffed Chicken Breast.", "Vegetarian Lentil Curry.", "Baked Chicken with Roasted Brussels Sprouts.", "Turkey and Vegetable Skewers.", "Salmon with Lemon Dill Sauce.", "Vegetarian Stir-Fry.", "Stir-Fried Tofu with Brown Rice.", "Baked Salmon with Vegetables."];
    snakbreakfast = ["Greek Yogurt with Berries.", "Apple Slices with Almond Butter.", "Cherry Tomatoes.", "Cucumber and Cream Cheese Bites.", "Trail Mix with Nuts and Seeds.", "Avocado and Tomato Salsa with Whole Grain Crackers.", "Hard-Boiled Eggs with Paprika.", "Baked Parmesan Zucchini Fries.", "Walnut and Berry Yogurt Parfait.", "Vegetable Sticks with Hummus.", "Rice Cake with Avocado.", "Cheese Cubes with Grapes.", "Greek Yogurt with Almond Slices.", "Baked Kale Chips.", "Cottage Cheese with Pineapple.", "Sweet Potato Chips with Guacamole."];
    snaklunsh = ["Chia Seed Pudding with Berries.", "Apple Cinnamon Quinoa Bowl.", "Greek Yogurt with Berries.", "Apple Slices with Almond Butter.", "Cherry Tomatoes.", "Cucumber and Cream Cheese Bites.", "Trail Mix with Nuts and Seeds.", "Avocado and Tomato Salsa with Whole Grain Crackers.", "Baked Kale Chips."];
  } else {
    // Options for adults
    breakfastOptions = ["Whole Grain Oatmeal with Berries and Nuts.", "Vegetable Omelette", "Greek Yogurt Parfait", "Whole Grain Toast with Avocado and Poached Egg.", "Chia Seed Breakfast Pudding", "Quinoa Breakfast Bowl", "Smoked Salmon and Cream Cheese Whole Wheat Bagel", "Mushroom and Spinach Frittata", "Whole Grain Pancakes with Berries.", "Almond Butter and Banana Smoothie", "Oat Bran Muffins with Pears", "Berry and Spinach Smoothie Bowl", "Avocado and Tomato Toast with Poached Egg", "Whole Grain Waffles with Berries and Greek Yogurt"];
    lunchOptions = ["Grilled Salmon Salad", "Grilled Chicken Salad", "Salmon and Avocado Nori Wraps", "Vegetarian Stir-Fry", "Mushroom and Spinach Stuffed Chicken Breast", "Cauliflower Rice Stir-Fry", "Greek Salad with Grilled Shrimp", "Turkey and Quinoa Stuffed Peppers", "Eggplant and Tomato Bake", "Caprese Salad with Grilled Chicken", "Shrimp and Vegetable Skewers", "Turkey and Avocado Wrap"];
    dinnerOptions = ["Baked Salmon with Vegetables", "Vegetarian Lentil Curry", "Grilled Chicken with Quinoa and Roasted Vegetables", "Grilled Chicken with Quinoa and Roasted Vegetables", "Teriyaki Salmon with Cauliflower Rice", "Cajun Chicken with Sweet Potato Mash", "Quinoa Salad with Grilled Shrimp", "Vegetable and Chickpea Stir-Fry", "Baked Cod with Lemon and Herb Quinoa", "Turkey Meatballs with Zucchini Noodles", "Egg Fried Cauliflower Rice", "Chicken and Vegetable Skewers with Brown Rice"];
    snakbreakfast = ["Greek Yogurt with Almond Slices", "Cheese Cubes with Grapes", "Hard-Boiled Eggs with Cherry Tomatoes", "Vegetable Sticks with Hummus", "Mixed Nuts", "Whole Grain Crackers with Avocado", "Cottage Cheese with Pineapple", "Baked Kale Chips", "Berries with Whipped Coconut Cream", "Walnut and Berry Yogurt Parfait", "Dark Chocolate-Covered Strawberries", "Trail Mix with Seeds and Dried Fruit"];
    snaklunsh = ["Apple Slices with Nut Butter", "Cherry Tomato and Mozzarella Skewers", "Edamame with Sea Salt", "Avocado and Whole Grain Crackers", "Hummus with Cucumber Rounds", "Roasted Chickpeas", "Pistachios in the Shell", "Yogurt Parfait with Berries", "Pear Slices with Cheese", "Baked Sweet Potato Fries", "Caprese Salad Skewers", "Peanut Butter Banana Bites"];
  }

  // Randomly select a meal from each category
  const randomBreakfast = breakfastOptions[Math.floor(Math.random() * breakfastOptions.length)];
  const randomLunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)];
  const randomDinner = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
  const randomSnakbreakfast = snakbreakfast[Math.floor(Math.random() * snakbreakfast.length)];
  const randomsnaklunsh = snaklunsh[Math.floor(Math.random() * snaklunsh.length)];

  // Display the randomly generated meal
  const mealOutput = document.getElementById("mealOutput");
  mealOutput.innerHTML = `
      <p>Breakfast: ${randomBreakfast}</p>
      <p>Snack 1: ${randomSnakbreakfast}</p>
      <p>Lunch: ${randomLunch}</p>
      <p>Snack 2: ${randomsnaklunsh}</p>
      <p>Dinner: ${randomDinner}</p>
  `;
}

///////////////////////////////////////////////////
function generateRandomMealgestational() {
  // Get the age from the input field
  const ageInput = document.getElementById("ageInput");
  const age = parseInt(ageInput.value);

  // Meal options based on age
  let breakfastOptions, lunchOptions, dinnerOptions, snakbreakfast, snaklunsh;

  if (age >= 20 && age <= 45) {
    // Options for children
    breakfastOptions = ["Spinach and Feta Omelette with Whole Grain Toast", "Vegetable and Cheese Omelette", "Greek Yogurt Parfait", "Whole Grain Pancakes with BerriesAvocado and Poached Egg on Whole Grain Toast", "Quinoa Breakfast Bowl", "Cottage Cheese and Pineapple Bowl", "Chia Seed Pudding with Berries", "Smoked Salmon and Cream Cheese Bagel", "Sweet Potato Hash with Turkey Sausage", "Mushroom and Spinach Breakfast Burrito", "Oatmeal with Nuts and Berries", "Egg and Vegetable Scramble", "Turkey and Vegetable Breakfast Wrap", "Chickpea Flour Pancakes with Yogurt"];
    lunchOptions = ["Grilled Chicken Salad with Avocado", "Quinoa and Chickpea Bowl", "Turkey and Vegetable Wrap", "Salmon and Quinoa Stuffed Bell Peppers", "Caprese Salad with Grilled Shrimp", "Vegetarian Stir-Fry with Tofu", "Mediterranean Chickpea Salad", "Sweet Potato and Black Bean Bowl", "Chicken and Vegetable Skewers with Quinoa", "Zucchini Noodles with Pesto and Cherry Tomatoes", "Turkey and Avocado Wrap", "Eggplant and Tomato Stuffed Peppers", "Mushroom and Spinach Frittata", "Cauliflower Rice Stir-Fry with Shrimp", "Chickpea and Vegetable Curry"];
    dinnerOptions = ["Baked Salmon with Asparagus", "Vegetarian Lentil Soup", "Grilled Chicken with Quinoa Salad", "Stuffed Bell Peppers with Turkey and Quinoa", "Cauliflower Pizza with Chicken and Veggies", "Shrimp and Zucchini Noodles", "Mushroom and Spinach Stuffed Chicken Breast", "Baked Cod with Lemon Herb Quinoa", "Vegetable and Chickpea Stir-Fry", "Turkey Meatballs with Zoodles", "Cajun Chicken with Roasted Sweet Potatoes", "Salmon and Avocado Nori Wraps", "Mediterranean Quinoa Bowl", "Stir-Fried Tofu with Broccoli and Brown Rice"];
    snakbreakfast = ["Greek Yogurt with Berries", "Cheese Cubes with Grapes", "Hard-Boiled Eggs with Cherry Tomatoes", "Vegetable Sticks with Hummus", "Mixed Nuts", "Whole Grain Crackers with Avocado", "Cottage Cheese with Pineapple", "Baked Kale Chips", "Berries with Whipped Coconut Cream", "Walnut and Berry Yogurt Parfait"];
    snaklunsh = ["Apple Slices with Nut Butter", "Cherry Tomato and Mozzarella Skewers", "Edamame with Sea Salt", "Avocado and Whole Grain Crackers", "Hummus with Cucumber Rounds", "Roasted Chickpeas", "Pistachios in the Shell", "Yogurt Parfait with Berries", "Pear Slices with Cheese", "Baked Sweet Potato Fries"];
  } else {
    alert("Please Enter a correct Age!");
  }

  // Randomly select a meal from each category
  const randomBreakfast = breakfastOptions[Math.floor(Math.random() * breakfastOptions.length)];
  const randomLunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)];
  const randomDinner = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
  const randomSnakbreakfast = snakbreakfast[Math.floor(Math.random() * snakbreakfast.length)];
  const randomsnaklunsh = snaklunsh[Math.floor(Math.random() * snaklunsh.length)];

  // Display the randomly generated meal
  const mealOutput = document.getElementById("mealOutput");
  mealOutput.innerHTML = `
        <p>Breakfast: ${randomBreakfast}</p>
        <p>Snack 1: ${randomSnakbreakfast}</p>
        <p>Lunch: ${randomLunch}</p>
        <p>Snack 2: ${randomsnaklunsh}</p>
        <p>Dinner: ${randomDinner}</p>
    `;
}