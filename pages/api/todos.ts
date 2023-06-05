import {NextApiRequest, NextApiResponse} from "next";
import {todos} from "@/pages/api/data/data";


export default function handler(req: NextApiRequest, res: NextApiResponse<{
    task: string;
    id: string;
    isDone: boolean
}[] | any>) {

    switch (req.method) {
        case 'GET' : {
            if (!!req.query.id) {
                return res.status(200).json(todos.find(item => item.id === req.query.id));
            } else if (!!req.query.task) {
                return res.status(200).json(todos.filter(item => item.task === req.query.task));
            } else if (!!req.query.done) {
                return res.status(200).json(todos.filter(item => String(item.done) === String(req.query.done)));
            } else {
                return res.status(200).json(todos);
            }

        }
        case 'POST' : {
            return res.status(200).json(todos)
        }
        default :
            return
    }

};