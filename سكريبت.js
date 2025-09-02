function submitSelection() {
  const selectedType = document.querySelector('input[name="diabetesType"]:checked');

  if (selectedType) {
    alert(`You have selected: ${selectedType.value}`);
    switch (selectedType.value) {
      case 'type1':
        window.location.href = '1.html';
        break;
      case 'type2':
        window.location.href = '2.html';
        break;
      case 'prediabetes':
        window.location.href = '3.html';
        break;
      case 'gestational':
        window.location.href = '4.html';
        break;
    }
  } else {
    alert("Please select a diabetes type before submitting.");
  }
}
function generateRandomMeal() {
  const ageInput = parseInt(document.getElementById("ageInput").value);
  const mealType = document.getElementById("mealType").value;

  // Define meal options based on age
  let meals;
  if (ageInput >= 20) {
      meals = {
          breakfast: [
              {
                  name: "أومليت خضار",
                  description: "خيار إفطار لذيذ وصحي!",
                  image: "أومليت خضار.jpeg"
              },
              {
                  name: "دقيق الشوفان مع الفواكه الطازجة والمكسرات",
                  description: "خيار إفطار لذيذ وصحي!",
                  image: "دقيق الشوفان مع الفواكه الطازجة والمكسرات.jpeg"
              },
              {
                  name: "زبادي يوناني بالفواكه",
                  description: "خيار إفطار لذيذ وصحي!",
                  image: "زبادي يوناني بالفواكه.jpeg"
              },
              {
                  name: "بيض مخفوق مع الخضار",
                  description: "خيار إفطار لذيذ وصحي!",
                  image: "بيض مخفوق مع الخضار.jpeg"
              },
              {
                  name: "خبز القمح الكامل مع الأفوكادو",
                  description: "خيار إفطار لذيذ وصحي!",
                  image: "خبز القمح الكامل مع الأفوكادو.jpeg"
              },
              // Add more breakfast options here
          ],
          lunch: [
              {
                  name: "سلطة الدجاج المشوي",
                  description: "استمتع بوجبة غداء مغذية ومرضية مع سلطة الدجاج المشوي.",
                  image: "سلطة الدجاج المشوي.jpeg"
              },
              {
                  name: "دجاج مشوي مع الخضار",
                  description: "استمتع بوجبة غداء مغذية ومرضية مع هذا الدجاج المشوي مع الخضار.",
                  image: "دجاج مشوي مع الخضار.jpeg"
              },
              {
                  name: "سمك مشوي مع سلطة فواكه وخضروات",
                  description: "استمتع بوجبة غداء مغذية ومرضية مع هذا السمك المشوي مع سلطة الفواكه والخضروات.",
                  image: "سمك مشوي مع سلطة فواكه وخضروات.jpeg"
              },
              {
                  name: "سلطة التونة مع الحمص والخضار",
                  description: "استمتع بوجبة غداء مغذية ومرضية مع سلطة التونة مع الحمص والخضروات.",
                  image: "سلطة التونة مع الحمص والخضار.jpeg"
              },
              {
                  name: "لحم مشوي مع خضار مسلوقة",
                  description: "استمتع بوجبة غداء مغذية ومرضية مع هذا اللحم المشوي مع الخضار المسلوقة.",
                  image: "لحم مشوي مع خضار مسلوقة.jpeg"
              },
              {
                  name: "كباب دجاج مع أرز بني",
                  description: "استمتع بوجبة غداء مغذية ومرضية مع كباب الدجاج مع الأرز البني.",
                  image: "كباب دجاج مع أرز بني.jpeg"
              },
              // Add more lunch options here
          ],
          dinner: [
              {
                  name: "سمك السلمون المشوي مع الخضار",
                  description: "انغمس في عشاء لذيذ مع سمك السلمون المخبوز المقدم مع الخضار الطازجة.",
                  image: "سمك السلمون المشوي مع الخضار.jpeg"
              },
              {
                  name: "سلطة الدجاج المشوي",
                  description: "استمتع بعشاء لذيذ مع سلطة الدجاج المشوي.",
                  image: "سلطة الدجاج المشوي.jpeg"
              },
              {
                  name: "سلمون مشوي مع خضار مطهوة على البخار",
                  description: "انغمس في عشاء لذيذ مع سمك السلمون المشوي مع الخضار المطبوخة على البخار.",
                  image: "سلمون مشوي مع خضار مطهوة على البخار.jpeg"
              },
              {
                  name: "عدس مطبوخ مع الخضار",
                  description: "انغمس في عشاء لذيذ مع العدس المطبوخ مع الخضار.",
                  image: "عدس مطبوخ مع الخضار.jpeg"
              },
              {
                  name: "كوسة محشوة باللحم المفروم",
                  description: "استمتع بعشاء لذيذ مع الكوسة المحشوة باللحم المفروم.",
                  image: "Zucchini_stuffed_with minced meat.jpeg"
              },
              {
                  name: "بيض مخفوق مع السبانخ والفطر",
                  description: "انغمس في عشاء لذيذ مع البيض المخفوق مع السبانخ والفطر.",
                  image: "بيض مخفوق مع السبانخ والفطر.jpeg"
              },
              // Add more dinner options here
          ]
      };
  } else {
      // Options for children
      meals = {
          breakfast: [
              {
                  name: "دقيق الشوفان مع الحليب والفواكه",
                  description: "خيار إفطار لذيذ وصحي!",
                  image: "دقيق الشوفان مع الحليب والفواكه.jpeg"
              },
              {
                  name: "بيض مخفوق مع الخضار",
                  description: "خيار إفطار لذيذ وصحي!",
                  image: "بيض مخفوق مع الخضار.jpeg"
              },
              {
                  name: "خبز القمح الكامل مع الأفوكادو والطماطم",
                  description: "خيار إفطار لذيذ وصحي!",
                  image: "خبز القمح الكامل مع الأفوكادو والطماطم.jpeg"
              },
              {
                  name: "زبادي بالفواكه و العسل",
                  description: "خيار إفطار لذيذ وصحي!",
                  image: "زبادي بالفواكه و العسل.jpeg"
              },
              {
                  name: "فطيرة الشوفان والموز",
                  description: "خيار إفطار لذيذ وصحي!",
                  image: "فطيرة الشوفان والموز.jpeg"
              },
              // Add breakfast options for children here
          ],
          lunch: [
              {
                  name: "صدر دجاج مشوي مع الخضار",
                  description: "استمتع بوجبة غداء مغذية ومرضية مع صدر الدجاج المشوي مع الخضار.",
                  image: "صدر دجاج مشوي مع الخضار.jpeg"
              },
              {
                  name: "معكرونة القمح الكامل مع صلصة الطماطم واللحم المفروم",
                  description: "استمتع بوجبة غداء مغذية ومرضية مع معكرونة القمح الكامل مع صلصة الطماطم واللحم المفروم.",
                  image: "معكرونة القمح الكامل مع صلصة الطماطم واللحم المفروم.jpeg"
              },
              {
                  name: "سمك مشوي مع أرز بني وسلطة",
                  description: "استمتع بوجبة غداء مغذية ومرضية مع هذا السمك المشوي مع الأرز البني والسلطة.",
                  image: "سمك مشوي مع أرز بني وسلطة.jpeg"
              },
              {
                  name: "شوربة العدس مع خبز القمح الكامل",
                  description: "استمتع بوجبة غداء مغذية ومرضية مع شوربة العدس مع خبز القمح الكامل.",
                  image: "شوربة العدس مع خبز القمح الكامل.jpeg"
              },
              {
                  name: "راب الدجاج بالخضار",
                  description: "استمتع بوجبة غداء مغذية ومرضية مع لفائف الدجاج مع الخضار.",
                  image: "راب الدجاج بالخضار.jpeg"
              },
              // Add lunch options for children here
          ],
          dinner: [
              {
                  name: "سلطة التونة مع الخضار",
                  description: "استمتعي بوجبة عشاء لذيذة مع سلطة التونة مع الخضار.",
                  image: "سلطة التونة مع الخضار.jpeg"
              },
              {
                  name: "عجة الخضار",
                  description: "انغمس في عشاء لذيذ مع عجة الخضار.",
                  image: "عجة الخضار.jpeg"
              },
              {
                  name: "سندويتش دجاج مشوي مع أفوكادو",
                  description: "استمتع بعشاء لذيذ مع ساندويتش الدجاج المشوي مع الأفوكادو.",
                  image: "سندويتش دجاج مشوي مع أفوكادو.jpeg"
              },
              {
                  name: "شوربة الخضار مع قطع الدجاج",
                  description: "انغمس في عشاء لذيذ مع شوربة الخضار مع قطع الدجاج.",
                  image: "شوربة الخضار مع قطع الدجاج.jpEg"
              },
              // Add dinner options for children here
          ]
      };
  }

  const selectedMeal = meals[mealType][Math.floor(Math.random() * meals[mealType].length)];

  const mealOutput = document.getElementById("mealOutput");
  mealOutput.innerHTML = `
      <h2>${selectedMeal.name}</h2>
      <p>${selectedMeal.description}</p>
      <img src="${selectedMeal.image}" alt="${selectedMeal.name}" width="300">
  `;
}

