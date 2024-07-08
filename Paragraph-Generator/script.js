const paragraphs = [
    "The journey of a thousand miles begins with a single step. Embrace every line of code you write, for each one brings you closer to mastering the art of programming. Your dedication and passion will be the fuel that drives your success.",
    "Remember, every expert was once a beginner. Don’t be discouraged by the challenges you face; they are the stepping stones to your growth. With persistence and hard work, you’ll turn every obstacle into an opportunity for learning.",
    "Programming is not just about writing code; it’s about solving problems and creating solutions. Your ability to think critically and approach problems creatively will set you apart. Keep pushing boundaries and innovating.",
    "The tech world is ever-evolving, and with it, the demand for skilled programmers continues to rise. By honing your skills and staying curious, you’ll open doors to countless opportunities. Your potential is limitless, so aim high and dream big.",
    "Success in programming is not measured by how much you know, but by how much you’re willing to learn. Stay curious, ask questions, and never stop exploring. The more you learn, the more powerful you become.",
    "Every bug you encounter is a lesson in disguise. Don’t fear mistakes; embrace them. They teach you resilience and problem-solving skills. Each bug you fix brings you one step closer to becoming a better programmer.",
    "Programming is a language of the future. By mastering it, you’re equipping yourself with a tool that can change the world. Your code has the potential to make a significant impact, so code with purpose and passion.",
    "Community and collaboration are key to growth in programming. Surround yourself with like-minded individuals, participate in coding communities, and never hesitate to seek help. Together, we can achieve more than we ever could alone.",
    "Innovation starts with you. As a future programmer, you have the power to create, transform, and revolutionize. Embrace your role as a creator and let your imagination guide you to develop solutions that make a difference.",
    "Believe in your abilities and trust the process. Every great programmer started where you are now. With determination, practice, and perseverance, you’ll reach your goals. Keep coding, keep learning, and keep pushing forward."
];




const item = document.getElementById("items");
const dataContainer = document.getElementById("data");


function shuffle(array){

  let currentIndex = array.length;
  let randomIndex;

  while(currentIndex!=0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex],array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
  
  return array;

}

function generate() {

  if (item.value == 0) {
    alert("The value cannot be zero");
  }else if (item.value > paragraphs.length){
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
  }else{

    const shuffleParagraphs = paragraphs;
    shuffle(paragraphs);

    const selectedParagraphs = shuffleParagraphs.slice(0,item.value);
    const paragraphsHTML = selectedParagraphs.map(paragraphs => `<p>${paragraphs}</p>`).join("");
    dataContainer.innerHTML = paragraphsHTML;

  }
}