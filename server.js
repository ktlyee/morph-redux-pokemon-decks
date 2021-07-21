import cors from "cors";
import express from 'express';

const router = express.Router();
const PORT = process.env.PORT || 3001;
const app = express()

app.use('/', router);
router.use(cors())
app.use(cors())

router.post('/api/auth/register', async (res, req) => {
    let usr = req;
    console.log("call register");
    console.log(usr);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

