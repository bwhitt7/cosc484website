const PlanetInfo = [
    {
        name: "The Sun",
        shortname: "sun",
        color: "yellow",
        table: [
            {name: "Object Type", value: "Star", id:0},
            {name: "Radius", value: "695,700 km", id: 1},
            {name: "Mass", value: "1.9885 * 10^30 kg", id: 2},
            {name: "Orbital Period", value: "365.25 years", id: 3},
            {name: "Rotational Period", value: "27 days", id: 4},
            {name: "No. of Planets", value: "8", id: 5}
        ],
        info:[
            "The Sun is a star in our Solar System, and resides at the center. All nine planets in the system rotate around the Sun" + 
            " at different orbital periods. It began to form about 4.5 billion years ago, and is composed mainly of hydrogen and helium," +
            " with the remaining 1.69 percent made up of a combination of various gases and metals.",
            "The Sun has three inner layers and four outer layers. Starting from the center of the Sun, the internal layers are the core, " +
            "the radiative zone, and the convective zone. After the convective zone are the outer layers, starting with the photosphere," +
            "then the chromosphere, transition zone, and corona. The Sun's mass is 5,628 times the mass of the Earth."
        ],
        quiz: [
            {
                question: "What is the Sun mostly composed of?",
                index: 0,
                answers: [
                    "Hydrogen and Helium",
                    "Various Gases and Metals",
                    "Iron and Nickel",
                    "Hydrogen and Mercury"
                ],
                correct: 0
            },

            {
                question: "What is the outermost layer of the Sun?",
                index: 1,
                answers: [
                    "The convective zone",
                    "The core",
                    "The corona",
                    "The photosphere"
                ],
                correct: 2
            }
        ]
    },
    {
        name: "Mercury",
        shortname: "mercury",
        color: "gray",
        table: [
            {name: "Object Type", value: "Terrestrial planet", id:0},
            {name: "Radius", value: "2440 km", id: 1},
            {name: "Mass", value: "3.30 * 10^23 kg", id: 2},
            {name: "Orbital Period", value: "88 days", id: 3},
            {name: "Rotational Period", value: "59 days", id: 4},
            {name: "No. of Moons", value: "None", id: 5}
        ],
        info:[
            "Mercury is the closest planet to the Sun. It is the second smallest planet in the Solar System after Pluto." + 
            " Because of its position relative to the Sun, the side of Mercury facing the Sun is extremely hot, while the side facing away is extremely cold." +
            " Mercury has three layers: the core, the mantle, and the crust. The core is the thickest of the three, at 600 km.",
            "Mercury's atmosphere extremely thin and made primarily of sodium, magnesium, and calcium." +
            " It also contains small amounts of hydrogen, helium, and potassium."
        ],
        quiz: [
            {
                question: "How many moons does Mercury have?",
                index: 0,
                answers: [
                    "1",
                    "7",
                    "3",
                    "0"
                ],
                correct: 3
            },

            {
                question: "What are the primary elements found in Mercury's atmosphere?",
                index: 1,
                answers: [
                    "hydrogen, helium, sodium",
                    "Sodium, magnesium, calcium",
                    "Potassium, calcium, helium",
                    "Hydrogen, helium, potassium"
                ],
                correct: 1
            }
        ]
    },
    {
        name: "Venus",
        shortname: "venus",
        color: "yellow",
        table: [
            {name: "Object Type", value: "Terrestrial planet", id:0},
            {name: "Radius", value: "6052 km", id: 1},
            {name: "Mass", value: "4.87 * 10^24 kg", id: 2},
            {name: "Orbital Period", value: "225 days", id: 3},
            {name: "Rotational Period", value: "243 days", id: 4},
            {name: "No. of Moons", value: "None", id: 5}
        ],
        info:[
            "Venus is the second closest planet to the Sun, and similar to Earth in size. Unlike Earth, however, it is much less hospitable, with an atmosphere not suited to sustain life." + 
            " Venus is the only other planet besides Mercury to not have any moons. Another similarity it shares with Mercury is that it is the hottest planet in the solar system, with Mercury being the second hottest.",
            "The atmosphere of Venus prevents life from existing on the planet. " +
            " It is composed mainly of carbon dioxide and nitrogen, with traces of other gases present (mostly sulfur dioxide)." +
            " One interesting fact about Venus is that, unlike most other planets, it rotates on its axis from East to West rather than West to East."
        ],
        quiz: [
            {
                question: "What is the rotational period of Venus?",
                index: 0,
                answers: [
                    "200 days",
                    "225 days",
                    "250 years",
                    "243 days"
                ],
                correct: 3
            },

            {
                question: "What is the primary trace element found in Venus' atmosphere?",
                index: 1,
                answers: [
                    "Lead",
                    "Sulfur dioxide",
                    "Carbon",
                    "Lithium"
                ],
                correct: 1
            }
        ]
    },
    {
        name: "Earth",
        shortname: "earth",
        color: "green",
        table: [
            {name: "Object Type", value: "Terrestrial planet", id:0},
            {name: "Radius", value: "6371 km", id: 1},
            {name: "Mass", value: "5.97 * 10^24 kg", id: 2},
            {name: "Orbital Period", value: "365 days", id: 3},
            {name: "Rotational Period", value: "24 hours", id: 4},
            {name: "No. of Moons", value: "1", id: 5}
        ],
        info:[
            "Earth, the planet we live on, is the third planet from the Sun. It has a similar size to Venus, but a much more habitable atmosphere." + 
            " Water makes up more of Earth's surface than dry land, with 71 percent of the surface being covered with water." +
            " Earth is made up of five layers: the inner core, the outer core, the lower mantle, the upper mantle, and the crust, which is the visible part of the planet.",
            "The atmosphere of Earth is also composed of five layers, starting with the troposphere, then the stratosphere, mesosphere, thermosphere, and exosphere." +
            " The primary elements present in the atmosphere are nitrogen and oxygen, with a small amount of argon and trace amounts of other gases such as carbon dioxide and neon."
        ],
        quiz: [
            {
                question: "What are the primary elements present in Earth's atmosphere?",
                index: 0,
                answers: [
                    "Nitrogen and Hydrogen",
                    "Hydrogen and Helium",
                    "Oxygen and Argon",
                    "Nitrogen and Oxygen"
                ],
                correct: 3
            },

            {
                question: "What percent of Earth's surface is water?",
                index: 1,
                answers: [
                    "69 percent",
                    "71 percent",
                    "50 percent",
                    "33 percent"
                ],
                correct: 1
            }
        ]
    },
    {
        name: "Mars",
        shortname: "mars",
        color: "red",
        table: [
            {name: "Object Type", value: "Terrestrial planet", id:0},
            {name: "Radius", value: "3390 km", id: 1},
            {name: "Mass", value: "6.42 * 10^23 kg", id: 2},
            {name: "Orbital Period", value: "687 days", id: 3},
            {name: "Rotational Period", value: "25 hours", id: 4},
            {name: "No. of Moons", value: "2", id: 5}
        ],
        info:[
            "Mars is the fourth planet from the Sun, and the last of the terrestrial planets. Two moons orbit the planet, called Phobos and Deimos. Phobos is actually slowly moving toward Mars and is expected to crash into the planet in about 50 million years." + 
            " The planet is composed of three layers: a dense core up to 2100 km in radius, a mantle, and the outer crust made of iron, magnesium, aluminum, calcium, and potassium." + 
            "Mars also has the largest volcano in the Solar System, called Olympus Mons.",
            "The atmosphere of Mars is mainly carbon dioxide, nitrogen, and argon." +
            " Mars is the only planet in the Solar System other than Earth thought to be possible of inhabiting life, and trace amounts of water have been found on the planet."
        ],
        quiz: [
            {
                question: "What is the name of Mars' volcano?",
                index: 0,
                answers: [
                    "Mount Olympus",
                    "Mount Everest",
                    "Olympus Mons",
                    "Kilimanjaro"
                ],
                correct: 2
            },

            {
                question: "How many moons does Mars have?",
                index: 1,
                answers: [
                    "3",
                    "4",
                    "11",
                    "2"
                ],
                correct: 3
            }
        ]
    },
    {
        name: "Jupiter",
        shortname: "jupiter",
        color: "red",
        table: [
            {name: "Object Type", value: "Gas giant", id:0},
            {name: "Radius", value: "71,500 km", id: 1},
            {name: "Mass", value: "1.9 * 10^27 kg", id: 2},
            {name: "Orbital Period", value: "11.8 years", id: 3},
            {name: "Rotational Period", value: "9.9 hours", id: 4},
            {name: "No. of Moons", value: "95", id: 5}
        ],
        info:[
            "Jupiter is the fifth planet from the Sun, and also the largest of the planets in the Solar System. It is the first of the gas giants, " +
            "and is so large that all the other planets in the Solar System could fit inside it. The most iconic feature of Jupiter is its Great Red Spot, " +
            "which is actually a massive storm that has existed for hundreds of years. Jupiter has 95 moons, but its four largest and most well-known are Io, Europa, Ganymede, and Callisto.",
            "Jupiter is mostly composed of hydrogen and helium, and due to atmospheric pressure, much of the hydrogen gas becomes liquid. This gives Jupiter the largest ocean in the Solar System." +
            "Jupiter's atmosphere is composed of three layers. The outermost is made of ammonia ice, the middle layer of ammonium hydrosulfide crystals, and the central layer is made of water ice and vapor."
        ],
        quiz:[
            {
                question: "What is the Great Red Spot?",
                index: 0,
                answers: [
                    "A cool discoloration of Jupiter",
                    "A massive storm in Jupiter's atmosphere",
                    "A whirlpool that has formed in Jupiter's ocean",
                    "A huge chunk of ice that appears red from space"
                ],
                correct: 1
            },

            {
                question: "What are the names of Jupiter's most well-known moons?",
                index: 1,
                answers: [
                    "Charon, Titan, Io, Callisto",
                    "Metis, Thebe, Ersa, Carpo",
                    "Io, Europa, Ganymede, Callisto",
                    "They don't have names, they are just moons"
                ],
                correct: 2
            }
        ]
    },
    {
        name: "Saturn",
        shortname: "saturn",
        color: "yellow",
        table: [
            {name: "Object Type", value: "Gas giant", id:0},
            {name: "Radius", value: "58,232 km", id: 1},
            {name: "Mass", value: "5.68 * 10^26 kg", id: 2},
            {name: "Orbital Period", value: "29 years", id: 3},
            {name: "Rotational Period", value: "11 hours", id: 4},
            {name: "No. of Moons", value: "146", id: 5}
        ],
        info:[
            "Saturn is the next of the gas giants and the sixth planet from the Sun. Its most well-known feature is its rings, which are made up of chunks of ice and rock. Each ring orbits at a different speed around the planet." + 
            " There are seven rings in total, and the first three are divided from the other four by a large gap known as the Cassini Division.",
            "Saturn is primarily composed of hydrogen and helium. These gases surround a dense core of elements such as iron and nickel." +
            " Saturn is the only planet in the Solar System that is less dense than water. However, its atmosphere exerts extreme pressure and includes winds that can reach up to 1600 feet per second (the strongest winds on Earth only reach about 360 feet per second)."
        ],
        quiz: [
            {
                question: "What is Saturn's most notable feature?",
                index: 0,
                answers: [
                    "Its temperature",
                    "Its ocean",
                    "Its volcano",
                    "Its rings"
                ],
                correct: 3
            },

            {
                question: "What is Saturn mostly made of?",
                index: 1,
                answers: [
                    "Hydrogen and Oxygen",
                    "Hydrogen and Helium",
                    "Helium and Iron",
                    "Iron and Nickel"
                ],
                correct: 1
            }
        ]
    },
    {
        name: "Uranus",
        shortname: "uranus",
        color: "blue",
        table: [
            {name: "Object Type", value: "Ice giant", id:0},
            {name: "Radius", value: "25,362 km", id: 1},
            {name: "Mass", value: "8.681 * 10^25 kg", id: 2},
            {name: "Orbital Period", value: "84 years", id: 3},
            {name: "Rotational Period", value: "17 hours", id: 4},
            {name: "No. of Moons", value: "27", id: 5}
        ],
        info:[
            "Uranus, the seventh planet from the Sun, is the third largest planet in the Solar System. Unlike the other planets, it rotates at a 90-degree angle from its orbit, making it appear to spin sideways." + 
            " Although they aren't as noticeable as Saturn's, Uranus has its own set of rings: 13 in total." + 
            "The planet has fewer moons than Jupiter and Saturn, and they have a destinct difference. While most moons are named after mythological figures, Uranus' moons are named after Shakespeare characters (ex. Titania, Oberon).",
            "Most of Uranus is made of a combination of water, methane, and ammonia that surrounds a small, rocky core. The color of Uranus comes from the presence of methane gas in its atmosphere, which absorbs red light and leaving the planet looking bluish-green." +
            " The atmosphere of Uranus is composed mostly of hydrogen and helium, with lesser amounts of methane present along with trace amounts of water and ammonia.."
        ],
        quiz: [
            {
                question: "What is the orbital period of Uranus?",
                index: 0,
                answers: [
                    "104 years",
                    "84 days",
                    "84 years",
                    "54 years"
                ],
                correct: 2
            },

            {
                question: "What gives Uranus its unique color?",
                index: 1,
                answers: [
                    "The methane gas in its atmosphere",
                    "Its composition of water and ice",
                    "The massive ocean that spans its surface",
                    "A giant storm in its atmosphere"
                ],
                correct: 0
            }
        ]
    },
    {
        name: "Neptune",
        shortname: "neptune",
        color: "blue",
        table: [
            {name: "Object Type", value: "Ice giant", id:0},
            {name: "Radius", value: "24,622 km", id: 1},
            {name: "Mass", value: "1.0243 * 10^26 kg", id: 2},
            {name: "Orbital Period", value: "165 years", id: 3},
            {name: "Rotational Period", value: "16 hours", id: 4},
            {name: "No. of Moons", value: "14", id: 5}
        ],
        info:[
            "Neptune is the last of the giants, and also the last officially recognized planet in the Solar System (the eigth planet from the Sun)." + 
            " Its rotational axis is tilted at a similar angle to that of Earth, meaning Neptune experiences the seasons the same as Earth. However, because its orbital period is so long, each season lasts for over 40 years." + 
            " Neptune has a total of 14 moons, with its largest moon known as Triton. Each of Neptune's moons are named after lesser sea-related deities from mythology since the planet is named after the Roman god of the sea.",
            "Neptune also has rings, although less than Saturn or Uranus. Its five rings are named Galle, Leverrier, Lassell, Arago, and Adams." +
            " The planet is composed of a mixture of water, methane, and ammonia around a dense, rocky core. It is thought that there could be an ocean of extremely hot water hidden under Neptune's clouds." +
            " The atmosphere of Neptune is mostly hydrogen and helium, along with small amounts of methane."
        ],
        quiz: [
            {
                question: "How many moons does Neptune have?",
                index: 0,
                answers: [
                    "4",
                    "11",
                    "14",
                    "40"
                ],
                correct: 2
            },

            {
                question: "What is Neptune's atmosphere made of?",
                index: 1,
                answers: [
                    "Hydrogen, Neon, Oxygen",
                    "Helium, Methane, Neon",
                    "Hydrogen, Helium, Carbon Dioxide",
                    "Hydrogen, Helium, Methane"
                ],
                correct: 3
            }
        ]
    },
    {
        name: "Pluto",
        shortname: "pluto",
        color: "purple",
        table: [
            {name: "Object Type", value: "Dwarf planet", id:0},
            {name: "Radius", value: "1151 km", id: 1},
            {name: "Mass", value: "1.303 * 10^22 kg", id: 2},
            {name: "Orbital Period", value: "248 years", id: 3},
            {name: "Rotational Period", value: "153 hours", id: 4},
            {name: "No. of Moons", value: "5", id: 5}
        ],
        info:[
            "Pluto was originally considered the ninth planet of the Solar System, but was demoted to a dwarf planet by NASA. The planet is small, measuring at about half the width of the United States." + 
            " The planet has a unique, oval-shaped orbit that actually crosses into Neptune's orbit. It also has a tilted axis, making it seem to spin almost on its side. Pluto has five moons: Charon (the largest), Nix, Hydra, Kerberos, and Styx.",
            "Pluto is thought to have a rocky core surrounded by a layer of water ice. The planet has a mass that is about 1/6th of Earth's Moon." +
            " Pluto has an extremely thin atmosphere composed mostly of molecular nitrogen, and trace amounts of methane and carbon monoxide have also been found."
        ],
        quiz: [
            {
                question: "What is unique about Pluto's orbit?",
                index: 0,
                answers: [
                    "It is an elongated oval",
                    "It is a perfect circle",
                    "It does not orbit around the Sun",
                    "It rotates around the Sun at an extremely high speed"
                ],
                correct: 0
            },

            {
                question: "How many moons does Pluto have?",
                index: 1,
                answers: [
                    "15",
                    "0",
                    "10",
                    "5"
                ],
                correct: 3
            }
        ]
    }
]

export default PlanetInfo;