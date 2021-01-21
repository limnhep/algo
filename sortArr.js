const team = [
  'Joe',
  'Dyan',
  'Bea',
  'Theo',
];

function alphabetizeTeam(team) {
  return [...team].sort();
}

console.log(alphabetizeTeam(team));