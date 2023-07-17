const Crawler = require("crawler");

const c = new Crawler({
  rateLimit: 1000,
  callback: (error, res, done) => {
    console.log(res.body);
    console.log("main");
    done();
  },
});

c.queue("https://www.baidu.com");
