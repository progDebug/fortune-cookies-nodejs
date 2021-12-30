
//index.js
(async () => {
    const db = require("./db");
    console.log('Começou!');
 
    console.log('SELECT * FROM tarefas');
    const tarefas = await db.selectCustomers();
    console.log(tarefas);
    var linha = tarefas[0]
    console.log(typeof linha)
})();
