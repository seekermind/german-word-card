words = [{
	word: "ich",
	meaning: "I",
	sentence: "Ich bin Toni",
	sentenceMeaning: "I am Toni"
} , {
	word: "Sie",
	meaning: "They",
	sentence: "Sie haben eine Katze.",
	sentenceMeaning: "They have a cat."
} , {
	word: "Das",
	meaning: "The",
	sentence: "Das Buch ist gut.",
	sentenceMeaning: "The book is good."
} , {
	word: "ist",
	meaning: "is",
	sentence: "Das is gut.",
	sentenceMeaning: "This is good."
} , {
	word: "du",
	meaning: "you(informal)",
	sentence: "Wo bist du?",
	sentenceMeaning: "Where are you?"
} , {
	word: "nicht",
	meaning: "not",
	sentence: "Das ist nicht gut.",
	sentenceMeaning: "That's not good"
} , {
	word: "die",
	meaning: "the",
	sentence: "Die frau ist krank.",
	sentenceMeaning: "The women is sick."
} , {
	word: "und",
	meaning: "and",
	sentence: "Nietzsche und Sartre waren gute Freunde.",
	sentenceMeaning: "Nietzsche and Sartre were good friends."
} , {
	word: "es",
	meaning: "it",
	sentence: "Es ist wichtig.",
	sentenceMeaning: "It is important."
} , {
	word: "der",
	meaning: "the",
	sentence: "Das Ende ist der Anfang.",
	sentenceMeaning: "The end is the begging."
} , {
	word: "was",
	meaning: "what",
	sentence: "Was ist los?",
	sentenceMeaning: "What's going on?"
} , {
	word: "wir",
	meaning: "we",
	sentence: "Das ist alles, was wir haben.",
	sentenceMeaning: "That's all we have."
} , {
	word: "er",
	meaning: "he",
	sentence: "Was will er?",
	sentenceMeaning: "What does he want?"
} , {
	word: "zu",
	meaning: "to",
	sentence: "Hörst du mir zu?",
	sentenceMeaning: "Are you listening to me?"
} , {
	word: "ein",
	meaning: "one",
	sentence: "Ich hab grad ein Déjà-vu.",
	sentenceMeaning: "I'm having a Déjà vu right now."
} , {
	word: "in",
	meaning: "in",
	sentence: "In meinem Traum.",
	sentenceMeaning: "In my dream."
} , {
	word: "mit",
	meaning: "with",
	sentence: "Ich komm mit einem Durchsuchungsbefehl.",
	sentenceMeaning: "I'm coming with a search warrant."
}  ];

const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.slider .card');
const prevBtn = document.querySelectorAll('.prev');
const nextBtn = document.querySelectorAll('.next');
//const cardWord = document.querySelector('.card-word')


let counter = 1;
const size = cards[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

let wordCount = 0;

for (const button of prevBtn) {
	button.addEventListener("click", () => {
		slider.style.transition = "transform 0.3s ease-in-out";
		counter--;
		if (wordCount == 0) {
			wordCount = words.length - 1;
		} else {
			wordCount--;
		}
		cards[counter].querySelector("h1").innerHTML = words[wordCount].word;
		cards[counter].querySelector("h3").innerHTML = words[wordCount].meaning;
		cards[counter].querySelector("h5").innerHTML = words[wordCount].sentence;
		cards[counter].querySelector("p").innerHTML = words[wordCount].sentenceMeaning;
		slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
	});
};
for (const button of nextBtn) {
	button.addEventListener("click", () => {

		slider.style.transition = "transform 0.3s ease-in-out";
		counter++;
		if (wordCount == words.length - 1) {
			wordCount = 0;
		} else {
			wordCount++;
		}
		cards[counter].querySelector("h1").innerHTML = words[wordCount].word;
		cards[counter].querySelector("h3").innerHTML = words[wordCount].meaning;
		cards[counter].querySelector("h5").innerHTML = words[wordCount].sentence;
		cards[counter].querySelector("p").innerHTML = words[wordCount].sentenceMeaning;
		slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
	});
};


slider.addEventListener('transitionend', () => {
	if (cards[counter].id === "last-card") {
		slider.style.transition = "none";
		counter = cards.length - 2;

		cards[counter].querySelector("h1").innerHTML = words[wordCount].word;
		cards[counter].querySelector("h3").innerHTML = words[wordCount].meaning;
		cards[counter].querySelector("h5").innerHTML = words[wordCount].sentence;
		cards[counter].querySelector("p").innerHTML = words[wordCount].sentenceMeaning;
		slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if (cards[counter].id === "first-card") {
		slider.style.transition = "none";
		counter = cards.length - counter;

		cards[counter].querySelector("h1").innerHTML = words[wordCount].word;
		cards[counter].querySelector("h3").innerHTML = words[wordCount].meaning;
		cards[counter].querySelector("h5").innerHTML = words[wordCount].sentence;
		cards[counter].querySelector("p").innerHTML = words[wordCount].sentenceMeaning;
		slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
});
