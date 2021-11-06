const seed = document.getElementById('input_seed');
const mod = document.getElementById('input_module');
const multiplier = document.getElementById('input_multiplier');
const increment = document.getElementById('input_increment');

const button = document.getElementById('button');
const randomList = document.getElementById('random_list');
const quantity = document.getElementById('quantity');

button.addEventListener("click", linealCongruential);

function linealCongruential() {
    if (seed.value != '' && mod.value != '' && multiplier.value != '' && increment.value != '') {
        let congruential_seed = Number(seed.value);
        let congruential_module = Number(mod.value);
        let congruential_multiplier = Number(multiplier.value);
        let congruential_increment = Number(increment.value);
        if (congruential_seed >= 0 && congruential_seed < congruential_module && congruential_multiplier > 0 && congruential_multiplier < congruential_module && congruential_increment >= 0 && congruential_increment < congruential_module) {
            randomList.innerHTML = '';
            let reference_seed = congruential_seed;
            let congruential = 0;
            let period_list = [];
            let i = 0;
            while (reference_seed > 0) {
                congruential_seed = (congruential_multiplier*congruential_seed+congruential_increment)%congruential_module;
                if (period_list.length !== 0) {
                    if (period_list.includes(congruential_seed)) {
                        break;
                    }
                }
                if (congruential_seed != 0) {
                    period_list.push(congruential_seed);
                    congruential = congruential_seed/congruential_module;
                    showResult(i, reference_seed, congruential_module, congruential_multiplier, congruential_increment, congruential_seed, congruential);
                    reference_seed = congruential_seed;
                    i++;
                } else {
                    break;
                }
            }
            quantity.innerHTML = '<strong>Pseudoaleatorios generados: ' + i + '</strong>';
        } else {
            window.alert('El valor de la semilla es mayor al modulo');
        }
    } else {
        window.alert('Hay valores sin completar');
    }

    // if (seed.length >= MIN_SEED_LENGTH)  {
    //     if (squares <= `${seed*seed}`.length) {
    //         randomList.innerHTML = '';
    //         let seedReference = seed;
    //         let period_list = [];
    //         let i = 0;
    //         while (`${seedReference*seedReference}`.length >= squares) {
    //             let meanSquares = getMeanSquares(seedReference, squares);
    //             if (period_list.length !== 0) {
    //                 if (period_list.includes(meanSquares)) {
    //                     break;
    //                 }
    //             }
    //             if (parseInt(meanSquares) !== 0) {
    //                 period_list.push(meanSquares);
    //                 let newRandom = meanSquares / Math.pow(10, 4);
    //                 showNewRandom(i, seedReference, meanSquares, newRandom);
    //                 seedReference = parseInt(meanSquares);
    //                 i++;
    //             } else {
    //                 break;
    //             }
    //         }
    //         quantity.innerHTML = '<strong>Pseudoaleatorios generados: ' + i + '</strong>';
    //     } else {
    //         window.alert('La cantidad de cuadrados medios es muy grande');
    //     }
    // } else {
    //     window.alert(`El numero ingresado tiene menos de ${MIN_SEED_LENGTH} digitos`);
    // }
}

function showResult(n, x, m, a, c, congruential, pseudoaleatorio) {
    //console.log(`n:${n} x:${x} m:${m} a:${a} c:${c} congru:${congruential} pseudo:${pseudoaleatorio}`);
    const newRow = document.createElement('tr');
    const td_n = document.createElement('td');
    const td_x = document.createElement('td');
    const td_m = document.createElement('td');
    const td_a = document.createElement('td');
    const td_c = document.createElement('td');
    const td_congruential = document.createElement('td');
    const td_pseudoaleatorio = document.createElement('td');
    td_n.textContent = n;
    td_x.textContent = x;
    td_m.textContent = m;
    td_a.textContent = a;
    td_c.textContent = c;
    td_congruential.textContent = congruential;
    td_pseudoaleatorio.textContent = pseudoaleatorio;
    newRow.appendChild(td_n);
    newRow.appendChild(td_x);
    newRow.appendChild(td_m);
    newRow.appendChild(td_a);
    newRow.appendChild(td_c);
    newRow.appendChild(td_congruential);
    newRow.appendChild(td_pseudoaleatorio);
    randomList.appendChild(newRow);
}