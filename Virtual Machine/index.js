const createMemory = require('./create-memory');
const CPU = require('./cpu');
const instructions = require('./instructions');

const memory = createMemory(256);
const writableBytes = new Uint8Array(memory.buffer);

const cpu = new CPU(memory);

writableBytes[0] = instructions.MOV_LIT_R1;
writableBytes[1] = 0X12;  //0x1234
writableBytes[2] = 0X34;

writableBytes[3] = instructions.MOV_LIT_R2;
writableBytes[4] = 0XAB;  // 0XABCD
writableBytes[5] = 0XCD;


writableBytes[6] = instructions.ADD_REG_REG;
writableBytes[7] = 2;  // r1 index
writableBytes[8] = 4;  // r2 index


cpu.debug();

cpu.step();
cpu.debug();

cpu.step();
cpu.debug();

cpu.step();
cpu.debug();