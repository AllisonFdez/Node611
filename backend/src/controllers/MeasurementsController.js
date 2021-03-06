'use strict';
const db = require('../models')

function getFrequencyPf (req,res) {
    db.shark_frequency_pf.create({
        freq: req.query.freq,
        pf: req.query.pf,
        createdAt: req.query.create,
        updatedAt: req.query.create,
    }).then((data) => {
        res.json(data);
    });
}

function getLineVoltagesPhases (req,res) {
    db.shark_line_voltages_phases.create({
        vab: req.query.vab,
        pab: req.query.pab,
        vbc: req.query.vbc,
        pbc: req.query.pbc,
        vca: req.query.vca,
        pca: req.query.pca,
        createdAt: req.query.create,
        updatedAt: req.query.create,
    }).then((data) => {
        res.json(data);
    });
}

function getLineNorVoltages (req,res) {
    db.shark_line_normalized_voltages.create({
        vab_n: req.query.vab_n,
        vbc_n: req.query.vbc_n,
        vca_n: req.query.vca_n,
        createdAt: req.query.create,
        updatedAt: req.query.create,
    }).then((data) => {
        res.json(data);
    });
}

function getPhaseVoltages (req,res) {
    db.shark_phase_voltages.create({
        va: req.query.va,
        vb: req.query.vb,
        vc: req.query.vc,
        createdAt: req.query.create,
        updatedAt: req.query.create,
    }).then((data) => {
        res.json(data);
    });
}

function getCurrentsPhases (req,res) {
    db.shark_currents_phases.create({
        ca: req.query.ca,
        pa: req.query.pa,
        cb: req.query.cb,
        pb: req.query.pb,
        cc: req.query.cc,
        pc: req.query.pc,
        createdAt: req.query.create,
        updatedAt: req.query.create,
    }).then((data) => {
        res.json(data);
    });
}

function getPowers (req,res) {
    db.shark_powers.create({
        watt: req.query.watt,
        var: req.query.var,
        vas: req.query.vas,
        createdAt: req.query.create,
        updatedAt: req.query.create,
    }).then((data) => {
        res.json(data);
    });
}

function getEnergies (req,res) {
    db.shark_energies.create({
        watth: req.query.watth,
        varh: req.query.varh,
        vash: req.query.vash,
        createdAt: req.query.create,
        updatedAt: req.query.create,
    }).then((data) => {
        res.json(data);
    });
}

function getN611VoltageSensors (req,res) {
    db.n611_voltage_sensors.create({
        voltage1: req.query.voltage1,
        voltage2: req.query.voltage2,
        voltage3: req.query.voltage3,
        createdAt: req.query.create,
        updatedAt: req.query.create,
    }).then((data) => {
        res.json(data);
    });
}

function getN611LowCurrentSensors (req,res) {
    db.n611_lowcurrent_sensors.create({
        current1: req.query.current1,
        current2: req.query.current2,
        current3: req.query.current3,
        current4: req.query.current4,
        createdAt: req.query.create,
        updatedAt: req.query.create,
    }).then((data) => {
        res.json(data);
    });
}

function getN611HighCurrentSensors (req,res) {
    db.n611_highcurrent_sensors.create({
        current5: req.query.current5,
        current6: req.query.current6,
        current7: req.query.current7,
        current8: req.query.current8,
        current9: req.query.current9,
        createdAt: req.query.create,
        updatedAt: req.query.create,
    }).then((data) => {
        res.json(data);
    });
}

function getN611Powers (req,res) {
    db.n611_powers.create({
        batteries: req.query.batteries,
        red: req.query.red,
        panel: req.query.panel,
        createdAt: req.query.create,
        updatedAt: req.query.create,
    }).then((data) => {
        res.json(data);
    });
}

function getN611Control (req,res) {
    db.n611_control.create({
        state: req.query.state,
        createdAt: req.query.create,
        updatedAt: req.query.create,
    }).then((data) => {
        res.json(data);
    });
}

module.exports = {
    getFrequencyPf,
    getLineVoltagesPhases,
    getLineNorVoltages,
    getCurrentsPhases,
    getPhaseVoltages,
    getPowers,
    getEnergies,
    getN611VoltageSensors,
    getN611LowCurrentSensors,
    getN611HighCurrentSensors,
    getN611Powers,
    getN611Control
}