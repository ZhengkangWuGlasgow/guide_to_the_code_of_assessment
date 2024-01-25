var bandToGPA = {
    "A1":22,
    "A2":21,
    "A3":20,
    "A4":19,
    "A5":18,
    "B1":17,
    "B2":16,
    "B3":15,
    "C1":14,
    "C2":13,
    "C3":12,
    "D1":11,
    "D2":10,
    "D3":9,
    "E1":8,
    "E2":7,
    "E3":6,
    "F1":5,
    "F2":4,
    "F3":3,
    "G1":2,
    "G2":1,
    "H":0
}

var GPAToBand = {
    22: "A1",
    21: "A2",
    20: "A3",
    19: "A4",
    18: "A5",
    17: "B1",
    16: "B2",
    15: "B3",
    14: "C1",
    13: "C2",
    12: "C3",
    11: "D1",
    10: "D2",
    9: "D3",
    8: "E1",
    7: "E2",
    6: "E3",
    5: "F1",
    4: "F2",
    3: "F3",
    2: "G1",
    1: "G2",
    0: "H"
}

var subjectToCredit = {
    "1": 20,
    "2": 15,
    "3": 10,
    "4": 15,
    "5": 15,
    "6": 10,
    "7": 10,
    "8": 10,
    "9": 10,
    "10": 10,
    "11": 10,
    "12": 10,
    "13": 10,
    "14": 10,
    "15": 10,
    "16": 10,
    "17": 10,
    "18": 10,
    "19": 10,
    "20": 10,
}


function calculate() {

    var form = document.getElementById("gradeForm");
    var formData = new FormData(form);

    totalGrades = 0
    totalCredits = 0
    for (var pair of formData.entries()) {
        if (pair[1] != ""){
            totalGrades += subjectToCredit[pair[0]]*pair[1]
        
            totalCredits += subjectToCredit[pair[0]]
        }
    }

    GPA = Math.round(totalGrades/totalCredits)
    band = GPAToBand[GPA]


    document.getElementById("result").innerHTML = "GPA: " + GPA + ", band: " + band;
}

