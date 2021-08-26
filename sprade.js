const fndsName= [ 'Abhishek','akhil','Eshan'];
const fndsName2= ['Karim','Rahim','Fahim'];
const fndsName3= ['Esa','Richi','payel']
const fndsName4=['Masum', 'Siyam','Richa']
//const Together = fndsName.concat(fndsName2).concat(['rfifff']).concat(fndsName3);

const Togethers = [...fndsName,...["hasaaaan"], ...fndsName2, ...fndsName4]

console.log (Togethers);