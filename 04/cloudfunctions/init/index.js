const tcb = require("@cloudbase/node-sdk");

const cloud = tcb.init({
  env: "env-admwuxrx",
});
const db = cloud.database();
const _ = db.command;
const MAX_LIMIT = 100;//限制最大读取

exports.main = async (event, context) => {
  let res = {};
  const auth = cloud.auth().getUserInfo();
  const uid = auth.uid;
  
  //init-admin
  const countResult = await db.collection('advice').count();
  const total = countResult.total;
  const batchTimes = Math.ceil(total / 100);
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = await db.collection('advice').skip(i * MAX_LIMIT).limit(MAX_LIMIT).orderBy('adddue', 'desc').get();
    tasks.push(promise);
  }


  res.list = (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  }).data;


  res.code = 0;
  return res;
};