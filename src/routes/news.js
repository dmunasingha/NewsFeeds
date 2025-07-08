import express from 'express';
import { getAllNews } from '../services/rssService.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const news = await getAllNews();
    res.render('news', { news });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
