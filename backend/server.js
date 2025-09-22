const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("✅ MongoDB database connection established successfully");
});

const fittingSchema = new mongoose.Schema({
    guid: { type: String, required: true, unique: true },
    component_type: { type: String, required: true },
    manufacturer_id: { type: String },
    status: { type: String, required: true },
}, { collection: 'fittings' });
const Fitting = mongoose.model('Fitting', fittingSchema);


app.get('/api/fittings/:guid', async (req, res) => {
    try {
        console.log(`Searching for GUID: ${req.params.guid}`);
        const fitting = await Fitting.findOne({ guid: req.params.guid });
        if (!fitting) {
            return res.status(404).json({ msg: 'Fitting not found' });
        }
        res.json(fitting);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});


app.listen(port, () => {
    console.log(`🚀 Server is running on port: ${port}`);
});