const users = [
  { name: "Користувач 1", balance: 100 },
  { name: "Користувач 2", balance: 200 },
  { name: "Користувач 3", balance: 300 },
];
const totalBalance = 0;

for (const i = 0; i < users.length; i++) {
  totalBalance += users[i].balance;
}
var users2 = [
  { name: "Користувач 1", friend: "Друг 1" },
  { name: "Користувач 2", friend: "Друг 2" },
  { name: "Користувач 3", friend: "Друг 1" },
  { name: "Користувач 4", friend: "Друг 3" },
];

var targetFriendName = "Друг 1";

var usersWithTargetFriend = [];

for (var i = 0; i < users2.length; i++) {
  if (users[i].friend === targetFriendName) {
    usersWithTargetFriend.push(users2[i].name);
  }
}
var people = [
  { name: "Користувач 1", friends: ["Друг 1", "Друг 2", "Друг 3"] },
  { name: "Користувач 2", friends: ["Друг 4", "Друг 5"] },
  { name: "Користувач 3", friends: ["Друг 6"] },
  { name: "Користувач 4", friends: ["Друг 7", "Друг 8", "Друг 9"] },
];

console.log(
  "Користувачі з другом " + targetFriendName + ": " + usersWithTargetFriend
);
people.sort(function (a, b) {
  return a.friends.length - b.friends.length;
});

var sortedNames = people.map(function (person) {
  return person.name;
});

console.log("Масив імен відсортований за кількістю друзів:", sortedNames);

var programers = [
  { name: "Користувач 1", skills: ["HTML", "CSS", "JavaScript"] },
  { name: "Користувач 2", skills: ["JavaScript", "Python", "SQL"] },
  { name: "Користувач 3", skills: ["HTML", "Java"] },
];

var uniqueSkills = [];

for (var i = 0; i < programers.length; i++) {
  var programersSkills = programers[i].skills;
  for (var j = 0; j < programersSkills.length; j++) {
    var skill = programersSkills[j];
    if (!uniqueSkills.includes(skill)) {
      uniqueSkills.push(skill);
    }
  }
}

uniqueSkills.sort();

console.log(
  "Унікальні уміння, відсортовані в алфавітному порядку:",
  uniqueSkills
);
