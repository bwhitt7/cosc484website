const PlanetInfo = [
    {
        name: "The Sun",
        shortname: "sun",
        color: "yellow",
        table: [
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
        color: "green",
        table: [
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
                correct: 0
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
                correct: 2
            }
        ]
    },
    {
        name: "Venus",
        shortname: "venus",
        color: "red",
        table: [
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
                correct: 0
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
                correct: 2
            }
        ]
    },
    {
        name: "Earth",
        shortname: "earth",
        color: "green",
        table: [
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
                correct: 0
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
                correct: 2
            }
        ]
    },
    {
        name: "Mars",
        shortname: "mars",
        color: "red",
        table: [
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
                correct: 0
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
                correct: 2
            }
        ]
    },
    {
        name: "Jupiter",
        shortname: "jupiter",
        color: "red",
        table: [
            {name: "Radius", value: "71,500 km", id: 1},
            {name: "Mass", value: "1.9 * 10^27 kg", id: 2},
            {name: "Orbital Period", value: "11.8 years", id: 3},
            {name: "Rotational Period", value: "9.9 hours", id: 4},
            {name: "No. of Moons", value: "92", id: 5}
        ],
        info:[
            "Test1",
            "Test2"
        ],
        quiz:[
            {
                question: "Test question 1",
                index: 0,
                answers: [
                    "Answer 1 right",
                    "Answer 2",
                    "Answer 3",
                    "Answer 4"
                ],
                correct: 0
            },

            {
                question: "Test question 2",
                index: 1,
                answers: [
                    "Answer 1",
                    "Answer 2",
                    "Answer 3 right",
                    "Answer 4"
                ],
                correct: 2
            }
        ]
    }
]

export default PlanetInfo;