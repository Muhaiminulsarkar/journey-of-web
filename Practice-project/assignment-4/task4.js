function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        const sms = "Invalid Input";
        return sms;
    }

    const testMark = obj.testScore;
    const schoolMark = obj.schoolGrade;
    const checkFarmer = obj.isFFamily;
    if (checkFarmer === true) {   
        const bonusMark = 20;
        const total = testMark + schoolMark + bonusMark;
        if (total >= 80) {
            return true
        }
        else return false
    }
    else if ((schoolMark + testMark) >= 80) {
        return true;
    }
    else return false;

}
const object = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  } ;
const obj = calculateFinalScore(object);
console.log(obj);
