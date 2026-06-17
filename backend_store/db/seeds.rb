
puts "Cleaning the database..."
Game.destroy_all
Developer.destroy_all

puts "Creating game studios..."

sega = Developer.create!(name: "SEGA", country: "Japan")
sega.games.create!("title": "Sonic Frontiers", genre: "3D Platformer", release_year: 2022)
sega.games.create!("title": "Persona 5 Royal", genre: "JRPG", release_year: 2019)
sega.games.create!("title": "Virtua Fighter 5", genre: "Fighting", release_year: 2006)
sega.games.create!("title": "Soul Hackers 2", genre: "JRPG", release_year: 2022)

square_enix = Developer.create!(name: "Square Enix", country: "Japan")
square_enix.games.create!("title": "NieR Automata", genre: "Action RPG", release_year: 2017)
square_enix.games.create!("title": "Dragon Quest XI", genre: "JRPG", release_year: 2017)
square_enix.games.create!("title": "Final Fantasy XIII", genre: "JRPG", release_year: 2009)
square_enix.games.create!("title": "Final Fantasy XVI", genre: "Action RPG", release_year: 2023)

capcom = Developer.create!(name: "Capcom", country: "Japan")
capcom.games.create!("title": "Devil May Cry", genre: "Hack & Slash", release_year: 2001)
capcom.games.create!("title": "Monster Hunter: Wilds", genre: "Action RPG", release_year: 2025)
capcom.games.create!("title": "Mega Man Zero/ZX Legacy Collection", genre: "2D Platform", release_year: 2020)
capcom.games.create!("title": "Dino Crisis", genre: "Survival Horror", release_year: 1999)

from_software = Developer.create!(name: "FromSoftware", country: "Japan")
capcom.games.create!("title": "Armored Core VI: Fires of Rubicon", genre: "Action RPG", release_year: 2023)
capcom.games.create!("title": "Sekiro: Shadows Die Twice", genre: "Action RPG", release_year: 2019)
capcom.games.create!("title": "Dark Souls III", genre: "Action RPG", release_year: 2016)
capcom.games.create!("title": "Ninja Blade", genre: "Hack & Slash", release_year: 2008)

japan_studio = Developer.create!(name: "Sony Japan Studio", country: "Japan")
japan_studio.games.create!("title": "Siren: Blood Curse", genre: "Survival Horror", release_year: 2008)
japan_studio.games.create!("title": "Ape Scape", genre: "3D Platformer", release_year: 1999)
japan_studio.games.create!("title": "Gravity Rush", genre: "Action-Adventure", release_year: 2012)
japan_studio.games.create!("title": "Shadow of the Colossus", genre: "Action-Adventure", release_year: 2005)

konami = Developer.create!(name: "Konami", country: "Japan")
konami.games.create!("title": "Silent Hill f", genre: "Survival Horror", release_year: 2025)
konami.games.create!("title": "Castlevania: Belmont's Curse", genre: "Metroidvania", release_year: 2026)
konami.games.create!("title": "Metal Gear Solid 2", genre: "Stealth", release_year: 2001)
konami.games.create!("title": "Bomberman: Panic Bomber", genre: "Puzzle", release_year: 2005)

puts "Catalogue successfully injected! 🎮 We've got #{Developer.count} gaming studios and #{Game.count} games."