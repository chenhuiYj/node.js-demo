let fs = require('fs');
let path = require('path');
fs.readFile('./4.catalog/fn.js', (err, data) => {
    if (err) {
        //如 果 出 错， 输 出 错 误 日 志， 并 给 客 户 端 返 回“ Server Error”
        console.error(err);
        res.end('Server Error');
    }
    else {
        let md="";
        data=eval(data);
        Object.keys(data).forEach((item,index)=>{
            md+=`## ${index+1}.${item.name}`
        })
        //从 JSON 文 本 中 解 析 数 据
        fs.writeFileSync("./4.catalog/test.js", md);
    }
})
