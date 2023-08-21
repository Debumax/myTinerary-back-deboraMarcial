import app from "./src/main.js";

const main = ()=>{
    app.listen(app.get("PORT"));
    console.log(`server corriendo en puerto ${app.get("PORT")}`);
};

main();