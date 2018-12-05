let path = require('path');
//使用ejsexcel读取excel文件 npm install ejsexcel --save
let ejsExcel = require('ejsexcel');
let fs = require('fs');
//读取excel
let exBuf = fs.readFileSync(__dirname + '/data1.xlsx');
let _data = [];
//获取成功后
ejsExcel.getExcelArr(exBuf).then(exlJson => {
//获取excel数据
    let workBook = exlJson;
//获取excel第一张表 sheet1
    let workSheets = workBook[0];
//导出js的路径
    let newfilepath = path.join(__dirname, "/test.js");
    //从第二行开始插入，避免连表头也插入_data里面
    workSheets.splice(0,1);
//遍历第一张表的的每一行数据
    workSheets.forEach((item, index) => {
//往_data插入单元格个值，item[0]相当于excel中的id，item[1]就是excel中的name
        _data.push({
            id: item[0],
            name: item[1],
        })
    });
//写入js文件
    fs.writeFileSync(newfilepath, 'let _skillData=' + JSON.stringify(_data) + ';export {_skillData}');
}).catch(error => {
//打印获取失败信息
    console.log(error);
});