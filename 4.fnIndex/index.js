let fs = require('fs');

fs.readFile('./README_TEST.md', (err, data) => {
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
