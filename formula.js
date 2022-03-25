/* 
CPFs de modelo
705.484.450-52 
070.987.720-03
Formula do governo federal usada para validar cpf e gerar dígito 
7x 0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2 
70  0 40 28 48 20 16 15  0 = 237 (soma)
11 - (237 % 11) = 5 (Primeiro dígito)
se o dígito for maior que 9, consideramos 0;
7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0 45 32 56 24 20 20  0 10 = 284 (soma)
11 - (284 % 11) = 2 (Segundo dígito)
11 - (237 % 11) = 5 (Primeiro dígito)
11 - (284 % 11) = 2 (Segundo dígito)
*/

// 705.484.450-52 === 705.484.450-52

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g,'');
let cpfArray = Array.from(cpfLimpo);


console.log(cpfArray.reduce((ac, val)=> ac + Number(val), 0));
