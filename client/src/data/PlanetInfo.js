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
            "Test1",
            "Test2"
        ],
        quiz: [
            {
                question: "Test question 1",
                index: 0,
                answers: [
                    "Answer 1",
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
                    "Answer 3",
                    "Answer 4"
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