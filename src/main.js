function updateModifiers() {
    // convert ability scores into modifiers

    var strScore = document.getElementById("strScore").value;
    document.getElementById("strMod").value = Math.floor((strScore - 10) / 2);
    var dexScore = document.getElementById("dexScore").value;
    document.getElementById("dexMod").value = Math.floor((dexScore - 10) / 2);
    var conScore = document.getElementById("conScore").value;
    document.getElementById("conMod").value = Math.floor((conScore - 10) / 2);
    var intScore = document.getElementById("intScore").value;
    document.getElementById("intMod").value = Math.floor((intScore - 10) / 2);
    var wisScore = document.getElementById("wisScore").value;
    document.getElementById("wisMod").value = Math.floor((wisScore - 10) / 2);
    var chaScore = document.getElementById("chaScore").value;
    document.getElementById("chaMod").value = Math.floor((chaScore - 10) / 2);
}

function updateProfBonus() {
    // update proficiency bonus based on player level

    var playerLevel = parseInt(document.getElementById("playerLevel").value);

    if (playerLevel >= 17) {
        document.getElementById("profBonus").value = 6;
    } else if (playerLevel >= 13) {
        document.getElementById("profBonus").value = 5;
    } else if (playerLevel >= 9) {
        document.getElementById("profBonus").value = 4;
    } else if (playerLevel >= 5) {
        document.getElementById("profBonus").value = 3;
    } else {
        document.getElementById("profBonus").value = 2;
    }
}

function playerLevelChange() {
    updateProfBonus();
    updateModifiers();
}

function throwdice() {
	//create a random integer between 1 and 6 
	var rand1 = Math.round(Math.random() * 5) + 1;
	var rand2 = Math.round(Math.random() * 5) + 1;
	var rand3 = Math.round(Math.random() * 5) + 1;
	var rand4 = Math.round(Math.random() * 5) + 1;

	document.getElementById("mydice1").src = "images/d" + rand1 + ".png";
	document.getElementById("mydice2").src = "images/d" + rand2 + ".png";
	document.getElementById("hisdice1").src = "images/e" + rand3 + ".png";
	document.getElementById("hisdice2").src = "images/e" + rand4 + ".png";


	document.getElementById("mydice1").alt = side_alt[rand1];
	document.getElementById("mydice2").alt = side_alt[rand2];
	document.getElementById("hisdice1").alt = side_alt[rand3];
	document.getElementById("hisdice2").alt = side_alt[rand4];

}
