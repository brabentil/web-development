const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const wordTitle = document.getElementById('wordtitle');
const wordDescription = document.getElementById('wordDescription');
const audioContainer = document.getElementById('audioContainer');
const audioButton = document.getElementById('audioButton');
const resultContainer = document.getElementById('result-container');

const displayResult = (data) => {
    resultContainer.style.display = 'block';
    const wordData = data[0];
    wordTitle.textContent = wordData.word;
    wordDescription.innerHTML = `
      <ul>
        ${wordData.meanings.map(meaning => `
            <li>
                <p><strong>Part of speech:</strong> ${meaning.partOfSpeech}</p>
                <p><strong>Definition:</strong> ${meaning.definitions[0].definition}</p>
            </li>
        `).join('\n')}
      </ul>
    `;
};

const fetchDictionaryData = async (searchItem) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchItem}`);
        if (!response.ok) {
            throw new Error('Word not found');
        }
        const data = await response.json();
        displayResult(data);
    } catch (error) {
        console.log(error);
        alert("An error occurred.");
    }
};

const search = () => {
    const searchItem = searchInput.value.trim();
    if (searchItem === '') {
        alert("Please enter a word to search");
        return;
    }
    fetchDictionaryData(searchItem);
};

searchBtn.addEventListener('click', () => {
    search();
});

searchInput.addEventListener("keyup", (event) => {
    if (event.key === 'Enter') {
        search();
    }
});

const speak= (word)=>{
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang ="en-US";
    speech.volume = 4;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
};

audioButton.addEventListener("click",()=>{
    const searchItem = searchInput.value.trim();
    if (searchItem === '') {
        alert("Please enter a word to search");
        return;
    }
    speak(searchItem)

});