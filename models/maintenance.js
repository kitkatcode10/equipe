const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const maintenanceSchema = new mongoose.Schema (
    {
        jobType: String,
        severity: String, 
        jobDate: Date,
        details: String,
        cost: { type: Number, min: 0, match: /^\$?[0-9]+(\.[0-9][0-9])?$/ },
        user: { type: Schema.Types.ObjectId, ref: 'User' }
    }, {
        timestamps: true,
    });

module.exports = mongoose.model('Maintenance', maintenanceSchema); 
