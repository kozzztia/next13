import {NextApiRequest, NextApiResponse} from "next";
import {createTodoId} from "@/helpers/createTodoId";
const fs = require('fs');


export default function handler(req: NextApiRequest, res: NextApiResponse<{
    task: string;
    id: number;
    isDone: boolean
}[] | string | undefined >) {

    switch (req.method) {
        case 'GET' : {
               return fs.readFile("./pages/api/data//test.json" , "utf8" , (err, data) =>{
                    if(err){
                        return res.status(200).json(err.code);
                    }
                    try{
                        const result = JSON.parse(data)
                        if (!!req.query.id) {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            return res.json(result.find(item => item.id === req.query.id));
                        } else if (!!req.query.task) {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            return res.json(result.filter(item => item.task === req.query.task));
                        } else if (!!req.query.done) {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            return res.json(result.filter(item => String(item.done) === String(req.query.done)));
                        } else {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            return res.json(result)
                        }
                    }
                    catch (err) {
                        return res.status(200).json(err.code);
                    }
                })
            }
        case 'POST' : {
            const todo = req.body.value;
           return fs.readFile("./pages/api/data//test.json" , "utf8" , (err, data) => {
               if (err) throw err;
               let todos = JSON.parse(data)


               fs.writeFile("./pages/api/data//test.json" ,
                   // JSON.stringify([...todos , {task : todo , id : todos.at(-1).id +2, done : false}]) , (err) =>{
                   JSON.stringify([...todos , {task : todo , id : createTodoId(), done : false}]) , (err) =>{
                   if(err) throw err
                   res.status(200).json("done")
               })
           });
        }

        case "DELETE" : {
            return fs.readFile("./pages/api/data//test.json" , "utf8" , (err, data) => {
                if (err) throw err;
                let todos = JSON.parse(data)
                const filterTodos = todos.filter(item => item.id !== req.query.deleteId)
                return fs.writeFile("./pages/api/data//test.json" ,
                    JSON.stringify([...filterTodos]) , (err) =>{
                        if(err) throw err
                        res.status(200).json(`delete : ${req.query.deleteId}`)
                    })
            });

        }
        default :
            return
    }

};