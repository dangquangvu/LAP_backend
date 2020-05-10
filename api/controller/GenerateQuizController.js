const auth = require("../middlewares/auth");
const jwt = require("jsonwebtoken");
const { CardPoolModel } = require("../models");

let tokenList = [];

module.exports = {
    async generateQuiz(req, res) {
        console.log(req.params.id)
        let data = await CardPoolModel.findAll(req.params.id);
        let max = data.length - 1;
        let min = 0;
        let arrRandom = [];
        let arr2dRandom = [];
        for (let i = 0; i < data.length; i++) {
            let check;
            if (data.length < 5) {
                check = data.length;
            } else {
                check = 4;
            }
            // console.log(check);
            while (arrRandom.length < check) {
                let random = CardPoolModel.random(max, min);
                if (arrRandom.indexOf(random) == -1) {
                    arrRandom.push(random);
                }
            }
            arr2dRandom.push(arrRandom);
            arrRandom = [];
        }
        // console.log(arr2dRandom[0], "test");
        let result = [];
        data.map((item, i) => {
            let arrAns = arr2dRandom[i];
            let checker = arrAns.indexOf(i);
            if (checker == -1) {
                let max = 3,
                    min = 0;
                let random = CardPoolModel.random(max, min);
                arrAns[random] = i;
            }
            item.arrAns = arrAns;
            let arrAnsResult = [];
            arrAns.map((element) => {
                arrAnsResult.push(data[element].explain);
            });
            let object = {
                item: item,
                arrAns: arrAnsResult,
            };
            // console.log(object);
            result.push(object);
        });
        return res.status(200).json({
            message: result,
        });
    },
};