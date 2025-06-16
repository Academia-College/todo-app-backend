import { Router } from "express";

const router = Router();

router.post('/create', (req, res) => {
    const note = req.body.note;
    res.send(note);
});

router.get('/getAll', (req, res) => {
    res.send('get all');
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Deleting note with ID: ${id}`);
});

router.put('/update/:id', (req, res) => {
    res.send('Hello, World!');
});

router.get('/complete/:id', (req, res) => {
    res.send('Hello, World!');
});

export default router;
