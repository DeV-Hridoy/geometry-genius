function calculateTriangleArea() {
    // get triangle base value

    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    

    // get triangle height value

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;

    // show triangle area

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;


}


function calculateRectangleArea() {
    // get rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

     // get rectangle length value

     const lengthField = document.getElementById('rectangle-length');
     const lengthValueText = lengthField.value;
     const length = parseFloat(lengthValueText);

    //  get rectangle area

    const area = width * length ;

    //  show rectangle area

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
    
}













// reuseable function(to reduse code)


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height ;
    setElementInnerText('parallelogram-area', area);
    
}

// reuseable get input function
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reuseable set span, p , div , text

function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area ;
}