// for (let i=2; i<process.argv.length; i++) {
//     setTimeout(() => {
//         console.log(process.argv[i]);
//     }, Number(process.argv[i])*1000)
// }

const args = process.argv.slice(2);

args.forEach(arg => setTimeout(() => {console.log(arg);}, Number(arg)*1000));