import {Router, Request, Response} from 'express'

const router = Router()

router.post('/mensajes', (req: Request, res: Response) => {
    const body = req.body.body;
    const from = req.body.from;
    res.json({
        ok: true,
        mensaje: 'Todo bien!',
        body,
        from
    })

});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const body = req.body.body;
    const from = req.body.from;
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'Todo bien!',
        body,
        from,
        id
    })

});
export default router;