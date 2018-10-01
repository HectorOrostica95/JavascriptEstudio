

for_principal:
for (let i = 1; i <= 5; i++) {
    console.log ('i: ', i);

    for_secundario:
    for (let j = 1; j <= 5; j++) {
        console.log ('i: ', i, ' con j: ', j);
        //continue for_principal;

        for (let x = 1; x <= 5; x++) {
            console.log ('i: ', i, ' con j: ', j, ' y con x: ', x);
            //break for_principal;
            break for_secundario;
        }
    }
}