/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function converter() {
    var numero = document.getElementById("numero").value;
    var base = document.getElementById("base").value;
    var base_convertida = document.getElementById("base_convertida").value;
    var resultado = "";

    

    function decToOctal(decimalNumber){
    let octalNumber = 0, i = 1;
    while (decimalNumber != 0) {
        octalNumber += (decimalNumber % 8) * i;
        decimalNumber = Math.floor(decimalNumber / 8);
        i *= 10;
    }
    return octalNumber;
    }

    function decToBinary(decimalNumber){
        let binaryNumber = 0, i = 1;
        while (decimalNumber != 0) {
            binaryNumber += (decimalNumber % 2) * i;
            decimalNumber = Math.floor(decimalNumber / 2);
            i *= 10;
        }
    return binaryNumber;
    }

    function decToHex(decimalNumber) {
        const hexDigits = "0123456789ABCDEF";
        let hexNumber = "";
        while (decimalNumber != 0) {
            let remainder = decimalNumber % 16;
            hexNumber = hexDigits[remainder] + hexNumber;
            decimalNumber = Math.floor(decimalNumber / 16);
        }
        if (hexNumber == "") {
            hexNumber = "0";
        }
        return hexNumber;
    }

    function hexToDec(hexNumber){
        let decimalNumber = 0;
        let hexadecimalDigits = "0123456789ABCDEF";
        for (let i = 0; i < hexNumber.length; i++) {
            let digit = hexadecimalDigits.indexOf(hexNumber[i]);
            decimalNumber = decimalNumber * 16 + digit;
        }
        return decimalNumber; 
    }

    function hexToOctal(hexNumber) {
    let decimalNumber = 0;
    decimalNumber = hexToDec(hexNumber);

    let octalNumber = 0;
    octalNumber = decToOctal(decimalNumber);

    return octalNumber;
    }

    function hexToBinary(hexNumber) {
    let decimalNumber = 0;
    decimalNumber = hexToDec(hexNumber);

    let binaryNumber = 0;
    binaryNumber = decToBinary(decimalNumber);

    return binaryNumber;
    }

    function binaryToDec(binaryNumber) {
        let decimalNumber = 0;
        let base = 1;
        while (binaryNumber != 0) {
            let digit = binaryNumber % 10;
            decimalNumber += digit * base;
            base *= 2;
            binaryNumber = Math.floor(binaryNumber / 10);
        }
        return decimalNumber;
    }

    function binaryToHex(binaryNumber) {
        let decimalNumber = 0;
        decimalNumber = binaryToDec(binaryNumber);

        let hexadecimalNumber = "";
        hexadecimalNumber = decToHex(decimalNumber);
        return hexadecimalNumber || "0";
    }

    function binaryToOctal(binaryNumber) {
        let decimalNumber = 0;
        decimalNumber = binaryToDec(binaryNumber);

        let octalNumber = "";
        octalNumber = decToOctal(decimalNumber);

        return octalNumber || "0";
    }

    function octalToDec(octalNumber) {
        let decimalNumber = 0;
        let base = 1;
        while (octalNumber != 0) {
            let digit = octalNumber % 10;
            decimalNumber += digit * base;
            base *= 8;
            octalNumber = Math.floor(octalNumber / 10);
        }
        return decimalNumber;
    }

    function octalToHex(octalNumber) {
        let decimalNumber = 0;
        decimalNumber = octalToDec(octalNumber);

        
        let hexadecimalNumber = "";
        hexadecimalNumber = decToHex(decimalNumber);

        return hexadecimalNumber || "0";
    }

    function octalToBinary(octalNumber) {
        let binaryNumber = "";
        let octalDigits = "01234567";
        let binaryDigits = ["000", "001", "010", "011", "100", "101", "110", "111"];
        for (let i = 0; i < octalNumber.length; i++) {
            let digit = octalDigits.indexOf(octalNumber[i]);
            binaryNumber += binaryDigits[digit];
        }
        return binaryNumber.replace(/^0+/, '') || '0';
    }

    
    if (base == 10) {
        if (base_convertida == 16) {
            resultado = decToHex(numero);
        } else if (base_convertida == 8) {
            resultado = decToOctal(numero);
        } else if (base_convertida == 2) {
            resultado = decToBinary(numero);
            } else {
            resultado = numero;
        }
    } else if (base == 16) {
        if (base_convertida == 10) {
            resultado = hexToDec(numero);
        } else if (base_convertida == 8) {
            resultado = hexToOctal(numero);
        } else if (base_convertida == 2) {
            resultado = hexToBinary(numero);
            } else {
            resultado = numero;
        }
    } else if(base == 2){
        if (base_convertida == 10) {
            resultado = binaryToDec(numero);
        } else if (base_convertida == 8) {
            resultado = binaryToOctal(numero);
        } else if (base_convertida == 16) {
            resultado = binaryToHex(numero);
            } else {
            resultado = numero;
        }
    } else if (base == 8) {
        if (base_convertida == 10) {
            resultado = octalToDec(numero);
        } else if (base_convertida == 16) {
            resultado = octalToHex(numero);
        } else if (base_convertida == 2) {
            resultado = octalToBinary(numero);
        } else {
            resultado = numero;
        }
    } 
    
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
