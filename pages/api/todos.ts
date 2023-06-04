import {NextApiRequest, NextApiResponse} from "next";
import {todos} from "@/pages/api/data/data";



export default  function handler(req : NextApiRequest, res : NextApiResponse<{ task: string; id: string; isDone: boolean }[]>) {
     if(req.method === "GET"){
            res.status(200).json(todos)
     }else{
          res.status(200).json(todos)
     }

};