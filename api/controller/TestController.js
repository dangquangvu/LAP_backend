const auth = require("../middlewares/auth");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const { TestQuizModel, CardPoolModel } = require("../models");
const { now } = require("moment");

module.exports = {
    async testQuiz(req, res) {
        let id = req.params.id;
        let body = req.body;
        let time = body.about_time;
        let now = new Date();
        let newDateObj = moment(now).add(time, "m").toDate();
        let result = await this.generateQuiz(req.params.id);
        let query = {
                authorId: body.authorId,
                author: body.author,
                guestTestId: body.guestTestId,
                guestTest: body.guestTest,
                title: body.title,
                about_time: time,
                breaktime: newDateObj,
                arrTest: result,
                cardFolderId: id
            }
            // console.log(query)
            // let data = await TestQuizModel.createTestQuiz(query)
            // if (!data) {
            //     return res.status(404).json({
            //         message: "create test not feasibility",
            //     });
            // }
            // console.log(data)
        return res.status(200).json({
            message: query,
        });
    },
};

generateQuiz = async(id) => {
    let data = await CardPoolModel.findAll(id);
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
        // create sequence  number to sort array quiz
        result.push(object);
    });
    let randomSequenceNumber = [];
    let finalResult = [];
    while (randomSequenceNumber.length < data.length) {
        let random = CardPoolModel.random(max, min);
        if (randomSequenceNumber.indexOf(random) == -1) {
            randomSequenceNumber.push(random);
        }
    }
    randomSequenceNumber.map((item) => {
        finalResult.push(result[item]);
    });
    return finalResult;
};