let fs = require('fs');
let fns=[];
fs.readFile('./4.fnIndex/fn.js', (err, data) => {
    if (err) {
        //如 果 出 错， 输 出 错 误 日 志， 并 给 客 户 端 返 回“ Server Error”
        console.error(err);
    }
    else {
        let md="";
        let obj=new Function(data.toString().replace('let','let _ecObj=')+';return _ecObj')();
        Object.keys(obj).forEach((item,index)=>{
            //md+=`## ${index+1}.${item}\r\n`
            fns.push({
                index:index,
                name:item
            })
        })
        //fs.writeFileSync("./README.md", md);
    }
})

fs.readFile('./README.md', (err, data) => {
    if (err) {
        console.error(err);
    }
    else {
        //根据换行符分割
        let _data=data.toString().split('\r\n');
        let i=1;
        _data.forEach((item,index)=>{
            //如果找到 %% 就更换为索引
            if(/%%/.test(item)){
                _data[index]=item.replace('%%',i+'.');
                i++;
            }
        })
        fs.writeFileSync("./README.md", _data.join('\r\n'));
    }
})