document.getElementById("generateButton").addEventListener("click", generateRandomMeal);

function openPage(pageURL) {
  window.open(pageURL, "_blank");
}
document.getElementById("recipesButton").addEventListener("click", function() {
  openPage("recipes.html");
});

document.getElementById("exercisesButton").addEventListener("click", function() {
  openPage("exercises.html");
});

document.getElementById("productsButton").addEventListener("click", function() {
  openPage("products.html");
});
document.getElementById("CarbsButton").addEventListener("click", function() {
  openPage("Carbs.html");
});

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
const userMessage = userInput.value.toLowerCase();
const response = getResponse(userMessage);
displayMessage(userMessage, 'user');
displayMessage(response, 'bot');
}

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
const hungerWords = ['hungry', 'Hungry', 'food', 'still hungry', 'want more', 'extra please', 'more', 'more please', 'extra'];
const happyWords = ['happy', 'very happy', 'feel good', 'smile', 'proud', 'so proud', 'pretty', 'cute', 'gorgeous', 'awesome', 'fantastic', 'beautiful', 'beauty', 'nice', 'perfect']
const badWords = ['hate', 'fuck', 'augly', 'bad', 'not good ', ' dont love ', 'not nice '];
const arabiCWords = ['محبط', 'زعلان', 'تعبان ', 'لا استطيع فعلها ', 'جايب اخري من الدنيا ', 'اريج ان استتسلم ', 'غبي', "حزين", "مدايق"];
const diabetesArabicWords = ['جديد', 'جديد في السكر', 'مريض جديد ', 'حديث المرض', 'سكري ', 'مريض سكر', 'مقاومه انسولين', "التعليمات "];
const hungerArabicWords = ['جعان', 'جوعان', 'اكل', 'مازلت جعان', 'اريد المزيد', 'العديد', 'اكثر', ' لسه جعان', 'اشعر بالجوع'];
const happyArabicWords = ['سعيد', ' مبسوط', 'اشعر بالراحه ', 'مبتسم ', 'فخور', 'فخور جدا ', 'جميل', 'عسل', 'شيء جميل من الحياه', 'عظيم', 'رائع', 'الحيه جميله ', 'نجحت', 'ناجح', 'مثالي', "مثاليه"]
const badArabicWords = ['اكره', 'تبا ', 'قبيح', 'سيء', 'ليس جميل ', 'مش بحبك', 'مش كويس', "حمار", "امك", "ابوك", "زباله"];
const foodData = {
  "تفاحة": { "الكربوهيدرات": 25, "سعرات حرارية": 95 },
  "موز": { "الكربوهيدرات": 27, "سعرات حرارية": 105 },
  "البرتقالي": { "الكربوهيدرات": 18, "سعرات حرارية": 62 },
  "الفراولة": { "الكربوهيدرات": 11, "سعرات حرارية": 56 },
  "بطيخ": { "الكربوهيدرات": 11, "سعرات حرارية": 46 },
  "جزرة": { "الكربوهيدرات": 12, "سعرات حرارية": 52 },
  "بروكلي": { "الكربوهيدرات": 6, "سعرات حرارية": 30 },
  "سبانخ": { "الكربوهيدرات": 1, "سعرات حرارية": 7 },
  "طماطم": { "الكربوهيدرات": 5, "سعرات حرارية": 22 },
  "البطاطس": { "الكربوهيدرات": 37, "سعرات حرارية": 163 },
  "حبوب ذرة": { "الكربوهيدرات": 28, "سعرات حرارية": 154 },
  "بيتزا": { "الكربوهيدرات": 30, "سعرات حرارية": 285 },
  "برغر": { "الكربوهيدرات": 10, "سعرات حرارية": 290 },
  "معكرونة": { "الكربوهيدرات": 43, "سعرات حرارية": 221 },
  "أرز": { "الكربوهيدرات": 45, "سعرات حرارية": 216 },
  "البطاطس المهروسة": { "الكربوهيدرات": 30, "سعرات حرارية": 230 },
  "دجاج مشوي": { "الكربوهيدرات": 0, "سعرات حرارية": 165 },
  "سمك السالمون": { "الكربوهيدرات": 0, "سعرات حرارية": 175 },
  "بيضة": { "الكربوهيدرات": 1, "سعرات حرارية": 70 },
  "زبادي": { "الكربوهيدرات": 12, "سعرات حرارية": 149 },
  "التفاح مع زبدة الفول السوداني": { "الكربوهيدرات": 28, "سعرات حرارية": 230 }
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
const meals = [
  'كوكيز رقائق الشوكولاتة بدقيق جوز الهند.',
  'الفراولة المغطاة بالشوكولاتة الداكنة.',
  'التوت مع كريمة جوز الهند المخفوقة.',
  'الكمثرى المخبوزة بالقرفة.',
  'بودنغ بذور الشيا بالتوت.',
  'عصير التوت.',
  'بودنغ بذور الشيا واليقطين.',
  'بذور الشيا والتوت بارفيه.',
  'جيلي خالي من السكر مع الكريمة المخفوقة.',
  'التفاح المخبوز بالقرفة.',
  'جيلي خالي من السكر مع الفاكهة.',
  'اللوز المغطى بالشوكولاتة الداكنة.',
  'موس الشوكولاتة بالأفوكادو.',
  'الخوخ المخبوز بالقرفة.',
  'سلطة التفاح والجوز.',
  'التوت مع كريمة جوز الهند المخفوقة.',
  'الفراولة المغطاة بالشوكولاتة الداكنة.',
  'الكمثرى المخبوزة مع القرفة.',
  'جيلي خالي من السكر مع الكريمة المخفوقة.',
  'التفاح المخبوز بالقرفة.',
  'التوت مع الكريمة المخفوقة.',
  'الشوكولاتة الداكنة واللوز.',
  'التفاح المخبوز بالقرفة.',
  'المصاصات الخالية من السكر.',
  'توت مع زبادي يوناني.',
  'المكسرات المغطاة بالشوكولاتة الداكنة.',
  'التفاح المخبوز بالقرفة.',
  'بودنغ بذور الشيا مع التوت.',
  'بارفيه الزبادي بالمكسرات والبذور.',
  'فطائر دقيق اللوز والتوت.',
  'جيلي خالي من السكر مع الكريمة المخفوقة.',
  'التفاح بالقرفة المخبوزة.',
  'بارفيه بذور الشيا.',
  'ساندويتش زبدة البندق والموز.',
  'لدغات الزبادي المجمدة.',
  'مزيج درب محلية الصنع.',
  'جبنة قريش مع فواكه طازجة.',
  'الكمثرى المخبوزة مع القرفة والجوز.',
  'موس الشوكولاتة بالأفوكادو.'
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
