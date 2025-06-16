import express from 'express';
import noteRoutes from './routes/api/notes'

const app = express();
const PORT = 3000;
app.use(express.json());

app.use('/api/notes', noteRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
