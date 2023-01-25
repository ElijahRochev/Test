let people = [
  "Крис",
  "Анна",
  "Колин",
  "Терри",
  "Фил",
  "Лола",
  "Сём",
  "Кай",
  "Брюс"
];

for (let i = 0; i < people.length; i++) {
    if (people[i] === "Фил"|| people[i] === "Лола") {
      refused.textContent += people[i] + ', ';
    }else{
      admitted.textContent += people[i] + ', ';
    }
}
