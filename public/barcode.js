onScanSuccess = (decodedText, decodedResult) => {
// handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);

    $.post('http')
}

onScanFailure = (error) => {
// handle scan failure, usually better to ignore and keep scanning.
// for example:
    //console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner( 
    "reader",
    { 
        fps: 10, 
        qrbox: {width: 250, height: 100} 
    },
    false
);

function main() {
    console.log('hi');
    html5QrcodeScanner.render(onScanSuccess, onScanFailure)
}