class StaticPagesController < ApplicationController
  def game
    @party = [
      {
        name: "Bob",
        maxHealth: 360,
        curHealth: 320,
        maxEnergy: 100,
        curEnergy: 80,
        attack: 100,
        abilities: [
          {
            name: "Choke",
            code: "choke",
            target: "front one enemy",
          },{
            name: "Throw",
            code: "throw",
            range: "front one enemy"
          },{
            name: "Execute",
            code: "execute",
            range: "front one enemy",
          },{
            name: "Emboldening Strike",
            code: "emboldening_strike",
            range: "front one enemy",
          },{
            name: "Tremor",
            code: "tremor",
            range: "all row enemy",
          },{
            name: "Battle Cry",
            code: "battle_cry",
            range: "all all friendly",
          },{
            name: "Tackle",
            code: "tackle",
            range: "front one enemy",
          },
        ]
      },
      {
        name: "Jeffe",
        maxHealth: 200,
        curHealth: 120,
        maxEnergy: 60,
        curEnergy: 30,
        attack: 50,
        abilities: [
          {
            name: "Fireball",
            code: "fireball",
            target: "all one enemy",
          },{
            name: "Shock",
            code: "shock",
            range: "all one enemy"
          },{
            name: "Rapid Fire",
            code: "rapid_fire",
            range: "all one enemy",
          },{
            name: "Lightning Storm",
            code: "lightning_storm",
            range: "all all enemy",
          },{
            name: "Chill",
            code: "chill",
            range: "all one enemy",
          },{
            name: "Beam",
            code: "beam",
            range: "all one enemy",
          },{
            name: "Shadowburn",
            code: "shadowburn",
            range: "all one enemy",
          },
        ]
      },
      {
        name: "Jorge",
        maxHealth: 500,
        curHealth: 50,
        maxEnergy: 180,
        curEnergy: 30,
        attack: 50,
        abilities: [
          {
            name: "Dive",
            target: "all one enemy",
          },{
            name: "Mercy Kill",
            range: "all one enemy"
          },{
            name: "Lacerate",
            range: "front one enemy",
          },{
            name: "Stealth",
            range: "self",
          },{
            name: "Ambush",
            range: "back one enemy",
          },{
            name: "Poison Blade",
            range: "all one enemy",
          },
        ]
      },
    ]

  end
end
