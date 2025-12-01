/**
 * Grok Web Application
 * Main JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  const userInput = document.getElementById('userInput');
  const grokBtn = document.getElementById('grokBtn');
  const result = document.getElementById('result');

  /**
   * Process input and generate a "grokked" response
   * @param {string} input - The user's input text
   * @returns {string} - A processed response
   */
  function grokInput(input) {
    if (!input || input.trim() === '') {
      return 'Enter something to grok!';
    }

    const trimmedInput = input.trim();
    const wordCount = trimmedInput.split(/\s+/).length;
    const charCount = trimmedInput.length;

    const insights = [
      `You entered "${trimmedInput}" with ${wordCount} word(s) and ${charCount} character(s).`,
      `Grokking "${trimmedInput}"... It seems interesting!`,
      `Understanding "${trimmedInput}": This concept has ${wordCount} component(s).`,
      `Deep dive into "${trimmedInput}": A profound thought!`,
      `Analyzing "${trimmedInput}": Wisdom comes in all forms.`
    ];

    const randomIndex = Math.floor(Math.random() * insights.length);
    return insights[randomIndex];
  }

  /**
   * Handle the grok button click
   */
  function handleGrok() {
    const inputValue = userInput.value;
    const grokkedResult = grokInput(inputValue);
    
    result.textContent = grokkedResult;
    result.classList.remove('active');
    
    // Trigger reflow for animation
    void result.offsetWidth;
    
    result.classList.add('active');
  }

  // Event listeners
  grokBtn.addEventListener('click', handleGrok);
  
  userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleGrok();
    }
  });

  // Initialize with a welcome message
  result.textContent = 'Ready to grok something!';
});
