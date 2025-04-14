// Wait for DOM to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    
    changeTextBtn.addEventListener('click', function() {
        dynamicText.textContent = "Text successfully changed using JavaScript!";
        dynamicText.style.color = "#4CAF50";
        dynamicText.style.fontWeight = "bold";
    });
    
    // Task 2: Modify CSS styles via JavaScript
    const changeStyleBtn = document.getElementById('change-style-btn');
    const styleDemo = document.getElementById('style-demo');
    
    let styleChanged = false;
    changeStyleBtn.addEventListener('click', function() {
        if (styleChanged) {
            styleDemo.style.backgroundColor = "#ADD8E6";
            styleDemo.style.color = "#333";
            styleDemo.style.borderLeft = "4px solid #4CAF50";
            styleDemo.style.transform = "scale(1)";
        } else {
            styleDemo.style.backgroundColor = "#ADD8E6";
            styleDemo.style.color = "white";
            styleDemo.style.borderLeft = "4px solid #333";
            styleDemo.style.transform = "scale(1.02)";
            styleDemo.style.transition = "all 0.3s ease";
        }
        styleChanged = !styleChanged;
    });
    
    // Task 3: Add or remove an element when a button is clicked
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const elementContainer = document.getElementById('element-container');
    
    let elementCount = 0;
    
    addElementBtn.addEventListener('click', function() {
        elementCount++;
        const newElement = document.createElement('div');
        newElement.className = 'demo-box';
        newElement.innerHTML = `<p>New Element #${elementCount} added by JavaScript!</p>`;
        elementContainer.appendChild(newElement);
    });
    
    removeElementBtn.addEventListener('click', function() {
        if (elementContainer.children.length > 1) { // Keep the initial paragraph
            elementContainer.removeChild(elementContainer.lastChild);
            elementCount--;
        } else {
            alert("No more elements to remove!");
        }
    });
    
    // Bonus: Change heading color on mouseover
    const heading = document.getElementById('main-heading');
    
    heading.addEventListener('mouseover', function() {
        this.style.color = "#4CAF50";
        this.style.transition = "color 0.3s ease";
    });
    
    heading.addEventListener('mouseout', function() {
        this.style.color = "#333";
    });
});