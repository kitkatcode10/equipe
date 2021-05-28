const mongoose=require('mongoose');
const Schema = mongoose.Schema; 

const maintenanceSchema = newSchema({
        jobType: String,
        severity: String, 
        jobDate: Date,
        details: String,
        cost: Number
    }, {
        timestamps: true,
    });

module.exports = mongoose.model('Maintenance', maintenanceSchema); 
