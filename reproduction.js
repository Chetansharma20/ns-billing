
const totalAmount = 50000;
console.log(`Amount: ${totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

const zero = 0;
console.log(`Zero: ${zero.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

const undefinedVar = undefined;
try {
    console.log(`Undefined: ${undefinedVar.toLocaleString('en-IN')}`);
} catch (e) {
    console.log(`Undefined Error: ${e.message}`);
}
