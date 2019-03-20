var verse = [
    "Set your affection on things above, not on things on the earth.<br/><b>Colossians 3:2</b>",
    "For all have sinned and come short of the glory of God<br/><b>Romans 3:23</b>",
    "Come unto me, all ye that labor and are heavy laden, and I will give you rest.<br/><b>Matthew 11:28</b>",
    "My brethren count it all joy when you fall into diverse temptations<br/><b>James 1:2</b>",
    "A double minded man is unstable in all his ways<br/><b>James 1:8</b>",
    "Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also reap.<br/><b>Galatians 6:7</b>",
    "Trust in the Lord with all thine heart and lean not unto thine own understanding.<br/><b>Proverbs 3:5</b>",
    "Jesus saith unto him, I am the way, the truth, and the light: no man cometh unto the father, but by me.<br/><br>John 14:6</br>",
    "Let not your heart be troubled: ye believe in God, believe also in me.<br/><b>John 14:1</b>",
    "Now faith is the substance of things hoped for, the evidence of things not seen.<br/><b>Hebrews 11:1</b>",
    "For whosoever shall call upon the name of the Lord shall be saved. <br/><b>Romans 10:13</b>",
    "And ye shall know the truth, and the truth shall make you free. <br/><b>John 8:32</b>",
    "If ye love me, keep my commandments. <br/><b>John 14:15</b>",
    "I can do all things through Christ which strengthen me. <br/><b>Philippians 4:13</b>",
    "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.<br/><b>Matthew 7:7</b>",
    "Judge not, that ye be not judged. <br/><b>Matthew 7:1</b>",
    "But I say unto you which hear, love your enemies, do good to them which hate you.<br/><b>Luke 6:27</b>",
    "This is my commandment that ye love one another, as I have loved you.<br/><b>John 15:12</b>",
    "Then said Jesus, Father, forgive them; for they know not what they do.<br/><b>Luke 23:34</b>"
];

function getVerse() {
    return verse[Math.floor(Math.random() * verse.length)];
}

document.getElementById("show").innerHTML = getVerse();

