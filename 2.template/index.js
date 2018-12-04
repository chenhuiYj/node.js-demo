let http = require('http');
let fs = require('fs');
http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./2.articleTemplate/titles.json', (err, data) => {
            if (err) {
                //如 果 出 错， 输 出 错 误 日 志， 并 给 客 户 端 返 回“ Server Error”
                console.error(err);
                res.end('Server Error');
            }
            else {
                const titles = JSON.parse(data.toString());
                //从 JSON 文 本 中 解 析 数 据
                fs.readFile('./2.articleTemplate/index.html', (err, data) => {
                    //←---- 读 取 HTML 模 板， 并 在 加 载 完 成 后 使 用 回 调
                    if (err) {
                        console.error(err);
                        res.end('Server Error');
                    }
                    else {
                        const tmpl = data.toString();
                        const html = tmpl.replace('%', titles.join('</li><li>'));
                        //←---- 组 装 HTML 页 面 以 显 示 博 客 标 题
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.end(html);
                        //←---- 将 HTML 页 面 发 送 给 用 户
                    }
                });
            }
        })
    }
}).listen(8888,'127.0.0.1');