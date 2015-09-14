var AbilitiesList = function() {
  var list = {
    fireball: Fireball,
  }
  return {
    getAbility: function(key){
      return list[key];
    }
  };
};

var Fireball = {
  level: 1,
  baseMult: 1.00,
  target: {
    range: "all",
    number: "single",
    type: "enemy"
  }
};