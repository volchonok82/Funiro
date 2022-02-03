let quantityBlocks = document.querySelectorAll('.quantity');

if (quantityBlocks.length) {
    initQuantity(quantityBlocks);
}

function initQuantity(quantityBlocks) {
    quantityBlocks.forEach(quantityBlock => {
        let quantityCount = quantityBlock.querySelector('input');
        let quantityMinusBtn = quantityBlock.querySelector('.quantity__button--minus');
        let quantityPlusBtn = quantityBlock.querySelector('.quantity__button--plus');
        let count = 0;

        if (isNaN(Number(quantityCount.value))) {
            quantityCount.value = 0;
        }
        if (quantityCount.value == '' || quantityCount.value < 0) {
            quantityCount.value = count;
        } else {
            count = quantityCount.value;
        }
        
        quantityCount.addEventListener('change',()=>{
            if (isNaN(Number(quantityCount.value)) || quantityCount.value <0){
                quantityCount.value = 0;
            }
        });

        quantityMinusBtn.addEventListener('click', () => {
            if (count <= 0) {
                count = 0;
            } else {
                count--;
            }
            quantityCount.value = count;
        });
        quantityPlusBtn.addEventListener('click', () => {
            if (count >= 0) {
                count++;
            } else {
                count = 0;
            }
            quantityCount.value = count;
        });
    });
}